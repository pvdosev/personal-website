// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/Vec3Func.js
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function scaleRotateMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  let uvx = qy * z - qz * y;
  let uvy = qz * x - qx * z;
  let uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy;
  let uuvy = qz * uvx - qx * uvz;
  let uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
var angle = /* @__PURE__ */ function() {
  const tempA = [0, 0, 0];
  const tempB = [0, 0, 0];
  return function(a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    let cosine = dot(tempA, tempB);
    if (cosine > 1) {
      return 0;
    } else if (cosine < -1) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Vec3.js
var Vec3 = class _Vec3 extends Array {
  constructor(x = 0, y = x, z = x) {
    super(x, y, z);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set z(v) {
    this[2] = v;
  }
  set(x, y = x, z = x) {
    if (x.length)
      return this.copy(x);
    set(this, x, y, z);
    return this;
  }
  copy(v) {
    copy(this, v);
    return this;
  }
  add(va, vb) {
    if (vb)
      add(this, va, vb);
    else
      add(this, this, va);
    return this;
  }
  sub(va, vb) {
    if (vb)
      subtract(this, va, vb);
    else
      subtract(this, this, va);
    return this;
  }
  multiply(v) {
    if (v.length)
      multiply(this, this, v);
    else
      scale(this, this, v);
    return this;
  }
  divide(v) {
    if (v.length)
      divide(this, this, v);
    else
      scale(this, this, 1 / v);
    return this;
  }
  inverse(v = this) {
    inverse(this, v);
    return this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return length(this);
  }
  distance(v) {
    if (v)
      return distance(this, v);
    else
      return length(this);
  }
  squaredLen() {
    return squaredLength(this);
  }
  squaredDistance(v) {
    if (v)
      return squaredDistance(this, v);
    else
      return squaredLength(this);
  }
  negate(v = this) {
    negate(this, v);
    return this;
  }
  cross(va, vb) {
    if (vb)
      cross(this, va, vb);
    else
      cross(this, this, va);
    return this;
  }
  scale(v) {
    scale(this, this, v);
    return this;
  }
  normalize() {
    normalize(this, this);
    return this;
  }
  dot(v) {
    return dot(this, v);
  }
  equals(v) {
    return exactEquals(this, v);
  }
  applyMatrix3(mat3) {
    transformMat3(this, this, mat3);
    return this;
  }
  applyMatrix4(mat4) {
    transformMat4(this, this, mat4);
    return this;
  }
  scaleRotateMatrix4(mat4) {
    scaleRotateMat4(this, this, mat4);
    return this;
  }
  applyQuaternion(q) {
    transformQuat(this, this, q);
    return this;
  }
  angle(v) {
    return angle(this, v);
  }
  lerp(v, t) {
    lerp(this, this, v, t);
    return this;
  }
  clone() {
    return new _Vec3(this[0], this[1], this[2]);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
  transformDirection(mat4) {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
    return this.normalize();
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Geometry.js
var tempVec3 = /* @__PURE__ */ new Vec3();
var ID = 1;
var ATTR_ID = 1;
var isBoundsWarned = false;
var Geometry = class {
  constructor(gl, attributes = {}) {
    if (!gl.canvas)
      console.error("gl not passed as first argument to Geometry");
    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++;
    this.VAOs = {};
    this.drawRange = { start: 0, count: 0 };
    this.instancedCount = 0;
    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null;
    this.glState = this.gl.renderer.state;
    for (let key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }
  addAttribute(key, attr) {
    this.attributes[key] = attr;
    attr.id = ATTR_ID++;
    attr.size = attr.size || 1;
    attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT);
    attr.target = key === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attr.normalized = attr.normalized || false;
    attr.stride = attr.stride || 0;
    attr.offset = attr.offset || 0;
    attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
    attr.divisor = attr.instanced || 0;
    attr.needsUpdate = false;
    attr.usage = attr.usage || this.gl.STATIC_DRAW;
    if (!attr.buffer) {
      this.updateAttribute(attr);
    }
    if (attr.divisor) {
      this.isInstanced = true;
      if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
        console.warn("geometry has multiple instanced buffers of different length");
        return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
      }
      this.instancedCount = attr.count * attr.divisor;
    } else if (key === "index") {
      this.drawRange.count = attr.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
  }
  updateAttribute(attr) {
    const isNewBuffer = !attr.buffer;
    if (isNewBuffer)
      attr.buffer = this.gl.createBuffer();
    if (this.glState.boundBuffer !== attr.buffer) {
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
    }
    if (isNewBuffer) {
      this.gl.bufferData(attr.target, attr.data, attr.usage);
    } else {
      this.gl.bufferSubData(attr.target, 0, attr.data);
    }
    attr.needsUpdate = false;
  }
  setIndex(value) {
    this.addAttribute("index", value);
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  setInstancedCount(value) {
    this.instancedCount = value;
  }
  createVAO(program) {
    this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
    this.bindAttributes(program);
  }
  bindAttributes(program) {
    program.attributeLocations.forEach((location, { name, type }) => {
      if (!this.attributes[name]) {
        console.warn(`active attribute ${name} not being supplied`);
        return;
      }
      const attr = this.attributes[name];
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
      let numLoc = 1;
      if (type === 35674)
        numLoc = 2;
      if (type === 35675)
        numLoc = 3;
      if (type === 35676)
        numLoc = 4;
      const size = attr.size / numLoc;
      const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
      const offset = numLoc === 1 ? 0 : numLoc * 4;
      for (let i = 0; i < numLoc; i++) {
        this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
        this.gl.enableVertexAttribArray(location + i);
        this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
      }
    });
    if (this.attributes.index)
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program, mode = this.gl.TRIANGLES }) {
    if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
      if (!this.VAOs[program.attributeOrder])
        this.createVAO(program);
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
    }
    program.attributeLocations.forEach((location, { name }) => {
      const attr = this.attributes[name];
      if (attr.needsUpdate)
        this.updateAttribute(attr);
    });
    let indexBytesPerElement = 2;
    if (this.attributes.index?.type === this.gl.UNSIGNED_INT)
      indexBytesPerElement = 4;
    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(
          mode,
          this.drawRange.count,
          this.attributes.index.type,
          this.attributes.index.offset + this.drawRange.start * indexBytesPerElement,
          this.instancedCount
        );
      } else {
        this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else {
      if (this.attributes.index) {
        this.gl.drawElements(
          mode,
          this.drawRange.count,
          this.attributes.index.type,
          this.attributes.index.offset + this.drawRange.start * indexBytesPerElement
        );
      } else {
        this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
      }
    }
  }
  getPosition() {
    const attr = this.attributes.position;
    if (attr.data)
      return attr;
    if (isBoundsWarned)
      return;
    console.warn("No position buffer data found to compute bounds");
    return isBoundsWarned = true;
  }
  computeBoundingBox(attr) {
    if (!attr)
      attr = this.getPosition();
    const array = attr.data;
    const stride = attr.size;
    if (!this.bounds) {
      this.bounds = {
        min: new Vec3(),
        max: new Vec3(),
        center: new Vec3(),
        scale: new Vec3(),
        radius: Infinity
      };
    }
    const min = this.bounds.min;
    const max = this.bounds.max;
    const center = this.bounds.center;
    const scale6 = this.bounds.scale;
    min.set(Infinity);
    max.set(-Infinity);
    for (let i = 0, l = array.length; i < l; i += stride) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      min.x = Math.min(x, min.x);
      min.y = Math.min(y, min.y);
      min.z = Math.min(z, min.z);
      max.x = Math.max(x, max.x);
      max.y = Math.max(y, max.y);
      max.z = Math.max(z, max.z);
    }
    scale6.sub(max, min);
    center.add(min, max).divide(2);
  }
  computeBoundingSphere(attr) {
    if (!attr)
      attr = this.getPosition();
    const array = attr.data;
    const stride = attr.size;
    if (!this.bounds)
      this.computeBoundingBox(attr);
    let maxRadiusSq = 0;
    for (let i = 0, l = array.length; i < l; i += stride) {
      tempVec3.fromArray(array, i);
      maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
    }
    this.bounds.radius = Math.sqrt(maxRadiusSq);
  }
  remove() {
    for (let key in this.VAOs) {
      this.gl.renderer.deleteVertexArray(this.VAOs[key]);
      delete this.VAOs[key];
    }
    for (let key in this.attributes) {
      this.gl.deleteBuffer(this.attributes[key].buffer);
      delete this.attributes[key];
    }
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Program.js
var ID2 = 1;
var arrayCacheF32 = {};
var Program = class {
  constructor(gl, {
    vertex: vertex2,
    fragment: fragment2,
    uniforms = {},
    transparent = false,
    cullFace = gl.BACK,
    frontFace = gl.CCW,
    depthTest = true,
    depthWrite = true,
    depthFunc = gl.LESS
  } = {}) {
    if (!gl.canvas)
      console.error("gl not passed as first argument to Program");
    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID2++;
    if (!vertex2)
      console.warn("vertex shader not supplied");
    if (!fragment2)
      console.warn("fragment shader not supplied");
    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {};
    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha)
        this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
      else
        this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex2);
    gl.compileShader(vertexShader);
    if (gl.getShaderInfoLog(vertexShader) !== "") {
      console.warn(`${gl.getShaderInfoLog(vertexShader)}
Vertex Shader
${addLineNumbers(vertex2)}`);
    }
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment2);
    gl.compileShader(fragmentShader);
    if (gl.getShaderInfoLog(fragmentShader) !== "") {
      console.warn(`${gl.getShaderInfoLog(fragmentShader)}
Fragment Shader
${addLineNumbers(fragment2)}`);
    }
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    }
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    this.uniformLocations = /* @__PURE__ */ new Map();
    let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
      let uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));
      const split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];
      uniform.nameComponents = split.slice(1);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const locations = [];
    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
      const attribute = gl.getActiveAttrib(this.program, aIndex);
      const location = gl.getAttribLocation(this.program, attribute.name);
      if (location === -1)
        continue;
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute, location);
    }
    this.attributeOrder = locations.join("");
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    this.blendFunc.src = src;
    this.blendFunc.dst = dst;
    this.blendFunc.srcAlpha = srcAlpha;
    this.blendFunc.dstAlpha = dstAlpha;
    if (src)
      this.transparent = true;
  }
  setBlendEquation(modeRGB, modeAlpha) {
    this.blendEquation.modeRGB = modeRGB;
    this.blendEquation.modeAlpha = modeAlpha;
  }
  applyState() {
    if (this.depthTest)
      this.gl.renderer.enable(this.gl.DEPTH_TEST);
    else
      this.gl.renderer.disable(this.gl.DEPTH_TEST);
    if (this.cullFace)
      this.gl.renderer.enable(this.gl.CULL_FACE);
    else
      this.gl.renderer.disable(this.gl.CULL_FACE);
    if (this.blendFunc.src)
      this.gl.renderer.enable(this.gl.BLEND);
    else
      this.gl.renderer.disable(this.gl.BLEND);
    if (this.cullFace)
      this.gl.renderer.setCullFace(this.cullFace);
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src)
      this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }
  use({ flipFaces = false } = {}) {
    let textureUnit = -1;
    const programActive = this.gl.renderer.state.currentProgram === this.id;
    if (!programActive) {
      this.gl.useProgram(this.program);
      this.gl.renderer.state.currentProgram = this.id;
    }
    this.uniformLocations.forEach((location, activeUniform) => {
      let uniform = this.uniforms[activeUniform.uniformName];
      for (const component of activeUniform.nameComponents) {
        if (!uniform)
          break;
        if (component in uniform) {
          uniform = uniform[component];
        } else if (Array.isArray(uniform.value)) {
          break;
        } else {
          uniform = void 0;
          break;
        }
      }
      if (!uniform) {
        return warn(`Active uniform ${activeUniform.name} has not been supplied`);
      }
      if (uniform && uniform.value === void 0) {
        return warn(`${activeUniform.name} uniform is missing a value parameter`);
      }
      if (uniform.value.texture) {
        textureUnit = textureUnit + 1;
        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location, textureUnit);
      }
      if (uniform.value.length && uniform.value[0].texture) {
        const textureUnits = [];
        uniform.value.forEach((value) => {
          textureUnit = textureUnit + 1;
          value.update(textureUnit);
          textureUnits.push(textureUnit);
        });
        return setUniform(this.gl, activeUniform.type, location, textureUnits);
      }
      setUniform(this.gl, activeUniform.type, location, uniform.value);
    });
    this.applyState();
    if (flipFaces)
      this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
};
function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  const setValue = gl.renderer.state.uniformLocations.get(location);
  if (value.length) {
    if (setValue === void 0 || setValue.length !== value.length) {
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value))
        return;
      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value)
      return;
    gl.renderer.state.uniformLocations.set(location, value);
  }
  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    case 35664:
      return gl.uniform2fv(location, value);
    case 35665:
      return gl.uniform3fv(location, value);
    case 35666:
      return gl.uniform4fv(location, value);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    case 35671:
    case 35667:
      return gl.uniform2iv(location, value);
    case 35672:
    case 35668:
      return gl.uniform3iv(location, value);
    case 35673:
    case 35669:
      return gl.uniform4iv(location, value);
    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
  }
}
function addLineNumbers(string) {
  let lines = string.split("\n");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ": " + lines[i];
  }
  return lines.join("\n");
}
function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === void 0)
    return a;
  const length4 = arrayLen * valueLen;
  let value = arrayCacheF32[length4];
  if (!value)
    arrayCacheF32[length4] = value = new Float32Array(length4);
  for (let i = 0; i < arrayLen; i++)
    value.set(a[i], i * valueLen);
  return value;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function setArray(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}
var warnCount = 0;
function warn(message) {
  if (warnCount > 100)
    return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100)
    console.warn("More than 100 program warnings - stopping logs.");
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Renderer.js
var tempVec32 = /* @__PURE__ */ new Vec3();
var ID3 = 1;
var Renderer = class {
  constructor({
    canvas = document.createElement("canvas"),
    width = 300,
    height = 150,
    dpr = 1,
    alpha = false,
    depth = true,
    stencil = false,
    antialias = false,
    premultipliedAlpha = false,
    preserveDrawingBuffer = false,
    powerPreference = "default",
    autoClear = true,
    webgl = 2
  } = {}) {
    const attributes = { alpha, depth, stencil, antialias, premultipliedAlpha, preserveDrawingBuffer, powerPreference };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear;
    this.id = ID3++;
    if (webgl === 2)
      this.gl = canvas.getContext("webgl2", attributes);
    this.isWebgl2 = !!this.gl;
    if (!this.gl)
      this.gl = canvas.getContext("webgl", attributes);
    if (!this.gl)
      console.error("unable to create webgl context");
    this.gl.renderer = this;
    this.setSize(width, height);
    this.state = {};
    this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
    this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
    this.state.cullFace = false;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = { x: 0, y: 0, width: null, height: null };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = /* @__PURE__ */ new Map();
    this.state.currentProgram = null;
    this.extensions = {};
    if (this.isWebgl2) {
      this.getExtension("EXT_color_buffer_float");
      this.getExtension("OES_texture_float_linear");
    } else {
      this.getExtension("OES_texture_float");
      this.getExtension("OES_texture_float_linear");
      this.getExtension("OES_texture_half_float");
      this.getExtension("OES_texture_half_float_linear");
      this.getExtension("OES_element_index_uint");
      this.getExtension("OES_standard_derivatives");
      this.getExtension("EXT_sRGB");
      this.getExtension("WEBGL_depth_texture");
      this.getExtension("WEBGL_draw_buffers");
    }
    this.getExtension("WEBGL_compressed_texture_astc");
    this.getExtension("EXT_texture_compression_bptc");
    this.getExtension("WEBGL_compressed_texture_s3tc");
    this.getExtension("WEBGL_compressed_texture_etc1");
    this.getExtension("WEBGL_compressed_texture_pvrtc");
    this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
    this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE");
    this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE");
    this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE");
    this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES");
    this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES");
    this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
    this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL");
    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.canvas.width = width * this.dpr;
    this.gl.canvas.height = height * this.dpr;
    if (!this.gl.canvas.style)
      return;
    Object.assign(this.gl.canvas.style, {
      width: width + "px",
      height: height + "px"
    });
  }
  setViewport(width, height, x = 0, y = 0) {
    if (this.state.viewport.width === width && this.state.viewport.height === height)
      return;
    this.state.viewport.width = width;
    this.state.viewport.height = height;
    this.state.viewport.x = x;
    this.state.viewport.y = y;
    this.gl.viewport(x, y, width, height);
  }
  setScissor(width, height, x = 0, y = 0) {
    this.gl.scissor(x, y, width, height);
  }
  enable(id) {
    if (this.state[id] === true)
      return;
    this.gl.enable(id);
    this.state[id] = true;
  }
  disable(id) {
    if (this.state[id] === false)
      return;
    this.gl.disable(id);
    this.state[id] = false;
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha)
      return;
    this.state.blendFunc.src = src;
    this.state.blendFunc.dst = dst;
    this.state.blendFunc.srcAlpha = srcAlpha;
    this.state.blendFunc.dstAlpha = dstAlpha;
    if (srcAlpha !== void 0)
      this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
    else
      this.gl.blendFunc(src, dst);
  }
  setBlendEquation(modeRGB, modeAlpha) {
    modeRGB = modeRGB || this.gl.FUNC_ADD;
    if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha)
      return;
    this.state.blendEquation.modeRGB = modeRGB;
    this.state.blendEquation.modeAlpha = modeAlpha;
    if (modeAlpha !== void 0)
      this.gl.blendEquationSeparate(modeRGB, modeAlpha);
    else
      this.gl.blendEquation(modeRGB);
  }
  setCullFace(value) {
    if (this.state.cullFace === value)
      return;
    this.state.cullFace = value;
    this.gl.cullFace(value);
  }
  setFrontFace(value) {
    if (this.state.frontFace === value)
      return;
    this.state.frontFace = value;
    this.gl.frontFace(value);
  }
  setDepthMask(value) {
    if (this.state.depthMask === value)
      return;
    this.state.depthMask = value;
    this.gl.depthMask(value);
  }
  setDepthFunc(value) {
    if (this.state.depthFunc === value)
      return;
    this.state.depthFunc = value;
    this.gl.depthFunc(value);
  }
  activeTexture(value) {
    if (this.state.activeTextureUnit === value)
      return;
    this.state.activeTextureUnit = value;
    this.gl.activeTexture(this.gl.TEXTURE0 + value);
  }
  bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
    if (this.state.framebuffer === buffer)
      return;
    this.state.framebuffer = buffer;
    this.gl.bindFramebuffer(target, buffer);
  }
  getExtension(extension, webgl2Func, extFunc) {
    if (webgl2Func && this.gl[webgl2Func])
      return this.gl[webgl2Func].bind(this.gl);
    if (!this.extensions[extension]) {
      this.extensions[extension] = this.gl.getExtension(extension);
    }
    if (!webgl2Func)
      return this.extensions[extension];
    if (!this.extensions[extension])
      return null;
    return this.extensions[extension][extFunc].bind(this.extensions[extension]);
  }
  sortOpaque(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else if (a.zDepth !== b.zDepth) {
      return a.zDepth - b.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortTransparent(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    }
    if (a.zDepth !== b.zDepth) {
      return b.zDepth - a.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortUI(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else {
      return b.id - a.id;
    }
  }
  getRenderList({ scene, camera, frustumCull, sort }) {
    let renderList = [];
    if (camera && frustumCull)
      camera.updateFrustum();
    scene.traverse((node) => {
      if (!node.visible)
        return true;
      if (!node.draw)
        return;
      if (frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node))
          return;
      }
      renderList.push(node);
    });
    if (sort) {
      const opaque = [];
      const transparent = [];
      const ui = [];
      renderList.forEach((node) => {
        if (!node.program.transparent) {
          opaque.push(node);
        } else if (node.program.depthTest) {
          transparent.push(node);
        } else {
          ui.push(node);
        }
        node.zDepth = 0;
        if (node.renderOrder !== 0 || !node.program.depthTest || !camera)
          return;
        node.worldMatrix.getTranslation(tempVec32);
        tempVec32.applyMatrix4(camera.projectionViewMatrix);
        node.zDepth = tempVec32.z;
      });
      opaque.sort(this.sortOpaque);
      transparent.sort(this.sortTransparent);
      ui.sort(this.sortUI);
      renderList = opaque.concat(transparent, ui);
    }
    return renderList;
  }
  render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
    if (target === null) {
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      this.bindFramebuffer(target);
      this.setViewport(target.width, target.height);
    }
    if (clear || this.autoClear && clear !== false) {
      if (this.depth && (!target || target.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }
      this.gl.clear(
        (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
      );
    }
    if (update)
      scene.updateMatrixWorld();
    if (camera)
      camera.updateMatrixWorld();
    const renderList = this.getRenderList({ scene, camera, frustumCull, sort });
    renderList.forEach((node) => {
      node.draw({ camera });
    });
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/Vec4Func.js
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set2(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function normalize2(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/QuatFunc.js
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function multiply2(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX(out, a, rad) {
  rad *= 0.5;
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY(out, a, rad) {
  rad *= 0.5;
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ(out, a, rad) {
  rad *= 0.5;
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function slerp(out, a, b, t) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];
  let omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > 1e-6) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot5 ? 1 / dot5 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    let i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, euler, order = "YXZ") {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);
  if (order === "XYZ") {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === "YXZ") {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === "ZXY") {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === "ZYX") {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === "YZX") {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === "XZY") {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }
  return out;
}
var copy3 = copy2;
var set3 = set2;
var dot3 = dot2;
var normalize3 = normalize2;

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Quat.js
var Quat = class extends Array {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);
    this.onChange = () => {
    };
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set w(v) {
    this[3] = v;
    this.onChange();
  }
  identity() {
    identity(this);
    this.onChange();
    return this;
  }
  set(x, y, z, w) {
    if (x.length)
      return this.copy(x);
    set3(this, x, y, z, w);
    this.onChange();
    return this;
  }
  rotateX(a) {
    rotateX(this, this, a);
    this.onChange();
    return this;
  }
  rotateY(a) {
    rotateY(this, this, a);
    this.onChange();
    return this;
  }
  rotateZ(a) {
    rotateZ(this, this, a);
    this.onChange();
    return this;
  }
  inverse(q = this) {
    invert(this, q);
    this.onChange();
    return this;
  }
  conjugate(q = this) {
    conjugate(this, q);
    this.onChange();
    return this;
  }
  copy(q) {
    copy3(this, q);
    this.onChange();
    return this;
  }
  normalize(q = this) {
    normalize3(this, q);
    this.onChange();
    return this;
  }
  multiply(qA, qB) {
    if (qB) {
      multiply2(this, qA, qB);
    } else {
      multiply2(this, this, qA);
    }
    this.onChange();
    return this;
  }
  dot(v) {
    return dot3(this, v);
  }
  fromMatrix3(matrix3) {
    fromMat3(this, matrix3);
    this.onChange();
    return this;
  }
  fromEuler(euler) {
    fromEuler(this, euler, euler.order);
    return this;
  }
  fromAxisAngle(axis, a) {
    setAxisAngle(this, axis, a);
    this.onChange();
    return this;
  }
  slerp(q, t) {
    slerp(this, this, q, t);
    this.onChange();
    return this;
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this.onChange();
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/Mat4Func.js
var EPSILON = 1e-6;
function copy4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function set4(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity2(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function invert2(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply3(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale3(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.hypot(x, y, z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;
  if (Math.abs(len) < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getMaxScaleOnAxis(mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  const x = m11 * m11 + m12 * m12 + m13 * m13;
  const y = m21 * m21 + m22 * m22 + m23 * m23;
  const z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}
var getRotation = /* @__PURE__ */ function() {
  const temp = [1, 1, 1];
  return function(out, mat) {
    let scaling = temp;
    getScaling(scaling, mat);
    let is1 = 1 / scaling[0];
    let is2 = 1 / scaling[1];
    let is3 = 1 / scaling[2];
    let sm11 = mat[0] * is1;
    let sm12 = mat[1] * is2;
    let sm13 = mat[2] * is3;
    let sm21 = mat[4] * is1;
    let sm22 = mat[5] * is2;
    let sm23 = mat[6] * is3;
    let sm31 = mat[8] * is1;
    let sm32 = mat[9] * is2;
    let sm33 = mat[10] * is3;
    let trace = sm11 + sm22 + sm33;
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  };
}();
function fromRotationTranslationScale(out, q, v, s) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function perspective(out, fovy, aspect, near, far) {
  let f = 1 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  let len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len === 0) {
    z2 = 1;
  } else {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len === 0) {
    if (upz) {
      upx += 1e-6;
    } else if (upy) {
      upz += 1e-6;
    } else {
      upy += 1e-6;
    }
    x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }
  len = 1 / Math.sqrt(len);
  x0 *= len;
  x1 *= len;
  x2 *= len;
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Mat4.js
var Mat4 = class extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(v) {
    this[12] = v;
  }
  set y(v) {
    this[13] = v;
  }
  set z(v) {
    this[14] = v;
  }
  set w(v) {
    this[15] = v;
  }
  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m00.length)
      return this.copy(m00);
    set4(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  translate(v, m = this) {
    translate(this, m, v);
    return this;
  }
  rotate(v, axis, m = this) {
    rotate(this, m, v, axis);
    return this;
  }
  scale(v, m = this) {
    scale3(this, m, typeof v === "number" ? [v, v, v] : v);
    return this;
  }
  add(ma, mb) {
    if (mb)
      add3(this, ma, mb);
    else
      add3(this, this, ma);
    return this;
  }
  sub(ma, mb) {
    if (mb)
      subtract2(this, ma, mb);
    else
      subtract2(this, this, ma);
    return this;
  }
  multiply(ma, mb) {
    if (!ma.length) {
      multiplyScalar(this, this, ma);
    } else if (mb) {
      multiply3(this, ma, mb);
    } else {
      multiply3(this, this, ma);
    }
    return this;
  }
  identity() {
    identity2(this);
    return this;
  }
  copy(m) {
    copy4(this, m);
    return this;
  }
  fromPerspective({ fov, aspect, near, far } = {}) {
    perspective(this, fov, aspect, near, far);
    return this;
  }
  fromOrthogonal({ left, right, bottom, top, near, far }) {
    ortho(this, left, right, bottom, top, near, far);
    return this;
  }
  fromQuaternion(q) {
    fromQuat(this, q);
    return this;
  }
  setPosition(v) {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }
  inverse(m = this) {
    invert2(this, m);
    return this;
  }
  compose(q, pos, scale6) {
    fromRotationTranslationScale(this, q, pos, scale6);
    return this;
  }
  getRotation(q) {
    getRotation(q, this);
    return this;
  }
  getTranslation(pos) {
    getTranslation(pos, this);
    return this;
  }
  getScaling(scale6) {
    getScaling(scale6, this);
    return this;
  }
  getMaxScaleOnAxis() {
    return getMaxScaleOnAxis(this);
  }
  lookAt(eye, target, up) {
    targetTo(this, eye, target, up);
    return this;
  }
  determinant() {
    return determinant(this);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this[4] = a[o + 4];
    this[5] = a[o + 5];
    this[6] = a[o + 6];
    this[7] = a[o + 7];
    this[8] = a[o + 8];
    this[9] = a[o + 9];
    this[10] = a[o + 10];
    this[11] = a[o + 11];
    this[12] = a[o + 12];
    this[13] = a[o + 13];
    this[14] = a[o + 14];
    this[15] = a[o + 15];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    a[o + 4] = this[4];
    a[o + 5] = this[5];
    a[o + 6] = this[6];
    a[o + 7] = this[7];
    a[o + 8] = this[8];
    a[o + 9] = this[9];
    a[o + 10] = this[10];
    a[o + 11] = this[11];
    a[o + 12] = this[12];
    a[o + 13] = this[13];
    a[o + 14] = this[14];
    a[o + 15] = this[15];
    return a;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/EulerFunc.js
function fromRotationMatrix(out, m, order = "YXZ") {
  if (order === "XYZ") {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === "YXZ") {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === "ZXY") {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === "ZYX") {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === "YZX") {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === "XZY") {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }
  return out;
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Euler.js
var tmpMat4 = /* @__PURE__ */ new Mat4();
var Euler = class extends Array {
  constructor(x = 0, y = x, z = x, order = "YXZ") {
    super(x, y, z);
    this.order = order;
    this.onChange = () => {
    };
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set(x, y = x, z = x) {
    if (x.length)
      return this.copy(x);
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this.onChange();
    return this;
  }
  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }
  reorder(order) {
    this.order = order;
    this.onChange();
    return this;
  }
  fromRotationMatrix(m, order = this.order) {
    fromRotationMatrix(this, m, order);
    this.onChange();
    return this;
  }
  fromQuaternion(q, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Transform.js
var Transform = class {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new Mat4();
    this.worldMatrix = new Mat4();
    this.matrixAutoUpdate = true;
    this.worldMatrixNeedsUpdate = false;
    this.position = new Vec3();
    this.quaternion = new Quat();
    this.scale = new Vec3(1);
    this.rotation = new Euler();
    this.up = new Vec3(0, 1, 0);
    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }
  setParent(parent, notifyParent = true) {
    if (this.parent && parent !== this.parent)
      this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent)
      parent.addChild(this, false);
  }
  addChild(child, notifyChild = true) {
    if (!~this.children.indexOf(child))
      this.children.push(child);
    if (notifyChild)
      child.setParent(this, false);
  }
  removeChild(child, notifyChild = true) {
    if (!!~this.children.indexOf(child))
      this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild)
      child.setParent(null, false);
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null)
        this.worldMatrix.copy(this.matrix);
      else
        this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }
  traverse(callback) {
    if (callback(this))
      return;
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }
  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(target, invert4 = false) {
    if (invert4)
      this.matrix.lookAt(this.position, target, this.up);
    else
      this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Camera.js
var tempMat4 = /* @__PURE__ */ new Mat4();
var tempVec3a = /* @__PURE__ */ new Vec3();
var tempVec3b = /* @__PURE__ */ new Vec3();
var Camera = class extends Transform {
  constructor(gl, { near = 0.1, far = 100, fov = 45, aspect = 1, left, right, bottom, top, zoom = 1 } = {}) {
    super();
    Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });
    this.projectionMatrix = new Mat4();
    this.viewMatrix = new Mat4();
    this.projectionViewMatrix = new Mat4();
    this.worldPosition = new Vec3();
    this.type = left || right ? "orthographic" : "perspective";
    if (this.type === "orthographic")
      this.orthographic();
    else
      this.perspective();
  }
  perspective({ near = this.near, far = this.far, fov = this.fov, aspect = this.aspect } = {}) {
    Object.assign(this, { near, far, fov, aspect });
    this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
    this.type = "perspective";
    return this;
  }
  orthographic({
    near = this.near,
    far = this.far,
    left = this.left || -1,
    right = this.right || 1,
    bottom = this.bottom || -1,
    top = this.top || 1,
    zoom = this.zoom
  } = {}) {
    Object.assign(this, { near, far, left, right, bottom, top, zoom });
    left /= zoom;
    right /= zoom;
    bottom /= zoom;
    top /= zoom;
    this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
    this.type = "orthographic";
    return this;
  }
  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }
  lookAt(target) {
    super.lookAt(target, true);
    return this;
  }
  // Project 3D coordinate to 2D point
  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  }
  // Unproject 2D point to 3D coordinate
  unproject(v) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }
  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
    }
    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12];
    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12];
    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13];
    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13];
    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14];
    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14];
    for (let i = 0; i < 6; i++) {
      const invLen = 1 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }
  frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
    if (!node.geometry.attributes.position)
      return true;
    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity)
      node.geometry.computeBoundingSphere();
    if (!node.geometry.bounds)
      return true;
    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(worldMatrix);
    const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(center, radius);
  }
  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;
    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance3 = normal.copy(plane).dot(center) + plane.constant;
      if (distance3 < -radius)
        return false;
    }
    return true;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/Mat3Func.js
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
function fromQuat2(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
function copy5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
function set5(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
function identity3(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
function invert3(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;
  let det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
function multiply4(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];
  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
function translate2(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
function rotate2(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
function scale4(out, a, v) {
  let x = v[0], y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Mat3.js
var Mat3 = class extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m00.length)
      return this.copy(m00);
    set5(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  translate(v, m = this) {
    translate2(this, m, v);
    return this;
  }
  rotate(v, m = this) {
    rotate2(this, m, v);
    return this;
  }
  scale(v, m = this) {
    scale4(this, m, v);
    return this;
  }
  multiply(ma, mb) {
    if (mb) {
      multiply4(this, ma, mb);
    } else {
      multiply4(this, this, ma);
    }
    return this;
  }
  identity() {
    identity3(this);
    return this;
  }
  copy(m) {
    copy5(this, m);
    return this;
  }
  fromMatrix4(m) {
    fromMat4(this, m);
    return this;
  }
  fromQuaternion(q) {
    fromQuat2(this, q);
    return this;
  }
  fromBasis(vec3a, vec3b, vec3c) {
    this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
    return this;
  }
  inverse(m = this) {
    invert3(this, m);
    return this;
  }
  getNormalMatrix(m) {
    normalFromMat4(this, m);
    return this;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Mesh.js
var ID4 = 0;
var Mesh = class extends Transform {
  constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
    super();
    if (!gl.canvas)
      console.error("gl not passed as first argument to Mesh");
    this.gl = gl;
    this.id = ID4++;
    this.geometry = geometry;
    this.program = program;
    this.mode = mode;
    this.frustumCulled = frustumCulled;
    this.renderOrder = renderOrder;
    this.modelViewMatrix = new Mat4();
    this.normalMatrix = new Mat3();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }
  onBeforeRender(f) {
    this.beforeRenderCallbacks.push(f);
    return this;
  }
  onAfterRender(f) {
    this.afterRenderCallbacks.push(f);
    return this;
  }
  draw({ camera } = {}) {
    if (camera) {
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: { value: null },
          viewMatrix: { value: null },
          modelViewMatrix: { value: null },
          normalMatrix: { value: null },
          projectionMatrix: { value: null },
          cameraPosition: { value: null }
        });
      }
      this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
      this.program.uniforms.cameraPosition.value = camera.worldPosition;
      this.program.uniforms.viewMatrix.value = camera.viewMatrix;
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    }
    this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces });
    this.geometry.draw({ mode: this.mode, program: this.program });
    this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/core/Texture.js
var emptyPixel = new Uint8Array(4);
function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
var ID5 = 1;
var Texture = class {
  constructor(gl, {
    image,
    target = gl.TEXTURE_2D,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = target == gl.TEXTURE_2D ? true : false,
    anisotropy = 0,
    level = 0,
    width,
    // used for RenderTargets or Data Textures
    height = width
  } = {}) {
    this.gl = gl;
    this.id = ID5++;
    this.image = image;
    this.target = target;
    this.type = type;
    this.format = format;
    this.internalFormat = internalFormat;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmaps = generateMipmaps;
    this.premultiplyAlpha = premultiplyAlpha;
    this.unpackAlignment = unpackAlignment;
    this.flipY = flipY;
    this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
    this.level = level;
    this.width = width;
    this.height = height;
    this.texture = this.gl.createTexture();
    this.store = {
      image: null
    };
    this.glState = this.gl.renderer.state;
    this.state = {};
    this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    this.state.magFilter = this.gl.LINEAR;
    this.state.wrapS = this.gl.REPEAT;
    this.state.wrapT = this.gl.REPEAT;
    this.state.anisotropy = 0;
  }
  bind() {
    if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id)
      return;
    this.gl.bindTexture(this.target, this.texture);
    this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
  }
  update(textureUnit = 0) {
    const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);
    if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
      this.gl.renderer.activeTexture(textureUnit);
      this.bind();
    }
    if (!needsUpdate)
      return;
    this.needsUpdate = false;
    if (this.flipY !== this.glState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
      this.glState.flipY = this.flipY;
    }
    if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      this.glState.premultiplyAlpha = this.premultiplyAlpha;
    }
    if (this.unpackAlignment !== this.glState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
      this.glState.unpackAlignment = this.unpackAlignment;
    }
    if (this.minFilter !== this.state.minFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
      this.state.minFilter = this.minFilter;
    }
    if (this.magFilter !== this.state.magFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
      this.state.magFilter = this.magFilter;
    }
    if (this.wrapS !== this.state.wrapS) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
      this.state.wrapS = this.wrapS;
    }
    if (this.wrapT !== this.state.wrapT) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
      this.state.wrapT = this.wrapT;
    }
    if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
      this.gl.texParameterf(
        this.target,
        this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,
        this.anisotropy
      );
      this.state.anisotropy = this.anisotropy;
    }
    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
            this.level,
            this.internalFormat,
            this.format,
            this.type,
            this.image[i]
          );
        }
      } else if (ArrayBuffer.isView(this.image)) {
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
      } else if (this.image.isCompressedTexture) {
        for (let level = 0; level < this.image.length; level++) {
          this.gl.compressedTexImage2D(
            this.target,
            level,
            this.internalFormat,
            this.image[level].width,
            this.image[level].height,
            0,
            this.image[level].data
          );
        }
      } else {
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
      }
      if (this.generateMipmaps) {
        if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
          this.generateMipmaps = false;
          this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
          this.minFilter = this.gl.LINEAR;
        } else {
          this.gl.generateMipmap(this.target);
        }
      }
      this.onUpdate && this.onUpdate();
    } else {
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
            0,
            this.gl.RGBA,
            1,
            1,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            emptyPixel
          );
        }
      } else if (this.width) {
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
      } else {
        this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
      }
    }
    this.store.image = this.image;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/functions/Vec2Func.js
function copy6(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set6(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add4(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply5(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function scale5(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length3(a) {
  var x = a[0], y = a[1];
  return Math.sqrt(x * x + y * y);
}
function squaredLength2(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross2(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}
function lerp3(out, a, b, t) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat42(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Vec2.js
var Vec2 = class _Vec2 extends Array {
  constructor(x = 0, y = x) {
    super(x, y);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set(x, y = x) {
    if (x.length)
      return this.copy(x);
    set6(this, x, y);
    return this;
  }
  copy(v) {
    copy6(this, v);
    return this;
  }
  add(va, vb) {
    if (vb)
      add4(this, va, vb);
    else
      add4(this, this, va);
    return this;
  }
  sub(va, vb) {
    if (vb)
      subtract3(this, va, vb);
    else
      subtract3(this, this, va);
    return this;
  }
  multiply(v) {
    if (v.length)
      multiply5(this, this, v);
    else
      scale5(this, this, v);
    return this;
  }
  divide(v) {
    if (v.length)
      divide2(this, this, v);
    else
      scale5(this, this, 1 / v);
    return this;
  }
  inverse(v = this) {
    inverse2(this, v);
    return this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return length3(this);
  }
  distance(v) {
    if (v)
      return distance2(this, v);
    else
      return length3(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(v) {
    if (v)
      return squaredDistance2(this, v);
    else
      return squaredLength2(this);
  }
  negate(v = this) {
    negate2(this, v);
    return this;
  }
  cross(va, vb) {
    if (vb)
      return cross2(va, vb);
    return cross2(this, va);
  }
  scale(v) {
    scale5(this, this, v);
    return this;
  }
  normalize() {
    normalize4(this, this);
    return this;
  }
  dot(v) {
    return dot4(this, v);
  }
  equals(v) {
    return exactEquals2(this, v);
  }
  applyMatrix3(mat3) {
    transformMat32(this, this, mat3);
    return this;
  }
  applyMatrix4(mat4) {
    transformMat42(this, this, mat4);
    return this;
  }
  lerp(v, a) {
    lerp3(this, this, v, a);
    return this;
  }
  clone() {
    return new _Vec2(this[0], this[1]);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    return a;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/math/Vec4.js
var Vec4 = class extends Array {
  constructor(x = 0, y = x, z = x, w = x) {
    super(x, y, z, w);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set z(v) {
    this[2] = v;
  }
  set w(v) {
    this[3] = v;
  }
  set(x, y = x, z = x, w = x) {
    if (x.length)
      return this.copy(x);
    set2(this, x, y, z, w);
    return this;
  }
  copy(v) {
    copy2(this, v);
    return this;
  }
  normalize() {
    normalize2(this, this);
    return this;
  }
  multiply(v) {
    scale2(this, this, v);
    return this;
  }
  dot(v) {
    return dot2(this, v);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/Plane.js
var Plane = class _Plane extends Geometry {
  constructor(gl, { width = 1, height = 1, widthSegments = 1, heightSegments = 1, attributes = {} } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    _Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: { size: 3, data: position },
      normal: { size: 3, data: normal },
      uv: { size: 2, data: uv },
      index: { data: index }
    });
    super(gl, attributes);
  }
  static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
    const io = i;
    const segW = width / wSegs;
    const segH = height / hSegs;
    for (let iy = 0; iy <= hSegs; iy++) {
      let y = iy * segH - height / 2;
      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let x = ix * segW - width / 2;
        position[i * 3 + u] = x * uDir;
        position[i * 3 + v] = y * vDir;
        position[i * 3 + w] = depth / 2;
        normal[i * 3 + u] = 0;
        normal[i * 3 + v] = 0;
        normal[i * 3 + w] = depth >= 0 ? 1 : -1;
        uv[i * 2] = ix / wSegs;
        uv[i * 2 + 1] = 1 - iy / hSegs;
        if (iy === hSegs || ix === wSegs)
          continue;
        let a = io + ix + iy * (wSegs + 1);
        let b = io + ix + (iy + 1) * (wSegs + 1);
        let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
        let d = io + ix + iy * (wSegs + 1) + 1;
        index[ii * 6] = a;
        index[ii * 6 + 1] = b;
        index[ii * 6 + 2] = d;
        index[ii * 6 + 3] = b;
        index[ii * 6 + 4] = c;
        index[ii * 6 + 5] = d;
        ii++;
      }
    }
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/Box.js
var Box = class extends Geometry {
  constructor(gl, { width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1, attributes = {} } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const dSegs = depthSegments;
    const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
    const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0;
    Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs;
    Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs;
    Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs;
    Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs;
    Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
    i += (wSegs + 1) * (hSegs + 1);
    ii += wSegs * hSegs;
    Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);
    Object.assign(attributes, {
      position: { size: 3, data: position },
      normal: { size: 3, data: normal },
      uv: { size: 2, data: uv },
      index: { data: index }
    });
    super(gl, attributes);
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/Orbit.js
var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };
var tempVec33 = /* @__PURE__ */ new Vec3();
var tempVec2a = /* @__PURE__ */ new Vec2();
var tempVec2b = /* @__PURE__ */ new Vec2();
function Orbit(object, {
  element = document,
  enabled = true,
  target = new Vec3(),
  ease = 0.25,
  inertia = 0.85,
  enableRotate = true,
  rotateSpeed = 0.1,
  autoRotate = false,
  autoRotateSpeed = 1,
  enableZoom = true,
  zoomSpeed = 1,
  zoomStyle = "dolly",
  enablePan = true,
  panSpeed = 0.1,
  minPolarAngle = 0,
  maxPolarAngle = Math.PI,
  minAzimuthAngle = -Infinity,
  maxAzimuthAngle = Infinity,
  minDistance = 0,
  maxDistance = Infinity
} = {}) {
  this.enabled = enabled;
  this.target = target;
  this.zoomStyle = zoomStyle;
  ease = ease || 1;
  inertia = inertia || 0;
  this.minDistance = minDistance;
  this.maxDistance = maxDistance;
  const sphericalDelta = { radius: 1, phi: 0, theta: 0 };
  const sphericalTarget = { radius: 1, phi: 0, theta: 0 };
  const spherical = { radius: 1, phi: 0, theta: 0 };
  const panDelta = new Vec3();
  const offset = new Vec3();
  offset.copy(object.position).sub(this.target);
  spherical.radius = sphericalTarget.radius = offset.distance();
  spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
  spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
  this.offset = offset;
  this.update = () => {
    if (autoRotate) {
      handleAutoRotate();
    }
    sphericalTarget.radius *= sphericalDelta.radius;
    sphericalTarget.theta += sphericalDelta.theta;
    sphericalTarget.phi += sphericalDelta.phi;
    sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
    sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
    sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));
    spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
    spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
    spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;
    this.target.add(panDelta);
    let sinPhiRadius = spherical.radius * Math.sin(Math.max(1e-6, spherical.phi));
    offset.x = sinPhiRadius * Math.sin(spherical.theta);
    offset.y = spherical.radius * Math.cos(spherical.phi);
    offset.z = sinPhiRadius * Math.cos(spherical.theta);
    object.position.copy(this.target).add(offset);
    object.lookAt(this.target);
    sphericalDelta.theta *= inertia;
    sphericalDelta.phi *= inertia;
    panDelta.multiply(inertia);
    sphericalDelta.radius = 1;
  };
  this.forcePosition = () => {
    offset.copy(object.position).sub(this.target);
    spherical.radius = sphericalTarget.radius = offset.distance();
    spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
    spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
    object.lookAt(this.target);
  };
  const rotateStart = new Vec2();
  const panStart = new Vec2();
  const dollyStart = new Vec2();
  let state = STATE.NONE;
  this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };
  function getZoomScale() {
    return Math.pow(0.95, zoomSpeed);
  }
  function panLeft(distance3, m) {
    tempVec33.set(m[0], m[1], m[2]);
    tempVec33.multiply(-distance3);
    panDelta.add(tempVec33);
  }
  function panUp(distance3, m) {
    tempVec33.set(m[4], m[5], m[6]);
    tempVec33.multiply(distance3);
    panDelta.add(tempVec33);
  }
  const pan = (deltaX, deltaY) => {
    let el = element === document ? document.body : element;
    tempVec33.copy(object.position).sub(this.target);
    let targetDistance = tempVec33.distance();
    targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180);
    panLeft(2 * deltaX * targetDistance / el.clientHeight, object.matrix);
    panUp(2 * deltaY * targetDistance / el.clientHeight, object.matrix);
  };
  const dolly = (dollyScale) => {
    if (this.zoomStyle === "dolly")
      sphericalDelta.radius /= dollyScale;
    else {
      object.fov /= dollyScale;
      if (object.type === "orthographic")
        object.orthographic();
      else
        object.perspective();
    }
  };
  function handleAutoRotate() {
    const angle2 = 2 * Math.PI / 60 / 60 * autoRotateSpeed;
    sphericalDelta.theta -= angle2;
  }
  function handleMoveRotate(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
    let el = element === document ? document.body : element;
    sphericalDelta.theta -= 2 * Math.PI * tempVec2b.x / el.clientHeight;
    sphericalDelta.phi -= 2 * Math.PI * tempVec2b.y / el.clientHeight;
    rotateStart.copy(tempVec2a);
  }
  function handleMouseMoveDolly(e) {
    tempVec2a.set(e.clientX, e.clientY);
    tempVec2b.sub(tempVec2a, dollyStart);
    if (tempVec2b.y > 0) {
      dolly(getZoomScale());
    } else if (tempVec2b.y < 0) {
      dolly(1 / getZoomScale());
    }
    dollyStart.copy(tempVec2a);
  }
  function handleMovePan(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
    pan(tempVec2b.x, tempVec2b.y);
    panStart.copy(tempVec2a);
  }
  function handleTouchStartDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance3 = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance3);
    }
    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      panStart.set(x, y);
    }
  }
  function handleTouchMoveDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance3 = Math.sqrt(dx * dx + dy * dy);
      tempVec2a.set(0, distance3);
      tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
      dolly(tempVec2b.y);
      dollyStart.copy(tempVec2a);
    }
    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      handleMovePan(x, y);
    }
  }
  const onMouseDown = (e) => {
    if (!this.enabled)
      return;
    switch (e.button) {
      case this.mouseButtons.ORBIT:
        if (enableRotate === false)
          return;
        rotateStart.set(e.clientX, e.clientY);
        state = STATE.ROTATE;
        break;
      case this.mouseButtons.ZOOM:
        if (enableZoom === false)
          return;
        dollyStart.set(e.clientX, e.clientY);
        state = STATE.DOLLY;
        break;
      case this.mouseButtons.PAN:
        if (enablePan === false)
          return;
        panStart.set(e.clientX, e.clientY);
        state = STATE.PAN;
        break;
    }
    if (state !== STATE.NONE) {
      window.addEventListener("mousemove", onMouseMove, false);
      window.addEventListener("mouseup", onMouseUp, false);
    }
  };
  const onMouseMove = (e) => {
    if (!this.enabled)
      return;
    switch (state) {
      case STATE.ROTATE:
        if (enableRotate === false)
          return;
        handleMoveRotate(e.clientX, e.clientY);
        break;
      case STATE.DOLLY:
        if (enableZoom === false)
          return;
        handleMouseMoveDolly(e);
        break;
      case STATE.PAN:
        if (enablePan === false)
          return;
        handleMovePan(e.clientX, e.clientY);
        break;
    }
  };
  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove, false);
    window.removeEventListener("mouseup", onMouseUp, false);
    state = STATE.NONE;
  };
  const onMouseWheel = (e) => {
    if (!this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE)
      return;
    e.stopPropagation();
    e.preventDefault();
    if (e.deltaY < 0) {
      dolly(1 / getZoomScale());
    } else if (e.deltaY > 0) {
      dolly(getZoomScale());
    }
  };
  const onTouchStart = (e) => {
    if (!this.enabled)
      return;
    e.preventDefault();
    switch (e.touches.length) {
      case 1:
        if (enableRotate === false)
          return;
        rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
        state = STATE.ROTATE;
        break;
      case 2:
        if (enableZoom === false && enablePan === false)
          return;
        handleTouchStartDollyPan(e);
        state = STATE.DOLLY_PAN;
        break;
      default:
        state = STATE.NONE;
    }
  };
  const onTouchMove = (e) => {
    if (!this.enabled)
      return;
    e.preventDefault();
    e.stopPropagation();
    switch (e.touches.length) {
      case 1:
        if (enableRotate === false)
          return;
        handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
        break;
      case 2:
        if (enableZoom === false && enablePan === false)
          return;
        handleTouchMoveDollyPan(e);
        break;
      default:
        state = STATE.NONE;
    }
  };
  const onTouchEnd = () => {
    if (!this.enabled)
      return;
    state = STATE.NONE;
  };
  const onContextMenu = (e) => {
    if (!this.enabled)
      return;
    e.preventDefault();
  };
  function addHandlers() {
    element.addEventListener("contextmenu", onContextMenu, false);
    element.addEventListener("mousedown", onMouseDown, false);
    element.addEventListener("wheel", onMouseWheel, { passive: false });
    element.addEventListener("touchstart", onTouchStart, { passive: false });
    element.addEventListener("touchend", onTouchEnd, false);
    element.addEventListener("touchmove", onTouchMove, { passive: false });
  }
  this.remove = function() {
    element.removeEventListener("contextmenu", onContextMenu);
    element.removeEventListener("mousedown", onMouseDown);
    element.removeEventListener("wheel", onMouseWheel);
    element.removeEventListener("touchstart", onTouchStart);
    element.removeEventListener("touchend", onTouchEnd);
    element.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  addHandlers();
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/Raycast.js
var tempVec2a2 = /* @__PURE__ */ new Vec2();
var tempVec2b2 = /* @__PURE__ */ new Vec2();
var tempVec2c = /* @__PURE__ */ new Vec2();
var tempVec3a2 = /* @__PURE__ */ new Vec3();
var tempVec3b2 = /* @__PURE__ */ new Vec3();
var tempVec3c = /* @__PURE__ */ new Vec3();
var tempVec3d = /* @__PURE__ */ new Vec3();
var tempVec3e = /* @__PURE__ */ new Vec3();
var tempVec3f = /* @__PURE__ */ new Vec3();
var tempVec3g = /* @__PURE__ */ new Vec3();
var tempVec3h = /* @__PURE__ */ new Vec3();
var tempVec3i = /* @__PURE__ */ new Vec3();
var tempVec3j = /* @__PURE__ */ new Vec3();
var tempVec3k = /* @__PURE__ */ new Vec3();
var tempMat42 = /* @__PURE__ */ new Mat4();
var Raycast = class {
  constructor() {
    this.origin = new Vec3();
    this.direction = new Vec3();
  }
  // Set ray from mouse unprojection
  castMouse(camera, mouse = [0, 0]) {
    if (camera.type === "orthographic") {
      const { left, right, bottom, top, zoom } = camera;
      const x = left / zoom + (right - left) / zoom * (mouse[0] * 0.5 + 0.5);
      const y = bottom / zoom + (top - bottom) / zoom * (mouse[1] * 0.5 + 0.5);
      this.origin.set(x, y, 0);
      this.origin.applyMatrix4(camera.worldMatrix);
      this.direction.x = -camera.worldMatrix[8];
      this.direction.y = -camera.worldMatrix[9];
      this.direction.z = -camera.worldMatrix[10];
    } else {
      camera.worldMatrix.getTranslation(this.origin);
      this.direction.set(mouse[0], mouse[1], 0.5);
      camera.unproject(this.direction);
      this.direction.sub(this.origin).normalize();
    }
  }
  intersectBounds(meshes, { maxDistance, output = [] } = {}) {
    if (!Array.isArray(meshes))
      meshes = [meshes];
    const invWorldMat4 = tempMat42;
    const origin = tempVec3a2;
    const direction = tempVec3b2;
    const hits = output;
    hits.length = 0;
    meshes.forEach((mesh) => {
      if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity)
        mesh.geometry.computeBoundingSphere();
      const bounds = mesh.geometry.bounds;
      invWorldMat4.inverse(mesh.worldMatrix);
      let localMaxDistance;
      if (maxDistance) {
        direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
        localMaxDistance = maxDistance * direction.len();
      }
      origin.copy(this.origin).applyMatrix4(invWorldMat4);
      direction.copy(this.direction).transformDirection(invWorldMat4);
      if (maxDistance) {
        if (origin.distance(bounds.center) - bounds.radius > localMaxDistance)
          return;
      }
      let localDistance = 0;
      if (mesh.geometry.raycast === "sphere") {
        if (origin.distance(bounds.center) > bounds.radius) {
          localDistance = this.intersectSphere(bounds, origin, direction);
          if (!localDistance)
            return;
        }
      } else {
        if (origin.x < bounds.min.x || origin.x > bounds.max.x || origin.y < bounds.min.y || origin.y > bounds.max.y || origin.z < bounds.min.z || origin.z > bounds.max.z) {
          localDistance = this.intersectBox(bounds, origin, direction);
          if (!localDistance)
            return;
        }
      }
      if (maxDistance && localDistance > localMaxDistance)
        return;
      if (!mesh.hit)
        mesh.hit = { localPoint: new Vec3(), point: new Vec3() };
      mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
      mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
      mesh.hit.distance = mesh.hit.point.distance(this.origin);
      hits.push(mesh);
    });
    hits.sort((a, b) => a.hit.distance - b.hit.distance);
    return hits;
  }
  intersectMeshes(meshes, { cullFace = true, maxDistance, includeUV = true, includeNormal = true, output = [] } = {}) {
    const hits = this.intersectBounds(meshes, { maxDistance, output });
    if (!hits.length)
      return hits;
    const invWorldMat4 = tempMat42;
    const origin = tempVec3a2;
    const direction = tempVec3b2;
    const a = tempVec3c;
    const b = tempVec3d;
    const c = tempVec3e;
    const closestFaceNormal = tempVec3f;
    const faceNormal = tempVec3g;
    const barycoord = tempVec3h;
    const uvA = tempVec2a2;
    const uvB = tempVec2b2;
    const uvC = tempVec2c;
    for (let i = hits.length - 1; i >= 0; i--) {
      const mesh = hits[i];
      invWorldMat4.inverse(mesh.worldMatrix);
      let localMaxDistance;
      if (maxDistance) {
        direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
        localMaxDistance = maxDistance * direction.len();
      }
      origin.copy(this.origin).applyMatrix4(invWorldMat4);
      direction.copy(this.direction).transformDirection(invWorldMat4);
      let localDistance = 0;
      let closestA, closestB, closestC;
      const geometry = mesh.geometry;
      const attributes = geometry.attributes;
      const index = attributes.index;
      const position = attributes.position;
      const start = Math.max(0, geometry.drawRange.start);
      const end = Math.min(index ? index.count : position.count, geometry.drawRange.start + geometry.drawRange.count);
      const stride = position.size;
      for (let j = start; j < end; j += 3) {
        const ai = index ? index.data[j] : j;
        const bi = index ? index.data[j + 1] : j + 1;
        const ci = index ? index.data[j + 2] : j + 2;
        a.fromArray(position.data, ai * stride);
        b.fromArray(position.data, bi * stride);
        c.fromArray(position.data, ci * stride);
        const distance3 = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
        if (!distance3)
          continue;
        if (maxDistance && distance3 > localMaxDistance)
          continue;
        if (!localDistance || distance3 < localDistance) {
          localDistance = distance3;
          closestA = ai;
          closestB = bi;
          closestC = ci;
          closestFaceNormal.copy(faceNormal);
        }
      }
      if (!localDistance)
        hits.splice(i, 1);
      mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
      mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
      mesh.hit.distance = mesh.hit.point.distance(this.origin);
      if (!mesh.hit.faceNormal) {
        mesh.hit.localFaceNormal = new Vec3();
        mesh.hit.faceNormal = new Vec3();
        mesh.hit.uv = new Vec2();
        mesh.hit.localNormal = new Vec3();
        mesh.hit.normal = new Vec3();
      }
      mesh.hit.localFaceNormal.copy(closestFaceNormal);
      mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);
      if (includeUV || includeNormal) {
        a.fromArray(position.data, closestA * 3);
        b.fromArray(position.data, closestB * 3);
        c.fromArray(position.data, closestC * 3);
        this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
      }
      if (includeUV && attributes.uv) {
        uvA.fromArray(attributes.uv.data, closestA * 2);
        uvB.fromArray(attributes.uv.data, closestB * 2);
        uvC.fromArray(attributes.uv.data, closestC * 2);
        mesh.hit.uv.set(
          uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z,
          uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z
        );
      }
      if (includeNormal && attributes.normal) {
        a.fromArray(attributes.normal.data, closestA * 3);
        b.fromArray(attributes.normal.data, closestB * 3);
        c.fromArray(attributes.normal.data, closestC * 3);
        mesh.hit.localNormal.set(
          a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z,
          a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z,
          a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z
        );
        mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
      }
    }
    hits.sort((a2, b2) => a2.hit.distance - b2.hit.distance);
    return hits;
  }
  intersectPlane(plane, origin = this.origin, direction = this.direction) {
    const xminp = tempVec3a2;
    xminp.sub(plane.origin, origin);
    const a = xminp.dot(plane.normal);
    const b = direction.dot(plane.normal);
    if (b == 0)
      return 0;
    const delta = a / b;
    if (delta <= 0)
      return 0;
    return origin.add(direction.scale(delta));
  }
  intersectSphere(sphere, origin = this.origin, direction = this.direction) {
    const ray = tempVec3c;
    ray.sub(sphere.center, origin);
    const tca = ray.dot(direction);
    const d2 = ray.dot(ray) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2)
      return 0;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t0 < 0 && t1 < 0)
      return 0;
    if (t0 < 0)
      return t1;
    return t0;
  }
  // Ray AABB - Ray Axis aligned bounding box testing
  intersectBox(box, origin = this.origin, direction = this.direction) {
    let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
    const invdirx = 1 / direction.x;
    const invdiry = 1 / direction.y;
    const invdirz = 1 / direction.z;
    const min = box.min;
    const max = box.max;
    tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
    tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
    tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
    tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
    if (tmin > tYmax || tYmin > tmax)
      return 0;
    if (tYmin > tmin)
      tmin = tYmin;
    if (tYmax < tmax)
      tmax = tYmax;
    tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
    tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
    if (tmin > tZmax || tZmin > tmax)
      return 0;
    if (tZmin > tmin)
      tmin = tZmin;
    if (tZmax < tmax)
      tmax = tZmax;
    if (tmax < 0)
      return 0;
    return tmin >= 0 ? tmin : tmax;
  }
  intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
    const edge1 = tempVec3h;
    const edge2 = tempVec3i;
    const diff = tempVec3j;
    edge1.sub(b, a);
    edge2.sub(c, a);
    normal.cross(edge1, edge2);
    let DdN = direction.dot(normal);
    if (!DdN)
      return 0;
    let sign;
    if (DdN > 0) {
      if (backfaceCulling)
        return 0;
      sign = 1;
    } else {
      sign = -1;
      DdN = -DdN;
    }
    diff.sub(origin, a);
    let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
    if (DdQxE2 < 0)
      return 0;
    let DdE1xQ = sign * direction.dot(edge1.cross(diff));
    if (DdE1xQ < 0)
      return 0;
    if (DdQxE2 + DdE1xQ > DdN)
      return 0;
    let QdN = -sign * diff.dot(normal);
    if (QdN < 0)
      return 0;
    return QdN / DdN;
  }
  getBarycoord(point, a, b, c, target = tempVec3h) {
    const v0 = tempVec3i;
    const v1 = tempVec3j;
    const v2 = tempVec3k;
    v0.sub(c, a);
    v1.sub(b, a);
    v2.sub(point, a);
    const dot00 = v0.dot(v0);
    const dot01 = v0.dot(v1);
    const dot02 = v0.dot(v2);
    const dot11 = v1.dot(v1);
    const dot12 = v1.dot(v2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0)
      return target.set(-2, -1, -1);
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/NormalProgram.js
var vertex = (
  /* glsl */
  `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
);
var fragment = (
  /* glsl */
  `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`
);
function NormalProgram(gl) {
  return new Program(gl, {
    vertex,
    fragment,
    cullFace: false
  });
}

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/GLTFAnimation.js
var tmpVec3A = /* @__PURE__ */ new Vec3();
var tmpVec3B = /* @__PURE__ */ new Vec3();
var tmpVec3C = /* @__PURE__ */ new Vec3();
var tmpVec3D = /* @__PURE__ */ new Vec3();
var tmpQuatA = /* @__PURE__ */ new Quat();
var tmpQuatB = /* @__PURE__ */ new Quat();
var tmpQuatC = /* @__PURE__ */ new Quat();
var tmpQuatD = /* @__PURE__ */ new Quat();
var GLTFAnimation = class {
  constructor(data, weight = 1) {
    this.data = data;
    this.elapsed = 0;
    this.weight = weight;
    this.loop = true;
    this.startTime = data.reduce((a, { times }) => Math.min(a, times[0]), Infinity);
    this.endTime = data.reduce((a, { times }) => Math.max(a, times[times.length - 1]), 0);
    this.duration = this.endTime - this.startTime;
  }
  update(totalWeight = 1, isSet) {
    const weight = isSet ? 1 : this.weight / totalWeight;
    const elapsed = !this.duration ? 0 : (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - 1e-3)) + this.startTime;
    this.data.forEach(({ node, transform, interpolation, times, values }) => {
      if (!this.duration) {
        let val = tmpVec3A;
        let size2 = 3;
        if (transform === "quaternion") {
          val = tmpQuatA;
          size2 = 4;
        }
        val.fromArray(values, 0);
        if (size2 === 4)
          node[transform].slerp(val, weight);
        else
          node[transform].lerp(val, weight);
        return;
      }
      const prevIndex = Math.max(
        1,
        times.findIndex((t) => t > elapsed)
      ) - 1;
      const nextIndex = prevIndex + 1;
      let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
      if (interpolation === "STEP")
        alpha = 0;
      let prevVal = tmpVec3A;
      let prevTan = tmpVec3B;
      let nextTan = tmpVec3C;
      let nextVal = tmpVec3D;
      let size = 3;
      if (transform === "quaternion") {
        prevVal = tmpQuatA;
        prevTan = tmpQuatB;
        nextTan = tmpQuatC;
        nextVal = tmpQuatD;
        size = 4;
      }
      if (interpolation === "CUBICSPLINE") {
        prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
        prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
        nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
        nextVal.fromArray(values, nextIndex * size * 3 + size * 1);
        prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
        if (size === 4)
          prevVal.normalize();
      } else {
        prevVal.fromArray(values, prevIndex * size);
        nextVal.fromArray(values, nextIndex * size);
        if (size === 4)
          prevVal.slerp(nextVal, alpha);
        else
          prevVal.lerp(nextVal, alpha);
      }
      if (size === 4)
        node[transform].slerp(prevVal, weight);
      else
        node[transform].lerp(prevVal, weight);
    });
  }
  cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
    const t2 = t * t;
    const t3 = t2 * t;
    const s2 = 3 * t2 - 2 * t3;
    const s3 = t3 - t2;
    const s0 = 1 - s2;
    const s1 = s3 - t2 + t;
    for (let i = 0; i < prevVal.length; i++) {
      prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
    }
    return prevVal;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/GLTFSkin.js
var tempMat43 = /* @__PURE__ */ new Mat4();
var identity4 = /* @__PURE__ */ new Mat4();
var GLTFSkin = class extends Mesh {
  constructor(gl, { skeleton, geometry, program, mode = gl.TRIANGLES } = {}) {
    super(gl, { geometry, program, mode });
    this.skeleton = skeleton;
    this.program = program;
    this.createBoneTexture();
  }
  createBoneTexture() {
    if (!this.skeleton.joints.length)
      return;
    const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
    this.boneMatrices = new Float32Array(size * size * 4);
    this.boneTextureSize = size;
    this.boneTexture = new Texture(this.gl, {
      image: this.boneMatrices,
      generateMipmaps: false,
      type: this.gl.FLOAT,
      internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      flipY: false,
      width: size
    });
  }
  updateUniforms() {
    this.skeleton.joints.forEach((bone, i) => {
      tempMat43.multiply(bone.worldMatrix, bone.bindInverse);
      this.boneMatrices.set(tempMat43, i * 16);
    });
    this.boneTexture.needsUpdate = true;
    this.program.uniforms.boneTexture.value = this.boneTexture;
    this.program.uniforms.boneTextureSize.value = this.boneTextureSize;
  }
  draw({ camera } = {}) {
    if (!this.program.uniforms.boneTexture) {
      Object.assign(this.program.uniforms, {
        boneTexture: { value: this.boneTexture },
        boneTextureSize: { value: this.boneTextureSize }
      });
    }
    this.updateUniforms();
    const _worldMatrix = this.worldMatrix;
    this.worldMatrix = identity4;
    super.draw({ camera });
    this.worldMatrix = _worldMatrix;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/InstancedMesh.js
var InstancedMesh = class extends Mesh {
  constructor(...args) {
    super(...args);
    this.frustumCulled = false;
    this.isInstancedMesh = true;
  }
  addFrustumCull() {
    this.instanceTransforms = null;
    this.instanceLightmapScaleOffset = null;
    this.totalInstanceCount = 0;
    this.frustumCullFunction = null;
    this.instanceRenderList = null;
    if (!this.geometry.attributes.instanceMatrix)
      console.error(`mesh ${this.name ? `"${this.name}" ` : ``}missing instanceMatrix attribute; unable to frustum cull`);
    const matrixData = this.geometry.attributes.instanceMatrix.data;
    this.instanceTransforms = [];
    for (let i = 0, j = 0; i < matrixData.length; i += 16, j++) {
      const transform = new Transform();
      transform.index = j;
      transform.matrix.fromArray(matrixData, i);
      transform.decompose();
      this.instanceTransforms.push(transform);
      transform.setParent(this.parent);
    }
    this.totalInstanceCount = this.instanceTransforms.length;
    if (!!this.geometry.attributes.lightmapScaleOffset) {
      const lightmapData = this.geometry.attributes.lightmapScaleOffset.data;
      for (let i = 0, j = 0; i < lightmapData.length; i += 4, j++) {
        this.instanceTransforms[j].lightmapData = new Vec4().fromArray(lightmapData, i);
      }
    }
    this.frustumCullFunction = ({ camera }) => {
      this.instanceRenderList = [];
      this.instanceTransforms.forEach((transform) => {
        if (!camera.frustumIntersectsMesh(this, transform.worldMatrix))
          return;
        this.instanceRenderList.push(transform);
      });
      this.instanceRenderList.forEach((transform, i) => {
        transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);
        if (transform.lightmapData) {
          transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
          this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
        }
      });
      this.geometry.instancedCount = this.instanceRenderList.length;
      this.geometry.attributes.instanceMatrix.needsUpdate = true;
    };
    this.onBeforeRender(this.frustumCullFunction);
  }
  removeFrustumCull() {
    this.offBeforeRender(this.frustumCullFunction);
    this.geometry.instancedCount = this.totalInstanceCount;
    this.instanceTransforms.forEach((transform, i) => {
      transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);
      if (transform.lightmapData) {
        transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
        this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
      }
    });
    this.geometry.attributes.instanceMatrix.needsUpdate = true;
  }
};

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/GLTFLoader.js
var TYPE_ARRAY = {
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array,
  "image/jpeg": Uint8Array,
  "image/png": Uint8Array
};
var TYPE_SIZE = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
var ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
var TRANSFORMS = {
  translation: "position",
  rotation: "quaternion",
  scale: "scale"
};
var GLTFLoader = class {
  static setBasisManager(manager) {
    this.basisManager = manager;
  }
  static async load(gl, src) {
    const dir = src.split("/").slice(0, -1).join("/") + "/";
    const desc = await this.parseDesc(src);
    return this.parse(gl, desc, dir);
  }
  static async parse(gl, desc, dir) {
    if (desc.asset === void 0 || desc.asset.version[0] < 2)
      console.warn("Only GLTF >=2.0 supported. Attempting to parse.");
    if (desc.extensionsRequired?.includes("KHR_texture_basisu") && !this.basisManager)
      console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");
    const buffers = await this.loadBuffers(desc, dir);
    gl.renderer.bindVertexArray(null);
    const bufferViews = this.parseBufferViews(gl, desc, buffers);
    const images = await this.parseImages(gl, desc, dir, bufferViews);
    const textures = this.parseTextures(gl, desc, images);
    const materials = this.parseMaterials(gl, desc, textures);
    const skins = this.parseSkins(gl, desc, bufferViews);
    const meshes = this.parseMeshes(gl, desc, bufferViews, materials, skins);
    const nodes = this.parseNodes(gl, desc, meshes, skins, images);
    this.populateSkins(skins, nodes);
    const animations = this.parseAnimations(gl, desc, nodes, bufferViews);
    const scenes = this.parseScenes(desc, nodes);
    const scene = scenes[desc.scene];
    const lights = this.parseLights(gl, desc, nodes, scenes);
    for (let i = nodes.length; i >= 0; i--)
      if (!nodes[i])
        nodes.splice(i, 1);
    return {
      json: desc,
      buffers,
      bufferViews,
      images,
      textures,
      materials,
      meshes,
      nodes,
      lights,
      animations,
      scenes,
      scene
    };
  }
  static parseDesc(src) {
    if (!src.match(/\.glb/)) {
      return fetch(src).then((res) => res.json());
    } else {
      return fetch(src).then((res) => res.arrayBuffer()).then((glb) => this.unpackGLB(glb));
    }
  }
  // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
  static unpackGLB(glb) {
    const header = new Uint32Array(glb, 0, 3);
    if (header[0] !== 1179937895) {
      throw new Error("Invalid glTF asset.");
    } else if (header[1] !== 2) {
      throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
    }
    const jsonChunkHeader = new Uint32Array(glb, 12, 2);
    const jsonByteOffset = 20;
    const jsonByteLength = jsonChunkHeader[0];
    if (jsonChunkHeader[1] !== 1313821514) {
      throw new Error("Unexpected GLB layout.");
    }
    const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
    const json = JSON.parse(jsonText);
    if (jsonByteOffset + jsonByteLength === glb.byteLength)
      return json;
    const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
    if (binaryChunkHeader[1] !== 5130562) {
      throw new Error("Unexpected GLB layout.");
    }
    const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
    const binaryByteLength = binaryChunkHeader[0];
    const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
    json.buffers[0].binary = binary;
    return json;
  }
  // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
  static resolveURI(uri, dir) {
    if (typeof uri !== "string" || uri === "")
      return "";
    if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
      dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
    }
    if (/^(https?:)?\/\//i.test(uri))
      return uri;
    if (/^data:.*,.*$/i.test(uri))
      return uri;
    if (/^blob:.*$/i.test(uri))
      return uri;
    return dir + uri;
  }
  static loadBuffers(desc, dir) {
    if (!desc.buffers)
      return null;
    return Promise.all(
      desc.buffers.map((buffer) => {
        if (buffer.binary)
          return buffer.binary;
        const uri = this.resolveURI(buffer.uri, dir);
        return fetch(uri).then((res) => res.arrayBuffer());
      })
    );
  }
  static parseBufferViews(gl, desc, buffers) {
    if (!desc.bufferViews)
      return null;
    const bufferViews = desc.bufferViews.map((o) => Object.assign({}, o));
    desc.meshes && desc.meshes.forEach(({ primitives }) => {
      primitives.forEach(({ attributes, indices }) => {
        for (let attr in attributes)
          bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;
        if (indices === void 0)
          return;
        bufferViews[desc.accessors[indices].bufferView].isAttribute = true;
        bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
      });
    });
    desc.accessors.forEach(({ bufferView: i, componentType }) => {
      bufferViews[i].componentType = componentType;
    });
    desc.images && desc.images.forEach(({ uri, bufferView: i, mimeType }) => {
      if (i === void 0)
        return;
      bufferViews[i].mimeType = mimeType;
    });
    bufferViews.forEach(
      ({
        buffer: bufferIndex,
        // required
        byteOffset = 0,
        // optional
        byteLength,
        // required
        byteStride,
        // optional
        target = gl.ARRAY_BUFFER,
        // optional, added above for elements
        name,
        // optional
        extensions,
        // optional
        extras,
        // optional
        componentType,
        // optional, added from accessor above
        mimeType,
        // optional, added from images above
        isAttribute
      }, i) => {
        bufferViews[i].data = buffers[bufferIndex].slice(byteOffset, byteOffset + byteLength);
        if (!isAttribute)
          return;
        const buffer = gl.createBuffer();
        gl.bindBuffer(target, buffer);
        gl.renderer.state.boundBuffer = buffer;
        gl.bufferData(target, bufferViews[i].data, gl.STATIC_DRAW);
        bufferViews[i].buffer = buffer;
      }
    );
    return bufferViews;
  }
  static parseImages(gl, desc, dir, bufferViews) {
    if (!desc.images)
      return null;
    return Promise.all(
      desc.images.map(async ({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
        if (mimeType === "image/ktx2") {
          const { data } = bufferViews[bufferViewIndex];
          const image2 = await this.basisManager.parseTexture(data);
          return image2;
        }
        const image = new Image();
        image.name = name;
        if (uri) {
          image.src = this.resolveURI(uri, dir);
        } else if (bufferViewIndex !== void 0) {
          const { data } = bufferViews[bufferViewIndex];
          const blob = new Blob([data], { type: mimeType });
          image.src = URL.createObjectURL(blob);
        }
        image.ready = new Promise((res) => {
          image.onload = () => res();
        });
        return image;
      })
    );
  }
  static parseTextures(gl, desc, images) {
    if (!desc.textures)
      return null;
    return desc.textures.map((textureInfo) => this.createTexture(gl, desc, images, textureInfo));
  }
  static createTexture(gl, desc, images, { sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) {
    if (sourceIndex === void 0 && !!extensions) {
      if (extensions.KHR_texture_basisu)
        sourceIndex = extensions.KHR_texture_basisu.source;
    }
    const image = images[sourceIndex];
    if (image.texture)
      return image.texture;
    const options = {
      flipY: false,
      wrapS: gl.REPEAT,
      // Repeat by default, opposed to OGL's clamp by default
      wrapT: gl.REPEAT
    };
    const sampler = samplerIndex !== void 0 ? desc.samplers[samplerIndex] : null;
    if (sampler) {
      ["magFilter", "minFilter", "wrapS", "wrapT"].forEach((prop) => {
        if (sampler[prop])
          options[prop] = sampler[prop];
      });
    }
    if (image.isBasis) {
      options.image = image;
      options.internalFormat = image.internalFormat;
      if (image.isCompressedTexture) {
        options.generateMipmaps = false;
        if (image.length > 1)
          this.minFilter = gl.NEAREST_MIPMAP_LINEAR;
      }
      const texture2 = new Texture(gl, options);
      texture2.name = name;
      image.texture = texture2;
      return texture2;
    }
    const texture = new Texture(gl, options);
    texture.name = name;
    image.texture = texture;
    image.ready.then(() => {
      texture.image = image;
    });
    return texture;
  }
  static parseMaterials(gl, desc, textures) {
    if (!desc.materials)
      return null;
    return desc.materials.map(
      ({
        name,
        extensions,
        extras,
        pbrMetallicRoughness = {},
        normalTexture,
        occlusionTexture,
        emissiveTexture,
        emissiveFactor = [0, 0, 0],
        alphaMode = "OPAQUE",
        alphaCutoff = 0.5,
        doubleSided = false
      }) => {
        const {
          baseColorFactor = [1, 1, 1, 1],
          baseColorTexture,
          metallicFactor = 1,
          roughnessFactor = 1,
          metallicRoughnessTexture
          //   extensions,
          //   extras,
        } = pbrMetallicRoughness;
        if (baseColorTexture) {
          baseColorTexture.texture = textures[baseColorTexture.index];
        }
        if (normalTexture) {
          normalTexture.texture = textures[normalTexture.index];
        }
        if (metallicRoughnessTexture) {
          metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
        }
        if (occlusionTexture) {
          occlusionTexture.texture = textures[occlusionTexture.index];
        }
        if (emissiveTexture) {
          emissiveTexture.texture = textures[emissiveTexture.index];
        }
        return {
          name,
          extensions,
          extras,
          baseColorFactor,
          baseColorTexture,
          metallicFactor,
          roughnessFactor,
          metallicRoughnessTexture,
          normalTexture,
          occlusionTexture,
          emissiveTexture,
          emissiveFactor,
          alphaMode,
          alphaCutoff,
          doubleSided
        };
      }
    );
  }
  static parseSkins(gl, desc, bufferViews) {
    if (!desc.skins)
      return null;
    return desc.skins.map(
      ({
        inverseBindMatrices,
        // optional
        skeleton,
        // optional
        joints
        // required
        // name,
        // extensions,
        // extras,
      }) => {
        return {
          inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
          skeleton,
          joints
        };
      }
    );
  }
  static parseMeshes(gl, desc, bufferViews, materials, skins) {
    if (!desc.meshes)
      return null;
    return desc.meshes.map(
      ({
        primitives,
        // required
        weights,
        // optional
        name,
        // optional
        extensions,
        // optional
        extras
        // optional
      }, meshIndex) => {
        let numInstances = 0;
        let skinIndices = [];
        let isLightmap = false;
        desc.nodes && desc.nodes.forEach(({ mesh, skin, extras: extras2 }) => {
          if (mesh === meshIndex) {
            numInstances++;
            if (skin !== void 0)
              skinIndices.push(skin);
            if (extras2 && extras2.lightmap_scale_offset)
              isLightmap = true;
          }
        });
        let isSkin = !!skinIndices.length;
        if (isSkin) {
          primitives = skinIndices.map((skinIndex) => {
            return this.parsePrimitives(gl, primitives, desc, bufferViews, materials, 1, isLightmap).map(
              ({ geometry, program, mode }) => {
                const mesh = new GLTFSkin(gl, { skeleton: skins[skinIndex], geometry, program, mode });
                mesh.name = name;
                mesh.frustumCulled = false;
                return mesh;
              }
            );
          });
          primitives.instanceCount = 0;
          primitives.numInstances = numInstances;
        } else {
          primitives = this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap).map(
            ({ geometry, program, mode }) => {
              const meshConstructor = geometry.attributes.instanceMatrix ? InstancedMesh : Mesh;
              const mesh = new meshConstructor(gl, { geometry, program, mode });
              mesh.name = name;
              mesh.numInstances = numInstances;
              return mesh;
            }
          );
        }
        return {
          primitives,
          weights,
          name
        };
      }
    );
  }
  static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap) {
    return primitives.map(
      ({
        attributes,
        // required
        indices,
        // optional
        material: materialIndex,
        // optional
        mode = 4,
        // optional
        targets,
        // optional
        extensions,
        // optional
        extras
        // optional
      }) => {
        const program = new NormalProgram(gl);
        if (materialIndex !== void 0) {
          program.gltfMaterial = materials[materialIndex];
        }
        const geometry = new Geometry(gl);
        for (let attr in attributes) {
          geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
        }
        if (indices !== void 0) {
          geometry.addAttribute("index", this.parseAccessor(indices, desc, bufferViews));
        }
        if (numInstances > 1) {
          geometry.addAttribute("instanceMatrix", {
            instanced: 1,
            size: 16,
            data: new Float32Array(numInstances * 16)
          });
        }
        if (isLightmap) {
          geometry.addAttribute("lightmapScaleOffset", {
            instanced: 1,
            size: 4,
            data: new Float32Array(numInstances * 4)
          });
        }
        return {
          geometry,
          program,
          mode
        };
      }
    );
  }
  static parseAccessor(index, desc, bufferViews) {
    const {
      bufferView: bufferViewIndex,
      // optional
      byteOffset = 0,
      // optional
      componentType,
      // required
      normalized = false,
      // optional
      count,
      // required
      type,
      // required
      min,
      // optional
      max,
      // optional
      sparse
      // optional
      // name, // optional
      // extensions, // optional
      // extras, // optional
    } = desc.accessors[index];
    const {
      data,
      // attached in parseBufferViews
      buffer,
      // replaced to be the actual GL buffer
      byteOffset: bufferByteOffset = 0,
      // byteLength, // applied in parseBufferViews
      byteStride = 0,
      target
      // name,
      // extensions,
      // extras,
    } = bufferViews[bufferViewIndex];
    const size = TYPE_SIZE[type];
    const TypeArray = TYPE_ARRAY[componentType];
    const elementBytes = TypeArray.BYTES_PER_ELEMENT;
    const componentStride = byteStride / elementBytes;
    const isInterleaved = !!byteStride && componentStride !== size;
    let filteredData;
    if (isInterleaved) {
      const typedData = new TypeArray(data, byteOffset);
      filteredData = new TypeArray(count * size);
      for (let i = 0; i < count; i++) {
        const start = componentStride * i;
        const end = start + size;
        filteredData.set(typedData.slice(start, end), i * size);
      }
    } else {
      filteredData = new TypeArray(data, byteOffset, count * size);
    }
    return {
      data: filteredData,
      size,
      type: componentType,
      normalized,
      buffer,
      stride: byteStride,
      offset: byteOffset,
      count,
      min,
      max
    };
  }
  static parseNodes(gl, desc, meshes, skins, images) {
    if (!desc.nodes)
      return null;
    const nodes = desc.nodes.map(
      ({
        camera,
        // optional
        children,
        // optional
        skin: skinIndex,
        // optional
        matrix,
        // optional
        mesh: meshIndex,
        // optional
        rotation,
        // optional
        scale: scale6,
        // optional
        translation,
        // optional
        weights,
        // optional
        name,
        // optional
        extensions,
        // optional
        extras
        // optional
      }) => {
        const node = new Transform();
        if (name)
          node.name = name;
        node.extras = extras;
        node.extensions = extensions;
        if (extras && extras.lightmapTexture !== void 0) {
          extras.lightmapTexture.texture = this.createTexture(gl, desc, images, { source: extras.lightmapTexture.index });
        }
        if (matrix) {
          node.matrix.copy(matrix);
          node.decompose();
        } else {
          if (rotation)
            node.quaternion.copy(rotation);
          if (scale6)
            node.scale.copy(scale6);
          if (translation)
            node.position.copy(translation);
          node.updateMatrix();
        }
        let isInstanced = false;
        let isFirstInstance = true;
        let isInstancedMatrix = false;
        let isSkin = skinIndex !== void 0;
        if (meshIndex !== void 0) {
          if (isSkin) {
            meshes[meshIndex].primitives[meshes[meshIndex].primitives.instanceCount].forEach((mesh) => {
              mesh.extras = extras;
              mesh.setParent(node);
            });
            meshes[meshIndex].primitives.instanceCount++;
            if (meshes[meshIndex].primitives.instanceCount === meshes[meshIndex].primitives.numInstances) {
              delete meshes[meshIndex].primitives.numInstances;
              delete meshes[meshIndex].primitives.instanceCount;
            }
          } else {
            meshes[meshIndex].primitives.forEach((mesh) => {
              mesh.extras = extras;
              if (mesh.geometry.isInstanced) {
                isInstanced = true;
                if (!mesh.instanceCount) {
                  mesh.instanceCount = 0;
                } else {
                  isFirstInstance = false;
                }
                if (mesh.geometry.attributes.instanceMatrix) {
                  isInstancedMatrix = true;
                  node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
                }
                if (mesh.geometry.attributes.lightmapScaleOffset) {
                  mesh.geometry.attributes.lightmapScaleOffset.data.set(extras.lightmap_scale_offset, mesh.instanceCount * 4);
                }
                mesh.instanceCount++;
                if (mesh.instanceCount === mesh.numInstances) {
                  delete mesh.numInstances;
                  delete mesh.instanceCount;
                  if (mesh.geometry.attributes.instanceMatrix) {
                    mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
                  }
                  if (mesh.geometry.attributes.lightmapScaleOffset) {
                    mesh.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
                  }
                }
              }
              if (isInstanced) {
                if (isFirstInstance)
                  mesh.setParent(node);
              } else {
                mesh.setParent(node);
              }
            });
          }
        }
        if (isInstancedMatrix) {
          if (!isFirstInstance)
            return null;
          node.matrix.identity();
          node.decompose();
        }
        return node;
      }
    );
    desc.nodes.forEach(({ children = [] }, i) => {
      children.forEach((childIndex) => {
        if (!nodes[childIndex])
          return;
        nodes[childIndex].setParent(nodes[i]);
      });
    });
    meshes.forEach(({ primitives }, i) => {
      primitives.forEach((primitive, i2) => {
        if (primitive.isInstancedMesh)
          primitive.addFrustumCull();
      });
    });
    return nodes;
  }
  static populateSkins(skins, nodes) {
    if (!skins)
      return;
    skins.forEach((skin) => {
      skin.joints = skin.joints.map((i, index) => {
        const joint = nodes[i];
        joint.skin = skin;
        joint.bindInverse = new Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
        return joint;
      });
      if (skin.skeleton)
        skin.skeleton = nodes[skin.skeleton];
    });
  }
  static parseAnimations(gl, desc, nodes, bufferViews) {
    if (!desc.animations)
      return null;
    return desc.animations.map(
      ({
        channels,
        // required
        samplers,
        // required
        name
        // optional
        // extensions, // optional
        // extras,  // optional
      }, animationIndex) => {
        const data = channels.map(
          ({
            sampler: samplerIndex,
            // required
            target
            // required
            // extensions, // optional
            // extras, // optional
          }) => {
            const {
              input: inputIndex,
              // required
              interpolation = "LINEAR",
              output: outputIndex
              // required
              // extensions, // optional
              // extras, // optional
            } = samplers[samplerIndex];
            const {
              node: nodeIndex,
              // optional - TODO: when is it not included?
              path
              // required
              // extensions, // optional
              // extras, // optional
            } = target;
            const node = nodes[nodeIndex];
            const transform = TRANSFORMS[path];
            const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
            const values = this.parseAccessor(outputIndex, desc, bufferViews).data;
            if (!node.animations)
              node.animations = [];
            if (!node.animations.includes(animationIndex))
              node.animations.push(animationIndex);
            return {
              node,
              transform,
              interpolation,
              times,
              values
            };
          }
        );
        return {
          name,
          animation: new GLTFAnimation(data)
        };
      }
    );
  }
  static parseScenes(desc, nodes) {
    if (!desc.scenes)
      return null;
    return desc.scenes.map(
      ({
        nodes: nodesIndices = [],
        name,
        // optional
        extensions,
        extras
      }) => {
        const scene = nodesIndices.reduce((map, i) => {
          if (nodes[i])
            map.push(nodes[i]);
          return map;
        }, []);
        scene.extras = extras;
        return scene;
      }
    );
  }
  static parseLights(gl, desc, nodes, scenes) {
    const lights = {
      directional: [],
      point: [],
      spot: []
    };
    scenes.forEach((scene) => scene.forEach((node) => node.updateMatrixWorld()));
    const lightsDescArray = desc.extensions?.KHR_lights_punctual?.lights || [];
    nodes.forEach((node) => {
      if (!node?.extensions?.KHR_lights_punctual)
        return;
      const lightIndex = node.extensions.KHR_lights_punctual.light;
      const lightDesc = lightsDescArray[lightIndex];
      const light = {
        name: lightDesc.name || "",
        color: { value: new Vec3().set(lightDesc.color || 1) }
      };
      if (lightDesc.intensity !== void 0)
        light.color.value.multiply(lightDesc.intensity);
      switch (lightDesc.type) {
        case "directional":
          light.direction = { value: new Vec3(0, 0, 1).transformDirection(node.worldMatrix) };
          break;
        case "point":
          light.position = { value: new Vec3().applyMatrix4(node.worldMatrix) };
          light.distance = { value: lightDesc.range };
          light.decay = { value: 2 };
          break;
        case "spot":
          Object.assign(light, lightDesc);
          break;
      }
      lights[lightDesc.type].push(light);
    });
    return lights;
  }
};

// skybox.js
var SkyBox = class extends Mesh {
  constructor(gl, imgArray) {
    const texture = new Texture(gl, { image: imgArray, target: gl.TEXTURE_CUBE_MAP });
    const geometry = new Box(gl);
    const program = new Program(gl, {
      vertex: `#version 300 es
            in vec3 position;
            out vec3 uv;

            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;

            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                uv = position;
            }
            `,
      fragment: `#version 300 es
            precision highp float;
            //uniform samplerCube tMap;
            in vec3 uv;
            out vec4 outColor;

            void main() {
                float sky = clamp((-uv.y + 0.5) + uv.x, 0.0, 1.0);
                //outColor = texture(tMap, uv);
                outColor = vec4(0.1, 0.1, sky/2.0, 1.0);
            }
            `,
      //uniforms: {
      //    tMap: { value: texture },
      //},
      cullFace: null
    });
    super(gl, { geometry, program });
    this.worldMatrix.scale(100);
    this.beforeRenderCallbacks = [
      () => {
        this.program.uniforms.modelViewMatrix.value.setPosition([0, 0, 0]);
      }
    ];
  }
  updateMatrix() {
    return;
  }
  updateMatrixWorld(force) {
    return;
  }
};

// abstract.js
var MessageBus = class {
  constructor() {
    this.types = {};
  }
  register(type, func) {
    if (this.types[type] === void 0) {
      this.types[type] = [];
    }
    const index = this.types[type].push(func);
    return () => {
      delete this.types[type][index - 1];
    };
  }
  send(type, data) {
    if (type in this.types) {
      for (const func of this.types[type]) {
        func(data);
      }
    }
  }
};

// ui.js
function makeButtonInList(buttonLabel, listId, callback) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.append(buttonLabel);
  button.addEventListener("click", callback);
  li.append(button);
  document.getElementById(listId).append(li);
}

// editmode.js
var STATE2 = { EDIT: 0, GRAB: 1, TERRAIN_EDIT: 2, DISABLED: -1 };
var PLANE = { origin: new Vec3(0, 0, 0), normal: new Vec3(0, 1, 0) };
var EditMode = class {
  constructor({
    msgBus = msgBus,
    raycast = raycast,
    scene = scene,
    camera = camera,
    renderer = renderer
  }, terrain) {
    this.state = STATE2.EDIT;
    this.heldObject = null;
    this.gl = renderer.gl;
    this.canvas = renderer.gl.canvas;
    this.msgBus = msgBus;
    this.raycast = raycast;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mouse = new Vec2();
    this.objectList = [];
    this.terrain = terrain;
    this.raycast.createList("terrainCells", "BOUNDS");
    for (const cell of terrain.grid) {
      this.raycast.addObject(cell, "terrainCells");
    }
    this.msgBus.register("onAssetsLoaded", (assets) => {
      this.setupAssets(assets);
    });
    this.registerCallbacks();
  }
  setupAssets(assets) {
    this.assets = assets.items;
    for (const assetId in this.assets) {
      makeButtonInList(this.assets[assetId].name, "buttonList", () => {
        if (this.heldObject)
          this.heldObject = void 0;
        this.heldObject = new Mesh(this.gl, this.assets[assetId]);
        this.state = STATE2.GRAB;
        this.heldObject.position[2] = -1e3;
        this.heldObject.setParent(this.scene);
      });
    }
    makeButtonInList("Clear", "buttonList", () => {
      if (this.heldObject) {
        this.heldObject.setParent(null);
        this.heldObject = void 0;
      }
      this.state = STATE2.EDIT;
    });
    makeButtonInList("Edit Terrain", "buttonList", () => {
      this.heldObjectDrop();
      this.state = STATE2.TERRAIN_EDIT;
    });
  }
  pointerDown(e) {
    this.raycast.castMouseRay(e, this.camera);
    switch (this.state) {
      case STATE2.GRAB:
        this.heldObjectDrop();
        this.state = STATE2.EDIT;
        break;
      case STATE2.EDIT:
        this.heldObjectGrab();
        break;
      case STATE2.TERRAIN_EDIT:
        this.terrainDestroy();
        break;
    }
  }
  pointerMove(e) {
    if (this.state == STATE2.GRAB) {
      this.raycast.castMouseRay(e, this.camera);
      this.heldObjectUpdate();
    }
  }
  terrainDestroy() {
    const hits = this.raycast.intersectList("terrainCells");
    if (hits[0]) {
      hits[0].filled = false;
      this.raycast.removeObject(hits[0], "terrainCells");
      this.terrain.updateCellNeighbors(hits[0].x, hits[0].y);
    }
  }
  heldObjectUpdate() {
    const intersection = this.raycast.intersectPlane(PLANE);
    if (intersection) {
      this.heldObject.position = intersection.clone();
    }
  }
  heldObjectDrop() {
    if (!this.heldObject) {
      return;
    }
    this.heldObjectUpdate();
    this.objectList.push(this.heldObject);
    this.heldObject = void 0;
  }
  heldObjectGrab() {
    const hits = this.raycast.intersectMeshes(
      this.objectList,
      { includeUV: false, includeNormal: false }
    );
    if (hits.length) {
      this.heldObject = hits[0];
      const objIndex = this.objectList.indexOf(hits[0]);
      if (objIndex > -1) {
        this.objectList.splice(objIndex, 1);
      }
      this.state = STATE2.GRAB;
    }
  }
  registerCallbacks() {
    this.canvas.addEventListener("pointerdown", (e) => this.pointerDown(e));
    this.canvas.addEventListener("pointermove", (e) => this.pointerMove(e));
  }
  unregisterCallbacks() {
  }
  update() {
    if (this.heldObject) {
      this.heldObject.rotation.y += 0.1;
    }
  }
};

// terrain.js
var GRID_X = 100;
var GRID_Y = 100;
var GRID_OFFSET_X = GRID_X / 2 - 0.5;
var GRID_OFFSET_Y = GRID_X / 2 - 0.5;
function calcOffset(x, y) {
  return y * GRID_X + x;
}
function calcGridToWorld(x, y, z) {
  return [x - GRID_OFFSET_X, y, z - GRID_OFFSET_Y];
}
function withinBounds(x, y) {
  if (x >= 0 && x < GRID_X && y >= 0 && y < GRID_Y)
    return true;
  else
    return false;
}
var NEIGHBORS = [[0, 1, 0], [0, -1, Math.PI], [1, 0, 0.5 * Math.PI], [-1, 0, 1.5 * Math.PI]];
var Terrain = class {
  constructor({ scene = scene, renderer = renderer, msgBus = msgBus, raycast = raycast, program = program }) {
    msgBus.register("onAssetsLoaded", (assets) => {
      this.setupWalls(assets);
    });
    this.gl = renderer.gl;
    this.scene = scene;
    this.program = program;
    this.grid = [];
    this.origin = new Transform();
    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        const min = calcGridToWorld(x - 0.5, 0, y - 0.5);
        const max = calcGridToWorld(x + 0.5, 2, y + 0.5);
        this.grid.push({ walls: [], filled: true, x, y, id: calcOffset(x, y), bounds: {
          min: { x: min[0], y: min[1], z: min[2] },
          max: { x: max[0], y: max[1], z: max[2] }
        } });
      }
    }
    this.origin.setParent(scene);
    msgBus.send("onTerrainLoaded", this);
  }
  setupWalls(assets) {
    this.walls = assets.walls;
    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        this.updateCell(x, y);
      }
    }
  }
  updateCellNeighbors(x, y) {
    this.updateCell(x, y);
    for (const direction of NEIGHBORS) {
      this.updateCell(x + direction[0], y + direction[1]);
    }
  }
  updateCell(x, y) {
    const cell = this.grid[calcOffset(x, y)];
    if (!withinBounds(x, y))
      return;
    if (cell.walls.length > 0) {
      for (const wall of cell.walls) {
        wall.setParent(null);
      }
      cell.walls = [];
    }
    if (cell.filled)
      return;
    for (const direction of NEIGHBORS) {
      const neighbor = this.grid[calcOffset(x + direction[0], y + direction[1])];
      if (!withinBounds(x + direction[0], y + direction[1]) || neighbor?.filled) {
        const newWall = new Mesh(this.gl, { geometry: this.walls["1"].geometry, program: this.program });
        newWall.position = calcGridToWorld(x + direction[0] / 2, 0, y + direction[1] / 2);
        newWall.rotation.y = direction[2];
        newWall.setParent(this.scene);
        cell.walls.push(newWall);
      }
    }
  }
};

// rayhelp.js
var RaycastHelper = class {
  constructor(renderer) {
    this.renderer = renderer;
    this.raycast = new Raycast(renderer.gl);
    this.intersectLists = {};
    this.intersectionTypes = {
      BOUNDS: this.intersectBounds.bind(this),
      MESHES: this.intersectMeshes.bind(this)
    };
  }
  createList(list, type) {
    this.intersectLists[list] = {
      func: this.intersectionTypes[type],
      array: []
    };
  }
  intersectList(list) {
    return this.intersectLists[list].func(
      this.intersectLists[list].array
    );
  }
  addObject(object, list) {
    if (this.intersectLists[list]) {
      this.intersectLists[list].array.push(object);
    } else {
      console.warn("Intersection list doesn't exist!");
    }
  }
  removeObject(object, list) {
    if (this.intersectLists[list]) {
      const objIndex = this.intersectLists[list].array.indexOf(object);
      if (objIndex > -1) {
        this.intersectLists[list].array.splice(objIndex, 1);
      }
    } else {
      console.warn("Intersection list doesn't exist!");
    }
  }
  castMouseRay(e, camera) {
    this.raycast.castMouse(
      camera,
      [2 * (e.x / this.renderer.width) - 1, 2 * (1 - e.y / this.renderer.height) - 1]
    );
  }
  intersectPlane(plane) {
    return this.raycast.intersectPlane(plane);
  }
  intersectMeshes(objList, options) {
    return this.raycast.intersectMeshes(objList, options);
  }
  intersectBounds(cellList) {
    const hits = [];
    for (const cell of cellList) {
      cell.hitDistance = this.raycast.intersectBox(cell.bounds);
      if (cell.hitDistance)
        hits.push(cell);
    }
    hits.sort((a, b) => a.hitDistance - b.hitDistance);
    return hits;
  }
};

// shaders/main.vert
var main_default = "#version 300 es\nin vec3 position;\nin vec4 color;\nin vec3 normal;\n//in vec2 uv;\nuniform vec3 cameraPosition;\nuniform vec3 lightPosition[3];\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 projectionMatrix;\n\n//out vec2 vUV;\nout vec4 vColor;\nout vec3 vNormal;\nout vec3 vSurfaceToLight[3];\nout vec3 vSurfaceToCamera;\n\nvoid main() {\n    vec3 surfaceWorldPosition = mat3(modelMatrix) * position;\n    for (int i = 0; i < 3; ++i) {\n        vSurfaceToLight[i] = lightPosition[i] - surfaceWorldPosition;\n    }\n    vSurfaceToCamera = cameraPosition - surfaceWorldPosition;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vColor = color;\n    vNormal = mat3(modelMatrix) * normal;\n    //v_uv = uv;\n}\n";

// shaders/main.frag
var main_default2 = "#version 300 es\nprecision highp float;\n//in vec2 v_uv;\nin vec4 vColor;\nin vec3 vNormal;\nin vec3 vSurfaceToLight[3];\nin vec3 vSurfaceToCamera;\nout vec4 outColor;\n//uniform sampler2D tBaseColor;\nuniform vec3 lightColor[3];\n\nvec3 unlit() {\n    return vec3(0.1, 0.1, 0.1);\n}\n\nvoid main() {\n    vec3 viewDir = normalize(vSurfaceToCamera);\n    vec3 normal = normalize(vNormal);\n\n    vec3 lightTotal;\n    for (int i = 0; i < 3; ++i) {\n        lightTotal = lightTotal + clamp(dot(normalize(vSurfaceToLight[i]), normal), 0.0, 1.0) * lightColor[i];\n    }\n    outColor = vec4(unlit() + lightTotal * vColor.rgb, 1.0);\n}\n";

// index.js
function init() {
  const canvasElem = document.querySelector("#renderCanvas");
  const renderer = new Renderer({ dpr: 1, canvas: canvasElem });
  const gl = renderer.gl;
  const camera = new Camera(gl, { near: 0.1, far: 1e4 });
  function resize() {
    renderer.setSize(canvasElem.parentNode.clientWidth, canvasElem.parentNode.clientHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
  }
  window.addEventListener("resize", resize, false);
  resize();
  const controls = new Orbit(camera, { element: canvasElem });
  camera.position.set(0, 0.5, -1).normalize().multiply(2.5).add([5, 5, -5]);
  controls.target.copy([0, 2, 2]);
  controls.forcePosition();
  const assets = { items: {}, walls: {} };
  const scene = new Transform();
  const raycast = new RaycastHelper(renderer);
  loadAssets();
  const msgBus = new MessageBus();
  const lightPosition = [new Vec3(10, 1, 0), new Vec3(0, 10, 3), new Vec3(0, 1, 5)];
  const lightColor = [new Vec3(0.2, 0.7, 1), new Vec3(1, 1, 1), new Vec3(0.9, 0.1, 0.2)];
  const lightFalloff = [1, 0.5, 1];
  const lightPenumbra = [];
  const lightUmbra = [];
  const program = new Program(gl, {
    vertex: main_default,
    fragment: main_default2,
    uniforms: {
      cameraPosition: { value: camera.position },
      lightPosition: { value: lightPosition },
      lightColor: { value: lightColor },
      lightFalloff: { value: lightFalloff },
      lightPenumbra: { value: lightPenumbra },
      lightUmbra: { value: lightUmbra }
    }
  });
  const context = {
    scene,
    program,
    raycast,
    renderer,
    camera,
    msgBus
  };
  const terrain = new Terrain(context);
  const editMode = new EditMode(context, terrain);
  let paused = false;
  let requestID;
  makeButtonInList("Pause", "buttonList", () => {
    if (paused) {
      requestID = requestAnimationFrame(update);
      paused = false;
    } else {
      cancelAnimationFrame(requestID);
      paused = true;
    }
  });
  async function loadAssets() {
    const gltf = await GLTFLoader.load(gl, `assets.glb`);
    console.log(gltf);
    const s = gltf.scene || gltf.scenes[0];
    s.forEach((root) => {
      root.traverse((node) => {
        if (node.geometry && node.extras.asset_id) {
          assets.items[node.extras.asset_id] = node;
        }
        if (node.extras.wall_id) {
          assets.walls[node.extras.wall_id] = node;
        }
        if (node.program) {
          const material = node.program.gltfMaterial || {};
          node.program = program;
        }
      });
    });
    const skybox = new SkyBox(gl);
    skybox.setParent(scene);
    msgBus.send("onAssetsLoaded", assets);
  }
  requestID = requestAnimationFrame(update);
  function update() {
    requestID = requestAnimationFrame(update);
    controls.update();
    renderer.render({ scene, camera, sort: false, frustumCull: false });
  }
}
init();
//# sourceMappingURL=index.js.map
