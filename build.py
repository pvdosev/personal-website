#!/usr/bin/env python3
from argparse import ArgumentParser
from pathlib import Path, PurePath
from jinja2 import Environment, FileSystemLoader, select_autoescape


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
        default="./out/",
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
    """Return a list of posts, containing their text, modification time, and filename"""
    posts = list()
    if postPath.is_dir():
        for post in PurePath(postPath, "posts").glob("**/*.html"):
            posts.append([post.read_text(), post.stat().st_mtime, post.stem()])
    return posts


def main():
    """find and build our lovely website pages!"""
    args = get_args()
    posts = get_posts(args.post_dir)
    templateEnv = Environment(
        loader=FileSystemLoader(args.input), autoescape=select_autoescape()
    )
    templates = ["index.html", "blog.html"]

    outputPath = Path(args.output)
    if not outputPath.exists():
        outputPath.mkdir()

    for template in templates:
        outputFile = Path(args.output, template)

        if not outputFile.exists():
            outputFile.touch()

        outputFile.write_text(templateEnv.get_template(template).render(posts=posts))


if __name__ == "__main__":
    main()
