#!/usr/bin/env python3
from argparse import ArgumentParser
from pathlib import Path
from datetime import date
from collections import namedtuple
from jinja2 import Environment, FileSystemLoader, select_autoescape

# Named tuples are nice because they're immutable
Post = namedtuple("Post", ["name", "pathName", "date", "tags", "text", "blurb"])


def get_args():
    """command line arguments"""
    parser = ArgumentParser(
        description="""Glorified template cruncher.
        Or rather, static site generator"""
    )
    parser.add_argument(
        "-i",
        "--input",
        help="directory that contains templates to be converted (default ./src/)",
        metavar="INPUT_DIR",
        type=Path,
        default="./src/",
    )

    parser.add_argument(
        "-o",
        "--output",
        help="directory in which the final html will be output (default ./out/)",
        metavar="OUTPUT_DIR",
        type=Path,
        default=".",
    )

    parser.add_argument(
        "-p",
        "--post-dir",
        help="directory containing blog posts (default ./posts/)",
        type=Path,
        default="./src/posts/",
    )

    return parser.parse_args()


def get_posts(postPath):
    """Return a list of posts, containing their text, modification time, and names"""
    posts = list()
    if postPath.is_dir():
        for post in postPath.glob("**/*.html"):
            postMetadata, postText = post.read_text().split("\n-->\n")
            # the blurb is the first paragraph in the text body
            postBlurb = postText.partition("</p>")[0].removeprefix("<p>")
            postName, postDate, postTags = postMetadata.split("\n", 1)[-1].splitlines()
            posts.append(
                Post(
                    postName,
                    post.stem,
                    date.fromisoformat(postDate),
                    postTags,
                    postText,
                    postBlurb,
                )
            )
    return posts


def main():
    """find and build our lovely website pages!"""
    args = get_args()
    posts = get_posts(args.post_dir)
    templateEnv = Environment(
        loader=FileSystemLoader(args.input), autoescape=select_autoescape()
    )
    templates = ["index.html"]

    outputPath = Path(args.output)
    if not outputPath.exists():
        outputPath.mkdir()

    # generate separate pages
    for template in templates:
        outputFile = Path(args.output, template)

        if not outputFile.exists():
            outputFile.touch()
        outputFile.write_text(templateEnv.get_template(template).render(posts=posts))

    # generate post pages
    for post in posts:
        outputFile = Path(args.output, post.pathName + ".html")

        if not outputFile.exists():
            outputFile.touch()
        outputFile.write_text(templateEnv.get_template("post.html").render(post=post))


if __name__ == "__main__":
    main()
