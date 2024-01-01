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

// node_modules/.pnpm/ogl@1.0.3/node_modules/ogl/src/extras/Sphere.js
var Sphere = class extends Geometry {
  constructor(gl, {
    radius = 0.5,
    widthSegments = 16,
    heightSegments = Math.ceil(widthSegments * 0.5),
    phiStart = 0,
    phiLength = Math.PI * 2,
    thetaStart = 0,
    thetaLength = Math.PI,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const pStart = phiStart;
    const pLength = phiLength;
    const tStart = thetaStart;
    const tLength = thetaLength;
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let iv = 0;
    let ii = 0;
    let te = tStart + tLength;
    const grid = [];
    let n = new Vec3();
    for (let iy = 0; iy <= hSegs; iy++) {
      let vRow = [];
      let v = iy / hSegs;
      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let u = ix / wSegs;
        let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        let y = radius * Math.cos(tStart + v * tLength);
        let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        position[i * 3] = x;
        position[i * 3 + 1] = y;
        position[i * 3 + 2] = z;
        n.set(x, y, z).normalize();
        normal[i * 3] = n.x;
        normal[i * 3 + 1] = n.y;
        normal[i * 3 + 2] = n.z;
        uv[i * 2] = u;
        uv[i * 2 + 1] = 1 - v;
        vRow.push(iv++);
      }
      grid.push(vRow);
    }
    for (let iy = 0; iy < hSegs; iy++) {
      for (let ix = 0; ix < wSegs; ix++) {
        let a = grid[iy][ix + 1];
        let b = grid[iy][ix];
        let c = grid[iy + 1][ix];
        let d = grid[iy + 1][ix + 1];
        if (iy !== 0 || tStart > 0) {
          index[ii * 3] = a;
          index[ii * 3 + 1] = b;
          index[ii * 3 + 2] = d;
          ii++;
        }
        if (iy !== hSegs - 1 || te < Math.PI) {
          index[ii * 3] = b;
          index[ii * 3 + 1] = c;
          index[ii * 3 + 2] = d;
          ii++;
        }
      }
    }
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
var tempMat42 = /* @__PURE__ */ new Mat4();
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
      tempMat42.multiply(bone.worldMatrix, bone.bindInverse);
      this.boneMatrices.set(tempMat42, i * 16);
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

// shaders/physDebug.vert
var physDebug_default = "#version 300 es\nin vec3 position;\nin vec4 color;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nout vec4 vColor;\n\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vColor = color;\n}\n";

// shaders/physDebug.frag
var physDebug_default2 = "#version 300 es\nprecision highp float;\n\nin vec4 vColor;\n\nout vec4 outColor;\n\nvoid main() {\n    outColor = vColor;\n}\n";

// physdebug.js
var PhysDebugMesh = class extends Mesh {
  constructor(gl, world, scene) {
    const program = new Program(gl, {
      vertex: physDebug_default,
      fragment: physDebug_default2
    });
    const renderData = world.debugRender();
    const attrs = {
      position: {
        size: 3,
        usage: gl.STREAM_DRAW,
        data: renderData.vertices
      },
      color: {
        size: 4,
        usage: gl.STREAM_DRAW,
        data: renderData.colors
      }
    };
    const geom = new Geometry(gl, attrs);
    super(gl, { geometry: geom, program, mode: gl.LINES });
    this.attrs = attrs;
    this.world = world;
    this.geometry = geom;
    this.bufLen = renderData.vertices.length;
    this.gl = gl;
    this.scene = scene;
    this.enabled = false;
  }
  updateBuffers() {
    const newBuf = this.world.debugRender();
    this.attrs.position.data = newBuf.vertices;
    this.attrs.color.data = newBuf.colors;
    if (newBuf.vertices.length !== this.bufLen) {
      if (newBuf.vertices.length > this.bufLen) {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attrs.position.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, newBuf.vertices, this.gl.STREAM_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attrs.color.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, newBuf.colors, this.gl.STREAM_DRAW);
        this.gl.renderer.state.boundBuffer = this.attrs.color.buffer;
      }
      this.attrs.position.count = newBuf.vertices.length / 3;
      this.attrs.color.count = newBuf.colors.length / 4;
      this.geometry.drawRange.count = newBuf.vertices.length / 3;
    }
    this.bufLen = newBuf.vertices.length;
    this.geometry.updateAttribute(this.attrs.position);
    this.geometry.updateAttribute(this.attrs.color);
  }
  toggle() {
    if (this.enabled) {
      this.enabled = false;
      this.setParent(null);
    } else {
      this.enabled = true;
      this.setParent(this.scene);
    }
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

// wasm-deferred:/home/albatross/src/ballphys/node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm
var rapier_wasm3d_bg_default = "./rapier_wasm3d_bg-YZOV23FK.wasm";

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedFloat64Memory0 = new Float64Array();
function getFloat64Memory0() {
  if (cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedInt32Memory0 = new Int32Array();
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(memory.buffer);
  }
  return cachedInt32Memory0;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0 = new Uint8Array();
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function _assertClass(instance2, klass) {
  if (!(instance2 instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance2.ptr;
}
var cachedFloat32Memory0 = new Float32Array();
function getFloat32Memory0() {
  if (cachedFloat32Memory0.byteLength === 0) {
    cachedFloat32Memory0 = new Float32Array(memory.buffer);
  }
  return cachedFloat32Memory0;
}
var stack_pointer = 32;
function addBorrowedObject(obj) {
  if (stack_pointer == 1)
    throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
function getArrayF32FromWasm0(ptr, len) {
  return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var cachedUint32Memory0 = new Uint32Array();
function getUint32Memory0() {
  if (cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(memory.buffer);
  }
  return cachedUint32Memory0;
}
function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var WASM_VECTOR_LEN = 0;
function passArrayF32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getFloat32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    __wbindgen_exn_store(addHeapObject(e));
  }
}
var RawJointType = Object.freeze({ Revolute: 0, "0": "Revolute", Fixed: 1, "1": "Fixed", Prismatic: 2, "2": "Prismatic", Spherical: 3, "3": "Spherical", Generic: 4, "4": "Generic" });
var RawMotorModel = Object.freeze({ AccelerationBased: 0, "0": "AccelerationBased", ForceBased: 1, "1": "ForceBased" });
var RawJointAxis = Object.freeze({ X: 0, "0": "X", Y: 1, "1": "Y", Z: 2, "2": "Z", AngX: 3, "3": "AngX", AngY: 4, "4": "AngY", AngZ: 5, "5": "AngZ" });
var RawRigidBodyType = Object.freeze({ Dynamic: 0, "0": "Dynamic", Fixed: 1, "1": "Fixed", KinematicPositionBased: 2, "2": "KinematicPositionBased", KinematicVelocityBased: 3, "3": "KinematicVelocityBased" });
var RawFeatureType = Object.freeze({ Vertex: 0, "0": "Vertex", Edge: 1, "1": "Edge", Face: 2, "2": "Face", Unknown: 3, "3": "Unknown" });
var RawShapeType = Object.freeze({ Ball: 0, "0": "Ball", Cuboid: 1, "1": "Cuboid", Capsule: 2, "2": "Capsule", Segment: 3, "3": "Segment", Polyline: 4, "4": "Polyline", Triangle: 5, "5": "Triangle", TriMesh: 6, "6": "TriMesh", HeightField: 7, "7": "HeightField", Compound: 8, "8": "Compound", ConvexPolyhedron: 9, "9": "ConvexPolyhedron", Cylinder: 10, "10": "Cylinder", Cone: 11, "11": "Cone", RoundCuboid: 12, "12": "RoundCuboid", RoundTriangle: 13, "13": "RoundTriangle", RoundCylinder: 14, "14": "RoundCylinder", RoundCone: 15, "15": "RoundCone", RoundConvexPolyhedron: 16, "16": "RoundConvexPolyhedron", HalfSpace: 17, "17": "HalfSpace" });
var RawBroadPhase = class _RawBroadPhase {
  static __wrap(ptr) {
    const obj = Object.create(_RawBroadPhase.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawbroadphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawbroadphase_new();
    return _RawBroadPhase.__wrap(ret);
  }
};
var RawCCDSolver = class _RawCCDSolver {
  static __wrap(ptr) {
    const obj = Object.create(_RawCCDSolver.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawccdsolver_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawccdsolver_new();
    return _RawCCDSolver.__wrap(ret);
  }
};
var RawCharacterCollision = class _RawCharacterCollision {
  static __wrap(ptr) {
    const obj = Object.create(_RawCharacterCollision.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawcharactercollision_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawcharactercollision_new();
    return _RawCharacterCollision.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  handle() {
    const ret = rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  translationApplied() {
    const ret = rawcharactercollision_translationApplied(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  translationRemaining() {
    const ret = rawcharactercollision_translationRemaining(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  worldWitness1() {
    const ret = rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldWitness2() {
    const ret = rawcharactercollision_worldWitness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal1() {
    const ret = rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal2() {
    const ret = rawcharactercollision_worldNormal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawColliderSet = class _RawColliderSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawColliderSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawcolliderset_free(ptr);
  }
  /**
  * The world-space translation of this collider.
  * @param {number} handle
  * @returns {RawVector}
  */
  coTranslation(handle) {
    const ret = rawcolliderset_coTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this collider.
  * @param {number} handle
  * @returns {RawRotation}
  */
  coRotation(handle) {
    const ret = rawcolliderset_coRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this collider.
  *
  * # Parameters
  * - `x`: the world-space position of the collider along the `x` axis.
  * - `y`: the world-space position of the collider along the `y` axis.
  * - `z`: the world-space position of the collider along the `z` axis.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  coSetTranslation(handle, x, y, z) {
    rawcolliderset_coSetTranslation(this.ptr, handle, x, y, z);
  }
  /**
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  coSetTranslationWrtParent(handle, x, y, z) {
    rawcolliderset_coSetTranslationWrtParent(this.ptr, handle, x, y, z);
  }
  /**
  * Sets the rotation quaternion of this collider.
  *
  * This does nothing if a zero quaternion is provided.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  coSetRotation(handle, x, y, z, w) {
    rawcolliderset_coSetRotation(this.ptr, handle, x, y, z, w);
  }
  /**
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  coSetRotationWrtParent(handle, x, y, z, w) {
    rawcolliderset_coSetRotationWrtParent(this.ptr, handle, x, y, z, w);
  }
  /**
  * Is this collider a sensor?
  * @param {number} handle
  * @returns {boolean}
  */
  coIsSensor(handle) {
    const ret = rawcolliderset_coIsSensor(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The type of the shape of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coShapeType(handle) {
    const ret = rawcolliderset_coShapeType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfspaceNormal(handle) {
    const ret = rawcolliderset_coHalfspaceNormal(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The half-extents of this collider if it is has a cuboid shape.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfExtents(handle) {
    const ret = rawcolliderset_coHalfExtents(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * Set the half-extents of this collider if it has a cuboid shape.
  * @param {number} handle
  * @param {RawVector} newHalfExtents
  */
  coSetHalfExtents(handle, newHalfExtents) {
    _assertClass(newHalfExtents, RawVector);
    rawcolliderset_coSetHalfExtents(this.ptr, handle, newHalfExtents.ptr);
  }
  /**
  * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRadius(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coRadius(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newRadius
  */
  coSetRadius(handle, newRadius) {
    rawcolliderset_coSetRadius(this.ptr, handle, newRadius);
  }
  /**
  * The half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHalfHeight(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coHalfHeight(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newHalfheight
  */
  coSetHalfHeight(handle, newHalfheight) {
    rawcolliderset_coSetHalfHeight(this.ptr, handle, newHalfheight);
  }
  /**
  * The radius of the round edges of this collider.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRoundRadius(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coRoundRadius(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of the round edges of this collider.
  * @param {number} handle
  * @param {number} newBorderRadius
  */
  coSetRoundRadius(handle, newBorderRadius) {
    rawcolliderset_coSetRoundRadius(this.ptr, handle, newBorderRadius);
  }
  /**
  * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coVertices(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coVertices(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayF32FromWasm0(r0, r1).slice();
        __wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Uint32Array | undefined}
  */
  coIndices(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coIndices(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayU32FromWasm0(r0, r1).slice();
        __wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The height of this heightfield if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coHeightfieldHeights(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coHeightfieldHeights(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayF32FromWasm0(r0, r1).slice();
        __wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The scaling factor applied of this heightfield if it is one.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHeightfieldScale(handle) {
    const ret = rawcolliderset_coHeightfieldScale(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The number of rows on this heightfield's height matrix, if it is one.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHeightfieldNRows(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coHeightfieldNRows(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The number of columns on this heightfield's height matrix, if it is one.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHeightfieldNCols(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coHeightfieldNCols(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The unique integer identifier of the collider this collider is attached to.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coParent(handle) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawcolliderset_coParent(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  coSetEnabled(handle, enabled) {
    rawcolliderset_coSetEnabled(this.ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  coIsEnabled(handle) {
    const ret = rawcolliderset_coIsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The friction coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coFriction(handle) {
    const ret = rawcolliderset_coFriction(this.ptr, handle);
    return ret;
  }
  /**
  * The restitution coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coRestitution(handle) {
    const ret = rawcolliderset_coRestitution(this.ptr, handle);
    return ret;
  }
  /**
  * The density of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coDensity(handle) {
    const ret = rawcolliderset_coDensity(this.ptr, handle);
    return ret;
  }
  /**
  * The mass of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coMass(handle) {
    const ret = rawcolliderset_coMass(this.ptr, handle);
    return ret;
  }
  /**
  * The volume of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coVolume(handle) {
    const ret = rawcolliderset_coVolume(this.ptr, handle);
    return ret;
  }
  /**
  * The collision groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coCollisionGroups(handle) {
    const ret = rawcolliderset_coCollisionGroups(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The solver groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coSolverGroups(handle) {
    const ret = rawcolliderset_coSolverGroups(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The physics hooks enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveHooks(handle) {
    const ret = rawcolliderset_coActiveHooks(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The collision types enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveCollisionTypes(handle) {
    const ret = rawcolliderset_coActiveCollisionTypes(this.ptr, handle);
    return ret;
  }
  /**
  * The events enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveEvents(handle) {
    const ret = rawcolliderset_coActiveEvents(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The total force magnitude beyond which a contact force event can be emitted.
  * @param {number} handle
  * @returns {number}
  */
  coContactForceEventThreshold(handle) {
    const ret = rawcolliderset_coContactForceEventThreshold(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @returns {boolean}
  */
  coContainsPoint(handle, point) {
    _assertClass(point, RawVector);
    const ret = rawcolliderset_coContainsPoint(this.ptr, handle, point.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} colliderVel
  * @param {RawShape} shape2
  * @param {RawVector} shape2Pos
  * @param {RawRotation} shape2Rot
  * @param {RawVector} shape2Vel
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeTOI | undefined}
  */
  coCastShape(handle, colliderVel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi, stop_at_penetration) {
    _assertClass(colliderVel, RawVector);
    _assertClass(shape2, RawShape);
    _assertClass(shape2Pos, RawVector);
    _assertClass(shape2Rot, RawRotation);
    _assertClass(shape2Vel, RawVector);
    const ret = rawcolliderset_coCastShape(this.ptr, handle, colliderVel.ptr, shape2.ptr, shape2Pos.ptr, shape2Rot.ptr, shape2Vel.ptr, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeTOI.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} collider1Vel
  * @param {number} collider2handle
  * @param {RawVector} collider2Vel
  * @param {number} max_toi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeColliderTOI | undefined}
  */
  coCastCollider(handle, collider1Vel, collider2handle, collider2Vel, max_toi, stop_at_penetration) {
    _assertClass(collider1Vel, RawVector);
    _assertClass(collider2Vel, RawVector);
    const ret = rawcolliderset_coCastCollider(this.ptr, handle, collider1Vel.ptr, collider2handle, collider2Vel.ptr, max_toi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeColliderTOI.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  coIntersectsShape(handle, shape2, shapePos2, shapeRot2) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = rawcolliderset_coIntersectsShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactShape(handle, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = rawcolliderset_coContactShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {number} collider2handle
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactCollider(handle, collider2handle, prediction) {
    const ret = rawcolliderset_coContactCollider(this.ptr, handle, collider2handle, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  coProjectPoint(handle, point, solid) {
    _assertClass(point, RawVector);
    const ret = rawcolliderset_coProjectPoint(this.ptr, handle, point.ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawcolliderset_coIntersectsRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawcolliderset_coCastRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  coCastRayAndGetNormal(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawcolliderset_coCastRayAndGetNormal(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {boolean} is_sensor
  */
  coSetSensor(handle, is_sensor) {
    rawcolliderset_coSetSensor(this.ptr, handle, is_sensor);
  }
  /**
  * @param {number} handle
  * @param {number} restitution
  */
  coSetRestitution(handle, restitution) {
    rawcolliderset_coSetRestitution(this.ptr, handle, restitution);
  }
  /**
  * @param {number} handle
  * @param {number} friction
  */
  coSetFriction(handle, friction) {
    rawcolliderset_coSetFriction(this.ptr, handle, friction);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coFrictionCombineRule(handle) {
    const ret = rawcolliderset_coFrictionCombineRule(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetFrictionCombineRule(handle, rule) {
    rawcolliderset_coSetFrictionCombineRule(this.ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coRestitutionCombineRule(handle) {
    const ret = rawcolliderset_coRestitutionCombineRule(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetRestitutionCombineRule(handle, rule) {
    rawcolliderset_coSetRestitutionCombineRule(this.ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetCollisionGroups(handle, groups) {
    rawcolliderset_coSetCollisionGroups(this.ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetSolverGroups(handle, groups) {
    rawcolliderset_coSetSolverGroups(this.ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} hooks
  */
  coSetActiveHooks(handle, hooks) {
    rawcolliderset_coSetActiveHooks(this.ptr, handle, hooks);
  }
  /**
  * @param {number} handle
  * @param {number} events
  */
  coSetActiveEvents(handle, events) {
    rawcolliderset_coSetActiveEvents(this.ptr, handle, events);
  }
  /**
  * @param {number} handle
  * @param {number} types
  */
  coSetActiveCollisionTypes(handle, types) {
    rawcolliderset_coSetActiveCollisionTypes(this.ptr, handle, types);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape
  */
  coSetShape(handle, shape) {
    _assertClass(shape, RawShape);
    rawcolliderset_coSetShape(this.ptr, handle, shape.ptr);
  }
  /**
  * @param {number} handle
  * @param {number} threshold
  */
  coSetContactForceEventThreshold(handle, threshold) {
    rawcolliderset_coSetContactForceEventThreshold(this.ptr, handle, threshold);
  }
  /**
  * @param {number} handle
  * @param {number} density
  */
  coSetDensity(handle, density) {
    rawcolliderset_coSetDensity(this.ptr, handle, density);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  */
  coSetMass(handle, mass) {
    rawcolliderset_coSetMass(this.ptr, handle, mass);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  */
  coSetMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame) {
    _assertClass(centerOfMass, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    rawcolliderset_coSetMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr);
  }
  /**
  */
  constructor() {
    const ret = rawcolliderset_new();
    return _RawColliderSet.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = rawcolliderset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = rawcolliderset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  * @param {RawShape} shape
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} massPropsMode
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {number} density
  * @param {number} friction
  * @param {number} restitution
  * @param {number} frictionCombineRule
  * @param {number} restitutionCombineRule
  * @param {boolean} isSensor
  * @param {number} collisionGroups
  * @param {number} solverGroups
  * @param {number} activeCollisionTypes
  * @param {number} activeHooks
  * @param {number} activeEvents
  * @param {number} contactForceEventThreshold
  * @param {boolean} hasParent
  * @param {number} parent
  * @param {RawRigidBodySet} bodies
  * @returns {number | undefined}
  */
  createCollider(enabled, shape, translation, rotation, massPropsMode, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      _assertClass(shape, RawShape);
      _assertClass(translation, RawVector);
      _assertClass(rotation, RawRotation);
      _assertClass(centerOfMass, RawVector);
      _assertClass(principalAngularInertia, RawVector);
      _assertClass(angularInertiaFrame, RawRotation);
      _assertClass(bodies, RawRigidBodySet);
      rawcolliderset_createCollider(retptr, this.ptr, enabled, shape.ptr, translation.ptr, rotation.ptr, massPropsMode, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Removes a collider from this set and wake-up the rigid-body it is attached to.
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawRigidBodySet} bodies
  * @param {boolean} wakeUp
  */
  remove(handle, islands, bodies, wakeUp) {
    _assertClass(islands, RawIslandManager);
    _assertClass(bodies, RawRigidBodySet);
    rawcolliderset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
  }
  /**
  * Checks if a collider with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  isHandleValid(handle) {
    const ret = rawcolliderset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
  * @param {Function} f
  */
  forEachColliderHandle(f) {
    try {
      rawcolliderset_forEachColliderHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawContactForceEvent = class _RawContactForceEvent {
  static __wrap(ptr) {
    const obj = Object.create(_RawContactForceEvent.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawcontactforceevent_free(ptr);
  }
  /**
  * The first collider involved in the contact.
  * @returns {number}
  */
  collider1() {
    const ret = rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * The second collider involved in the contact.
  * @returns {number}
  */
  collider2() {
    const ret = rawcontactforceevent_collider2(this.ptr);
    return ret;
  }
  /**
  * The sum of all the forces between the two colliders.
  * @returns {RawVector}
  */
  total_force() {
    const ret = rawcontactforceevent_total_force(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * The sum of the magnitudes of each force between the two colliders.
  *
  * Note that this is **not** the same as the magnitude of `self.total_force`.
  * Here we are summing the magnitude of all the forces, instead of taking
  * the magnitude of their sum.
  * @returns {number}
  */
  total_force_magnitude() {
    const ret = rawcontactforceevent_total_force_magnitude(this.ptr);
    return ret;
  }
  /**
  * The world-space (unit) direction of the force with strongest magnitude.
  * @returns {RawVector}
  */
  max_force_direction() {
    const ret = rawcontactforceevent_max_force_direction(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * The magnitude of the largest force at a contact point of this contact pair.
  * @returns {number}
  */
  max_force_magnitude() {
    const ret = rawcontactforceevent_max_force_magnitude(this.ptr);
    return ret;
  }
};
var RawContactManifold = class _RawContactManifold {
  static __wrap(ptr) {
    const obj = Object.create(_RawContactManifold.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawcontactmanifold_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = rawcontactmanifold_normal(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n1() {
    const ret = rawcontactmanifold_local_n1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n2() {
    const ret = rawcontactmanifold_local_n2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  subshape1() {
    const ret = rawcontactmanifold_subshape1(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  subshape2() {
    const ret = rawcontactmanifold_subshape2(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  num_contacts() {
    const ret = rawcontactmanifold_num_contacts(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p1(i) {
    const ret = rawcontactmanifold_contact_local_p1(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p2(i) {
    const ret = rawcontactmanifold_contact_local_p2(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_dist(i) {
    const ret = rawcontactmanifold_contact_dist(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid1(i) {
    const ret = rawcontactmanifold_contact_fid1(this.ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid2(i) {
    const ret = rawcontactmanifold_contact_fid2(this.ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_impulse(i) {
    const ret = rawcontactmanifold_contact_impulse(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_tangent_impulse_x(i) {
    const ret = rawcontactmanifold_contact_tangent_impulse_x(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_tangent_impulse_y(i) {
    const ret = rawcontactmanifold_contact_tangent_impulse_y(this.ptr, i);
    return ret;
  }
  /**
  * @returns {number}
  */
  num_solver_contacts() {
    const ret = rawcontactmanifold_num_solver_contacts(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  solver_contact_point(i) {
    const ret = rawcontactmanifold_solver_contact_point(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_dist(i) {
    const ret = rawcontactmanifold_solver_contact_dist(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_friction(i) {
    const ret = rawcontactmanifold_solver_contact_friction(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_restitution(i) {
    const ret = rawcontactmanifold_solver_contact_restitution(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {RawVector}
  */
  solver_contact_tangent_velocity(i) {
    const ret = rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, i);
    return RawVector.__wrap(ret);
  }
};
var RawContactPair = class _RawContactPair {
  static __wrap(ptr) {
    const obj = Object.create(_RawContactPair.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawcontactpair_free(ptr);
  }
  /**
  * @returns {number}
  */
  collider1() {
    const ret = rawcontactpair_collider1(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  collider2() {
    const ret = rawcontactpair_collider2(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  numContactManifolds() {
    const ret = rawcontactpair_numContactManifolds(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawContactManifold | undefined}
  */
  contactManifold(i) {
    const ret = rawcontactpair_contactManifold(this.ptr, i);
    return ret === 0 ? void 0 : RawContactManifold.__wrap(ret);
  }
};
var RawDebugRenderPipeline = class _RawDebugRenderPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawDebugRenderPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawdebugrenderpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawdebugrenderpipeline_new();
    return _RawDebugRenderPipeline.__wrap(ret);
  }
  /**
  * @returns {Float32Array}
  */
  vertices() {
    const ret = rawdebugrenderpipeline_vertices(this.ptr);
    return takeObject(ret);
  }
  /**
  * @returns {Float32Array}
  */
  colors() {
    const ret = rawdebugrenderpipeline_colors(this.ptr);
    return takeObject(ret);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @param {RawNarrowPhase} narrow_phase
  */
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    _assertClass(narrow_phase, RawNarrowPhase);
    rawdebugrenderpipeline_render(this.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr, narrow_phase.ptr);
  }
};
var RawDeserializedWorld = class _RawDeserializedWorld {
  static __wrap(ptr) {
    const obj = Object.create(_RawDeserializedWorld.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawdeserializedworld_free(ptr);
  }
  /**
  * @returns {RawVector | undefined}
  */
  takeGravity() {
    const ret = rawdeserializedworld_takeGravity(this.ptr);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @returns {RawIntegrationParameters | undefined}
  */
  takeIntegrationParameters() {
    const ret = rawdeserializedworld_takeIntegrationParameters(this.ptr);
    return ret === 0 ? void 0 : RawIntegrationParameters.__wrap(ret);
  }
  /**
  * @returns {RawIslandManager | undefined}
  */
  takeIslandManager() {
    const ret = rawdeserializedworld_takeIslandManager(this.ptr);
    return ret === 0 ? void 0 : RawIslandManager.__wrap(ret);
  }
  /**
  * @returns {RawBroadPhase | undefined}
  */
  takeBroadPhase() {
    const ret = rawdeserializedworld_takeBroadPhase(this.ptr);
    return ret === 0 ? void 0 : RawBroadPhase.__wrap(ret);
  }
  /**
  * @returns {RawNarrowPhase | undefined}
  */
  takeNarrowPhase() {
    const ret = rawdeserializedworld_takeNarrowPhase(this.ptr);
    return ret === 0 ? void 0 : RawNarrowPhase.__wrap(ret);
  }
  /**
  * @returns {RawRigidBodySet | undefined}
  */
  takeBodies() {
    const ret = rawdeserializedworld_takeBodies(this.ptr);
    return ret === 0 ? void 0 : RawRigidBodySet.__wrap(ret);
  }
  /**
  * @returns {RawColliderSet | undefined}
  */
  takeColliders() {
    const ret = rawdeserializedworld_takeColliders(this.ptr);
    return ret === 0 ? void 0 : RawColliderSet.__wrap(ret);
  }
  /**
  * @returns {RawImpulseJointSet | undefined}
  */
  takeImpulseJoints() {
    const ret = rawdeserializedworld_takeImpulseJoints(this.ptr);
    return ret === 0 ? void 0 : RawImpulseJointSet.__wrap(ret);
  }
  /**
  * @returns {RawMultibodyJointSet | undefined}
  */
  takeMultibodyJoints() {
    const ret = rawdeserializedworld_takeMultibodyJoints(this.ptr);
    return ret === 0 ? void 0 : RawMultibodyJointSet.__wrap(ret);
  }
};
var RawEventQueue = class _RawEventQueue {
  static __wrap(ptr) {
    const obj = Object.create(_RawEventQueue.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_raweventqueue_free(ptr);
  }
  /**
  * Creates a new event collector.
  *
  * # Parameters
  * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
  * be automatically drained before each `world.step(collector)`. If false, the collector will
  * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
  * RAM if no drain is performed.
  * @param {boolean} autoDrain
  */
  constructor(autoDrain) {
    const ret = raweventqueue_new(autoDrain);
    return _RawEventQueue.__wrap(ret);
  }
  /**
  * Applies the given javascript closure on each collision event of this collector, then clear
  * the internal collision event buffer.
  *
  * # Parameters
  * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
  * closure should take three arguments: two integers representing the handles of the colliders
  * involved in the collision, and a boolean indicating if the collision started (true) or stopped
  * (false).
  * @param {Function} f
  */
  drainCollisionEvents(f) {
    try {
      raweventqueue_drainCollisionEvents(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {Function} f
  */
  drainContactForceEvents(f) {
    try {
      raweventqueue_drainContactForceEvents(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Removes all events contained by this collector.
  */
  clear() {
    raweventqueue_clear(this.ptr);
  }
};
var RawGenericJoint = class _RawGenericJoint {
  static __wrap(ptr) {
    const obj = Object.create(_RawGenericJoint.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawgenericjoint_free(ptr);
  }
  /**
  * Create a new joint descriptor that builds spehrical joints.
  *
  * A spherical joints allows three relative rotational degrees of freedom
  * by preventing any relative translation between the anchors of the
  * two attached rigid-bodies.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @returns {RawGenericJoint}
  */
  static spherical(anchor1, anchor2) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    const ret = rawgenericjoint_spherical(anchor1.ptr, anchor2.ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Prismatic joint.
  *
  * A prismatic joint removes all the degrees of freedom between the
  * affected bodies, except for the translation along one axis.
  *
  * Returns `None` if any of the provided axes cannot be normalized.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @param {RawVector} axis
  * @param {boolean} limitsEnabled
  * @param {number} limitsMin
  * @param {number} limitsMax
  * @returns {RawGenericJoint | undefined}
  */
  static prismatic(anchor1, anchor2, axis, limitsEnabled, limitsMin, limitsMax) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    _assertClass(axis, RawVector);
    const ret = rawgenericjoint_prismatic(anchor1.ptr, anchor2.ptr, axis.ptr, limitsEnabled, limitsMin, limitsMax);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Fixed joint.
  *
  * A fixed joint removes all the degrees of freedom between the affected bodies.
  * @param {RawVector} anchor1
  * @param {RawRotation} axes1
  * @param {RawVector} anchor2
  * @param {RawRotation} axes2
  * @returns {RawGenericJoint}
  */
  static fixed(anchor1, axes1, anchor2, axes2) {
    _assertClass(anchor1, RawVector);
    _assertClass(axes1, RawRotation);
    _assertClass(anchor2, RawVector);
    _assertClass(axes2, RawRotation);
    const ret = rawgenericjoint_fixed(anchor1.ptr, axes1.ptr, anchor2.ptr, axes2.ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Create a new joint descriptor that builds Revolute joints.
  *
  * A revolute joint removes all degrees of freedom between the affected
  * bodies except for the rotation along one axis.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @param {RawVector} axis
  * @returns {RawGenericJoint | undefined}
  */
  static revolute(anchor1, anchor2, axis) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    _assertClass(axis, RawVector);
    const ret = rawgenericjoint_revolute(anchor1.ptr, anchor2.ptr, axis.ptr);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
};
var RawImpulseJointSet = class _RawImpulseJointSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawImpulseJointSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawimpulsejointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {number}
  */
  jointType(handle) {
    const ret = rawimpulsejointset_jointType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The unique integer identifier of the first rigid-body this joint it attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle1(handle) {
    const ret = rawimpulsejointset_jointBodyHandle1(this.ptr, handle);
    return ret;
  }
  /**
  * The unique integer identifier of the second rigid-body this joint is attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle2(handle) {
    const ret = rawimpulsejointset_jointBodyHandle2(this.ptr, handle);
    return ret;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = rawimpulsejointset_jointFrameX1(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = rawimpulsejointset_jointFrameX2(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = rawimpulsejointset_jointAnchor1(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = rawimpulsejointset_jointAnchor2(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Sets the position of the first local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor1(handle, newPos) {
    _assertClass(newPos, RawVector);
    rawimpulsejointset_jointSetAnchor1(this.ptr, handle, newPos.ptr);
  }
  /**
  * Sets the position of the second local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor2(handle, newPos) {
    _assertClass(newPos, RawVector);
    rawimpulsejointset_jointSetAnchor2(this.ptr, handle, newPos.ptr);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = rawimpulsejointset_jointContactsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    rawimpulsejointset_jointSetContactsEnabled(this.ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {number} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = rawimpulsejointset_jointLimitsEnabled(this.ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = rawimpulsejointset_jointLimitsMin(this.ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = rawimpulsejointset_jointLimitsMax(this.ptr, handle, axis);
    return ret;
  }
  /**
  * Enables and sets the joint limits
  * @param {number} handle
  * @param {number} axis
  * @param {number} min
  * @param {number} max
  */
  jointSetLimits(handle, axis, min, max) {
    rawimpulsejointset_jointSetLimits(this.ptr, handle, axis, min, max);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} model
  */
  jointConfigureMotorModel(handle, axis, model) {
    rawimpulsejointset_jointConfigureMotorModel(this.ptr, handle, axis, model);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetVel
  * @param {number} factor
  */
  jointConfigureMotorVelocity(handle, axis, targetVel, factor) {
    rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, handle, axis, targetVel, factor);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetPos
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotorPosition(handle, axis, targetPos, stiffness, damping) {
    rawimpulsejointset_jointConfigureMotorPosition(this.ptr, handle, axis, targetPos, stiffness, damping);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetPos
  * @param {number} targetVel
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotor(handle, axis, targetPos, targetVel, stiffness, damping) {
    rawimpulsejointset_jointConfigureMotor(this.ptr, handle, axis, targetPos, targetVel, stiffness, damping);
  }
  /**
  */
  constructor() {
    const ret = rawimpulsejointset_new();
    return _RawImpulseJointSet.__wrap(ret);
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wake_up
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wake_up) {
    _assertClass(params, RawGenericJoint);
    const ret = rawimpulsejointset_createJoint(this.ptr, params.ptr, parent1, parent2, wake_up);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    rawimpulsejointset_remove(this.ptr, handle, wakeUp);
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = rawimpulsejointset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = rawimpulsejointset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      rawimpulsejointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawIntegrationParameters = class _RawIntegrationParameters {
  static __wrap(ptr) {
    const obj = Object.create(_RawIntegrationParameters.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawintegrationparameters_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawintegrationparameters_new();
    return _RawIntegrationParameters.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  get dt() {
    const ret = rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get erp() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get allowedLinearError() {
    const ret = rawintegrationparameters_allowedLinearError(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get predictionDistance() {
    const ret = rawintegrationparameters_predictionDistance(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get maxVelocityIterations() {
    const ret = rawintegrationparameters_maxVelocityIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxVelocityFrictionIterations() {
    const ret = rawintegrationparameters_maxVelocityFrictionIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxStabilizationIterations() {
    const ret = rawintegrationparameters_maxStabilizationIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get minIslandSize() {
    const ret = rawintegrationparameters_minIslandSize(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxCcdSubsteps() {
    const ret = rawintegrationparameters_maxCcdSubsteps(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} value
  */
  set dt(value) {
    rawintegrationparameters_set_dt(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set erp(value) {
    rawintegrationparameters_set_erp(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set allowedLinearError(value) {
    rawintegrationparameters_set_allowedLinearError(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set predictionDistance(value) {
    rawintegrationparameters_set_predictionDistance(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxVelocityIterations(value) {
    rawintegrationparameters_set_maxVelocityIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxVelocityFrictionIterations(value) {
    rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxStabilizationIterations(value) {
    rawintegrationparameters_set_maxStabilizationIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set minIslandSize(value) {
    rawintegrationparameters_set_minIslandSize(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxCcdSubsteps(value) {
    rawintegrationparameters_set_maxCcdSubsteps(this.ptr, value);
  }
};
var RawIslandManager = class _RawIslandManager {
  static __wrap(ptr) {
    const obj = Object.create(_RawIslandManager.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawislandmanager_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawislandmanager_new();
    return _RawIslandManager.__wrap(ret);
  }
  /**
  * Applies the given JavaScript function to the integer handle of each active rigid-body
  * managed by this island manager.
  *
  * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
  * the physics engine in order to save computational power. A sleeping rigid-body never moves
  * unless it is moved manually by the user.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
  *   set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachActiveRigidBodyHandle(f) {
    try {
      rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawKinematicCharacterController = class _RawKinematicCharacterController {
  static __wrap(ptr) {
    const obj = Object.create(_RawKinematicCharacterController.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawkinematiccharactercontroller_free(ptr);
  }
  /**
  * @param {number} offset
  */
  constructor(offset) {
    const ret = rawkinematiccharactercontroller_new(offset);
    return _RawKinematicCharacterController.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  up() {
    const ret = rawkinematiccharactercontroller_up(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @param {RawVector} vector
  */
  setUp(vector) {
    _assertClass(vector, RawVector);
    rawkinematiccharactercontroller_setUp(this.ptr, vector.ptr);
  }
  /**
  * @returns {number}
  */
  offset() {
    const ret = rawkinematiccharactercontroller_offset(this.ptr);
    return ret;
  }
  /**
  * @param {number} value
  */
  setOffset(value) {
    rawkinematiccharactercontroller_setOffset(this.ptr, value);
  }
  /**
  * @returns {boolean}
  */
  slideEnabled() {
    const ret = rawkinematiccharactercontroller_slideEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  */
  setSlideEnabled(enabled) {
    rawkinematiccharactercontroller_setSlideEnabled(this.ptr, enabled);
  }
  /**
  * @returns {number | undefined}
  */
  autostepMaxHeight() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawkinematiccharactercontroller_autostepMaxHeight(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {number | undefined}
  */
  autostepMinWidth() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawkinematiccharactercontroller_autostepMinWidth(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {boolean | undefined}
  */
  autostepIncludesDynamicBodies() {
    const ret = rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
    return ret === 16777215 ? void 0 : ret !== 0;
  }
  /**
  * @returns {boolean}
  */
  autostepEnabled() {
    const ret = rawkinematiccharactercontroller_autostepEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} maxHeight
  * @param {number} minWidth
  * @param {boolean} includeDynamicBodies
  */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    rawkinematiccharactercontroller_enableAutostep(this.ptr, maxHeight, minWidth, includeDynamicBodies);
  }
  /**
  */
  disableAutostep() {
    rawkinematiccharactercontroller_disableAutostep(this.ptr);
  }
  /**
  * @returns {number}
  */
  maxSlopeClimbAngle() {
    const ret = rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMaxSlopeClimbAngle(angle2) {
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, angle2);
  }
  /**
  * @returns {number}
  */
  minSlopeSlideAngle() {
    const ret = rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMinSlopeSlideAngle(angle2) {
    rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, angle2);
  }
  /**
  * @returns {number | undefined}
  */
  snapToGroundDistance() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawkinematiccharactercontroller_snapToGroundDistance(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} distance
  */
  enableSnapToGround(distance3) {
    rawkinematiccharactercontroller_enableSnapToGround(this.ptr, distance3);
  }
  /**
  */
  disableSnapToGround() {
    rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
  }
  /**
  * @returns {boolean}
  */
  snapToGroundEnabled() {
    const ret = rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} dt
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawQueryPipeline} queries
  * @param {number} collider_handle
  * @param {RawVector} desired_translation
  * @param {boolean} apply_impulses_to_dynamic_bodies
  * @param {number | undefined} character_mass
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {Function} filter_predicate
  */
  computeColliderMovement(dt, bodies, colliders, queries, collider_handle, desired_translation, apply_impulses_to_dynamic_bodies, character_mass, filter_flags, filter_groups, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(queries, RawQueryPipeline);
      _assertClass(desired_translation, RawVector);
      rawkinematiccharactercontroller_computeColliderMovement(this.ptr, dt, bodies.ptr, colliders.ptr, queries.ptr, collider_handle, desired_translation.ptr, apply_impulses_to_dynamic_bodies, !isLikeNone(character_mass), isLikeNone(character_mass) ? 0 : character_mass, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @returns {RawVector}
  */
  computedMovement() {
    const ret = rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  computedGrounded() {
    const ret = rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
  /**
  * @returns {number}
  */
  numComputedCollisions() {
    const ret = rawkinematiccharactercontroller_numComputedCollisions(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @param {RawCharacterCollision} collision
  * @returns {boolean}
  */
  computedCollision(i, collision) {
    _assertClass(collision, RawCharacterCollision);
    const ret = rawkinematiccharactercontroller_computedCollision(this.ptr, i, collision.ptr);
    return ret !== 0;
  }
};
var RawMultibodyJointSet = class _RawMultibodyJointSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawMultibodyJointSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawmultibodyjointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {number}
  */
  jointType(handle) {
    const ret = rawmultibodyjointset_jointType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = rawmultibodyjointset_jointFrameX1(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = rawmultibodyjointset_jointFrameX2(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = rawmultibodyjointset_jointAnchor1(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = rawmultibodyjointset_jointAnchor2(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = rawmultibodyjointset_jointContactsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    rawmultibodyjointset_jointSetContactsEnabled(this.ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {number} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = rawmultibodyjointset_jointLimitsEnabled(this.ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = rawmultibodyjointset_jointLimitsMin(this.ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = rawmultibodyjointset_jointLimitsMax(this.ptr, handle, axis);
    return ret;
  }
  /**
  */
  constructor() {
    const ret = rawmultibodyjointset_new();
    return _RawMultibodyJointSet.__wrap(ret);
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wakeUp
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wakeUp) {
    _assertClass(params, RawGenericJoint);
    const ret = rawmultibodyjointset_createJoint(this.ptr, params.ptr, parent1, parent2, wakeUp);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    rawmultibodyjointset_remove(this.ptr, handle, wakeUp);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = rawmultibodyjointset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      rawmultibodyjointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawNarrowPhase = class _RawNarrowPhase {
  static __wrap(ptr) {
    const obj = Object.create(_RawNarrowPhase.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawnarrowphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawnarrowphase_new();
    return _RawNarrowPhase.__wrap(ret);
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  contacts_with(handle1, f) {
    rawnarrowphase_contacts_with(this.ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {RawContactPair | undefined}
  */
  contact_pair(handle1, handle2) {
    const ret = rawnarrowphase_contact_pair(this.ptr, handle1, handle2);
    return ret === 0 ? void 0 : RawContactPair.__wrap(ret);
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  intersections_with(handle1, f) {
    rawnarrowphase_intersections_with(this.ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {boolean}
  */
  intersection_pair(handle1, handle2) {
    const ret = rawnarrowphase_intersection_pair(this.ptr, handle1, handle2);
    return ret !== 0;
  }
};
var RawPhysicsPipeline = class _RawPhysicsPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawPhysicsPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawphysicspipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawphysicspipeline_new();
    return _RawPhysicsPipeline.__wrap(ret);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  */
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    rawphysicspipeline_step(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  * @param {RawEventQueue} eventQueue
  * @param {object} hookObject
  * @param {Function} hookFilterContactPair
  * @param {Function} hookFilterIntersectionPair
  */
  stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    _assertClass(eventQueue, RawEventQueue);
    rawphysicspipeline_stepWithEvents(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr, eventQueue.ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
  }
};
var RawPointColliderProjection = class _RawPointColliderProjection {
  static __wrap(ptr) {
    const obj = Object.create(_RawPointColliderProjection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawpointcolliderprojection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = rawpointcolliderprojection_colliderHandle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = rawpointcolliderprojection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawpointcolliderprojection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawPointProjection = class _RawPointProjection {
  static __wrap(ptr) {
    const obj = Object.create(_RawPointProjection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawpointprojection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
};
var RawQueryPipeline = class _RawQueryPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawQueryPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawquerypipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawquerypipeline_new();
    return _RawQueryPipeline.__wrap(ret);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  */
  update(bodies, colliders) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    rawquerypipeline_update(this.ptr, bodies.ptr, colliders.ptr);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderToi | undefined}
  */
  castRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = rawquerypipeline_castRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderToi.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderIntersection | undefined}
  */
  castRayAndGetNormal(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = rawquerypipeline_castRayAndGetNormal(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderIntersection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      rawquerypipeline_intersectionsWithRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {number | undefined}
  */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      rawquerypipeline_intersectionWithShape(retptr, this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPoint(bodies, colliders, point, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = rawquerypipeline_projectPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPointAndGetFeature(bodies, colliders, point, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = rawquerypipeline_projectPointAndGetFeature(this.ptr, bodies.ptr, colliders.ptr, point.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithPoint(bodies, colliders, point, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      rawquerypipeline_intersectionsWithPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} shapeVel
  * @param {RawShape} shape
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawShapeColliderTOI | undefined}
  */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stop_at_penetration, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shapeVel, RawVector);
      _assertClass(shape, RawShape);
      const ret = rawquerypipeline_castShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shapeVel.ptr, shape.ptr, maxToi, stop_at_penetration, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawShapeColliderTOI.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      rawquerypipeline_intersectionsWithShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawVector} aabbCenter
  * @param {RawVector} aabbHalfExtents
  * @param {Function} callback
  */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    try {
      _assertClass(aabbCenter, RawVector);
      _assertClass(aabbHalfExtents, RawVector);
      rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, aabbCenter.ptr, aabbHalfExtents.ptr, addBorrowedObject(callback));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawRayColliderIntersection = class _RawRayColliderIntersection {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayColliderIntersection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawraycolliderintersection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = rawraycolliderintersection_normal(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawraycolliderintersection_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = rawraycolliderintersection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawraycolliderintersection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRayColliderToi = class _RawRayColliderToi {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayColliderToi.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawraycollidertoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
};
var RawRayIntersection = class _RawRayIntersection {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayIntersection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawrayintersection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = rawrayintersection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = __wbindgen_add_to_stack_pointer(-16);
      rawrayintersection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      __wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRigidBodySet = class _RawRigidBodySet {
  static __wrap(ptr) {
    const obj = Object.create(_RawRigidBodySet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawrigidbodyset_free(ptr);
  }
  /**
  * The world-space translation of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbTranslation(handle) {
    const ret = rawrigidbodyset_rbTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this rigid-body.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbRotation(handle) {
    const ret = rawrigidbodyset_rbRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Put the given rigid-body to sleep.
  * @param {number} handle
  */
  rbSleep(handle) {
    rawrigidbodyset_rbSleep(this.ptr, handle);
  }
  /**
  * Is this rigid-body sleeping?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsSleeping(handle) {
    const ret = rawrigidbodyset_rbIsSleeping(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is the velocity of this rigid-body not zero?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsMoving(handle) {
    const ret = rawrigidbodyset_rbIsMoving(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The world-space predicted translation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbNextTranslation(handle) {
    const ret = rawrigidbodyset_rbNextTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space predicted orientation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbNextRotation(handle) {
    const ret = rawrigidbodyset_rbNextRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this rigid-body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * - `z`: the world-space position of the rigid-body along the `z` axis.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {boolean} wakeUp
  */
  rbSetTranslation(handle, x, y, z, wakeUp) {
    rawrigidbodyset_rbSetTranslation(this.ptr, handle, x, y, z, wakeUp);
  }
  /**
  * Sets the rotation quaternion of this rigid-body.
  *
  * This does nothing if a zero quaternion is provided.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  * @param {boolean} wakeUp
  */
  rbSetRotation(handle, x, y, z, w, wakeUp) {
    rawrigidbodyset_rbSetRotation(this.ptr, handle, x, y, z, w, wakeUp);
  }
  /**
  * Sets the linear velocity of this rigid-body.
  * @param {number} handle
  * @param {RawVector} linvel
  * @param {boolean} wakeUp
  */
  rbSetLinvel(handle, linvel, wakeUp) {
    _assertClass(linvel, RawVector);
    rawrigidbodyset_rbSetLinvel(this.ptr, handle, linvel.ptr, wakeUp);
  }
  /**
  * Sets the angular velocity of this rigid-body.
  * @param {number} handle
  * @param {RawVector} angvel
  * @param {boolean} wakeUp
  */
  rbSetAngvel(handle, angvel, wakeUp) {
    _assertClass(angvel, RawVector);
    rawrigidbodyset_rbSetAngvel(this.ptr, handle, angvel.ptr, wakeUp);
  }
  /**
  * If this rigid body is kinematic, sets its future translation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * - `z`: the world-space position of the rigid-body along the `z` axis.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  rbSetNextKinematicTranslation(handle, x, y, z) {
    rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, handle, x, y, z);
  }
  /**
  * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setRotation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  rbSetNextKinematicRotation(handle, x, y, z, w) {
    rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, handle, x, y, z, w);
  }
  /**
  * @param {number} handle
  * @param {RawColliderSet} colliders
  */
  rbRecomputeMassPropertiesFromColliders(handle, colliders) {
    _assertClass(colliders, RawColliderSet);
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, handle, colliders.ptr);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {boolean} wake_up
  */
  rbSetAdditionalMass(handle, mass, wake_up) {
    rawrigidbodyset_rbSetAdditionalMass(this.ptr, handle, mass, wake_up);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {boolean} wake_up
  */
  rbSetAdditionalMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, wake_up) {
    _assertClass(centerOfMass, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, wake_up);
  }
  /**
  * The linear velocity of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLinvel(handle) {
    const ret = rawrigidbodyset_rbLinvel(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The angular velocity of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbAngvel(handle) {
    const ret = rawrigidbodyset_rbAngvel(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockTranslations(handle, locked, wake_up) {
    rawrigidbodyset_rbLockTranslations(this.ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} allow_x
  * @param {boolean} allow_y
  * @param {boolean} allow_z
  * @param {boolean} wake_up
  */
  rbSetEnabledTranslations(handle, allow_x, allow_y, allow_z, wake_up) {
    rawrigidbodyset_rbSetEnabledTranslations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockRotations(handle, locked, wake_up) {
    rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} allow_x
  * @param {boolean} allow_y
  * @param {boolean} allow_z
  * @param {boolean} wake_up
  */
  rbSetEnabledRotations(handle, allow_x, allow_y, allow_z, wake_up) {
    rawrigidbodyset_rbSetEnabledRotations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbDominanceGroup(handle) {
    const ret = rawrigidbodyset_rbDominanceGroup(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} group
  */
  rbSetDominanceGroup(handle, group) {
    rawrigidbodyset_rbSetDominanceGroup(this.ptr, handle, group);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbEnableCcd(handle, enabled) {
    rawrigidbodyset_rbEnableCcd(this.ptr, handle, enabled);
  }
  /**
  * The mass of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbMass(handle) {
    const ret = rawrigidbodyset_rbMass(this.ptr, handle);
    return ret;
  }
  /**
  * The inverse of the mass of a rigid-body.
  *
  * If this is zero, the rigid-body is assumed to have infinite mass.
  * @param {number} handle
  * @returns {number}
  */
  rbInvMass(handle) {
    const ret = rawrigidbodyset_rbInvMass(this.ptr, handle);
    return ret;
  }
  /**
  * The inverse mass taking into account translation locking.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbEffectiveInvMass(handle) {
    const ret = rawrigidbodyset_rbEffectiveInvMass(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The center of mass of a rigid-body expressed in its local-space.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLocalCom(handle) {
    const ret = rawrigidbodyset_rbLocalCom(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space center of mass of the rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbWorldCom(handle) {
    const ret = rawrigidbodyset_rbWorldCom(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The inverse of the principal angular inertia of the rigid-body.
  *
  * Components set to zero are assumed to be infinite along the corresponding principal axis.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbInvPrincipalInertiaSqrt(handle) {
    const ret = rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The principal vectors of the local angular inertia tensor of the rigid-body.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbPrincipalInertiaLocalFrame(handle) {
    const ret = rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular inertia along the principal inertia axes of the rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbPrincipalInertia(handle) {
    const ret = rawrigidbodyset_rbPrincipalInertia(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
  * taking into account rotation locking.
  * @param {number} handle
  * @returns {RawSdpMatrix3}
  */
  rbEffectiveWorldInvInertiaSqrt(handle) {
    const ret = rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, handle);
    return RawSdpMatrix3.__wrap(ret);
  }
  /**
  * The effective world-space angular inertia (that takes the potential rotation locking into account) of
  * this rigid-body.
  * @param {number} handle
  * @returns {RawSdpMatrix3}
  */
  rbEffectiveAngularInertia(handle) {
    const ret = rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, handle);
    return RawSdpMatrix3.__wrap(ret);
  }
  /**
  * Wakes this rigid-body up.
  *
  * A dynamic rigid-body that does not move during several consecutive frames will
  * be put to sleep by the physics engine, i.e., it will stop being simulated in order
  * to avoid useless computations.
  * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
  * the position of a dynamic body so that it is properly simulated afterwards.
  * @param {number} handle
  */
  rbWakeUp(handle) {
    rawrigidbodyset_rbWakeUp(this.ptr, handle);
  }
  /**
  * Is Continuous Collision Detection enabled for this rigid-body?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsCcdEnabled(handle) {
    const ret = rawrigidbodyset_rbIsCcdEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The number of colliders attached to this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbNumColliders(handle) {
    const ret = rawrigidbodyset_rbNumColliders(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Retrieves the `i-th` collider attached to this rigid-body.
  *
  * # Parameters
  * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
  *         This index is **not** the same as the unique identifier of the collider.
  * @param {number} handle
  * @param {number} at
  * @returns {number}
  */
  rbCollider(handle, at) {
    const ret = rawrigidbodyset_rbCollider(this.ptr, handle, at);
    return ret;
  }
  /**
  * The status of this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @returns {number}
  */
  rbBodyType(handle) {
    const ret = rawrigidbodyset_rbBodyType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @param {number} status
  * @param {boolean} wake_up
  */
  rbSetBodyType(handle, status, wake_up) {
    rawrigidbodyset_rbSetBodyType(this.ptr, handle, status, wake_up);
  }
  /**
  * Is this rigid-body fixed?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsFixed(handle) {
    const ret = rawrigidbodyset_rbIsFixed(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body kinematic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsKinematic(handle) {
    const ret = rawrigidbodyset_rbIsKinematic(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body dynamic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsDynamic(handle) {
    const ret = rawrigidbodyset_rbIsDynamic(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The linear damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbLinearDamping(handle) {
    const ret = rawrigidbodyset_rbLinearDamping(this.ptr, handle);
    return ret;
  }
  /**
  * The angular damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbAngularDamping(handle) {
    const ret = rawrigidbodyset_rbAngularDamping(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetLinearDamping(handle, factor) {
    rawrigidbodyset_rbSetLinearDamping(this.ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetAngularDamping(handle, factor) {
    rawrigidbodyset_rbSetAngularDamping(this.ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbSetEnabled(handle, enabled) {
    rawrigidbodyset_rbSetEnabled(this.ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsEnabled(handle) {
    const ret = rawrigidbodyset_rbIsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbGravityScale(handle) {
    const ret = rawrigidbodyset_rbGravityScale(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  * @param {boolean} wakeUp
  */
  rbSetGravityScale(handle, factor, wakeUp) {
    rawrigidbodyset_rbSetGravityScale(this.ptr, handle, factor, wakeUp);
  }
  /**
  * Resets to zero all user-added forces added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetForces(handle, wakeUp) {
    rawrigidbodyset_rbResetForces(this.ptr, handle, wakeUp);
  }
  /**
  * Resets to zero all user-added torques added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetTorques(handle, wakeUp) {
    rawrigidbodyset_rbResetTorques(this.ptr, handle, wakeUp);
  }
  /**
  * Adds a force at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {boolean} wakeUp
  */
  rbAddForce(handle, force, wakeUp) {
    _assertClass(force, RawVector);
    rawrigidbodyset_rbAddForce(this.ptr, handle, force.ptr, wakeUp);
  }
  /**
  * Applies an impulse at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {boolean} wakeUp
  */
  rbApplyImpulse(handle, impulse, wakeUp) {
    _assertClass(impulse, RawVector);
    rawrigidbodyset_rbApplyImpulse(this.ptr, handle, impulse.ptr, wakeUp);
  }
  /**
  * Adds a torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque`: the world-space torque to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} torque
  * @param {boolean} wakeUp
  */
  rbAddTorque(handle, torque, wakeUp) {
    _assertClass(torque, RawVector);
    rawrigidbodyset_rbAddTorque(this.ptr, handle, torque.ptr, wakeUp);
  }
  /**
  * Applies an impulsive torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque impulse`: the world-space torque impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} torque_impulse
  * @param {boolean} wakeUp
  */
  rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
    _assertClass(torque_impulse, RawVector);
    rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, handle, torque_impulse.ptr, wakeUp);
  }
  /**
  * Adds a force at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbAddForceAtPoint(handle, force, point, wakeUp) {
    _assertClass(force, RawVector);
    _assertClass(point, RawVector);
    rawrigidbodyset_rbAddForceAtPoint(this.ptr, handle, force.ptr, point.ptr, wakeUp);
  }
  /**
  * Applies an impulse at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
    _assertClass(impulse, RawVector);
    _assertClass(point, RawVector);
    rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, handle, impulse.ptr, point.ptr, wakeUp);
  }
  /**
  * An arbitrary user-defined 32-bit integer
  * @param {number} handle
  * @returns {number}
  */
  rbUserData(handle) {
    const ret = rawrigidbodyset_rbUserData(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Sets the user-defined 32-bit integer of this rigid-body.
  *
  * # Parameters
  * - `data`: an arbitrary user-defined 32-bit integer.
  * @param {number} handle
  * @param {number} data
  */
  rbSetUserData(handle, data) {
    rawrigidbodyset_rbSetUserData(this.ptr, handle, data);
  }
  /**
  */
  constructor() {
    const ret = rawrigidbodyset_new();
    return _RawRigidBodySet.__wrap(ret);
  }
  /**
  * @param {boolean} enabled
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} gravityScale
  * @param {number} mass
  * @param {boolean} massOnly
  * @param {RawVector} centerOfMass
  * @param {RawVector} linvel
  * @param {RawVector} angvel
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {boolean} translationEnabledX
  * @param {boolean} translationEnabledY
  * @param {boolean} translationEnabledZ
  * @param {boolean} rotationEnabledX
  * @param {boolean} rotationEnabledY
  * @param {boolean} rotationEnabledZ
  * @param {number} linearDamping
  * @param {number} angularDamping
  * @param {number} rb_type
  * @param {boolean} canSleep
  * @param {boolean} sleeping
  * @param {boolean} ccdEnabled
  * @param {number} dominanceGroup
  * @returns {number}
  */
  createRigidBody(enabled, translation, rotation, gravityScale, mass, massOnly, centerOfMass, linvel, angvel, principalAngularInertia, angularInertiaFrame, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup) {
    _assertClass(translation, RawVector);
    _assertClass(rotation, RawRotation);
    _assertClass(centerOfMass, RawVector);
    _assertClass(linvel, RawVector);
    _assertClass(angvel, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    const ret = rawrigidbodyset_createRigidBody(this.ptr, enabled, translation.ptr, rotation.ptr, gravityScale, mass, massOnly, centerOfMass.ptr, linvel.ptr, angvel.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  */
  remove(handle, islands, colliders, joints, articulations) {
    _assertClass(islands, RawIslandManager);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    rawrigidbodyset_remove(this.ptr, handle, islands.ptr, colliders.ptr, joints.ptr, articulations.ptr);
  }
  /**
  * The number of rigid-bodies on this set.
  * @returns {number}
  */
  len() {
    const ret = rawrigidbodyset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * Checks if a rigid-body with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = rawrigidbodyset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachRigidBodyHandle(f) {
    try {
      rawrigidbodyset_forEachRigidBodyHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawColliderSet} colliders
  */
  propagateModifiedBodyPositionsToColliders(colliders) {
    _assertClass(colliders, RawColliderSet);
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.ptr, colliders.ptr);
  }
};
var RawRotation = class _RawRotation {
  static __wrap(ptr) {
    const obj = Object.create(_RawRotation.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawrotation_free(ptr);
  }
  /**
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  constructor(x, y, z, w) {
    const ret = rawrotation_new(x, y, z, w);
    return _RawRotation.__wrap(ret);
  }
  /**
  * The identity quaternion.
  * @returns {RawRotation}
  */
  static identity() {
    const ret = rawrotation_identity();
    return _RawRotation.__wrap(ret);
  }
  /**
  * The `x` component of this quaternion.
  * @returns {number}
  */
  get x() {
    const ret = rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * The `y` component of this quaternion.
  * @returns {number}
  */
  get y() {
    const ret = rawrotation_y(this.ptr);
    return ret;
  }
  /**
  * The `z` component of this quaternion.
  * @returns {number}
  */
  get z() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * The `w` component of this quaternion.
  * @returns {number}
  */
  get w() {
    const ret = rawrotation_w(this.ptr);
    return ret;
  }
};
var RawSdpMatrix3 = class _RawSdpMatrix3 {
  static __wrap(ptr) {
    const obj = Object.create(_RawSdpMatrix3.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawsdpmatrix3_free(ptr);
  }
  /**
  * Row major list of the upper-triangular part of the symmetric matrix.
  * @returns {Float32Array}
  */
  elements() {
    const ret = rawsdpmatrix3_elements(this.ptr);
    return takeObject(ret);
  }
};
var RawSerializationPipeline = class _RawSerializationPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawSerializationPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawserializationpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = rawserializationpipeline_new();
    return _RawSerializationPipeline.__wrap(ret);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @returns {Uint8Array | undefined}
  */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulse_joints, multibody_joints) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    const ret = rawserializationpipeline_serializeAll(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr);
    return takeObject(ret);
  }
  /**
  * @param {Uint8Array} data
  * @returns {RawDeserializedWorld | undefined}
  */
  deserializeAll(data) {
    const ret = rawserializationpipeline_deserializeAll(this.ptr, addHeapObject(data));
    return ret === 0 ? void 0 : RawDeserializedWorld.__wrap(ret);
  }
};
var RawShape = class _RawShape {
  static __wrap(ptr) {
    const obj = Object.create(_RawShape.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawshape_free(ptr);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @param {number} hz
  * @returns {RawShape}
  */
  static cuboid(hx, hy, hz) {
    const ret = rawshape_cuboid(hx, hy, hz);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @param {number} hz
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCuboid(hx, hy, hz, borderRadius) {
    const ret = rawshape_roundCuboid(hx, hy, hz, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} radius
  * @returns {RawShape}
  */
  static ball(radius) {
    const ret = rawshape_ball(radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} normal
  * @returns {RawShape}
  */
  static halfspace(normal) {
    _assertClass(normal, RawVector);
    const ret = rawshape_halfspace(normal.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static capsule(halfHeight, radius) {
    const ret = rawshape_capsule(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static cylinder(halfHeight, radius) {
    const ret = rawshape_cylinder(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCylinder(halfHeight, radius, borderRadius) {
    const ret = rawshape_roundCylinder(halfHeight, radius, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static cone(halfHeight, radius) {
    const ret = rawshape_cone(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCone(halfHeight, radius, borderRadius) {
    const ret = rawshape_roundCone(halfHeight, radius, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape}
  */
  static polyline(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, __wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = rawshape_polyline(ptr0, len0, ptr1, len1);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape}
  */
  static trimesh(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, __wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = rawshape_trimesh(ptr0, len0, ptr1, len1);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} nrows
  * @param {number} ncols
  * @param {Float32Array} heights
  * @param {RawVector} scale
  * @returns {RawShape}
  */
  static heightfield(nrows, ncols, heights, scale6) {
    const ptr0 = passArrayF32ToWasm0(heights, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(scale6, RawVector);
    const ret = rawshape_heightfield(nrows, ncols, ptr0, len0, scale6.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @returns {RawShape}
  */
  static segment(p1, p2) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    const ret = rawshape_segment(p1.ptr, p2.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @returns {RawShape}
  */
  static triangle(p1, p2, p3) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = rawshape_triangle(p1.ptr, p2.ptr, p3.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundTriangle(p1, p2, p3, borderRadius) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = rawshape_roundTriangle(p1.ptr, p2.ptr, p3.ptr, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @returns {RawShape | undefined}
  */
  static convexHull(points) {
    const ptr0 = passArrayF32ToWasm0(points, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = rawshape_convexHull(ptr0, len0);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexHull(points, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(points, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = rawshape_roundConvexHull(ptr0, len0, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape | undefined}
  */
  static convexMesh(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, __wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = rawshape_convexMesh(ptr0, len0, ptr1, len1);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexMesh(vertices, indices, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(vertices, __wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, __wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = rawshape_roundConvexMesh(ptr0, len0, ptr1, len1, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawVector} shapeVel1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {RawVector} shapeVel2
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeTOI | undefined}
  */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi, stop_at_penetration) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shapeVel1, RawVector);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    _assertClass(shapeVel2, RawVector);
    const ret = rawshape_castShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shapeVel1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, shapeVel2.ptr, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeTOI.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = rawshape_intersectsShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = rawshape_contactShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @returns {boolean}
  */
  containsPoint(shapePos, shapeRot, point) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = rawshape_containsPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  projectPoint(shapePos, shapeRot, point, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = rawshape_projectPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  intersectsRay(shapePos, shapeRot, rayOrig, rayDir, maxToi) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawshape_intersectsRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  castRay(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawshape_castRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  castRayAndGetNormal(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = rawshape_castRayAndGetNormal(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
};
var RawShapeColliderTOI = class _RawShapeColliderTOI {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeColliderTOI.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawshapecollidertoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = rawshapecollidertoi_witness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = rawshapecollidertoi_normal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawShapeContact = class _RawShapeContact {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeContact.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawshapecontact_free(ptr);
  }
  /**
  * @returns {number}
  */
  distance() {
    const ret = rawshapecontact_distance(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point1() {
    const ret = rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  point2() {
    const ret = rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = rawshapecollidertoi_witness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawShapeTOI = class _RawShapeTOI {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeTOI.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawshapetoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = rawshapetoi_witness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = rawcontactforceevent_total_force(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = rawshapetoi_normal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = rawshapetoi_normal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawVector = class _RawVector {
  static __wrap(ptr) {
    const obj = Object.create(_RawVector.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    __wbg_rawvector_free(ptr);
  }
  /**
  * Creates a new vector filled with zeros.
  * @returns {RawVector}
  */
  static zero() {
    const ret = rawvector_zero();
    return _RawVector.__wrap(ret);
  }
  /**
  * Creates a new 3D vector from its two components.
  *
  * # Parameters
  * - `x`: the `x` component of this 3D vector.
  * - `y`: the `y` component of this 3D vector.
  * - `z`: the `z` component of this 3D vector.
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  constructor(x, y, z) {
    const ret = rawvector_new(x, y, z);
    return _RawVector.__wrap(ret);
  }
  /**
  * The `x` component of this vector.
  * @returns {number}
  */
  get x() {
    const ret = rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * Sets the `x` component of this vector.
  * @param {number} x
  */
  set x(x) {
    rawintegrationparameters_set_dt(this.ptr, x);
  }
  /**
  * The `y` component of this vector.
  * @returns {number}
  */
  get y() {
    const ret = rawrotation_y(this.ptr);
    return ret;
  }
  /**
  * Sets the `y` component of this vector.
  * @param {number} y
  */
  set y(y) {
    rawvector_set_y(this.ptr, y);
  }
  /**
  * The `z` component of this vector.
  * @returns {number}
  */
  get z() {
    const ret = rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * Sets the `z` component of this vector.
  * @param {number} z
  */
  set z(z) {
    rawintegrationparameters_set_erp(this.ptr, z);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{x, y, z}`.
  *
  * This will effectively return a copy of `this`. This method exist for completeness with the
  * other swizzling functions.
  * @returns {RawVector}
  */
  xyz() {
    const ret = rawvector_xyz(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{y, x, z}`.
  * @returns {RawVector}
  */
  yxz() {
    const ret = rawvector_yxz(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{z, x, y}`.
  * @returns {RawVector}
  */
  zxy() {
    const ret = rawvector_zxy(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{x, z, y}`.
  * @returns {RawVector}
  */
  xzy() {
    const ret = rawvector_xzy(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{y, z, x}`.
  * @returns {RawVector}
  */
  yzx() {
    const ret = rawvector_yzx(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{z, y, x}`.
  * @returns {RawVector}
  */
  zyx() {
    const ret = rawvector_zyx(this.ptr);
    return _RawVector.__wrap(ret);
  }
};
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
function __wbindgen_number_new(arg0) {
  const ret = arg0;
  return addHeapObject(ret);
}
function __wbindgen_number_get(arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === "number" ? obj : void 0;
  getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}
function __wbindgen_boolean_get(arg0) {
  const v = getObject(arg0);
  const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
  return ret;
}
function __wbindgen_is_function(arg0) {
  const ret = typeof getObject(arg0) === "function";
  return ret;
}
function __wbg_rawraycolliderintersection_new(arg0) {
  const ret = RawRayColliderIntersection.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_rawcontactforceevent_new(arg0) {
  const ret = RawContactForceEvent.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_call_168da88779e35f61() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_call_3999bee59e9f7719() {
  return handleError(function(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_call_e1f72c051cdab859() {
  return handleError(function(arg0, arg1, arg2, arg3, arg4) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_bind_10dfe70e95d2a480(arg0, arg1, arg2, arg3) {
  const ret = getObject(arg0).bind(getObject(arg1), getObject(arg2), getObject(arg3));
  return addHeapObject(ret);
}
function __wbg_buffer_3f3d764d4747d564(arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
function __wbg_newwithbyteoffsetandlength_d9aa266703cb98be(arg0, arg1, arg2) {
  const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
function __wbg_new_8c3f0052272a457a(arg0) {
  const ret = new Uint8Array(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_set_83db9690f9353e79(arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
function __wbg_length_9e1ae1900cb0fbd5(arg0) {
  const ret = getObject(arg0).length;
  return ret;
}
function __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4(arg0, arg1, arg2) {
  const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
function __wbg_set_0e0314cf6675c1b9(arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
function __wbg_length_9a2deed95d22668d(arg0) {
  const ret = getObject(arg0).length;
  return ret;
}
function __wbg_newwithlength_a7168e4a1e8f5e12(arg0) {
  const ret = new Float32Array(arg0 >>> 0);
  return addHeapObject(ret);
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbindgen_memory() {
  const ret = memory;
  return addHeapObject(ret);
}

// wasm-module:/home/albatross/src/ballphys/node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm
var imports = {
  ["./rapier_wasm3d_bg.js"]: {
    __wbindgen_object_drop_ref,
    __wbindgen_number_new,
    __wbindgen_number_get,
    __wbindgen_boolean_get,
    __wbindgen_is_function,
    __wbg_rawraycolliderintersection_new,
    __wbg_rawcontactforceevent_new,
    __wbg_call_168da88779e35f61,
    __wbg_call_3999bee59e9f7719,
    __wbg_call_e1f72c051cdab859,
    __wbg_bind_10dfe70e95d2a480,
    __wbg_buffer_3f3d764d4747d564,
    __wbg_newwithbyteoffsetandlength_d9aa266703cb98be,
    __wbg_new_8c3f0052272a457a,
    __wbg_set_83db9690f9353e79,
    __wbg_length_9e1ae1900cb0fbd5,
    __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4,
    __wbg_set_0e0314cf6675c1b9,
    __wbg_length_9a2deed95d22668d,
    __wbg_newwithlength_a7168e4a1e8f5e12,
    __wbindgen_throw,
    __wbindgen_memory
  }
};
async function loadWasm(module3, imports2) {
  if (typeof module3 === "string") {
    if (module3.startsWith("./")) {
      module3 = new URL(module3, import.meta.url).href;
    }
    const moduleRequest = await fetch(module3);
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(moduleRequest, imports2);
      } catch (e) {
        if (moduleRequest.headers.get("Content-Type") != "application/wasm") {
          console.warn(e);
        } else {
          throw e;
        }
      }
    }
    module3 = await moduleRequest.arrayBuffer();
  }
  return await WebAssembly.instantiate(module3, imports2);
}
var { instance, module: module2 } = await loadWasm(rapier_wasm3d_bg_default, imports);
var memory = instance.exports.memory;
var version = instance.exports.version;
var __wbg_rawkinematiccharactercontroller_free = instance.exports.__wbg_rawkinematiccharactercontroller_free;
var rawkinematiccharactercontroller_new = instance.exports.rawkinematiccharactercontroller_new;
var rawkinematiccharactercontroller_up = instance.exports.rawkinematiccharactercontroller_up;
var rawkinematiccharactercontroller_setUp = instance.exports.rawkinematiccharactercontroller_setUp;
var rawkinematiccharactercontroller_offset = instance.exports.rawkinematiccharactercontroller_offset;
var rawkinematiccharactercontroller_setOffset = instance.exports.rawkinematiccharactercontroller_setOffset;
var rawkinematiccharactercontroller_slideEnabled = instance.exports.rawkinematiccharactercontroller_slideEnabled;
var rawkinematiccharactercontroller_setSlideEnabled = instance.exports.rawkinematiccharactercontroller_setSlideEnabled;
var rawkinematiccharactercontroller_autostepMaxHeight = instance.exports.rawkinematiccharactercontroller_autostepMaxHeight;
var rawkinematiccharactercontroller_autostepMinWidth = instance.exports.rawkinematiccharactercontroller_autostepMinWidth;
var rawkinematiccharactercontroller_autostepIncludesDynamicBodies = instance.exports.rawkinematiccharactercontroller_autostepIncludesDynamicBodies;
var rawkinematiccharactercontroller_autostepEnabled = instance.exports.rawkinematiccharactercontroller_autostepEnabled;
var rawkinematiccharactercontroller_enableAutostep = instance.exports.rawkinematiccharactercontroller_enableAutostep;
var rawkinematiccharactercontroller_disableAutostep = instance.exports.rawkinematiccharactercontroller_disableAutostep;
var rawkinematiccharactercontroller_maxSlopeClimbAngle = instance.exports.rawkinematiccharactercontroller_maxSlopeClimbAngle;
var rawkinematiccharactercontroller_setMaxSlopeClimbAngle = instance.exports.rawkinematiccharactercontroller_setMaxSlopeClimbAngle;
var rawkinematiccharactercontroller_minSlopeSlideAngle = instance.exports.rawkinematiccharactercontroller_minSlopeSlideAngle;
var rawkinematiccharactercontroller_setMinSlopeSlideAngle = instance.exports.rawkinematiccharactercontroller_setMinSlopeSlideAngle;
var rawkinematiccharactercontroller_snapToGroundDistance = instance.exports.rawkinematiccharactercontroller_snapToGroundDistance;
var rawkinematiccharactercontroller_enableSnapToGround = instance.exports.rawkinematiccharactercontroller_enableSnapToGround;
var rawkinematiccharactercontroller_disableSnapToGround = instance.exports.rawkinematiccharactercontroller_disableSnapToGround;
var rawkinematiccharactercontroller_snapToGroundEnabled = instance.exports.rawkinematiccharactercontroller_snapToGroundEnabled;
var rawkinematiccharactercontroller_computeColliderMovement = instance.exports.rawkinematiccharactercontroller_computeColliderMovement;
var rawkinematiccharactercontroller_computedMovement = instance.exports.rawkinematiccharactercontroller_computedMovement;
var rawkinematiccharactercontroller_computedGrounded = instance.exports.rawkinematiccharactercontroller_computedGrounded;
var rawkinematiccharactercontroller_numComputedCollisions = instance.exports.rawkinematiccharactercontroller_numComputedCollisions;
var rawkinematiccharactercontroller_computedCollision = instance.exports.rawkinematiccharactercontroller_computedCollision;
var __wbg_rawcharactercollision_free = instance.exports.__wbg_rawcharactercollision_free;
var rawcharactercollision_new = instance.exports.rawcharactercollision_new;
var rawcharactercollision_handle = instance.exports.rawcharactercollision_handle;
var rawcharactercollision_translationApplied = instance.exports.rawcharactercollision_translationApplied;
var rawcharactercollision_translationRemaining = instance.exports.rawcharactercollision_translationRemaining;
var rawcharactercollision_toi = instance.exports.rawcharactercollision_toi;
var rawcharactercollision_worldWitness1 = instance.exports.rawcharactercollision_worldWitness1;
var rawcharactercollision_worldWitness2 = instance.exports.rawcharactercollision_worldWitness2;
var rawcharactercollision_worldNormal1 = instance.exports.rawcharactercollision_worldNormal1;
var rawcharactercollision_worldNormal2 = instance.exports.rawcharactercollision_worldNormal2;
var __wbg_rawccdsolver_free = instance.exports.__wbg_rawccdsolver_free;
var rawccdsolver_new = instance.exports.rawccdsolver_new;
var rawimpulsejointset_jointType = instance.exports.rawimpulsejointset_jointType;
var rawimpulsejointset_jointBodyHandle1 = instance.exports.rawimpulsejointset_jointBodyHandle1;
var rawimpulsejointset_jointBodyHandle2 = instance.exports.rawimpulsejointset_jointBodyHandle2;
var rawimpulsejointset_jointFrameX1 = instance.exports.rawimpulsejointset_jointFrameX1;
var rawimpulsejointset_jointFrameX2 = instance.exports.rawimpulsejointset_jointFrameX2;
var rawimpulsejointset_jointAnchor1 = instance.exports.rawimpulsejointset_jointAnchor1;
var rawimpulsejointset_jointAnchor2 = instance.exports.rawimpulsejointset_jointAnchor2;
var rawimpulsejointset_jointSetAnchor1 = instance.exports.rawimpulsejointset_jointSetAnchor1;
var rawimpulsejointset_jointSetAnchor2 = instance.exports.rawimpulsejointset_jointSetAnchor2;
var rawimpulsejointset_jointContactsEnabled = instance.exports.rawimpulsejointset_jointContactsEnabled;
var rawimpulsejointset_jointSetContactsEnabled = instance.exports.rawimpulsejointset_jointSetContactsEnabled;
var rawimpulsejointset_jointLimitsEnabled = instance.exports.rawimpulsejointset_jointLimitsEnabled;
var rawimpulsejointset_jointLimitsMin = instance.exports.rawimpulsejointset_jointLimitsMin;
var rawimpulsejointset_jointLimitsMax = instance.exports.rawimpulsejointset_jointLimitsMax;
var rawimpulsejointset_jointSetLimits = instance.exports.rawimpulsejointset_jointSetLimits;
var rawimpulsejointset_jointConfigureMotorModel = instance.exports.rawimpulsejointset_jointConfigureMotorModel;
var rawimpulsejointset_jointConfigureMotorVelocity = instance.exports.rawimpulsejointset_jointConfigureMotorVelocity;
var rawimpulsejointset_jointConfigureMotorPosition = instance.exports.rawimpulsejointset_jointConfigureMotorPosition;
var rawimpulsejointset_jointConfigureMotor = instance.exports.rawimpulsejointset_jointConfigureMotor;
var __wbg_rawimpulsejointset_free = instance.exports.__wbg_rawimpulsejointset_free;
var rawimpulsejointset_new = instance.exports.rawimpulsejointset_new;
var rawimpulsejointset_createJoint = instance.exports.rawimpulsejointset_createJoint;
var rawimpulsejointset_remove = instance.exports.rawimpulsejointset_remove;
var rawimpulsejointset_len = instance.exports.rawimpulsejointset_len;
var rawimpulsejointset_contains = instance.exports.rawimpulsejointset_contains;
var rawimpulsejointset_forEachJointHandle = instance.exports.rawimpulsejointset_forEachJointHandle;
var rawimpulsejointset_forEachJointAttachedToRigidBody = instance.exports.rawimpulsejointset_forEachJointAttachedToRigidBody;
var __wbg_rawintegrationparameters_free = instance.exports.__wbg_rawintegrationparameters_free;
var rawintegrationparameters_new = instance.exports.rawintegrationparameters_new;
var rawintegrationparameters_dt = instance.exports.rawintegrationparameters_dt;
var rawintegrationparameters_allowedLinearError = instance.exports.rawintegrationparameters_allowedLinearError;
var rawintegrationparameters_predictionDistance = instance.exports.rawintegrationparameters_predictionDistance;
var rawintegrationparameters_maxVelocityIterations = instance.exports.rawintegrationparameters_maxVelocityIterations;
var rawintegrationparameters_maxVelocityFrictionIterations = instance.exports.rawintegrationparameters_maxVelocityFrictionIterations;
var rawintegrationparameters_maxStabilizationIterations = instance.exports.rawintegrationparameters_maxStabilizationIterations;
var rawintegrationparameters_minIslandSize = instance.exports.rawintegrationparameters_minIslandSize;
var rawintegrationparameters_maxCcdSubsteps = instance.exports.rawintegrationparameters_maxCcdSubsteps;
var rawintegrationparameters_set_dt = instance.exports.rawintegrationparameters_set_dt;
var rawintegrationparameters_set_erp = instance.exports.rawintegrationparameters_set_erp;
var rawintegrationparameters_set_allowedLinearError = instance.exports.rawintegrationparameters_set_allowedLinearError;
var rawintegrationparameters_set_predictionDistance = instance.exports.rawintegrationparameters_set_predictionDistance;
var rawintegrationparameters_set_maxVelocityIterations = instance.exports.rawintegrationparameters_set_maxVelocityIterations;
var rawintegrationparameters_set_maxVelocityFrictionIterations = instance.exports.rawintegrationparameters_set_maxVelocityFrictionIterations;
var rawintegrationparameters_set_maxStabilizationIterations = instance.exports.rawintegrationparameters_set_maxStabilizationIterations;
var rawintegrationparameters_set_minIslandSize = instance.exports.rawintegrationparameters_set_minIslandSize;
var rawintegrationparameters_set_maxCcdSubsteps = instance.exports.rawintegrationparameters_set_maxCcdSubsteps;
var __wbg_rawislandmanager_free = instance.exports.__wbg_rawislandmanager_free;
var rawislandmanager_new = instance.exports.rawislandmanager_new;
var rawislandmanager_forEachActiveRigidBodyHandle = instance.exports.rawislandmanager_forEachActiveRigidBodyHandle;
var __wbg_rawgenericjoint_free = instance.exports.__wbg_rawgenericjoint_free;
var rawgenericjoint_spherical = instance.exports.rawgenericjoint_spherical;
var rawgenericjoint_prismatic = instance.exports.rawgenericjoint_prismatic;
var rawgenericjoint_fixed = instance.exports.rawgenericjoint_fixed;
var rawgenericjoint_revolute = instance.exports.rawgenericjoint_revolute;
var rawmultibodyjointset_jointType = instance.exports.rawmultibodyjointset_jointType;
var rawmultibodyjointset_jointFrameX1 = instance.exports.rawmultibodyjointset_jointFrameX1;
var rawmultibodyjointset_jointFrameX2 = instance.exports.rawmultibodyjointset_jointFrameX2;
var rawmultibodyjointset_jointAnchor1 = instance.exports.rawmultibodyjointset_jointAnchor1;
var rawmultibodyjointset_jointAnchor2 = instance.exports.rawmultibodyjointset_jointAnchor2;
var rawmultibodyjointset_jointContactsEnabled = instance.exports.rawmultibodyjointset_jointContactsEnabled;
var rawmultibodyjointset_jointSetContactsEnabled = instance.exports.rawmultibodyjointset_jointSetContactsEnabled;
var rawmultibodyjointset_jointLimitsEnabled = instance.exports.rawmultibodyjointset_jointLimitsEnabled;
var rawmultibodyjointset_jointLimitsMin = instance.exports.rawmultibodyjointset_jointLimitsMin;
var rawmultibodyjointset_jointLimitsMax = instance.exports.rawmultibodyjointset_jointLimitsMax;
var __wbg_rawmultibodyjointset_free = instance.exports.__wbg_rawmultibodyjointset_free;
var rawmultibodyjointset_new = instance.exports.rawmultibodyjointset_new;
var rawmultibodyjointset_createJoint = instance.exports.rawmultibodyjointset_createJoint;
var rawmultibodyjointset_remove = instance.exports.rawmultibodyjointset_remove;
var rawmultibodyjointset_contains = instance.exports.rawmultibodyjointset_contains;
var rawmultibodyjointset_forEachJointHandle = instance.exports.rawmultibodyjointset_forEachJointHandle;
var rawmultibodyjointset_forEachJointAttachedToRigidBody = instance.exports.rawmultibodyjointset_forEachJointAttachedToRigidBody;
var rawrigidbodyset_rbTranslation = instance.exports.rawrigidbodyset_rbTranslation;
var rawrigidbodyset_rbRotation = instance.exports.rawrigidbodyset_rbRotation;
var rawrigidbodyset_rbSleep = instance.exports.rawrigidbodyset_rbSleep;
var rawrigidbodyset_rbIsSleeping = instance.exports.rawrigidbodyset_rbIsSleeping;
var rawrigidbodyset_rbIsMoving = instance.exports.rawrigidbodyset_rbIsMoving;
var rawrigidbodyset_rbNextTranslation = instance.exports.rawrigidbodyset_rbNextTranslation;
var rawrigidbodyset_rbNextRotation = instance.exports.rawrigidbodyset_rbNextRotation;
var rawrigidbodyset_rbSetTranslation = instance.exports.rawrigidbodyset_rbSetTranslation;
var rawrigidbodyset_rbSetRotation = instance.exports.rawrigidbodyset_rbSetRotation;
var rawrigidbodyset_rbSetLinvel = instance.exports.rawrigidbodyset_rbSetLinvel;
var rawrigidbodyset_rbSetAngvel = instance.exports.rawrigidbodyset_rbSetAngvel;
var rawrigidbodyset_rbSetNextKinematicTranslation = instance.exports.rawrigidbodyset_rbSetNextKinematicTranslation;
var rawrigidbodyset_rbSetNextKinematicRotation = instance.exports.rawrigidbodyset_rbSetNextKinematicRotation;
var rawrigidbodyset_rbRecomputeMassPropertiesFromColliders = instance.exports.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders;
var rawrigidbodyset_rbSetAdditionalMass = instance.exports.rawrigidbodyset_rbSetAdditionalMass;
var rawrigidbodyset_rbSetAdditionalMassProperties = instance.exports.rawrigidbodyset_rbSetAdditionalMassProperties;
var rawrigidbodyset_rbLinvel = instance.exports.rawrigidbodyset_rbLinvel;
var rawrigidbodyset_rbAngvel = instance.exports.rawrigidbodyset_rbAngvel;
var rawrigidbodyset_rbLockTranslations = instance.exports.rawrigidbodyset_rbLockTranslations;
var rawrigidbodyset_rbSetEnabledTranslations = instance.exports.rawrigidbodyset_rbSetEnabledTranslations;
var rawrigidbodyset_rbLockRotations = instance.exports.rawrigidbodyset_rbLockRotations;
var rawrigidbodyset_rbSetEnabledRotations = instance.exports.rawrigidbodyset_rbSetEnabledRotations;
var rawrigidbodyset_rbDominanceGroup = instance.exports.rawrigidbodyset_rbDominanceGroup;
var rawrigidbodyset_rbSetDominanceGroup = instance.exports.rawrigidbodyset_rbSetDominanceGroup;
var rawrigidbodyset_rbEnableCcd = instance.exports.rawrigidbodyset_rbEnableCcd;
var rawrigidbodyset_rbMass = instance.exports.rawrigidbodyset_rbMass;
var rawrigidbodyset_rbInvMass = instance.exports.rawrigidbodyset_rbInvMass;
var rawrigidbodyset_rbEffectiveInvMass = instance.exports.rawrigidbodyset_rbEffectiveInvMass;
var rawrigidbodyset_rbLocalCom = instance.exports.rawrigidbodyset_rbLocalCom;
var rawrigidbodyset_rbWorldCom = instance.exports.rawrigidbodyset_rbWorldCom;
var rawrigidbodyset_rbInvPrincipalInertiaSqrt = instance.exports.rawrigidbodyset_rbInvPrincipalInertiaSqrt;
var rawrigidbodyset_rbPrincipalInertiaLocalFrame = instance.exports.rawrigidbodyset_rbPrincipalInertiaLocalFrame;
var rawrigidbodyset_rbPrincipalInertia = instance.exports.rawrigidbodyset_rbPrincipalInertia;
var rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt = instance.exports.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt;
var rawrigidbodyset_rbEffectiveAngularInertia = instance.exports.rawrigidbodyset_rbEffectiveAngularInertia;
var rawrigidbodyset_rbWakeUp = instance.exports.rawrigidbodyset_rbWakeUp;
var rawrigidbodyset_rbIsCcdEnabled = instance.exports.rawrigidbodyset_rbIsCcdEnabled;
var rawrigidbodyset_rbNumColliders = instance.exports.rawrigidbodyset_rbNumColliders;
var rawrigidbodyset_rbCollider = instance.exports.rawrigidbodyset_rbCollider;
var rawrigidbodyset_rbBodyType = instance.exports.rawrigidbodyset_rbBodyType;
var rawrigidbodyset_rbSetBodyType = instance.exports.rawrigidbodyset_rbSetBodyType;
var rawrigidbodyset_rbIsFixed = instance.exports.rawrigidbodyset_rbIsFixed;
var rawrigidbodyset_rbIsKinematic = instance.exports.rawrigidbodyset_rbIsKinematic;
var rawrigidbodyset_rbIsDynamic = instance.exports.rawrigidbodyset_rbIsDynamic;
var rawrigidbodyset_rbLinearDamping = instance.exports.rawrigidbodyset_rbLinearDamping;
var rawrigidbodyset_rbAngularDamping = instance.exports.rawrigidbodyset_rbAngularDamping;
var rawrigidbodyset_rbSetLinearDamping = instance.exports.rawrigidbodyset_rbSetLinearDamping;
var rawrigidbodyset_rbSetAngularDamping = instance.exports.rawrigidbodyset_rbSetAngularDamping;
var rawrigidbodyset_rbSetEnabled = instance.exports.rawrigidbodyset_rbSetEnabled;
var rawrigidbodyset_rbIsEnabled = instance.exports.rawrigidbodyset_rbIsEnabled;
var rawrigidbodyset_rbGravityScale = instance.exports.rawrigidbodyset_rbGravityScale;
var rawrigidbodyset_rbSetGravityScale = instance.exports.rawrigidbodyset_rbSetGravityScale;
var rawrigidbodyset_rbResetForces = instance.exports.rawrigidbodyset_rbResetForces;
var rawrigidbodyset_rbResetTorques = instance.exports.rawrigidbodyset_rbResetTorques;
var rawrigidbodyset_rbAddForce = instance.exports.rawrigidbodyset_rbAddForce;
var rawrigidbodyset_rbApplyImpulse = instance.exports.rawrigidbodyset_rbApplyImpulse;
var rawrigidbodyset_rbAddTorque = instance.exports.rawrigidbodyset_rbAddTorque;
var rawrigidbodyset_rbApplyTorqueImpulse = instance.exports.rawrigidbodyset_rbApplyTorqueImpulse;
var rawrigidbodyset_rbAddForceAtPoint = instance.exports.rawrigidbodyset_rbAddForceAtPoint;
var rawrigidbodyset_rbApplyImpulseAtPoint = instance.exports.rawrigidbodyset_rbApplyImpulseAtPoint;
var rawrigidbodyset_rbUserData = instance.exports.rawrigidbodyset_rbUserData;
var rawrigidbodyset_rbSetUserData = instance.exports.rawrigidbodyset_rbSetUserData;
var __wbg_rawrigidbodyset_free = instance.exports.__wbg_rawrigidbodyset_free;
var rawrigidbodyset_new = instance.exports.rawrigidbodyset_new;
var rawrigidbodyset_createRigidBody = instance.exports.rawrigidbodyset_createRigidBody;
var rawrigidbodyset_remove = instance.exports.rawrigidbodyset_remove;
var rawrigidbodyset_len = instance.exports.rawrigidbodyset_len;
var rawrigidbodyset_contains = instance.exports.rawrigidbodyset_contains;
var rawrigidbodyset_forEachRigidBodyHandle = instance.exports.rawrigidbodyset_forEachRigidBodyHandle;
var rawrigidbodyset_propagateModifiedBodyPositionsToColliders = instance.exports.rawrigidbodyset_propagateModifiedBodyPositionsToColliders;
var __wbg_rawbroadphase_free = instance.exports.__wbg_rawbroadphase_free;
var rawbroadphase_new = instance.exports.rawbroadphase_new;
var rawcolliderset_coTranslation = instance.exports.rawcolliderset_coTranslation;
var rawcolliderset_coRotation = instance.exports.rawcolliderset_coRotation;
var rawcolliderset_coSetTranslation = instance.exports.rawcolliderset_coSetTranslation;
var rawcolliderset_coSetTranslationWrtParent = instance.exports.rawcolliderset_coSetTranslationWrtParent;
var rawcolliderset_coSetRotation = instance.exports.rawcolliderset_coSetRotation;
var rawcolliderset_coSetRotationWrtParent = instance.exports.rawcolliderset_coSetRotationWrtParent;
var rawcolliderset_coIsSensor = instance.exports.rawcolliderset_coIsSensor;
var rawcolliderset_coShapeType = instance.exports.rawcolliderset_coShapeType;
var rawcolliderset_coHalfspaceNormal = instance.exports.rawcolliderset_coHalfspaceNormal;
var rawcolliderset_coHalfExtents = instance.exports.rawcolliderset_coHalfExtents;
var rawcolliderset_coSetHalfExtents = instance.exports.rawcolliderset_coSetHalfExtents;
var rawcolliderset_coRadius = instance.exports.rawcolliderset_coRadius;
var rawcolliderset_coSetRadius = instance.exports.rawcolliderset_coSetRadius;
var rawcolliderset_coHalfHeight = instance.exports.rawcolliderset_coHalfHeight;
var rawcolliderset_coSetHalfHeight = instance.exports.rawcolliderset_coSetHalfHeight;
var rawcolliderset_coRoundRadius = instance.exports.rawcolliderset_coRoundRadius;
var rawcolliderset_coSetRoundRadius = instance.exports.rawcolliderset_coSetRoundRadius;
var rawcolliderset_coVertices = instance.exports.rawcolliderset_coVertices;
var rawcolliderset_coIndices = instance.exports.rawcolliderset_coIndices;
var rawcolliderset_coHeightfieldHeights = instance.exports.rawcolliderset_coHeightfieldHeights;
var rawcolliderset_coHeightfieldScale = instance.exports.rawcolliderset_coHeightfieldScale;
var rawcolliderset_coHeightfieldNRows = instance.exports.rawcolliderset_coHeightfieldNRows;
var rawcolliderset_coHeightfieldNCols = instance.exports.rawcolliderset_coHeightfieldNCols;
var rawcolliderset_coParent = instance.exports.rawcolliderset_coParent;
var rawcolliderset_coSetEnabled = instance.exports.rawcolliderset_coSetEnabled;
var rawcolliderset_coIsEnabled = instance.exports.rawcolliderset_coIsEnabled;
var rawcolliderset_coFriction = instance.exports.rawcolliderset_coFriction;
var rawcolliderset_coRestitution = instance.exports.rawcolliderset_coRestitution;
var rawcolliderset_coDensity = instance.exports.rawcolliderset_coDensity;
var rawcolliderset_coMass = instance.exports.rawcolliderset_coMass;
var rawcolliderset_coVolume = instance.exports.rawcolliderset_coVolume;
var rawcolliderset_coCollisionGroups = instance.exports.rawcolliderset_coCollisionGroups;
var rawcolliderset_coSolverGroups = instance.exports.rawcolliderset_coSolverGroups;
var rawcolliderset_coActiveHooks = instance.exports.rawcolliderset_coActiveHooks;
var rawcolliderset_coActiveCollisionTypes = instance.exports.rawcolliderset_coActiveCollisionTypes;
var rawcolliderset_coActiveEvents = instance.exports.rawcolliderset_coActiveEvents;
var rawcolliderset_coContactForceEventThreshold = instance.exports.rawcolliderset_coContactForceEventThreshold;
var rawcolliderset_coContainsPoint = instance.exports.rawcolliderset_coContainsPoint;
var rawcolliderset_coCastShape = instance.exports.rawcolliderset_coCastShape;
var rawcolliderset_coCastCollider = instance.exports.rawcolliderset_coCastCollider;
var rawcolliderset_coIntersectsShape = instance.exports.rawcolliderset_coIntersectsShape;
var rawcolliderset_coContactShape = instance.exports.rawcolliderset_coContactShape;
var rawcolliderset_coContactCollider = instance.exports.rawcolliderset_coContactCollider;
var rawcolliderset_coProjectPoint = instance.exports.rawcolliderset_coProjectPoint;
var rawcolliderset_coIntersectsRay = instance.exports.rawcolliderset_coIntersectsRay;
var rawcolliderset_coCastRay = instance.exports.rawcolliderset_coCastRay;
var rawcolliderset_coCastRayAndGetNormal = instance.exports.rawcolliderset_coCastRayAndGetNormal;
var rawcolliderset_coSetSensor = instance.exports.rawcolliderset_coSetSensor;
var rawcolliderset_coSetRestitution = instance.exports.rawcolliderset_coSetRestitution;
var rawcolliderset_coSetFriction = instance.exports.rawcolliderset_coSetFriction;
var rawcolliderset_coFrictionCombineRule = instance.exports.rawcolliderset_coFrictionCombineRule;
var rawcolliderset_coSetFrictionCombineRule = instance.exports.rawcolliderset_coSetFrictionCombineRule;
var rawcolliderset_coRestitutionCombineRule = instance.exports.rawcolliderset_coRestitutionCombineRule;
var rawcolliderset_coSetRestitutionCombineRule = instance.exports.rawcolliderset_coSetRestitutionCombineRule;
var rawcolliderset_coSetCollisionGroups = instance.exports.rawcolliderset_coSetCollisionGroups;
var rawcolliderset_coSetSolverGroups = instance.exports.rawcolliderset_coSetSolverGroups;
var rawcolliderset_coSetActiveHooks = instance.exports.rawcolliderset_coSetActiveHooks;
var rawcolliderset_coSetActiveEvents = instance.exports.rawcolliderset_coSetActiveEvents;
var rawcolliderset_coSetActiveCollisionTypes = instance.exports.rawcolliderset_coSetActiveCollisionTypes;
var rawcolliderset_coSetShape = instance.exports.rawcolliderset_coSetShape;
var rawcolliderset_coSetContactForceEventThreshold = instance.exports.rawcolliderset_coSetContactForceEventThreshold;
var rawcolliderset_coSetDensity = instance.exports.rawcolliderset_coSetDensity;
var rawcolliderset_coSetMass = instance.exports.rawcolliderset_coSetMass;
var rawcolliderset_coSetMassProperties = instance.exports.rawcolliderset_coSetMassProperties;
var __wbg_rawcolliderset_free = instance.exports.__wbg_rawcolliderset_free;
var rawcolliderset_new = instance.exports.rawcolliderset_new;
var rawcolliderset_len = instance.exports.rawcolliderset_len;
var rawcolliderset_contains = instance.exports.rawcolliderset_contains;
var rawcolliderset_createCollider = instance.exports.rawcolliderset_createCollider;
var rawcolliderset_remove = instance.exports.rawcolliderset_remove;
var rawcolliderset_forEachColliderHandle = instance.exports.rawcolliderset_forEachColliderHandle;
var __wbg_rawshapecontact_free = instance.exports.__wbg_rawshapecontact_free;
var rawshapecontact_distance = instance.exports.rawshapecontact_distance;
var __wbg_rawnarrowphase_free = instance.exports.__wbg_rawnarrowphase_free;
var rawnarrowphase_new = instance.exports.rawnarrowphase_new;
var rawnarrowphase_contacts_with = instance.exports.rawnarrowphase_contacts_with;
var rawnarrowphase_contact_pair = instance.exports.rawnarrowphase_contact_pair;
var rawnarrowphase_intersections_with = instance.exports.rawnarrowphase_intersections_with;
var rawnarrowphase_intersection_pair = instance.exports.rawnarrowphase_intersection_pair;
var __wbg_rawcontactmanifold_free = instance.exports.__wbg_rawcontactmanifold_free;
var rawcontactpair_collider1 = instance.exports.rawcontactpair_collider1;
var rawcontactpair_collider2 = instance.exports.rawcontactpair_collider2;
var rawcontactpair_numContactManifolds = instance.exports.rawcontactpair_numContactManifolds;
var rawcontactpair_contactManifold = instance.exports.rawcontactpair_contactManifold;
var rawcontactmanifold_normal = instance.exports.rawcontactmanifold_normal;
var rawcontactmanifold_local_n1 = instance.exports.rawcontactmanifold_local_n1;
var rawcontactmanifold_local_n2 = instance.exports.rawcontactmanifold_local_n2;
var rawcontactmanifold_subshape1 = instance.exports.rawcontactmanifold_subshape1;
var rawcontactmanifold_subshape2 = instance.exports.rawcontactmanifold_subshape2;
var rawcontactmanifold_num_contacts = instance.exports.rawcontactmanifold_num_contacts;
var rawcontactmanifold_contact_local_p1 = instance.exports.rawcontactmanifold_contact_local_p1;
var rawcontactmanifold_contact_local_p2 = instance.exports.rawcontactmanifold_contact_local_p2;
var rawcontactmanifold_contact_dist = instance.exports.rawcontactmanifold_contact_dist;
var rawcontactmanifold_contact_fid1 = instance.exports.rawcontactmanifold_contact_fid1;
var rawcontactmanifold_contact_fid2 = instance.exports.rawcontactmanifold_contact_fid2;
var rawcontactmanifold_contact_impulse = instance.exports.rawcontactmanifold_contact_impulse;
var rawcontactmanifold_contact_tangent_impulse_x = instance.exports.rawcontactmanifold_contact_tangent_impulse_x;
var rawcontactmanifold_contact_tangent_impulse_y = instance.exports.rawcontactmanifold_contact_tangent_impulse_y;
var rawcontactmanifold_num_solver_contacts = instance.exports.rawcontactmanifold_num_solver_contacts;
var rawcontactmanifold_solver_contact_point = instance.exports.rawcontactmanifold_solver_contact_point;
var rawcontactmanifold_solver_contact_dist = instance.exports.rawcontactmanifold_solver_contact_dist;
var rawcontactmanifold_solver_contact_friction = instance.exports.rawcontactmanifold_solver_contact_friction;
var rawcontactmanifold_solver_contact_restitution = instance.exports.rawcontactmanifold_solver_contact_restitution;
var rawcontactmanifold_solver_contact_tangent_velocity = instance.exports.rawcontactmanifold_solver_contact_tangent_velocity;
var __wbg_rawpointprojection_free = instance.exports.__wbg_rawpointprojection_free;
var __wbg_rawpointcolliderprojection_free = instance.exports.__wbg_rawpointcolliderprojection_free;
var rawpointcolliderprojection_colliderHandle = instance.exports.rawpointcolliderprojection_colliderHandle;
var rawpointcolliderprojection_featureType = instance.exports.rawpointcolliderprojection_featureType;
var rawpointcolliderprojection_featureId = instance.exports.rawpointcolliderprojection_featureId;
var __wbg_rawrayintersection_free = instance.exports.__wbg_rawrayintersection_free;
var rawrayintersection_featureType = instance.exports.rawrayintersection_featureType;
var rawrayintersection_featureId = instance.exports.rawrayintersection_featureId;
var rawraycolliderintersection_normal = instance.exports.rawraycolliderintersection_normal;
var rawraycolliderintersection_toi = instance.exports.rawraycolliderintersection_toi;
var rawraycolliderintersection_featureType = instance.exports.rawraycolliderintersection_featureType;
var rawraycolliderintersection_featureId = instance.exports.rawraycolliderintersection_featureId;
var __wbg_rawraycollidertoi_free = instance.exports.__wbg_rawraycollidertoi_free;
var __wbg_rawshape_free = instance.exports.__wbg_rawshape_free;
var rawshape_cuboid = instance.exports.rawshape_cuboid;
var rawshape_roundCuboid = instance.exports.rawshape_roundCuboid;
var rawshape_ball = instance.exports.rawshape_ball;
var rawshape_halfspace = instance.exports.rawshape_halfspace;
var rawshape_capsule = instance.exports.rawshape_capsule;
var rawshape_cylinder = instance.exports.rawshape_cylinder;
var rawshape_roundCylinder = instance.exports.rawshape_roundCylinder;
var rawshape_cone = instance.exports.rawshape_cone;
var rawshape_roundCone = instance.exports.rawshape_roundCone;
var rawshape_polyline = instance.exports.rawshape_polyline;
var rawshape_trimesh = instance.exports.rawshape_trimesh;
var rawshape_heightfield = instance.exports.rawshape_heightfield;
var rawshape_segment = instance.exports.rawshape_segment;
var rawshape_triangle = instance.exports.rawshape_triangle;
var rawshape_roundTriangle = instance.exports.rawshape_roundTriangle;
var rawshape_convexHull = instance.exports.rawshape_convexHull;
var rawshape_roundConvexHull = instance.exports.rawshape_roundConvexHull;
var rawshape_convexMesh = instance.exports.rawshape_convexMesh;
var rawshape_roundConvexMesh = instance.exports.rawshape_roundConvexMesh;
var rawshape_castShape = instance.exports.rawshape_castShape;
var rawshape_intersectsShape = instance.exports.rawshape_intersectsShape;
var rawshape_contactShape = instance.exports.rawshape_contactShape;
var rawshape_containsPoint = instance.exports.rawshape_containsPoint;
var rawshape_projectPoint = instance.exports.rawshape_projectPoint;
var rawshape_intersectsRay = instance.exports.rawshape_intersectsRay;
var rawshape_castRay = instance.exports.rawshape_castRay;
var rawshape_castRayAndGetNormal = instance.exports.rawshape_castRayAndGetNormal;
var __wbg_rawshapetoi_free = instance.exports.__wbg_rawshapetoi_free;
var rawshapetoi_witness1 = instance.exports.rawshapetoi_witness1;
var rawshapetoi_normal1 = instance.exports.rawshapetoi_normal1;
var rawshapetoi_normal2 = instance.exports.rawshapetoi_normal2;
var __wbg_rawshapecollidertoi_free = instance.exports.__wbg_rawshapecollidertoi_free;
var rawshapecollidertoi_witness2 = instance.exports.rawshapecollidertoi_witness2;
var rawshapecollidertoi_normal2 = instance.exports.rawshapecollidertoi_normal2;
var rawrotation_new = instance.exports.rawrotation_new;
var rawrotation_identity = instance.exports.rawrotation_identity;
var rawrotation_y = instance.exports.rawrotation_y;
var rawrotation_w = instance.exports.rawrotation_w;
var rawvector_zero = instance.exports.rawvector_zero;
var rawvector_new = instance.exports.rawvector_new;
var rawvector_set_y = instance.exports.rawvector_set_y;
var rawvector_xyz = instance.exports.rawvector_xyz;
var rawvector_yxz = instance.exports.rawvector_yxz;
var rawvector_zxy = instance.exports.rawvector_zxy;
var rawvector_xzy = instance.exports.rawvector_xzy;
var rawvector_yzx = instance.exports.rawvector_yzx;
var rawvector_zyx = instance.exports.rawvector_zyx;
var rawsdpmatrix3_elements = instance.exports.rawsdpmatrix3_elements;
var __wbg_rawdebugrenderpipeline_free = instance.exports.__wbg_rawdebugrenderpipeline_free;
var rawdebugrenderpipeline_new = instance.exports.rawdebugrenderpipeline_new;
var rawdebugrenderpipeline_vertices = instance.exports.rawdebugrenderpipeline_vertices;
var rawdebugrenderpipeline_colors = instance.exports.rawdebugrenderpipeline_colors;
var rawdebugrenderpipeline_render = instance.exports.rawdebugrenderpipeline_render;
var __wbg_raweventqueue_free = instance.exports.__wbg_raweventqueue_free;
var __wbg_rawcontactforceevent_free = instance.exports.__wbg_rawcontactforceevent_free;
var rawcontactforceevent_collider2 = instance.exports.rawcontactforceevent_collider2;
var rawcontactforceevent_total_force = instance.exports.rawcontactforceevent_total_force;
var rawcontactforceevent_total_force_magnitude = instance.exports.rawcontactforceevent_total_force_magnitude;
var rawcontactforceevent_max_force_direction = instance.exports.rawcontactforceevent_max_force_direction;
var rawcontactforceevent_max_force_magnitude = instance.exports.rawcontactforceevent_max_force_magnitude;
var raweventqueue_new = instance.exports.raweventqueue_new;
var raweventqueue_drainCollisionEvents = instance.exports.raweventqueue_drainCollisionEvents;
var raweventqueue_drainContactForceEvents = instance.exports.raweventqueue_drainContactForceEvents;
var raweventqueue_clear = instance.exports.raweventqueue_clear;
var __wbg_rawphysicspipeline_free = instance.exports.__wbg_rawphysicspipeline_free;
var rawphysicspipeline_new = instance.exports.rawphysicspipeline_new;
var rawphysicspipeline_step = instance.exports.rawphysicspipeline_step;
var rawphysicspipeline_stepWithEvents = instance.exports.rawphysicspipeline_stepWithEvents;
var __wbg_rawquerypipeline_free = instance.exports.__wbg_rawquerypipeline_free;
var rawquerypipeline_new = instance.exports.rawquerypipeline_new;
var rawquerypipeline_update = instance.exports.rawquerypipeline_update;
var rawquerypipeline_castRay = instance.exports.rawquerypipeline_castRay;
var rawquerypipeline_castRayAndGetNormal = instance.exports.rawquerypipeline_castRayAndGetNormal;
var rawquerypipeline_intersectionsWithRay = instance.exports.rawquerypipeline_intersectionsWithRay;
var rawquerypipeline_intersectionWithShape = instance.exports.rawquerypipeline_intersectionWithShape;
var rawquerypipeline_projectPoint = instance.exports.rawquerypipeline_projectPoint;
var rawquerypipeline_projectPointAndGetFeature = instance.exports.rawquerypipeline_projectPointAndGetFeature;
var rawquerypipeline_intersectionsWithPoint = instance.exports.rawquerypipeline_intersectionsWithPoint;
var rawquerypipeline_castShape = instance.exports.rawquerypipeline_castShape;
var rawquerypipeline_intersectionsWithShape = instance.exports.rawquerypipeline_intersectionsWithShape;
var rawquerypipeline_collidersWithAabbIntersectingAabb = instance.exports.rawquerypipeline_collidersWithAabbIntersectingAabb;
var __wbg_rawdeserializedworld_free = instance.exports.__wbg_rawdeserializedworld_free;
var rawdeserializedworld_takeGravity = instance.exports.rawdeserializedworld_takeGravity;
var rawdeserializedworld_takeIntegrationParameters = instance.exports.rawdeserializedworld_takeIntegrationParameters;
var rawdeserializedworld_takeIslandManager = instance.exports.rawdeserializedworld_takeIslandManager;
var rawdeserializedworld_takeBroadPhase = instance.exports.rawdeserializedworld_takeBroadPhase;
var rawdeserializedworld_takeNarrowPhase = instance.exports.rawdeserializedworld_takeNarrowPhase;
var rawdeserializedworld_takeBodies = instance.exports.rawdeserializedworld_takeBodies;
var rawdeserializedworld_takeColliders = instance.exports.rawdeserializedworld_takeColliders;
var rawdeserializedworld_takeImpulseJoints = instance.exports.rawdeserializedworld_takeImpulseJoints;
var rawdeserializedworld_takeMultibodyJoints = instance.exports.rawdeserializedworld_takeMultibodyJoints;
var rawserializationpipeline_serializeAll = instance.exports.rawserializationpipeline_serializeAll;
var rawserializationpipeline_deserializeAll = instance.exports.rawserializationpipeline_deserializeAll;
var __wbg_rawcontactpair_free = instance.exports.__wbg_rawcontactpair_free;
var __wbg_rawraycolliderintersection_free = instance.exports.__wbg_rawraycolliderintersection_free;
var __wbg_rawrotation_free = instance.exports.__wbg_rawrotation_free;
var __wbg_rawvector_free = instance.exports.__wbg_rawvector_free;
var __wbg_rawsdpmatrix3_free = instance.exports.__wbg_rawsdpmatrix3_free;
var rawvector_set_x = instance.exports.rawvector_set_x;
var rawvector_set_z = instance.exports.rawvector_set_z;
var rawpointprojection_isInside = instance.exports.rawpointprojection_isInside;
var rawpointcolliderprojection_isInside = instance.exports.rawpointcolliderprojection_isInside;
var rawcolliderset_isHandleValid = instance.exports.rawcolliderset_isHandleValid;
var rawshapecontact_point1 = instance.exports.rawshapecontact_point1;
var rawshapecontact_point2 = instance.exports.rawshapecontact_point2;
var rawshapecontact_normal2 = instance.exports.rawshapecontact_normal2;
var rawpointprojection_point = instance.exports.rawpointprojection_point;
var rawpointcolliderprojection_point = instance.exports.rawpointcolliderprojection_point;
var rawrayintersection_normal = instance.exports.rawrayintersection_normal;
var rawshapecollidertoi_witness1 = instance.exports.rawshapecollidertoi_witness1;
var rawshapecontact_normal1 = instance.exports.rawshapecontact_normal1;
var rawshapecollidertoi_normal1 = instance.exports.rawshapecollidertoi_normal1;
var rawshapetoi_witness2 = instance.exports.rawshapetoi_witness2;
var rawserializationpipeline_new = instance.exports.rawserializationpipeline_new;
var rawintegrationparameters_erp = instance.exports.rawintegrationparameters_erp;
var rawrayintersection_toi = instance.exports.rawrayintersection_toi;
var rawraycollidertoi_toi = instance.exports.rawraycollidertoi_toi;
var rawshapetoi_toi = instance.exports.rawshapetoi_toi;
var rawshapecollidertoi_toi = instance.exports.rawshapecollidertoi_toi;
var rawrotation_x = instance.exports.rawrotation_x;
var rawrotation_z = instance.exports.rawrotation_z;
var rawvector_x = instance.exports.rawvector_x;
var rawvector_y = instance.exports.rawvector_y;
var rawvector_z = instance.exports.rawvector_z;
var rawraycolliderintersection_colliderHandle = instance.exports.rawraycolliderintersection_colliderHandle;
var rawraycollidertoi_colliderHandle = instance.exports.rawraycollidertoi_colliderHandle;
var rawshapecollidertoi_colliderHandle = instance.exports.rawshapecollidertoi_colliderHandle;
var rawcontactforceevent_collider1 = instance.exports.rawcontactforceevent_collider1;
var __wbg_rawserializationpipeline_free = instance.exports.__wbg_rawserializationpipeline_free;
var __wbindgen_add_to_stack_pointer = instance.exports.__wbindgen_add_to_stack_pointer;
var __wbindgen_free = instance.exports.__wbindgen_free;
var __wbindgen_malloc = instance.exports.__wbindgen_malloc;
var __wbindgen_exn_store = instance.exports.__wbindgen_exn_store;

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/math.js
var Vector3 = class {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
};
var VectorOps = class _VectorOps {
  static new(x, y, z) {
    return new Vector3(x, y, z);
  }
  static intoRaw(v) {
    return new RawVector(v.x, v.y, v.z);
  }
  static zeros() {
    return _VectorOps.new(0, 0, 0);
  }
  // FIXME: type ram: RawVector?
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = _VectorOps.new(raw.x, raw.y, raw.z);
    raw.free();
    return res;
  }
  static copy(out, input) {
    out.x = input.x;
    out.y = input.y;
    out.z = input.z;
  }
};
var Quaternion = class {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
};
var RotationOps = class {
  static identity() {
    return new Quaternion(0, 0, 0, 1);
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = new Quaternion(raw.x, raw.y, raw.z, raw.w);
    raw.free();
    return res;
  }
  static intoRaw(rot) {
    return new RawRotation(rot.x, rot.y, rot.z, rot.w);
  }
  static copy(out, input) {
    out.x = input.x;
    out.y = input.y;
    out.z = input.z;
    out.w = input.w;
  }
};
var SdpMatrix3 = class {
  constructor(elements) {
    this.elements = elements;
  }
  /**
   * Matrix element at row 1, column 1.
   */
  get m11() {
    return this.elements[0];
  }
  /**
   * Matrix element at row 1, column 2.
   */
  get m12() {
    return this.elements[1];
  }
  /**
   * Matrix element at row 2, column 1.
   */
  get m21() {
    return this.m12;
  }
  /**
   * Matrix element at row 1, column 3.
   */
  get m13() {
    return this.elements[2];
  }
  /**
   * Matrix element at row 3, column 1.
   */
  get m31() {
    return this.m13;
  }
  /**
   * Matrix element at row 2, column 2.
   */
  get m22() {
    return this.elements[3];
  }
  /**
   * Matrix element at row 2, column 3.
   */
  get m23() {
    return this.elements[4];
  }
  /**
   * Matrix element at row 3, column 2.
   */
  get m32() {
    return this.m23;
  }
  /**
   * Matrix element at row 3, column 3.
   */
  get m33() {
    return this.elements[5];
  }
};
var SdpMatrix3Ops = class {
  static fromRaw(raw) {
    const sdpMatrix3 = new SdpMatrix3(raw.elements());
    raw.free();
    return sdpMatrix3;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/rigid_body.js
var RigidBodyType;
(function(RigidBodyType2) {
  RigidBodyType2[RigidBodyType2["Dynamic"] = 0] = "Dynamic";
  RigidBodyType2[RigidBodyType2["Fixed"] = 1] = "Fixed";
  RigidBodyType2[RigidBodyType2["KinematicPositionBased"] = 2] = "KinematicPositionBased";
  RigidBodyType2[RigidBodyType2["KinematicVelocityBased"] = 3] = "KinematicVelocityBased";
})(RigidBodyType || (RigidBodyType = {}));
var RigidBody = class {
  constructor(rawSet, colliderSet, handle) {
    this.rawSet = rawSet;
    this.colliderSet = colliderSet;
    this.handle = handle;
  }
  /** @internal */
  finalizeDeserialization(colliderSet) {
    this.colliderSet = colliderSet;
  }
  /**
   * Checks if this rigid-body is still valid (i.e. that it has
   * not been deleted from the rigid-body set yet.
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translate.
   *
   * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockTranslations(locked, wakeUp) {
    return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate.
   *
   * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockRotations(locked, wakeUp) {
    return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
  }
  // #if DIM3
  /**
   * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  setEnabledTranslations(enableX, enableY, enableZ, wakeUp) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   * @deprecated use `this.setEnabledTranslations` with the same arguments instead.
   */
  restrictTranslations(enableX, enableY, enableZ, wakeUp) {
    this.setEnabledTranslations(enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  setEnabledRotations(enableX, enableY, enableZ, wakeUp) {
    return this.rawSet.rbSetEnabledRotations(this.handle, enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   * @deprecated use `this.setEnabledRotations` with the same arguments instead.
   */
  restrictRotations(enableX, enableY, enableZ, wakeUp) {
    this.setEnabledRotations(enableX, enableY, enableZ, wakeUp);
  }
  // #endif
  /**
   * The dominance group, in [-127, +127] this rigid-body is part of.
   */
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  /**
   * Sets the dominance group of this rigid-body.
   *
   * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
   */
  setDominanceGroup(group) {
    this.rawSet.rbSetDominanceGroup(this.handle, group);
  }
  /**
   * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
   *
   * @param enabled - If `true`, CCD will be enabled for this rigid-body.
   */
  enableCcd(enabled) {
    this.rawSet.rbEnableCcd(this.handle, enabled);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    let res = this.rawSet.rbTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    let res = this.rawSet.rbRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * The world-space next translation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextTranslation() {
    let res = this.rawSet.rbNextTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space next orientation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextRotation() {
    let res = this.rawSet.rbNextRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * Sets the translation of this rigid-body.
   *
   * @param tra - The world-space position of the rigid-body.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   *                 wasn't moving before modifying its position.
   */
  setTranslation(tra, wakeUp) {
    this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, tra.z, wakeUp);
  }
  /**
   * Sets the linear velocity fo this rigid-body.
   *
   * @param vel - The linear velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setLinvel(vel, wakeUp) {
    let rawVel = VectorOps.intoRaw(vel);
    this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
    rawVel.free();
  }
  /**
   * The scale factor applied to the gravity affecting
   * this rigid-body.
   */
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * this rigid-body.
   *
   * @param factor - The scale factor to set. A value of 0.0 means
   *   that this rigid-body will on longer be affected by gravity.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setGravityScale(factor, wakeUp) {
    this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
  }
  // #if DIM3
  /**
   * Sets the rotation quaternion of this rigid-body.
   *
   * This does nothing if a zero quaternion is provided.
   *
   * @param rotation - The rotation to set.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  setRotation(rot, wakeUp) {
    this.rawSet.rbSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w, wakeUp);
  }
  /**
   * Sets the angular velocity fo this rigid-body.
   *
   * @param vel - The angular velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setAngvel(vel, wakeUp) {
    let rawVel = VectorOps.intoRaw(vel);
    this.rawSet.rbSetAngvel(this.handle, rawVel, wakeUp);
    rawVel.free();
  }
  // #endif
  /**
   * If this rigid body is kinematic, sets its future translation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param t - The kinematic translation to set.
   */
  setNextKinematicTranslation(t) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
  }
  // #if DIM3
  /**
   * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setRotation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param rot - The kinematic rotation to set.
   */
  setNextKinematicRotation(rot) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  // #endif
  /**
   * The linear velocity of this rigid-body.
   */
  linvel() {
    return VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  // #if DIM3
  /**
   * The angular velocity of this rigid-body.
   */
  angvel() {
    return VectorOps.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  // #endif
  /**
   * The mass of this rigid-body.
   */
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  /**
   * The inverse mass taking into account translation locking.
   */
  effectiveInvMass() {
    return VectorOps.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  /**
   * The inverse of the mass of a rigid-body.
   *
   * If this is zero, the rigid-body is assumed to have infinite mass.
   */
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  /**
   * The center of mass of a rigid-body expressed in its local-space.
   */
  localCom() {
    return VectorOps.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  /**
   * The world-space center of mass of the rigid-body.
   */
  worldCom() {
    return VectorOps.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  // #if DIM3
  /**
   * The inverse of the principal angular inertia of the rigid-body.
   *
   * Components set to zero are assumed to be infinite along the corresponding principal axis.
   */
  invPrincipalInertiaSqrt() {
    return VectorOps.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The angular inertia along the principal inertia axes of the rigid-body.
   */
  principalInertia() {
    return VectorOps.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The principal vectors of the local angular inertia tensor of the rigid-body.
   */
  principalInertiaLocalFrame() {
    return RotationOps.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
   * taking into account rotation locking.
   */
  effectiveWorldInvInertiaSqrt() {
    return SdpMatrix3Ops.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The effective world-space angular inertia (that takes the potential rotation locking into account) of
   * this rigid-body.
   */
  effectiveAngularInertia() {
    return SdpMatrix3Ops.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
  }
  // #endif
  /**
   * Put this rigid body to sleep.
   *
   * A sleeping body no longer moves and is no longer simulated by the physics engine unless
   * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
   * external forces like contacts.
   */
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  /**
   * Wakes this rigid-body up.
   *
   * A dynamic rigid-body that does not move during several consecutive frames will
   * be put to sleep by the physics engine, i.e., it will stop being simulated in order
   * to avoid useless computations.
   * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
   * the position of a dynamic body so that it is properly simulated afterwards.
   */
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  /**
   * Is CCD enabled for this rigid-body?
   */
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  /**
   * The number of colliders attached to this rigid-body.
   */
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  /**
   * Retrieves the `i-th` collider attached to this rigid-body.
   *
   * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
   *         This index is **not** the same as the unique identifier of the collider.
   */
  collider(i) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, i));
  }
  /**
   * Sets whether this rigid-body is enabled or not.
   *
   * @param enabled - Set to `false` to disable this rigid-body and all its attached colliders.
   */
  setEnabled(enabled) {
    this.rawSet.rbSetEnabled(this.handle, enabled);
  }
  /**
   * Is this rigid-body enabled?
   */
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  /**
   * The status of this rigid-body: static, dynamic, or kinematic.
   */
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  /**
   * Set a new status for this rigid-body: static, dynamic, or kinematic.
   */
  setBodyType(type, wakeUp) {
    return this.rawSet.rbSetBodyType(this.handle, type, wakeUp);
  }
  /**
   * Is this rigid-body sleeping?
   */
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  /**
   * Is the velocity of this rigid-body not zero?
   */
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  /**
   * Is this rigid-body static?
   */
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  /**
   * Is this rigid-body kinematic?
   */
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  /**
   * Is this rigid-body dynamic?
   */
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  /**
   * The linear damping coefficient of this rigid-body.
   */
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  /**
   * The angular damping coefficient of this rigid-body.
   */
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setLinearDamping(factor) {
    this.rawSet.rbSetLinearDamping(this.handle, factor);
  }
  /**
   * Recompute the mass-properties of this rigid-bodies based on its currently attached colliders.
   */
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  /**
   * Sets the rigid-body's additional mass.
   *
   * The total angular inertia of the rigid-body will be scaled automatically based on this additional mass. If this
   * scaling effect isn’t desired, use Self::additional_mass_properties instead of this method.
   *
   * This is only the "additional" mass because the total mass of the rigid-body is equal to the sum of this
   * additional mass and the mass computed from the colliders (with non-zero densities) attached to this rigid-body.
   *
   * That total mass (which includes the attached colliders’ contributions) will be updated at the name physics step,
   * or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous additional mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc::setAdditionalMass`, or
   * `RigidBodyDesc.setAdditionalMassfProperties` for this rigid-body.
   *
   * @param mass - The additional mass to set.
   * @param wakeUp - If `true` then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMass(mass, wakeUp) {
    this.rawSet.rbSetAdditionalMass(this.handle, mass, wakeUp);
  }
  // #if DIM3
  /**
   * Sets the rigid-body's additional mass-properties.
   *
   * This is only the "additional" mass-properties because the total mass-properties of the rigid-body is equal to the
   * sum of this additional mass-properties and the mass computed from the colliders (with non-zero densities) attached
   * to this rigid-body.
   *
   * That total mass-properties (which include the attached colliders’ contributions) will be updated at the name
   * physics step, or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc.setAdditionalMass`, or `RigidBodyDesc.setAdditionalMassProperties`
   * for this rigid-body.
   *
   * If `wake_up` is true then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame, wakeUp) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(angularInertiaLocalFrame);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, mass, rawCom, rawPrincipalInertia, rawInertiaFrame, wakeUp);
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
  }
  // #endif
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setAngularDamping(factor) {
    this.rawSet.rbSetAngularDamping(this.handle, factor);
  }
  /**
   * Resets to zero the user forces (but not torques) applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetForces(wakeUp) {
    this.rawSet.rbResetForces(this.handle, wakeUp);
  }
  /**
   * Resets to zero the user torques applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetTorques(wakeUp) {
    this.rawSet.rbResetTorques(this.handle, wakeUp);
  }
  /**
   * Adds a force at the center-of-mass of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForce(force, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    this.rawSet.rbAddForce(this.handle, rawForce, wakeUp);
    rawForce.free();
  }
  /**
   * Applies an impulse at the center-of-mass of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulse(impulse, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
    rawImpulse.free();
  }
  // #if DIM3
  /**
   * Adds a torque at the center-of-mass of this rigid-body.
   *
   * @param torque - the world-space torque to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addTorque(torque, wakeUp) {
    const rawTorque = VectorOps.intoRaw(torque);
    this.rawSet.rbAddTorque(this.handle, rawTorque, wakeUp);
    rawTorque.free();
  }
  // #endif
  // #if DIM3
  /**
   * Applies an impulsive torque at the center-of-mass of this rigid-body.
   *
   * @param torqueImpulse - the world-space torque impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyTorqueImpulse(torqueImpulse, wakeUp) {
    const rawTorqueImpulse = VectorOps.intoRaw(torqueImpulse);
    this.rawSet.rbApplyTorqueImpulse(this.handle, rawTorqueImpulse, wakeUp);
    rawTorqueImpulse.free();
  }
  // #endif
  /**
   * Adds a force at the given world-space point of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForceAtPoint(force, point, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbAddForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
    rawForce.free();
    rawPoint.free();
  }
  /**
   * Applies an impulse at the given world-space point of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulseAtPoint(impulse, point, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, rawImpulse, rawPoint, wakeUp);
    rawImpulse.free();
    rawPoint.free();
  }
};
var RigidBodyDesc = class _RigidBodyDesc {
  constructor(status) {
    this.enabled = true;
    this.status = status;
    this.translation = VectorOps.zeros();
    this.rotation = RotationOps.identity();
    this.gravityScale = 1;
    this.linvel = VectorOps.zeros();
    this.mass = 0;
    this.massOnly = false;
    this.centerOfMass = VectorOps.zeros();
    this.translationsEnabledX = true;
    this.translationsEnabledY = true;
    this.angvel = VectorOps.zeros();
    this.principalAngularInertia = VectorOps.zeros();
    this.angularInertiaLocalFrame = RotationOps.identity();
    this.translationsEnabledZ = true;
    this.rotationsEnabledX = true;
    this.rotationsEnabledY = true;
    this.rotationsEnabledZ = true;
    this.linearDamping = 0;
    this.angularDamping = 0;
    this.canSleep = true;
    this.sleeping = false;
    this.ccdEnabled = false;
    this.dominanceGroup = 0;
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   */
  static dynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   */
  static kinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   */
  static kinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   */
  static fixed() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   *
   * @deprecated The method has been renamed to `.dynamic()`.
   */
  static newDynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicPositionBased()`.
   */
  static newKinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
   */
  static newKinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   *
   * @deprecated The method has been renamed to `.fixed()`.
   */
  static newStatic() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  setDominanceGroup(group) {
    this.dominanceGroup = group;
    return this;
  }
  /**
   * Sets whether the created rigid-body will be enabled or disabled.
   * @param enabled − If set to `false` the rigid-body will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  // #if DIM3
  /**
   * Sets the initial translation of the rigid-body to create.
   *
   * @param tra - The translation to set.
   */
  setTranslation(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y, z };
    return this;
  }
  // #endif
  /**
   * Sets the initial rotation of the rigid-body to create.
   *
   * @param rot - The rotation to set.
   */
  setRotation(rot) {
    RotationOps.copy(this.rotation, rot);
    return this;
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * the rigid-body being built.
   *
   * @param scale - The scale factor. Set this to `0.0` if the rigid-body
   *   needs to ignore gravity.
   */
  setGravityScale(scale6) {
    this.gravityScale = scale6;
    return this;
  }
  /**
   * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
   *
   * @param mass − The initial mass of the rigid-body to create.
   */
  setAdditionalMass(mass) {
    this.mass = mass;
    this.massOnly = true;
    return this;
  }
  // #if DIM3
  /**
   * Sets the initial linear velocity of the rigid-body to create.
   *
   * @param x - The linear velocity to set along the `x` axis.
   * @param y - The linear velocity to set along the `y` axis.
   * @param z - The linear velocity to set along the `z` axis.
   */
  setLinvel(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The linvel components must be numbers.");
    this.linvel = { x, y, z };
    return this;
  }
  /**
   * Sets the initial angular velocity of the rigid-body to create.
   *
   * @param vel - The angular velocity to set.
   */
  setAngvel(vel) {
    VectorOps.copy(this.angvel, vel);
    return this;
  }
  /**
   * Sets the mass properties of the rigid-body being built.
   *
   * Note that the final mass properties of the rigid-bodies depends
   * on the initial mass-properties of the rigid-body (set by this method)
   * to which is added the contributions of all the colliders with non-zero density
   * attached to this rigid-body.
   *
   * Therefore, if you want your provided mass properties to be the final
   * mass properties of your rigid-body, don't attach colliders to it, or
   * only attach colliders with densities equal to zero.
   *
   * @param mass − The initial mass of the rigid-body to create.
   * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
   * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
   *                                  These are the eigenvalues of the angular inertia matrix.
   * @param angularInertiaLocalFrame − The initial local angular inertia frame of the rigid-body to create.
   *                                   These are the eigenvectors of the angular inertia matrix.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    VectorOps.copy(this.principalAngularInertia, principalAngularInertia);
    RotationOps.copy(this.angularInertiaLocalFrame, angularInertiaLocalFrame);
    this.massOnly = false;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   * @param translationsEnabledZ - Are translations along the Z axis enabled?
   */
  enabledTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ) {
    this.translationsEnabledX = translationsEnabledX;
    this.translationsEnabledY = translationsEnabledY;
    this.translationsEnabledZ = translationsEnabledZ;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   * @param translationsEnabledZ - Are translations along the Z axis enabled?
   * @deprecated use `this.enabledTranslations` with the same arguments instead.
   */
  restrictTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ) {
    return this.enabledTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ);
  }
  /**
   * Locks all translations that would have resulted from forces on
   * the created rigid-body.
   */
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  /**
   * Allow rotation of this rigid-body only along specific axes.
   * @param rotationsEnabledX - Are rotations along the X axis enabled?
   * @param rotationsEnabledY - Are rotations along the y axis enabled?
   * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
   */
  enabledRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ) {
    this.rotationsEnabledX = rotationsEnabledX;
    this.rotationsEnabledY = rotationsEnabledY;
    this.rotationsEnabledZ = rotationsEnabledZ;
    return this;
  }
  /**
   * Allow rotation of this rigid-body only along specific axes.
   * @param rotationsEnabledX - Are rotations along the X axis enabled?
   * @param rotationsEnabledY - Are rotations along the y axis enabled?
   * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
   * @deprecated use `this.enabledRotations` with the same arguments instead.
   */
  restrictRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ) {
    return this.enabledRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ);
  }
  /**
   * Locks all rotations that would have resulted from forces on
   * the created rigid-body.
   */
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  // #endif
  /**
   * Sets the linear damping of the rigid-body to create.
   *
   * This will progressively slowdown the translational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the translational slowdown will be.
   */
  setLinearDamping(damping) {
    this.linearDamping = damping;
    return this;
  }
  /**
   * Sets the angular damping of the rigid-body to create.
   *
   * This will progressively slowdown the rotational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the rotational slowdown will be.
   */
  setAngularDamping(damping) {
    this.angularDamping = damping;
    return this;
  }
  /**
   * Sets whether or not the rigid-body to create can sleep.
   *
   * @param can - true if the rigid-body can sleep, false if it can't.
   */
  setCanSleep(can) {
    this.canSleep = can;
    return this;
  }
  /**
   * Sets whether or not the rigid-body is to be created asleep.
   *
   * @param can - true if the rigid-body should be in sleep, default false.
   */
  setSleeping(sleeping) {
    this.sleeping = sleeping;
    return this;
  }
  /**
   * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
   *
   * @param enabled - true if the rigid-body has CCD enabled.
   */
  setCcdEnabled(enabled) {
    this.ccdEnabled = enabled;
    return this;
  }
  /**
   * Sets the user-defined object of this rigid-body.
   *
   * @param userData - The user-defined object to set.
   */
  setUserData(data) {
    this.userData = data;
    return this;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/coarena.js
var Coarena = class {
  constructor() {
    this.fconv = new Float64Array(1);
    this.uconv = new Uint32Array(this.fconv.buffer);
    this.data = new Array();
    this.size = 0;
  }
  set(handle, data) {
    let i = this.index(handle);
    while (this.data.length <= i) {
      this.data.push(null);
    }
    if (this.data[i] == null)
      this.size += 1;
    this.data[i] = data;
  }
  len() {
    return this.size;
  }
  delete(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      if (this.data[i] != null)
        this.size -= 1;
      this.data[i] = null;
    }
  }
  clear() {
    this.data = new Array();
  }
  get(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      return this.data[i];
    } else {
      return null;
    }
  }
  forEach(f) {
    for (const elt of this.data) {
      if (elt != null)
        f(elt);
    }
  }
  getAll() {
    return this.data.filter((elt) => elt != null);
  }
  index(handle) {
    this.fconv[0] = handle;
    return this.uconv[0];
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js
var RigidBodySet = class {
  constructor(raw) {
    this.raw = raw || new RawRigidBodySet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachRigidBodyHandle((handle) => {
        this.map.set(handle, new RigidBody(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this rigid-body set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Internal method, do not call this explicitly.
   */
  finalizeDeserialization(colliderSet) {
    this.map.forEach((rb) => rb.finalizeDeserialization(colliderSet));
  }
  /**
   * Creates a new rigid-body and return its integer handle.
   *
   * @param desc - The description of the rigid-body to create.
   */
  createRigidBody(colliderSet, desc) {
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawLv = VectorOps.intoRaw(desc.linvel);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let rawAv = VectorOps.intoRaw(desc.angvel);
    let rawPrincipalInertia = VectorOps.intoRaw(desc.principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(desc.angularInertiaLocalFrame);
    let handle = this.raw.createRigidBody(
      desc.enabled,
      rawTra,
      rawRot,
      desc.gravityScale,
      desc.mass,
      desc.massOnly,
      rawCom,
      rawLv,
      // #if DIM3
      rawAv,
      rawPrincipalInertia,
      rawInertiaFrame,
      desc.translationsEnabledX,
      desc.translationsEnabledY,
      desc.translationsEnabledZ,
      desc.rotationsEnabledX,
      desc.rotationsEnabledY,
      desc.rotationsEnabledZ,
      // #endif
      desc.linearDamping,
      desc.angularDamping,
      desc.status,
      desc.canSleep,
      desc.sleeping,
      desc.ccdEnabled,
      desc.dominanceGroup
    );
    rawTra.free();
    rawRot.free();
    rawLv.free();
    rawCom.free();
    rawAv.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
    const body = new RigidBody(this.raw, colliderSet, handle);
    body.userData = desc.userData;
    this.map.set(handle, body);
    return body;
  }
  /**
   * Removes a rigid-body from this set.
   *
   * This will also remove all the colliders and joints attached to the rigid-body.
   *
   * @param handle - The integer handle of the rigid-body to remove.
   * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
   * @param impulseJoints - The set of impulse joints that may contain joints attached to the removed rigid-body.
   * @param multibodyJoints - The set of multibody joints that may contain joints attached to the removed rigid-body.
   */
  remove(handle, islands, colliders, impulseJoints, multibodyJoints) {
    for (let i = 0; i < this.raw.rbNumColliders(handle); i += 1) {
      colliders.unmap(this.raw.rbCollider(handle, i));
    }
    impulseJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => impulseJoints.unmap(handle2));
    multibodyJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => multibodyJoints.unmap(handle2));
    this.raw.remove(handle, islands.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    this.map.delete(handle);
  }
  /**
   * The number of rigid-bodies on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a rigid-body with the given handle?
   *
   * @param handle - The rigid-body handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each rigid-body contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBody(islands, f) {
    islands.forEachActiveRigidBodyHandle((handle) => {
      f(this.get(handle));
    });
  }
  /**
   * Gets all rigid-bodies in the list.
   *
   * @returns rigid-bodies list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js
var IntegrationParameters = class {
  constructor(raw) {
    this.raw = raw || new RawIntegrationParameters();
  }
  /**
   * Free the WASM memory used by these integration parameters.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * The timestep length (default: `1.0 / 60.0`)
   */
  get dt() {
    return this.raw.dt;
  }
  /**
   * The Error Reduction Parameter in `[0, 1]` is the proportion of
   * the positional error to be corrected at each time step (default: `0.2`).
   */
  get erp() {
    return this.raw.erp;
  }
  /**
   * Amount of penetration the engine wont attempt to correct (default: `0.001m`).
   */
  get allowedLinearError() {
    return this.raw.allowedLinearError;
  }
  /**
   * The maximal distance separating two objects that will generate predictive contacts (default: `0.002`).
   */
  get predictionDistance() {
    return this.raw.predictionDistance;
  }
  /**
   * Maximum number of iterations performed by the velocity constraints solver (default: `4`).
   */
  get maxVelocityIterations() {
    return this.raw.maxVelocityIterations;
  }
  /**
   * Maximum number of friction iterations performed by the position-based constraints solver (default: `1`).
   */
  get maxVelocityFrictionIterations() {
    return this.raw.maxVelocityFrictionIterations;
  }
  /**
   * Maximum number of stabilization iterations performed by the position-based constraints solver (default: `1`).
   */
  get maxStabilizationIterations() {
    return this.raw.maxStabilizationIterations;
  }
  /**
   * Minimum number of dynamic bodies in each active island (default: `128`).
   */
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  /**
   * Maximum number of substeps performed by the  solver (default: `1`).
   */
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(value) {
    this.raw.dt = value;
  }
  set erp(value) {
    this.raw.erp = value;
  }
  set allowedLinearError(value) {
    this.raw.allowedLinearError = value;
  }
  set predictionDistance(value) {
    this.raw.predictionDistance = value;
  }
  set maxVelocityIterations(value) {
    this.raw.maxVelocityIterations = value;
  }
  set maxVelocityFrictionIterations(value) {
    this.raw.maxVelocityFrictionIterations = value;
  }
  set maxStabilizationIterations(value) {
    this.raw.maxStabilizationIterations = value;
  }
  set minIslandSize(value) {
    this.raw.minIslandSize = value;
  }
  set maxCcdSubsteps(value) {
    this.raw.maxCcdSubsteps = value;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/impulse_joint.js
var JointType;
(function(JointType2) {
  JointType2[JointType2["Revolute"] = 0] = "Revolute";
  JointType2[JointType2["Fixed"] = 1] = "Fixed";
  JointType2[JointType2["Prismatic"] = 2] = "Prismatic";
  JointType2[JointType2["Spherical"] = 3] = "Spherical";
})(JointType || (JointType = {}));
var MotorModel;
(function(MotorModel2) {
  MotorModel2[MotorModel2["AccelerationBased"] = 0] = "AccelerationBased";
  MotorModel2[MotorModel2["ForceBased"] = 1] = "ForceBased";
})(MotorModel || (MotorModel = {}));
var ImpulseJoint = class _ImpulseJoint {
  constructor(rawSet, bodySet, handle) {
    this.rawSet = rawSet;
    this.bodySet = bodySet;
    this.handle = handle;
  }
  static newTyped(rawSet, bodySet, handle) {
    switch (rawSet.jointType(handle)) {
      case JointType.Revolute:
        return new RevoluteImpulseJoint(rawSet, bodySet, handle);
      case JointType.Prismatic:
        return new PrismaticImpulseJoint(rawSet, bodySet, handle);
      case JointType.Fixed:
        return new FixedImpulseJoint(rawSet, bodySet, handle);
      case JointType.Spherical:
        return new SphericalImpulseJoint(rawSet, bodySet, handle);
      default:
        return new _ImpulseJoint(rawSet, bodySet, handle);
    }
  }
  /** @internal */
  finalizeDeserialization(bodySet) {
    this.bodySet = bodySet;
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * The first rigid-body this joint it attached to.
   */
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  /**
   * The second rigid-body this joint is attached to.
   */
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  /**
   * The type of this joint given as a string.
   */
  type() {
    return this.rawSet.jointType(this.handle);
  }
  // #if DIM3
  /**
   * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
   */
  frameX1() {
    return RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The rotation matrix that aligns this joint's second local axis to the `x` axis.
   */
  frameX2() {
    return RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  // #endif
  /**
   * The position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  anchor1() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  /**
   * The position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  anchor2() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  /**
   * Sets the position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  setAnchor1(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor1(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Sets the position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  setAnchor2(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor2(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitImpulseJoint = class extends ImpulseJoint {
  /**
   * Are the limits enabled for this joint?
   */
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  /**
   * The min limit of this joint.
   */
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  /**
   * The max limit of this joint.
   */
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  /**
   * Sets the limits of this joint.
   *
   * @param min - The minimum bound of this joint’s free coordinate.
   * @param max - The maximum bound of this joint’s free coordinate.
   */
  setLimits(min, max) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), min, max);
  }
  configureMotorModel(model) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), model);
  }
  configureMotorVelocity(targetVel, factor) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), targetVel, factor);
  }
  configureMotorPosition(targetPos, stiffness, damping) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), targetPos, stiffness, damping);
  }
  configureMotor(targetPos, targetVel, stiffness, damping) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), targetPos, targetVel, stiffness, damping);
  }
};
var FixedImpulseJoint = class extends ImpulseJoint {
};
var PrismaticImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};
var SphericalImpulseJoint = class extends ImpulseJoint {
};
var JointData = class _JointData {
  constructor() {
  }
  /**
   * Creates a new joint descriptor that builds a Fixed joint.
   *
   * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
   * anchor and local frames coincide in world-space.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
   */
  static fixed(anchor1, frame1, anchor2, frame2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.frame1 = frame1;
    res.frame2 = frame2;
    res.jointType = JointType.Fixed;
    return res;
  }
  // #if DIM3
  /**
   * Create a new joint descriptor that builds spherical joints.
   *
   * A spherical joint allows three relative rotational degrees of freedom
   * by preventing any relative translation between the anchors of the
   * two attached rigid-bodies.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   */
  static spherical(anchor1, anchor2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.jointType = JointType.Spherical;
    return res;
  }
  /**
   * Creates a new joint descriptor that builds a Prismatic joint.
   *
   * A prismatic joint removes all the degrees of freedom between the
   * affected bodies, except for the translation along one axis.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
   */
  static prismatic(anchor1, anchor2, axis) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.axis = axis;
    res.jointType = JointType.Prismatic;
    return res;
  }
  /**
   * Create a new joint descriptor that builds Revolute joints.
   *
   * A revolute joint removes all degrees of freedom between the affected
   * bodies except for the rotation along one axis.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
   */
  static revolute(anchor1, anchor2, axis) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.axis = axis;
    res.jointType = JointType.Revolute;
    return res;
  }
  // #endif
  intoRaw() {
    let rawA1 = VectorOps.intoRaw(this.anchor1);
    let rawA2 = VectorOps.intoRaw(this.anchor2);
    let rawAx;
    let result;
    let limitsEnabled = false;
    let limitsMin = 0;
    let limitsMax = 0;
    switch (this.jointType) {
      case JointType.Fixed:
        let rawFra1 = RotationOps.intoRaw(this.frame1);
        let rawFra2 = RotationOps.intoRaw(this.frame2);
        result = RawGenericJoint.fixed(rawA1, rawFra1, rawA2, rawFra2);
        rawFra1.free();
        rawFra2.free();
        break;
      case JointType.Prismatic:
        rawAx = VectorOps.intoRaw(this.axis);
        if (!!this.limitsEnabled) {
          limitsEnabled = true;
          limitsMin = this.limits[0];
          limitsMax = this.limits[1];
        }
        result = RawGenericJoint.prismatic(rawA1, rawA2, rawAx, limitsEnabled, limitsMin, limitsMax);
        rawAx.free();
        break;
      case JointType.Spherical:
        result = RawGenericJoint.spherical(rawA1, rawA2);
        break;
      case JointType.Revolute:
        rawAx = VectorOps.intoRaw(this.axis);
        result = RawGenericJoint.revolute(rawA1, rawA2, rawAx);
        rawAx.free();
        break;
    }
    rawA1.free();
    rawA2.free();
    return result;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/impulse_joint_set.js
var ImpulseJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawImpulseJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, ImpulseJoint.newTyped(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((joint) => joint.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(bodies, desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = ImpulseJoint.newTyped(this.raw, bodies, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wakeUp - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wakeUp) {
    this.raw.remove(handle, wakeUp);
    this.unmap(handle);
  }
  /**
   * Calls the given closure with the integer handle of each impulse joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each impulse joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/multibody_joint.js
var MultibodyJoint = class _MultibodyJoint {
  constructor(rawSet, handle) {
    this.rawSet = rawSet;
    this.handle = handle;
  }
  static newTyped(rawSet, handle) {
    switch (rawSet.jointType(handle)) {
      case JointType.Revolute:
        return new RevoluteMultibodyJoint(rawSet, handle);
      case JointType.Prismatic:
        return new PrismaticMultibodyJoint(rawSet, handle);
      case JointType.Fixed:
        return new FixedMultibodyJoint(rawSet, handle);
      case JointType.Spherical:
        return new SphericalMultibodyJoint(rawSet, handle);
      default:
        return new _MultibodyJoint(rawSet, handle);
    }
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  // /**
  //  * The unique integer identifier of the first rigid-body this joint it attached to.
  //  */
  // public bodyHandle1(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle1(this.handle);
  // }
  //
  // /**
  //  * The unique integer identifier of the second rigid-body this joint is attached to.
  //  */
  // public bodyHandle2(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle2(this.handle);
  // }
  //
  // /**
  //  * The type of this joint given as a string.
  //  */
  // public type(): JointType {
  //     return this.rawSet.jointType(this.handle);
  // }
  //
  // // #if DIM3
  // /**
  //  * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
  //  */
  // public frameX1(): Rotation {
  //     return RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
  // }
  //
  // // #endif
  //
  // // #if DIM3
  // /**
  //  * The rotation matrix that aligns this joint's second local axis to the `x` axis.
  //  */
  // public frameX2(): Rotation {
  //     return RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
  // }
  //
  // // #endif
  //
  // /**
  //  * The position of the first anchor of this joint.
  //  *
  //  * The first anchor gives the position of the points application point on the
  //  * local frame of the first rigid-body it is attached to.
  //  */
  // public anchor1(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  // }
  //
  // /**
  //  * The position of the second anchor of this joint.
  //  *
  //  * The second anchor gives the position of the points application point on the
  //  * local frame of the second rigid-body it is attached to.
  //  */
  // public anchor2(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  // }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitMultibodyJoint = class extends MultibodyJoint {
};
var FixedMultibodyJoint = class extends MultibodyJoint {
};
var PrismaticMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};
var SphericalMultibodyJoint = class extends MultibodyJoint {
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/multibody_joint_set.js
var MultibodyJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawMultibodyJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, MultibodyJoint.newTyped(this.raw, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = MultibodyJoint.newTyped(this.raw, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wake_up) {
    this.raw.remove(handle, wake_up);
    this.map.delete(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Calls the given closure with the integer handle of each multibody joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each multibody joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js
var CoefficientCombineRule;
(function(CoefficientCombineRule2) {
  CoefficientCombineRule2[CoefficientCombineRule2["Average"] = 0] = "Average";
  CoefficientCombineRule2[CoefficientCombineRule2["Min"] = 1] = "Min";
  CoefficientCombineRule2[CoefficientCombineRule2["Multiply"] = 2] = "Multiply";
  CoefficientCombineRule2[CoefficientCombineRule2["Max"] = 3] = "Max";
})(CoefficientCombineRule || (CoefficientCombineRule = {}));

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js
var CCDSolver = class {
  constructor(raw) {
    this.raw = raw || new RawCCDSolver();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/dynamics/island_manager.js
var IslandManager = class {
  constructor(raw) {
    this.raw = raw || new RawIslandManager();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Applies the given closure to the handle of each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBodyHandle(f) {
    this.raw.forEachActiveRigidBodyHandle(f);
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/broad_phase.js
var BroadPhase = class {
  constructor(raw) {
    this.raw = raw || new RawBroadPhase();
  }
  /**
   * Release the WASM memory occupied by this broad-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/narrow_phase.js
var NarrowPhase = class {
  constructor(raw) {
    this.raw = raw || new RawNarrowPhase();
    this.tempManifold = new TempContactManifold(null);
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactsWith(collider1, f) {
    this.raw.contacts_with(collider1, f);
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionsWith(collider1, f) {
    this.raw.intersections_with(collider1, f);
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    const rawPair = this.raw.contact_pair(collider1, collider2);
    if (!!rawPair) {
      const flipped = rawPair.collider1() != collider1;
      let i;
      for (i = 0; i < rawPair.numContactManifolds(); ++i) {
        this.tempManifold.raw = rawPair.contactManifold(i);
        if (!!this.tempManifold.raw) {
          f(this.tempManifold, flipped);
        }
        this.tempManifold.free();
      }
      rawPair.free();
    }
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.raw.intersection_pair(collider1, collider2);
  }
};
var TempContactManifold = class {
  constructor(raw) {
    this.raw = raw;
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  normal() {
    return VectorOps.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return VectorOps.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return VectorOps.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p1(i));
  }
  localContactPoint2(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p2(i));
  }
  contactDist(i) {
    return this.raw.contact_dist(i);
  }
  contactFid1(i) {
    return this.raw.contact_fid1(i);
  }
  contactFid2(i) {
    return this.raw.contact_fid2(i);
  }
  contactImpulse(i) {
    return this.raw.contact_impulse(i);
  }
  // #if DIM3
  contactTangentImpulseX(i) {
    return this.raw.contact_tangent_impulse_x(i);
  }
  contactTangentImpulseY(i) {
    return this.raw.contact_tangent_impulse_y(i);
  }
  // #endif
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_point(i));
  }
  solverContactDist(i) {
    return this.raw.solver_contact_dist(i);
  }
  solverContactFriction(i) {
    return this.raw.solver_contact_friction(i);
  }
  solverContactRestitution(i) {
    return this.raw.solver_contact_restitution(i);
  }
  solverContactTangentVelocity(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_tangent_velocity(i));
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/contact.js
var ShapeContact = class _ShapeContact {
  constructor(dist, point1, point2, normal1, normal2) {
    this.distance = dist;
    this.point1 = point1;
    this.point2 = point2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _ShapeContact(raw.distance(), VectorOps.fromRaw(raw.point1()), VectorOps.fromRaw(raw.point2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/feature.js
var FeatureType;
(function(FeatureType2) {
  FeatureType2[FeatureType2["Vertex"] = 0] = "Vertex";
  FeatureType2[FeatureType2["Edge"] = 1] = "Edge";
  FeatureType2[FeatureType2["Face"] = 2] = "Face";
  FeatureType2[FeatureType2["Unknown"] = 3] = "Unknown";
})(FeatureType || (FeatureType = {}));

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/point.js
var PointProjection = class _PointProjection {
  constructor(point, isInside) {
    this.point = point;
    this.isInside = isInside;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _PointProjection(VectorOps.fromRaw(raw.point()), raw.isInside());
    raw.free();
    return result;
  }
};
var PointColliderProjection = class _PointColliderProjection {
  constructor(collider, point, isInside, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.point = point;
    this.isInside = isInside;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _PointColliderProjection(colliderSet.get(raw.colliderHandle()), VectorOps.fromRaw(raw.point()), raw.isInside(), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/ray.js
var Ray = class {
  /**
   * Builds a ray from its origin and direction.
   *
   * @param origin - The ray's starting point.
   * @param dir - The ray's direction of propagation.
   */
  constructor(origin, dir) {
    this.origin = origin;
    this.dir = dir;
  }
  pointAt(t) {
    return {
      x: this.origin.x + this.dir.x * t,
      y: this.origin.y + this.dir.y * t,
      // #if DIM3
      z: this.origin.z + this.dir.z * t
      // #endif
    };
  }
};
var RayIntersection = class _RayIntersection {
  constructor(toi, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.toi = toi;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _RayIntersection(raw.toi(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderIntersection = class _RayColliderIntersection {
  constructor(collider, toi, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.toi = toi;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderIntersection(colliderSet.get(raw.colliderHandle()), raw.toi(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderToi = class _RayColliderToi {
  constructor(collider, toi) {
    this.collider = collider;
    this.toi = toi;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderToi(colliderSet.get(raw.colliderHandle()), raw.toi());
    raw.free();
    return result;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/toi.js
var ShapeTOI = class _ShapeTOI {
  constructor(toi, witness1, witness2, normal1, normal2) {
    this.toi = toi;
    this.witness1 = witness1;
    this.witness2 = witness2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ShapeTOI(raw.toi(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};
var ShapeColliderTOI = class _ShapeColliderTOI extends ShapeTOI {
  constructor(collider, toi, witness1, witness2, normal1, normal2) {
    super(toi, witness1, witness2, normal1, normal2);
    this.collider = collider;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ShapeColliderTOI(colliderSet.get(raw.colliderHandle()), raw.toi(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/shape.js
var Shape = class {
  /**
   * instant mode without cache
   */
  static fromRaw(rawSet, handle) {
    const rawType = rawSet.coShapeType(handle);
    let extents;
    let borderRadius;
    let vs;
    let indices;
    let halfHeight;
    let radius;
    let normal;
    switch (rawType) {
      case ShapeType.Ball:
        return new Ball(rawSet.coRadius(handle));
      case ShapeType.Cuboid:
        extents = rawSet.coHalfExtents(handle);
        return new Cuboid(extents.x, extents.y, extents.z);
      case ShapeType.RoundCuboid:
        extents = rawSet.coHalfExtents(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCuboid(extents.x, extents.y, extents.z, borderRadius);
      case ShapeType.Capsule:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Capsule(halfHeight, radius);
      case ShapeType.Segment:
        vs = rawSet.coVertices(handle);
        return new Segment(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]));
      case ShapeType.Polyline:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new Polyline(vs, indices);
      case ShapeType.Triangle:
        vs = rawSet.coVertices(handle);
        return new Triangle(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]), VectorOps.new(vs[6], vs[7], vs[8]));
      case ShapeType.RoundTriangle:
        vs = rawSet.coVertices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundTriangle(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]), VectorOps.new(vs[6], vs[7], vs[8]), borderRadius);
      case ShapeType.HalfSpace:
        normal = VectorOps.fromRaw(rawSet.coHalfspaceNormal(handle));
        return new HalfSpace(normal);
      case ShapeType.TriMesh:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new TriMesh(vs, indices);
      case ShapeType.HeightField:
        const scale6 = rawSet.coHeightfieldScale(handle);
        const heights = rawSet.coHeightfieldHeights(handle);
        const nrows = rawSet.coHeightfieldNRows(handle);
        const ncols = rawSet.coHeightfieldNCols(handle);
        return new Heightfield(nrows, ncols, heights, scale6);
      case ShapeType.ConvexPolyhedron:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new ConvexPolyhedron(vs, indices);
      case ShapeType.RoundConvexPolyhedron:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundConvexPolyhedron(vs, indices, borderRadius);
      case ShapeType.Cylinder:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Cylinder(halfHeight, radius);
      case ShapeType.RoundCylinder:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCylinder(halfHeight, radius, borderRadius);
      case ShapeType.Cone:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Cone(halfHeight, radius);
      case ShapeType.RoundCone:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCone(halfHeight, radius, borderRadius);
      default:
        throw new Error("unknown shape type: " + rawType);
    }
  }
  /**
   * Computes the time of impact between two moving shapes.
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shapeVel1 - The velocity of this shape.
   * @param shape2 - The second moving shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param shapeVel2 - The velocity of the second shape.
   * @param maxToi - The maximum time when the impact can happen.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @returns If the two moving shapes collider at some point along their trajectories, this returns the
   *  time at which the two shape collider as well as the contact information during the impact. Returns
   *  `null`if the two shapes never collide along their paths.
   */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi, stopAtPenetration) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawVel1 = VectorOps.intoRaw(shapeVel1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawVel2 = VectorOps.intoRaw(shapeVel2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeTOI.fromRaw(null, rawShape1.castShape(rawPos1, rawRot1, rawVel1, rawShape2, rawPos2, rawRot2, rawVel2, maxToi, stopAtPenetration));
    rawPos1.free();
    rawRot1.free();
    rawVel1.free();
    rawPos2.free();
    rawRot2.free();
    rawVel2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Tests if this shape intersects another shape.
   *
   * @param shapePos1 - The position of this shape.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2  - The second shape to test.
   * @param shapePos2 - The position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @returns `true` if the two shapes intersect, `false` if they don’t.
   */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = rawShape1.intersectsShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2);
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between two shapes.
   *
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2 - The second shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(rawShape1.contactShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2, prediction));
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  containsPoint(shapePos, shapeRot, point) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = rawShape.containsPoint(rawPos, rawRot, rawPoint);
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  projectPoint(shapePos, shapeRot, point, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = PointProjection.fromRaw(rawShape.projectPoint(rawPos, rawRot, rawPoint, solid));
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  intersectsRay(ray, shapePos, shapeRot, maxToi) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.intersectsRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRay(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.castRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRayAndGetNormal(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = RayIntersection.fromRaw(rawShape.castRayAndGetNormal(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid));
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
};
var ShapeType;
(function(ShapeType2) {
  ShapeType2[ShapeType2["Ball"] = 0] = "Ball";
  ShapeType2[ShapeType2["Cuboid"] = 1] = "Cuboid";
  ShapeType2[ShapeType2["Capsule"] = 2] = "Capsule";
  ShapeType2[ShapeType2["Segment"] = 3] = "Segment";
  ShapeType2[ShapeType2["Polyline"] = 4] = "Polyline";
  ShapeType2[ShapeType2["Triangle"] = 5] = "Triangle";
  ShapeType2[ShapeType2["TriMesh"] = 6] = "TriMesh";
  ShapeType2[ShapeType2["HeightField"] = 7] = "HeightField";
  ShapeType2[ShapeType2["ConvexPolyhedron"] = 9] = "ConvexPolyhedron";
  ShapeType2[ShapeType2["Cylinder"] = 10] = "Cylinder";
  ShapeType2[ShapeType2["Cone"] = 11] = "Cone";
  ShapeType2[ShapeType2["RoundCuboid"] = 12] = "RoundCuboid";
  ShapeType2[ShapeType2["RoundTriangle"] = 13] = "RoundTriangle";
  ShapeType2[ShapeType2["RoundCylinder"] = 14] = "RoundCylinder";
  ShapeType2[ShapeType2["RoundCone"] = 15] = "RoundCone";
  ShapeType2[ShapeType2["RoundConvexPolyhedron"] = 16] = "RoundConvexPolyhedron";
  ShapeType2[ShapeType2["HalfSpace"] = 17] = "HalfSpace";
})(ShapeType || (ShapeType = {}));
var Ball = class extends Shape {
  /**
   * Creates a new ball with the given radius.
   * @param radius - The balls radius.
   */
  constructor(radius) {
    super();
    this.type = ShapeType.Ball;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.ball(this.radius);
  }
};
var HalfSpace = class extends Shape {
  /**
   * Creates a new halfspace delimited by an infinite plane.
   *
   * @param normal - The outward normal of the plane.
   */
  constructor(normal) {
    super();
    this.type = ShapeType.HalfSpace;
    this.normal = normal;
  }
  intoRaw() {
    let n = VectorOps.intoRaw(this.normal);
    let result = RawShape.halfspace(n);
    n.free();
    return result;
  }
};
var Cuboid = class extends Shape {
  // #if DIM3
  /**
   * Creates a new 3D cuboid.
   * @param hx - The half width of the cuboid.
   * @param hy - The half height of the cuboid.
   * @param hz - The half depth of the cuboid.
   */
  constructor(hx, hy, hz) {
    super();
    this.type = ShapeType.Cuboid;
    this.halfExtents = VectorOps.new(hx, hy, hz);
  }
  // #endif
  intoRaw() {
    return RawShape.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
};
var RoundCuboid = class extends Shape {
  // #if DIM3
  /**
   * Creates a new 3D cuboid.
   * @param hx - The half width of the cuboid.
   * @param hy - The half height of the cuboid.
   * @param hz - The half depth of the cuboid.
   * @param borderRadius - The radius of the borders of this cuboid. This will
   *   effectively increase the half-extents of the cuboid by this radius.
   */
  constructor(hx, hy, hz, borderRadius) {
    super();
    this.type = ShapeType.RoundCuboid;
    this.halfExtents = VectorOps.new(hx, hy, hz);
    this.borderRadius = borderRadius;
  }
  // #endif
  intoRaw() {
    return RawShape.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
};
var Capsule = class extends Shape {
  /**
   * Creates a new capsule with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Capsule;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.capsule(this.halfHeight, this.radius);
  }
};
var Segment = class extends Shape {
  /**
   * Creates a new segment shape.
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  constructor(a, b) {
    super();
    this.type = ShapeType.Segment;
    this.a = a;
    this.b = b;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let result = RawShape.segment(ra, rb);
    ra.free();
    rb.free();
    return result;
  }
};
var Triangle = class extends Shape {
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  constructor(a, b, c) {
    super();
    this.type = ShapeType.Triangle;
    this.a = a;
    this.b = b;
    this.c = c;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.triangle(ra, rb, rc);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var RoundTriangle = class extends Shape {
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  constructor(a, b, c, borderRadius) {
    super();
    this.type = ShapeType.RoundTriangle;
    this.a = a;
    this.b = b;
    this.c = c;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.roundTriangle(ra, rb, rc, this.borderRadius);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var Polyline = class extends Shape {
  /**
   * Creates a new polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `null` or not provided, then
   *    the vertices are assumed to form a line strip.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.Polyline;
    this.vertices = vertices;
    this.indices = indices !== null && indices !== void 0 ? indices : new Uint32Array(0);
  }
  intoRaw() {
    return RawShape.polyline(this.vertices, this.indices);
  }
};
var TriMesh = class extends Shape {
  /**
   * Creates a new triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.TriMesh;
    this.vertices = vertices;
    this.indices = indices;
  }
  intoRaw() {
    return RawShape.trimesh(this.vertices, this.indices);
  }
};
var ConvexPolyhedron = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param indices - The index buffer of this convex mesh. If this is `null`
   *   or `undefined`, the convex-hull of the input vertices will be computed
   *   automatically. Otherwise, it will be assumed that the mesh you provide
   *   is already convex.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.ConvexPolyhedron;
    this.vertices = vertices;
    this.indices = indices;
  }
  intoRaw() {
    if (!!this.indices) {
      return RawShape.convexMesh(this.vertices, this.indices);
    } else {
      return RawShape.convexHull(this.vertices);
    }
  }
};
var RoundConvexPolyhedron = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param indices - The index buffer of this convex mesh. If this is `null`
   *   or `undefined`, the convex-hull of the input vertices will be computed
   *   automatically. Otherwise, it will be assumed that the mesh you provide
   *   is already convex.
   * @param borderRadius - The radius of the borders of this convex polyhedron.
   */
  constructor(vertices, indices, borderRadius) {
    super();
    this.type = ShapeType.RoundConvexPolyhedron;
    this.vertices = vertices;
    this.indices = indices;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    if (!!this.indices) {
      return RawShape.roundConvexMesh(this.vertices, this.indices, this.borderRadius);
    } else {
      return RawShape.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
};
var Heightfield = class extends Shape {
  /**
   * Creates a new heightfield shape.
   *
   * @param nrows − The number of rows in the heights matrix.
   * @param ncols - The number of columns in the heights matrix.
   * @param heights - The heights of the heightfield along its local `y` axis,
   *                  provided as a matrix stored in column-major order.
   * @param scale - The dimensions of the heightfield's local `x,z` plane.
   */
  constructor(nrows, ncols, heights, scale6) {
    super();
    this.type = ShapeType.HeightField;
    this.nrows = nrows;
    this.ncols = ncols;
    this.heights = heights;
    this.scale = scale6;
  }
  intoRaw() {
    let rawScale = VectorOps.intoRaw(this.scale);
    let rawShape = RawShape.heightfield(this.nrows, this.ncols, this.heights, rawScale);
    rawScale.free();
    return rawShape;
  }
};
var Cylinder = class extends Shape {
  /**
   * Creates a new cylinder with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Cylinder;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.cylinder(this.halfHeight, this.radius);
  }
};
var RoundCylinder = class extends Shape {
  /**
   * Creates a new cylinder with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   * @param borderRadius - The radius of the borders of this cylinder.
   */
  constructor(halfHeight, radius, borderRadius) {
    super();
    this.type = ShapeType.RoundCylinder;
    this.borderRadius = borderRadius;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
};
var Cone = class extends Shape {
  /**
   * Creates a new cone with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Cone;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.cone(this.halfHeight, this.radius);
  }
};
var RoundCone = class extends Shape {
  /**
   * Creates a new cone with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   * @param borderRadius - The radius of the borders of this cone.
   */
  constructor(halfHeight, radius, borderRadius) {
    super();
    this.type = ShapeType.RoundCone;
    this.halfHeight = halfHeight;
    this.radius = radius;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    return RawShape.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/collider.js
var ActiveCollisionTypes;
(function(ActiveCollisionTypes2) {
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_FIXED"] = 2] = "DYNAMIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_FIXED"] = 8704] = "KINEMATIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["FIXED_FIXED"] = 32] = "FIXED_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DEFAULT"] = 15] = "DEFAULT";
  ActiveCollisionTypes2[ActiveCollisionTypes2["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
var Collider = class {
  constructor(colliderSet, handle, parent, shape) {
    this.colliderSet = colliderSet;
    this.handle = handle;
    this._parent = parent;
    this._shape = shape;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    if (this.handle != null) {
      this._parent = bodies.get(this.colliderSet.raw.coParent(this.handle));
    }
  }
  ensureShapeIsCached() {
    if (!this._shape)
      this._shape = Shape.fromRaw(this.colliderSet.raw, this.handle);
  }
  /**
   * The shape of this collider.
   */
  get shape() {
    this.ensureShapeIsCached();
    return this._shape;
  }
  /**
   * Checks if this collider is still valid (i.e. that it has
   * not been deleted from the collider set yet).
   */
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    return VectorOps.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    return RotationOps.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  /**
   * Is this collider a sensor?
   */
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  /**
   * Sets whether or not this collider is a sensor.
   * @param isSensor - If `true`, the collider will be a sensor.
   */
  setSensor(isSensor) {
    this.colliderSet.raw.coSetSensor(this.handle, isSensor);
  }
  /**
   * Sets the new shape of the collider.
   * @param shape - The collider’s new shape.
   */
  setShape(shape) {
    let rawShape = shape.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, rawShape);
    rawShape.free();
    this._shape = shape;
  }
  /**
   * Sets whether this collider is enabled or not.
   *
   * @param enabled - Set to `false` to disable this collider (its parent rigid-body won’t be disabled automatically by this).
   */
  setEnabled(enabled) {
    this.colliderSet.raw.coSetEnabled(this.handle, enabled);
  }
  /**
   * Is this collider enabled?
   */
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.colliderSet.raw.coSetRestitution(this.handle, restitution);
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.colliderSet.raw.coSetFriction(this.handle, friction);
  }
  /**
   * Gets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   */
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, rule);
  }
  /**
   * Gets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   */
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, rule);
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, groups);
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, groups);
  }
  /**
   * Get the physics hooks active for this collider.
   */
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, activeHooks);
  }
  /**
   * The events active for this collider.
   */
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, activeEvents);
  }
  /**
   * Gets the collision types active for this collider.
   */
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The new force threshold.
   */
  setContactForceEventThreshold(threshold) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, threshold);
  }
  /**
   * The total force magnitude beyond which a contact force event can be emitted.
   */
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
  }
  /**
   * Sets the uniform density of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The mass and angular inertia of this collider will be computed automatically based on its
   * shape.
   */
  setDensity(density) {
    this.colliderSet.raw.coSetDensity(this.handle, density);
  }
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The angular inertia of this collider will be computed automatically based on its shape
   * and this mass value.
   */
  setMass(mass) {
    this.colliderSet.raw.coSetMass(this.handle, mass);
  }
  // #if DIM3
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(angularInertiaLocalFrame);
    this.colliderSet.raw.coSetMassProperties(this.handle, mass, rawCom, rawPrincipalInertia, rawInertiaFrame);
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
  }
  // #endif
  /**
   * Sets the translation of this collider.
   *
   * @param tra - The world-space position of the collider.
   */
  setTranslation(tra) {
    this.colliderSet.raw.coSetTranslation(this.handle, tra.x, tra.y, tra.z);
  }
  /**
   * Sets the translation of this collider relative to its parent rigid-body.
   *
   * Does nothing if this collider isn't attached to a rigid-body.
   *
   * @param tra - The new translation of the collider relative to its parent.
   */
  setTranslationWrtParent(tra) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, tra.x, tra.y, tra.z);
  }
  // #if DIM3
  /**
   * Sets the rotation quaternion of this collider.
   *
   * This does nothing if a zero quaternion is provided.
   *
   * @param rotation - The rotation to set.
   */
  setRotation(rot) {
    this.colliderSet.raw.coSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  /**
   * Sets the rotation quaternion of this collider relative to its parent rigid-body.
   *
   * This does nothing if a zero quaternion is provided or if this collider isn't
   * attached to a rigid-body.
   *
   * @param rotation - The rotation to set.
   */
  setRotationWrtParent(rot) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  // #endif
  /**
   * The type of the shape of this collider.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  /**
   * The half-extents of this collider if it is a cuboid shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfExtents() {
    return VectorOps.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  /**
   * Sets the half-extents of this collider if it is a cuboid shape.
   *
   * @param newHalfExtents - desired half extents.
   */
  setHalfExtents(newHalfExtents) {
    const rawPoint = VectorOps.intoRaw(newHalfExtents);
    this.colliderSet.raw.coSetHalfExtents(this.handle, rawPoint);
  }
  /**
   * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  /**
   * Sets the radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   *
   * @param newRadius - desired radius.
   */
  setRadius(newRadius) {
    this.colliderSet.raw.coSetRadius(this.handle, newRadius);
  }
  /**
   * The radius of the round edges of this collider if it is a round cylinder.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  /**
   * Sets the radius of the round edges of this collider if it has round edges.
   *
   * @param newBorderRadius - desired round edge radius.
   */
  setRoundRadius(newBorderRadius) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, newBorderRadius);
  }
  /**
   * The half height of this collider if it is a cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  /**
   * Sets the half height of this collider if it is a cylinder, capsule, or cone shape.
   *
   * @param newHalfheight - desired half height.
   */
  setHalfHeight(newHalfheight) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, newHalfheight);
  }
  /**
   * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
   * this returns the vertex buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  /**
   * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
   * this returns the index buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the heights buffer of
   * the heightfield.
   * In 3D, the returned height matrix is provided in column-major order.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the scale
   * applied to it.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldScale() {
    let scale6 = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return VectorOps.fromRaw(scale6);
  }
  // #if DIM3
  /**
   * If this collider has a heightfield shape, this returns the number of
   * rows of its height matrix.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the number of
   * columns of its height matrix.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  // #endif
  /**
   * The rigid-body this collider is attached to.
   */
  parent() {
    return this._parent;
  }
  /**
   * The friction coefficient of this collider.
   */
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  /**
   * The restitution coefficient of this collider.
   */
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  /**
   * The density of this collider.
   */
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  /**
   * The mass of this collider.
   */
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  /**
   * The volume of this collider.
   */
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  /**
   * The collision groups of this collider.
   */
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  /**
   * The solver groups of this collider.
   */
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  /**
   * Tests if this collider contains a point.
   *
   * @param point - The point to test.
   */
  containsPoint(point) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = this.colliderSet.raw.coContainsPoint(this.handle, rawPoint);
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on this collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   */
  projectPoint(point, solid) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointProjection.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, rawPoint, solid));
    rawPoint.free();
    return result;
  }
  /**
   * Tests if this collider intersects the given ray.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   */
  intersectsRay(ray, maxToi) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coIntersectsRay(this.handle, rawOrig, rawDir, maxToi);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
   * @param shape2 - The shape to cast against.
   * @param shape2Pos - The position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param shape2Vel - The constant velocity of the second shape.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castShape(collider1Vel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawShape2Pos = VectorOps.intoRaw(shape2Pos);
    let rawShape2Rot = RotationOps.intoRaw(shape2Rot);
    let rawShape2Vel = VectorOps.intoRaw(shape2Vel);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, rawCollider1Vel, rawShape2, rawShape2Pos, rawShape2Rot, rawShape2Vel, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawShape2Pos.free();
    rawShape2Rot.free();
    rawShape2Vel.free();
    rawShape2.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
   * @param collider2 - The collider to cast against.
   * @param collider2Vel - The constant velocity of the second collider.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castCollider(collider1Vel, collider2, collider2Vel, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawCollider2Vel = VectorOps.intoRaw(collider2Vel);
    let result = ShapeColliderTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, rawCollider1Vel, collider2.handle, rawCollider2Vel, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawCollider2Vel.free();
    return result;
  }
  intersectsShape(shape2, shapePos2, shapeRot2) {
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape2 = shape2.intoRaw();
    let result = this.colliderSet.raw.coIntersectsShape(this.handle, rawShape2, rawPos2, rawRot2);
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the shape owned by this collider and the given shape.
   *
   * @param shape2 - The second shape.
   * @param shape2Pos - The initial position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shape2, shape2Pos, shape2Rot, prediction) {
    let rawPos2 = VectorOps.intoRaw(shape2Pos);
    let rawRot2 = RotationOps.intoRaw(shape2Rot);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactShape(this.handle, rawShape2, rawPos2, rawRot2, prediction));
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the collider and the given collider.
   *
   * @param collider2 - The second collider.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactCollider(collider2, prediction) {
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, collider2.handle, prediction));
    return result;
  }
  /*
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
   */
  castRay(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coCastRay(this.handle, rawOrig, rawDir, maxToi, solid);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   */
  castRayAndGetNormal(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayIntersection.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, rawOrig, rawDir, maxToi, solid));
    rawOrig.free();
    rawDir.free();
    return result;
  }
};
var MassPropsMode;
(function(MassPropsMode2) {
  MassPropsMode2[MassPropsMode2["Density"] = 0] = "Density";
  MassPropsMode2[MassPropsMode2["Mass"] = 1] = "Mass";
  MassPropsMode2[MassPropsMode2["MassProps"] = 2] = "MassProps";
})(MassPropsMode || (MassPropsMode = {}));
var ColliderDesc = class _ColliderDesc {
  /**
   * Initializes a collider descriptor from the collision shape.
   *
   * @param shape - The shape of the collider being built.
   */
  constructor(shape) {
    this.enabled = true;
    this.shape = shape;
    this.massPropsMode = MassPropsMode.Density;
    this.density = 1;
    this.friction = 0.5;
    this.restitution = 0;
    this.rotation = RotationOps.identity();
    this.translation = VectorOps.zeros();
    this.isSensor = false;
    this.collisionGroups = 4294967295;
    this.solverGroups = 4294967295;
    this.frictionCombineRule = CoefficientCombineRule.Average;
    this.restitutionCombineRule = CoefficientCombineRule.Average;
    this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
    this.activeEvents = 0;
    this.activeHooks = 0;
    this.mass = 0;
    this.centerOfMass = VectorOps.zeros();
    this.contactForceEventThreshold = 0;
    this.principalAngularInertia = VectorOps.zeros();
    this.angularInertiaLocalFrame = RotationOps.identity();
  }
  /**
   * Create a new collider descriptor with a ball shape.
   *
   * @param radius - The radius of the ball.
   */
  static ball(radius) {
    const shape = new Ball(radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a capsule shape.
   *
   * @param halfHeight - The half-height of the capsule, along the `y` axis.
   * @param radius - The radius of the capsule basis.
   */
  static capsule(halfHeight, radius) {
    const shape = new Capsule(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new segment shape.
   *
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  static segment(a, b) {
    const shape = new Segment(a, b);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  static triangle(a, b, c) {
    const shape = new Triangle(a, b, c);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  static roundTriangle(a, b, c, borderRadius) {
    const shape = new RoundTriangle(a, b, c, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
   *    the vertices are assumed to describe a line strip.
   */
  static polyline(vertices, indices) {
    const shape = new Polyline(vertices, indices);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  static trimesh(vertices, indices) {
    const shape = new TriMesh(vertices, indices);
    return new _ColliderDesc(shape);
  }
  // #if DIM3
  /**
   * Creates a new collider descriptor with a cuboid shape.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   * @param hz - The half-width of the rectangle along its local `z` axis.
   */
  static cuboid(hx, hy, hz) {
    const shape = new Cuboid(hx, hy, hz);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a rectangular shape with round borders.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   * @param hz - The half-width of the rectangle along its local `z` axis.
   * @param borderRadius - The radius of the cuboid's borders.
   */
  static roundCuboid(hx, hy, hz, borderRadius) {
    const shape = new RoundCuboid(hx, hy, hz, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a heightfield shape.
   *
   * @param nrows − The number of rows in the heights matrix.
   * @param ncols - The number of columns in the heights matrix.
   * @param heights - The heights of the heightfield along its local `y` axis,
   *                  provided as a matrix stored in column-major order.
   * @param scale - The scale factor applied to the heightfield.
   */
  static heightfield(nrows, ncols, heights, scale6) {
    const shape = new Heightfield(nrows, ncols, heights, scale6);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cylinder shape.
   *
   * @param halfHeight - The half-height of the cylinder, along the `y` axis.
   * @param radius - The radius of the cylinder basis.
   */
  static cylinder(halfHeight, radius) {
    const shape = new Cylinder(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cylinder shape with rounded corners.
   *
   * @param halfHeight - The half-height of the cylinder, along the `y` axis.
   * @param radius - The radius of the cylinder basis.
   * @param borderRadius - The radius of the cylinder's rounded edges and vertices.
   */
  static roundCylinder(halfHeight, radius, borderRadius) {
    const shape = new RoundCylinder(halfHeight, radius, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cone shape.
   *
   * @param halfHeight - The half-height of the cone, along the `y` axis.
   * @param radius - The radius of the cone basis.
   */
  static cone(halfHeight, radius) {
    const shape = new Cone(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cone shape with rounded corners.
   *
   * @param halfHeight - The half-height of the cone, along the `y` axis.
   * @param radius - The radius of the cone basis.
   * @param borderRadius - The radius of the cone's rounded edges and vertices.
   */
  static roundCone(halfHeight, radius, borderRadius) {
    const shape = new RoundCone(halfHeight, radius, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polyhedron as the shape for this new collider descriptor.
   *
   * @param points - The point that will be used to compute the convex-hull.
   */
  static convexHull(points) {
    const shape = new ConvexPolyhedron(points, null);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   */
  static convexMesh(vertices, indices) {
    const shape = new ConvexPolyhedron(vertices, indices);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polyhedron as the shape for this new collider descriptor. A
   * border is added to that convex polyhedron to give it round corners.
   *
   * @param points - The point that will be used to compute the convex-hull.
   * @param borderRadius - The radius of the round border added to the convex polyhedron.
   */
  static roundConvexHull(points, borderRadius) {
    const shape = new RoundConvexPolyhedron(points, null, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a round convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   * @param borderRadius - The radius of the round border added to the convex polyline.
   */
  static roundConvexMesh(vertices, indices, borderRadius) {
    const shape = new RoundConvexPolyhedron(vertices, indices, borderRadius);
    return new _ColliderDesc(shape);
  }
  // #endif
  // #if DIM3
  /**
   * Sets the position of the collider to be created relative to the rigid-body it is attached to.
   */
  setTranslation(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y, z };
    return this;
  }
  // #endif
  /**
   * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
   *
   * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
   */
  setRotation(rot) {
    RotationOps.copy(this.rotation, rot);
    return this;
  }
  /**
   * Sets whether or not the collider being created is a sensor.
   *
   * A sensor collider does not take part of the physics simulation, but generates
   * proximity events.
   *
   * @param sensor - Set to `true` of the collider built is to be a sensor.
   */
  setSensor(sensor) {
    this.isSensor = sensor;
    return this;
  }
  /**
   * Sets whether the created collider will be enabled or disabled.
   * @param enabled − If set to `false` the collider will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  /**
   * Sets the density of the collider being built.
   *
   * The mass and angular inertia tensor will be computed automatically based on this density and the collider’s shape.
   *
   * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
   *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
   */
  setDensity(density) {
    this.massPropsMode = MassPropsMode.Density;
    this.density = density;
    return this;
  }
  /**
   * Sets the mass of the collider being built.
   *
   * The angular inertia tensor will be computed automatically based on this mass and the collider’s shape.
   *
   * @param mass - The mass to set, must be greater or equal to 0.
   */
  setMass(mass) {
    this.massPropsMode = MassPropsMode.Mass;
    this.mass = mass;
    return this;
  }
  // #if DIM3
  /**
   * Sets the mass properties of the collider being built.
   *
   * This replaces the mass-properties automatically computed from the collider's density and shape.
   * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
   *
   * @param mass − The mass of the collider to create.
   * @param centerOfMass − The center-of-mass of the collider to create.
   * @param principalAngularInertia − The initial principal angular inertia of the collider to create.
   *                                  These are the eigenvalues of the angular inertia matrix.
   * @param angularInertiaLocalFrame − The initial local angular inertia frame of the collider to create.
   *                                   These are the eigenvectors of the angular inertia matrix.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    this.massPropsMode = MassPropsMode.MassProps;
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    VectorOps.copy(this.principalAngularInertia, principalAngularInertia);
    RotationOps.copy(this.angularInertiaLocalFrame, angularInertiaLocalFrame);
    return this;
  }
  // #endif
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.restitution = restitution;
    return this;
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.friction = friction;
    return this;
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.frictionCombineRule = rule;
    return this;
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.restitutionCombineRule = rule;
    return this;
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.collisionGroups = groups;
    return this;
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.solverGroups = groups;
    return this;
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.activeHooks = activeHooks;
    return this;
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.activeEvents = activeEvents;
    return this;
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.activeCollisionTypes = activeCollisionTypes;
    return this;
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The force threshold to set.
   */
  setContactForceEventThreshold(threshold) {
    this.contactForceEventThreshold = threshold;
    return this;
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/geometry/collider_set.js
var ColliderSet = class {
  constructor(raw) {
    this.raw = raw || new RawColliderSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachColliderHandle((handle) => {
        this.map.set(handle, new Collider(this, handle, null));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this collider set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  castClosure(f) {
    return (handle) => {
      if (!!f) {
        return f(this.get(handle));
      } else {
        return void 0;
      }
    };
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((collider) => collider.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new collider and return its integer handle.
   *
   * @param bodies - The set of bodies where the collider's parent can be found.
   * @param desc - The collider's description.
   * @param parentHandle - The integer handle of the rigid-body this collider is attached to.
   */
  createCollider(bodies, desc, parentHandle) {
    let hasParent = parentHandle != void 0 && parentHandle != null;
    if (hasParent && isNaN(parentHandle))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let rawShape = desc.shape.intoRaw();
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(desc.principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(desc.angularInertiaLocalFrame);
    let handle = this.raw.createCollider(
      desc.enabled,
      rawShape,
      rawTra,
      rawRot,
      desc.massPropsMode,
      desc.mass,
      rawCom,
      // #if DIM3
      rawPrincipalInertia,
      rawInertiaFrame,
      // #endif
      desc.density,
      desc.friction,
      desc.restitution,
      desc.frictionCombineRule,
      desc.restitutionCombineRule,
      desc.isSensor,
      desc.collisionGroups,
      desc.solverGroups,
      desc.activeCollisionTypes,
      desc.activeHooks,
      desc.activeEvents,
      desc.contactForceEventThreshold,
      hasParent,
      hasParent ? parentHandle : 0,
      bodies.raw
    );
    rawShape.free();
    rawTra.free();
    rawRot.free();
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
    let parent = hasParent ? bodies.get(parentHandle) : null;
    let collider = new Collider(this, handle, parent, desc.shape);
    this.map.set(handle, collider);
    return collider;
  }
  /**
   * Remove a collider from this set.
   *
   * @param handle - The integer handle of the collider to remove.
   * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
   * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
   */
  remove(handle, islands, bodies, wakeUp) {
    this.raw.remove(handle, islands.raw, bodies.raw, wakeUp);
    this.unmap(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * The number of colliders on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a collider with the given handle?
   *
   * @param handle - The collider handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Applies the given closure to each collider contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all colliders in the list.
   *
   * @returns collider list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js
var PhysicsPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawPhysicsPipeline();
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints, ccdSolver, eventQueue, hooks) {
    let rawG = VectorOps.intoRaw(gravity);
    if (!!eventQueue) {
      this.raw.stepWithEvents(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw, eventQueue.raw, hooks, !!hooks ? hooks.filterContactPair : null, !!hooks ? hooks.filterIntersectionPair : null);
    } else {
      this.raw.step(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw);
    }
    rawG.free();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/pipeline/query_pipeline.js
var QueryFilterFlags;
(function(QueryFilterFlags2) {
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_FIXED"] = 1] = "EXCLUDE_FIXED";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_KINEMATIC"] = 2] = "EXCLUDE_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_DYNAMIC"] = 4] = "EXCLUDE_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SENSORS"] = 8] = "EXCLUDE_SENSORS";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SOLIDS"] = 16] = "EXCLUDE_SOLIDS";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_DYNAMIC"] = 3] = "ONLY_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_KINEMATIC"] = 5] = "ONLY_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_FIXED"] = 6] = "ONLY_FIXED";
})(QueryFilterFlags || (QueryFilterFlags = {}));
var QueryPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawQueryPipeline();
  }
  /**
   * Release the WASM memory occupied by this query pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Updates the acceleration structure of the query pipeline.
   * @param bodies - The set of rigid-bodies taking part in this pipeline.
   * @param colliders - The set of colliders taking part in this pipeline.
   */
  update(bodies, colliders) {
    this.raw.update(bodies.raw, colliders.raw);
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderToi.fromRaw(colliders, this.raw.castRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * This also computes the normal at the hit point.
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderIntersection.fromRaw(colliders, this.raw.castRayAndGetNormal(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(bodies, colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let rawCallback = (rawInter) => {
      return callback(RayColliderIntersection.fromRaw(colliders, rawInter));
    };
    this.raw.intersectionsWithRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, rawCallback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawOrig.free();
    rawDir.free();
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    let result = this.raw.intersectionWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(bodies, colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPoint(bodies.raw, colliders.raw, rawPoint, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(bodies, colliders, point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPointAndGetFeature(bodies.raw, colliders.raw, rawPoint, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(bodies, colliders, point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    this.raw.intersectionsWithPoint(bodies.raw, colliders.raw, rawPoint, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPoint.free();
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawVel = VectorOps.intoRaw(shapeVel);
    let rawShape = shape.intoRaw();
    let result = ShapeColliderTOI.fromRaw(colliders, this.raw.castShape(bodies.raw, colliders.raw, rawPos, rawRot, rawVel, rawShape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPos.free();
    rawRot.free();
    rawVel.free();
    rawShape.free();
    return result;
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    this.raw.intersectionsWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    let rawCenter = VectorOps.intoRaw(aabbCenter);
    let rawHalfExtents = VectorOps.intoRaw(aabbHalfExtents);
    this.raw.collidersWithAabbIntersectingAabb(rawCenter, rawHalfExtents, callback);
    rawCenter.free();
    rawHalfExtents.free();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js
var SerializationPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawSerializationPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Serialize a complete physics state into a single byte array.
   * @param gravity - The current gravity affecting the simulation.
   * @param integrationParameters - The integration parameters of the simulation.
   * @param broadPhase - The broad-phase of the simulation.
   * @param narrowPhase - The narrow-phase of the simulation.
   * @param bodies - The rigid-bodies taking part into the simulation.
   * @param colliders - The colliders taking part into the simulation.
   * @param impulseJoints - The impulse joints taking part into the simulation.
   * @param multibodyJoints - The multibody joints taking part into the simulation.
   */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints) {
    let rawGra = VectorOps.intoRaw(gravity);
    const res = this.raw.serializeAll(rawGra, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    rawGra.free();
    return res;
  }
  /**
   * Deserialize the complete physics state from a single byte array.
   *
   * @param data - The byte array to deserialize.
   */
  deserializeAll(data) {
    return World.fromRaw(this.raw.deserializeAll(data));
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/pipeline/debug_render_pipeline.js
var DebugRenderBuffers = class {
  constructor(vertices, colors) {
    this.vertices = vertices;
    this.colors = colors;
  }
};
var DebugRenderPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawDebugRenderPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    this.vertices = void 0;
    this.colors = void 0;
  }
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    this.raw.render(bodies.raw, colliders.raw, impulse_joints.raw, multibody_joints.raw, narrow_phase.raw);
    this.vertices = this.raw.vertices();
    this.colors = this.raw.colors();
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/control/character_controller.js
var CharacterCollision = class {
};
var KinematicCharacterController = class {
  constructor(offset, params, bodies, colliders, queries) {
    this.params = params;
    this.bodies = bodies;
    this.colliders = colliders;
    this.queries = queries;
    this.raw = new RawKinematicCharacterController(offset);
    this.rawCharacterCollision = new RawCharacterCollision();
    this._applyImpulsesToDynamicBodies = false;
    this._characterMass = null;
  }
  /** @internal */
  free() {
    if (!!this.raw) {
      this.raw.free();
      this.rawCharacterCollision.free();
    }
    this.raw = void 0;
    this.rawCharacterCollision = void 0;
  }
  /**
   * The direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  up() {
    return this.raw.up();
  }
  /**
   * Sets the direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  setUp(vector) {
    let rawVect = VectorOps.intoRaw(vector);
    return this.raw.setUp(rawVect);
    rawVect.free();
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(enabled) {
    this._applyImpulsesToDynamicBodies = enabled;
  }
  /**
   * Returns the custom value of the character mass, if it was set by `this.setCharacterMass`.
   */
  characterMass() {
    return this._characterMass;
  }
  /**
   * Set the mass of the character to be used for impulse resolution if `self.applyImpulsesToDynamicBodies`
   * is set to `true`.
   *
   * If no character mass is set explicitly (or if it is set to `null`) it is automatically assumed to be equal
   * to the mass of the rigid-body the character collider is attached to; or equal to 0 if the character collider
   * isn’t attached to any rigid-body.
   *
   * @param mass - The mass to set.
   */
  setCharacterMass(mass) {
    this._characterMass = mass;
  }
  /**
   * A small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  offset() {
    return this.raw.offset();
  }
  /**
   * Sets a small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  setOffset(value) {
    this.raw.setOffset(value);
  }
  /**
   * Is sliding against obstacles enabled?
   */
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  /**
   * Enable or disable sliding against obstacles.
   */
  setSlideEnabled(enabled) {
    this.raw.setSlideEnabled(enabled);
  }
  /**
   * The maximum step height a character can automatically step over.
   */
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  /**
   * The minimum width of free space that must be available after stepping on a stair.
   */
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  /**
   * Can the character automatically step over dynamic bodies too?
   */
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  /**
   * Is automatically stepping over small objects enabled?
   */
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  /**
   * Enabled automatically stepping over small objects.
   *
   * @param maxHeight - The maximum step height a character can automatically step over.
   * @param minWidth - The minimum width of free space that must be available after stepping on a stair.
   * @param includeDynamicBodies - Can the character automatically step over dynamic bodies too?
   */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    this.raw.enableAutostep(maxHeight, minWidth, includeDynamicBodies);
  }
  /**
   * Disable automatically stepping over small objects.
   */
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  /**
   * The maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  /**
   * Sets the maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  setMaxSlopeClimbAngle(angle2) {
    this.raw.setMaxSlopeClimbAngle(angle2);
  }
  /**
   * The minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  /**
   * Sets the minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  setMinSlopeSlideAngle(angle2) {
    this.raw.setMinSlopeSlideAngle(angle2);
  }
  /**
   * If snap-to-ground is enabled, should the character be automatically snapped to the ground if
   * the distance between the ground and its feet are smaller than the specified threshold?
   */
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  /**
   * Enables automatically snapping the character to the ground if the distance between
   * the ground and its feet are smaller than the specified threshold.
   */
  enableSnapToGround(distance3) {
    this.raw.enableSnapToGround(distance3);
  }
  /**
   * Disables automatically snapping the character to the ground.
   */
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  /**
   * Is automatically snapping the character to the ground enabled?
   */
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  /**
   * Computes the movement the given collider is able to execute after hitting and sliding on obstacles.
   *
   * @param collider - The collider to move.
   * @param desiredTranslation - The desired collider movement.
   * @param filterFlags - Flags for excluding whole subsets of colliders from the obstacles taken into account.
   * @param filterGroups - Groups for excluding colliders with incompatible collision groups from the obstacles
   *                       taken into account.
   * @param filterPredicate - Any collider for which this closure returns `false` will be excluded from the
   *                          obstacles taken into account.
   */
  computeColliderMovement(collider, desiredTranslation, filterFlags, filterGroups, filterPredicate) {
    let rawTranslation = VectorOps.intoRaw(desiredTranslation);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, collider.handle, rawTranslation, this._applyImpulsesToDynamicBodies, this._characterMass, filterFlags, filterGroups, this.colliders.castClosure(filterPredicate));
    rawTranslation.free();
  }
  /**
   * The movement computed by the last call to `this.computeColliderMovement`.
   */
  computedMovement() {
    return VectorOps.fromRaw(this.raw.computedMovement());
  }
  /**
   * The result of ground detection computed by the last call to `this.computeColliderMovement`.
   */
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  /**
   * The number of collisions against obstacles detected along the path of the last call
   * to `this.computeColliderMovement`.
   */
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  /**
   * Returns the collision against one of the obstacles detected along the path of the last
   * call to `this.computeColliderMovement`.
   *
   * @param i - The i-th collision will be returned.
   * @param out - If this argument is set, it will be filled with the collision information.
   */
  computedCollision(i, out) {
    if (!this.raw.computedCollision(i, this.rawCharacterCollision)) {
      return null;
    } else {
      let c = this.rawCharacterCollision;
      out = out !== null && out !== void 0 ? out : new CharacterCollision();
      out.translationApplied = VectorOps.fromRaw(c.translationApplied());
      out.translationRemaining = VectorOps.fromRaw(c.translationRemaining());
      out.toi = c.toi();
      out.witness1 = VectorOps.fromRaw(c.worldWitness1());
      out.witness2 = VectorOps.fromRaw(c.worldWitness2());
      out.normal1 = VectorOps.fromRaw(c.worldNormal1());
      out.normal2 = VectorOps.fromRaw(c.worldNormal2());
      out.collider = this.colliders.get(c.handle());
      return out;
    }
  }
};

// node_modules/.pnpm/@dimforge+rapier3d@0.11.2/node_modules/@dimforge/rapier3d/pipeline/world.js
var World = class _World {
  constructor(gravity, rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawImpulseJoints, rawMultibodyJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline, rawDebugRenderPipeline) {
    this.gravity = gravity;
    this.integrationParameters = new IntegrationParameters(rawIntegrationParameters);
    this.islands = new IslandManager(rawIslands);
    this.broadPhase = new BroadPhase(rawBroadPhase);
    this.narrowPhase = new NarrowPhase(rawNarrowPhase);
    this.bodies = new RigidBodySet(rawBodies);
    this.colliders = new ColliderSet(rawColliders);
    this.impulseJoints = new ImpulseJointSet(rawImpulseJoints);
    this.multibodyJoints = new MultibodyJointSet(rawMultibodyJoints);
    this.ccdSolver = new CCDSolver(rawCCDSolver);
    this.queryPipeline = new QueryPipeline(rawQueryPipeline);
    this.physicsPipeline = new PhysicsPipeline(rawPhysicsPipeline);
    this.serializationPipeline = new SerializationPipeline(rawSerializationPipeline);
    this.debugRenderPipeline = new DebugRenderPipeline(rawDebugRenderPipeline);
    this.characterControllers = /* @__PURE__ */ new Set();
    this.impulseJoints.finalizeDeserialization(this.bodies);
    this.bodies.finalizeDeserialization(this.colliders);
    this.colliders.finalizeDeserialization(this.bodies);
  }
  /**
   * Release the WASM memory occupied by this physics world.
   *
   * All the fields of this physics world will be freed as well,
   * so there is no need to call their `.free()` methods individually.
   */
  free() {
    this.integrationParameters.free();
    this.islands.free();
    this.broadPhase.free();
    this.narrowPhase.free();
    this.bodies.free();
    this.colliders.free();
    this.impulseJoints.free();
    this.multibodyJoints.free();
    this.ccdSolver.free();
    this.queryPipeline.free();
    this.physicsPipeline.free();
    this.serializationPipeline.free();
    this.debugRenderPipeline.free();
    this.characterControllers.forEach((controller) => controller.free());
    this.integrationParameters = void 0;
    this.islands = void 0;
    this.broadPhase = void 0;
    this.narrowPhase = void 0;
    this.bodies = void 0;
    this.colliders = void 0;
    this.ccdSolver = void 0;
    this.impulseJoints = void 0;
    this.multibodyJoints = void 0;
    this.queryPipeline = void 0;
    this.physicsPipeline = void 0;
    this.serializationPipeline = void 0;
    this.debugRenderPipeline = void 0;
    this.characterControllers = void 0;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    return new _World(VectorOps.fromRaw(raw.takeGravity()), raw.takeIntegrationParameters(), raw.takeIslandManager(), raw.takeBroadPhase(), raw.takeNarrowPhase(), raw.takeBodies(), raw.takeColliders(), raw.takeImpulseJoints(), raw.takeMultibodyJoints());
  }
  /**
   * Takes a snapshot of this world.
   *
   * Use `World.restoreSnapshot` to create a new physics world with a state identical to
   * the state when `.takeSnapshot()` is called.
   */
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  /**
   * Creates a new physics world from a snapshot.
   *
   * This new physics world will be an identical copy of the snapshoted physics world.
   */
  static restoreSnapshot(data) {
    let deser = new SerializationPipeline();
    return deser.deserializeAll(data);
  }
  /**
   * Computes all the lines (and their colors) needed to render the scene.
   */
  debugRender() {
    this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase);
    return new DebugRenderBuffers(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  /**
   * Advance the simulation by one time step.
   *
   * All events generated by the physics engine are ignored.
   *
   * @param EventQueue - (optional) structure responsible for collecting
   *   events generated by the physics engine.
   */
  step(eventQueue, hooks) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, eventQueue, hooks);
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * Update colliders positions after rigid-bodies moved.
   *
   * When a rigid-body moves, the positions of the colliders attached to it need to be updated. This update is
   * generally automatically done at the beginning and the end of each simulation step with World.step.
   * If the positions need to be updated without running a simulation step this method can be called manually.
   */
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  /**
   * Ensure subsequent scene queries take into account the collider positions set before this method is called.
   *
   * This does not step the physics simulation forward.
   */
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders();
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * The current simulation timestep.
   */
  get timestep() {
    return this.integrationParameters.dt;
  }
  /**
   * Sets the new simulation timestep.
   *
   * The simulation timestep governs by how much the physics state of the world will
   * be integrated. A simulation timestep should:
   * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
   * corresponds to the time between two frames of a game running at 60FPS).
   * - not vary too much during the course of the simulation. A timestep with large variations may
   * cause instabilities in the simulation.
   *
   * @param dt - The timestep length, in seconds.
   */
  set timestep(dt) {
    this.integrationParameters.dt = dt;
  }
  /**
   * The maximum velocity iterations the velocity-based force constraint solver can make.
   */
  get maxVelocityIterations() {
    return this.integrationParameters.maxVelocityIterations;
  }
  /**
   * Sets the maximum number of velocity iterations (default: 4).
   *
   * The greater this value is, the most rigid and realistic the physics simulation will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxVelocityIterations(niter) {
    this.integrationParameters.maxVelocityIterations = niter;
  }
  /**
   * The maximum velocity iterations the velocity-based friction constraint solver can make.
   */
  get maxVelocityFrictionIterations() {
    return this.integrationParameters.maxVelocityFrictionIterations;
  }
  /**
   * Sets the maximum number of velocity iterations for friction (default: 8).
   *
   * The greater this value is, the most realistic friction will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxVelocityFrictionIterations(niter) {
    this.integrationParameters.maxVelocityFrictionIterations = niter;
  }
  /**
   * The maximum velocity iterations the velocity-based constraint solver can make to attempt to remove
   * the energy introduced by constraint stabilization.
   */
  get maxStabilizationIterations() {
    return this.integrationParameters.maxStabilizationIterations;
  }
  /**
   * Sets the maximum number of velocity iterations for stabilization (default: 1).
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxStabilizationIterations(niter) {
    this.integrationParameters.maxStabilizationIterations = niter;
  }
  /**
   * Creates a new rigid-body from the given rigd-body descriptior.
   *
   * @param body - The description of the rigid-body to create.
   */
  createRigidBody(body) {
    return this.bodies.createRigidBody(this.colliders, body);
  }
  /**
   * Creates a new character controller.
   *
   * @param offset - The artificial gap added between the character’s chape and its environment.
   */
  createCharacterController(offset) {
    let controller = new KinematicCharacterController(offset, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    this.characterControllers.add(controller);
    return controller;
  }
  /**
   * Removes a character controller from this world.
   *
   * @param controller - The character controller to remove.
   */
  removeCharacterController(controller) {
    this.characterControllers.delete(controller);
    controller.free();
  }
  /**
   * Creates a new collider.
   *
   * @param desc - The description of the collider.
   * @param parent - The rigid-body this collider is attached to.
   */
  createCollider(desc, parent) {
    let parentHandle = parent ? parent.handle : void 0;
    return this.colliders.createCollider(this.bodies, desc, parentHandle);
  }
  /**
   * Creates a new impulse joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createImpulseJoint(params, parent1, parent2, wakeUp) {
    return this.impulseJoints.createJoint(this.bodies, params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Creates a new multibody joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createMultibodyJoint(params, parent1, parent2, wakeUp) {
    return this.multibodyJoints.createJoint(params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Retrieves a rigid-body from its handle.
   *
   * @param handle - The integer handle of the rigid-body to retrieve.
   */
  getRigidBody(handle) {
    return this.bodies.get(handle);
  }
  /**
   * Retrieves a collider from its handle.
   *
   * @param handle - The integer handle of the collider to retrieve.
   */
  getCollider(handle) {
    return this.colliders.get(handle);
  }
  /**
   * Retrieves an impulse joint from its handle.
   *
   * @param handle - The integer handle of the impulse joint to retrieve.
   */
  getImpulseJoint(handle) {
    return this.impulseJoints.get(handle);
  }
  /**
   * Retrieves an multibody joint from its handle.
   *
   * @param handle - The integer handle of the multibody joint to retrieve.
   */
  getMultibodyJoint(handle) {
    return this.multibodyJoints.get(handle);
  }
  /**
   * Removes the given rigid-body from this physics world.
   *
   * This will remove this rigid-body as well as all its attached colliders and joints.
   * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
   *
   * @param body - The rigid-body to remove.
   */
  removeRigidBody(body) {
    if (this.bodies) {
      this.bodies.remove(body.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
  }
  /**
   * Removes the given collider from this physics world.
   *
   * @param collider - The collider to remove.
   * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
   */
  removeCollider(collider, wakeUp) {
    if (this.colliders) {
      this.colliders.remove(collider.handle, this.islands, this.bodies, wakeUp);
    }
  }
  /**
   * Removes the given impulse joint from this physics world.
   *
   * @param joint - The impulse joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeImpulseJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.impulseJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Removes the given multibody joint from this physics world.
   *
   * @param joint - The multibody joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeMultibodyJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.multibodyJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Applies the given closure to each collider managed by this physics world.
   *
   * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
   */
  forEachCollider(f) {
    this.colliders.forEach(f);
  }
  /**
   * Applies the given closure to each rigid-body managed by this physics world.
   *
   * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachRigidBody(f) {
    this.bodies.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-body managed by this physics world.
   *
   * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
   * the physics engine in order to save computational power. A sleeping rigid-body never moves
   * unless it is moved manually by the user.
   *
   * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachActiveRigidBody(f) {
    this.bodies.forEachActiveRigidBody(this.islands, f);
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let handle = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
    return handle != null ? this.colliders.get(handle) : null;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, point, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, point, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, this.colliders.castClosure(callback));
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactsWith(collider1, f) {
    this.narrowPhase.contactsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionsWith(collider1, f) {
    this.narrowPhase.intersectionsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    this.narrowPhase.contactPair(collider1.handle, collider2.handle, f);
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.narrowPhase.intersectionPair(collider1.handle, collider2.handle);
  }
};

// physics.js
var Physics = class {
  constructor() {
    this.world = new World({ x: 0, y: -9.81, z: 0 });
    const world = this.world;
    this.bodyToTransform = /* @__PURE__ */ new Map();
    const groundColliderDesc = ColliderDesc.cuboid(10, 0.1, 10);
    world.createCollider(groundColliderDesc);
  }
  update() {
    this.world.step();
    this.world.forEachActiveRigidBody((body) => {
      const pos = body.translation();
      const rot = body.rotation();
      const mesh = this.bodyToTransform.get(body.handle);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.quaternion.set(rot.x, rot.y, rot.z, rot.w);
    });
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

// shaders/main.vert
var main_default = "#version 300 es\nin vec3 position;\n//in vec4 color;\nin vec3 normal;\n//in vec2 uv;\nuniform vec3 cameraPosition;\nuniform vec3 lightPosition[3];\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 projectionMatrix;\n\n//out vec2 vUV;\n//out vec4 vColor;\nout vec3 vNormal;\nout vec3 vSurfaceToLight[3];\nout vec3 vSurfaceToCamera;\n\nvoid main() {\n    vec3 surfaceWorldPosition = mat3(modelMatrix) * position;\n    for (int i = 0; i < 3; ++i) {\n        vSurfaceToLight[i] = lightPosition[i] - surfaceWorldPosition;\n    }\n    vSurfaceToCamera = cameraPosition - surfaceWorldPosition;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    //vColor = color;\n    vNormal = mat3(modelMatrix) * normal;\n    //v_uv = uv;\n}\n";

// shaders/main.frag
var main_default2 = "#version 300 es\nprecision highp float;\n//in vec2 v_uv;\n//in vec4 vColor;\nin vec3 vNormal;\nin vec3 vSurfaceToLight[3];\nin vec3 vSurfaceToCamera;\nout vec4 outColor;\n//uniform sampler2D tBaseColor;\nuniform vec3 lightColor[3];\n\nvec3 unlit() {\n    return vec3(0.1, 0.1, 0.1);\n}\n\nvoid main() {\n    vec3 viewDir = normalize(vSurfaceToCamera);\n    vec3 normal = normalize(vNormal);\n\n    vec3 lightTotal;\n    for (int i = 0; i < 3; ++i) {\n        lightTotal = lightTotal + clamp(dot(normalize(vSurfaceToLight[i]), normal), 0.0, 1.0) * lightColor[i];\n    }\n    outColor = vec4((lightTotal/2.) + 0.5, 1.0);\n}\n";

// shaders/skin.vert
var skin_default = "#version 300 es\nin vec3 position;\nin vec3 normal;\nin vec2 uv;\nin vec4 skinIndex;\nin vec4 skinWeight;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform sampler2D boneTexture;\nuniform int boneTextureSize;\n\nmat4 getBoneMatrix(const in float i) {\n    float j = i * 4.0;\n    float x = mod(j, float(boneTextureSize));\n    float y = floor(j / float(boneTextureSize));\n\n    float dx = 1.0 / float(boneTextureSize);\n    float dy = 1.0 / float(boneTextureSize);\n\n    y = dy * (y + 0.5);\n\n    vec4 v1 = texture(boneTexture, vec2(dx * (x + 0.5), y));\n    vec4 v2 = texture(boneTexture, vec2(dx * (x + 1.5), y));\n    vec4 v3 = texture(boneTexture, vec2(dx * (x + 2.5), y));\n    vec4 v4 = texture(boneTexture, vec2(dx * (x + 3.5), y));\n\n    return mat4(v1, v2, v3, v4);\n}\n\nout vec2 vUv;\nout vec3 vNormal;\n\nvoid main() {\n    vUv = uv;\n    vNormal = normalize(normalMatrix * normal);\n\n    mat4 boneMatX = getBoneMatrix(skinIndex.x);\n    mat4 boneMatY = getBoneMatrix(skinIndex.y);\n    mat4 boneMatZ = getBoneMatrix(skinIndex.z);\n    mat4 boneMatW = getBoneMatrix(skinIndex.w);\n\n    // update normal\n    mat4 skinMatrix = mat4(0.0);\n    skinMatrix += skinWeight.x * boneMatX;\n    skinMatrix += skinWeight.y * boneMatY;\n    skinMatrix += skinWeight.z * boneMatZ;\n    skinMatrix += skinWeight.w * boneMatW;\n    vNormal = vec4(skinMatrix * vec4(vNormal, 0.0)).xyz;\n\n    // Update position\n    vec4 bindPos = vec4(position, 1.0);\n    vec4 transformed = vec4(0.0);\n    transformed += boneMatX * bindPos * skinWeight.x;\n    transformed += boneMatY * bindPos * skinWeight.y;\n    transformed += boneMatZ * bindPos * skinWeight.z;\n    transformed += boneMatW * bindPos * skinWeight.w;\n    vec3 pos = transformed.xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n";

// shaders/skin.frag
var skin_default2 = "#version 300 es\nprecision highp float;\n\nuniform sampler2D tMap;\nuniform sampler2D boneTexture;\n\nin vec2 vUv;\nin vec3 vNormal;\nout vec4 outColor;\n\nvoid main() {\n    // vec3 tex = texture2D(tMap, vUv).rgb;\n\n    // vec3 normal = normalize(vNormal);\n    // vec3 light = vec3(0.0, 1.0, 0.0);\n    // float shading = min(0.0, dot(normal, light) * 0.2);\n\n    // outColor.rgb = tex + shading;\n    // outColor.a = 1.0;\n    outColor.rgb = texture(tMap, vUv).rgb;\n    outColor.a = 1.0;\n}\n";

// index.js
function shallowClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function init() {
  const canvasElem = document.querySelector("#renderCanvas");
  const renderer = new Renderer({ dpr: 1, canvas: canvasElem, antialias: true });
  const gl = renderer.gl;
  const camera = new Camera(gl, { near: 0.1, far: 1e4 });
  const controls = new Orbit(camera, { element: canvasElem });
  camera.position.set(0, 0.5, -1).normalize().multiply(2.5).add([5, 5, -5]);
  controls.target.copy([0, 2, 2]);
  controls.forcePosition();
  function resize() {
    renderer.setSize(canvasElem.parentNode.clientWidth, canvasElem.parentNode.clientHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
  }
  window.addEventListener("resize", resize, false);
  resize();
  const msgBus = new MessageBus();
  const physics = new Physics();
  const lightPosition = [new Vec3(10, 1, 0), new Vec3(0, 10, 3), new Vec3(0, 1, 5)];
  const lightColor = [new Vec3(0.2, 0.7, 1), new Vec3(1, 1, 1), new Vec3(0.9, 0.1, 0.2)];
  const lightFalloff = [1, 0.5, 1];
  const lightPenumbra = [];
  const lightUmbra = [];
  const mainProgram = new Program(gl, {
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
  function makeSkinProgram(skin2) {
    const material = skin2.program.gltfMaterial;
    console.log("skin: ", skin2);
    return new Program(gl, {
      vertex: skin_default,
      fragment: skin_default2,
      uniforms: {
        boneTexture: { value: skin2.boneTexture },
        boneTextureSize: { value: skin2.boneTextureSize },
        tMap: { value: material.baseColorTexture.texture }
      }
    });
  }
  const sphereGeom = new Sphere(gl);
  const rigidBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setTranslation(0, 1, 0);
  function makeBall(position) {
    const ball = {};
    ball.mesh = new Mesh(gl, { geometry: sphereGeom, program: mainProgram });
    ball.mesh.setParent(scene);
    ball.body = physics.world.createRigidBody(rigidBodyDesc);
    ball.coll = physics.world.createCollider(ColliderDesc.ball(0.5), ball.body);
    physics.bodyToTransform.set(ball.body.handle, ball.mesh);
    ball.body.setTranslation(position, true);
    return ball;
  }
  const scene = new Transform();
  const skybox = new SkyBox(gl);
  skybox.setParent(scene);
  const debugMesh = new PhysDebugMesh(gl, physics.world, scene);
  function makeCapsule(x, y, z, length4, radius) {
    const collDesc = new ColliderDesc(new Capsule(length4, radius));
    const bodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setTranslation(x, y, z);
    const body = physics.world.createRigidBody(bodyDesc);
    return {
      body,
      coll: physics.world.createCollider(collDesc, body)
    };
  }
  function makeJoint(anchor1, anchor2, body1, body2) {
    const params = JointData.spherical(anchor1, anchor2);
    const joint = physics.world.createImpulseJoint(params, body1, body2, true);
    joint.setContactsEnabled(false);
    return joint;
  }
  let skin;
  loadAssets();
  async function loadAssets() {
    const gltf = await GLTFLoader.load(gl, `sausage.glb`);
    console.log(gltf);
    const s = gltf.scene || gltf.scenes[0];
    s.forEach((root) => {
      root.traverse((node) => {
        if (node.program) {
          if (node instanceof GLTFSkin) {
            node.program = makeSkinProgram(node);
            skin = node;
          } else
            node.program = mainProgram;
        }
      });
    });
  }
  function makeSausage(position) {
    const sausageParent = new Transform();
    const newSkel = {
      joints: [],
      inverseBindMatrices: shallowClone(skin.skeleton.inverseBindMatrices)
    };
    for (const bone of skin.skeleton.joints) {
      const newBone = new Transform();
      newBone.matrix.copy(bone.matrix);
      newBone.decompose();
      newBone.scale.set(0.1);
      newBone.bindInverse = shallowClone(bone.bindInverse);
      newBone.setParent(sausageParent);
      newSkel.joints.push(newBone);
    }
    const newSkin = new GLTFSkin(gl, {
      skeleton: newSkel,
      program: skin.program,
      geometry: skin.geometry
    });
    newSkin.setParent(sausageParent);
    console.log(newSkin, newSkel);
    sausageParent.setParent(scene);
    const s1 = makeCapsule(position.x, position.y + 0.9, position.z, 0.03, 0.215);
    const s2 = makeCapsule(position.x, position.y + 0.6, position.z, 0.03, 0.215);
    const s3 = makeCapsule(position.x, position.y + 0.3, position.z, 0.03, 0.215);
    const s4 = makeCapsule(position.x, position.y, position.z, 0.03, 0.215);
    physics.bodyToTransform.set(s1.body.handle, newSkel.joints[0]);
    physics.bodyToTransform.set(s2.body.handle, newSkel.joints[1]);
    physics.bodyToTransform.set(s3.body.handle, newSkel.joints[2]);
    physics.bodyToTransform.set(s4.body.handle, newSkel.joints[3]);
    makeJoint({ x: 0, y: 0.15, z: 0 }, { x: 0, y: -0.15, z: 0 }, s1.body, s2.body);
    makeJoint({ x: 0, y: 0.15, z: 0 }, { x: 0, y: -0.15, z: 0 }, s2.body, s3.body);
    makeJoint({ x: 0, y: 0.15, z: 0 }, { x: 0, y: -0.15, z: 0 }, s3.body, s4.body);
    return sausageParent;
  }
  const balls = [];
  canvasElem.addEventListener("pointerdown", (e) => {
    const clipSpaceX = 2 * (e.x / renderer.width) - 1;
    const clipSpaceY = 2 * (1 - e.y / renderer.height) - 1;
    const direction = new Vec3(clipSpaceX, clipSpaceY, 0.5);
    camera.unproject(direction);
    direction.sub(camera.position).normalize();
    const ray = new Ray(camera.position, direction);
    const hit = physics.world.castRayAndGetNormal(ray, 100, false);
    if (hit != null) {
      const hitPoint = ray.pointAt(hit.toi);
      const hitVec = new Vec3(hitPoint.x, hitPoint.y, hitPoint.z);
      const normal = new Vec3(hit.normal.x, hit.normal.y, hit.normal.z);
      hitVec.add(normal.scale(0.5));
      balls.push(makeSausage(hitVec));
    }
  });
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
  makeButtonInList("Show/Hide Colliders", "buttonList", () => {
    debugMesh.toggle();
  });
  let startTime, lastTime;
  requestID = requestAnimationFrame(update);
  function update(time) {
    if (startTime === void 0) {
      startTime = time;
    }
    const totalTime = time - startTime;
    physics.update();
    if (debugMesh.enabled)
      debugMesh.updateBuffers();
    controls.update();
    renderer.render({ scene, camera, sort: false, frustumCull: false });
    requestID = requestAnimationFrame(update);
  }
}
init();
//# sourceMappingURL=sausage.js.map
