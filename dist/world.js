(()=>{var sr=(r,t)=>()=>(r&&(t=r(r=0)),t);var J0=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);function $0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function K0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $m(){let r=ho("canvas");return r.style.display="block",r}function uo(...r){let t="THREE."+r.shift();ca?ca("log",t,...r):console.log(t,...r)}function Km(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Bt(...r){r=Km(r);let t="THREE."+r.shift();if(ca)ca("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function kt(...r){r=Km(r);let t="THREE."+r.shift();if(ca)ca("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function no(...r){let t=r.join(" ");t in kp||(kp[t]=!0,Bt(...r))}function Qm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Zr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function Kt(r,t,e){return Math.max(t,Math.min(e,r))}function Gf(r,t){return(r%t+t)%t}function Q0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function j0(r,t,e){return r!==t?(e-r)/(t-r):0}function ro(r,t,e){return(1-e)*r+e*t}function tx(r,t,e,n){return ro(r,t,1-Math.exp(-e*n))}function ex(r,t=1){return t-Math.abs(Gf(r,t*2)-t)}function nx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function ix(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function rx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function sx(r,t){return r+Math.random()*(t-r)}function ax(r){return r*(.5-Math.random())}function ox(r){r!==void 0&&(Vp=r);let t=Vp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lx(r){return r*io}function cx(r){return r*ha}function hx(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function ux(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fx(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),f=a((t-n)/2),u=s((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*u,o*c);break;case"YXY":r.set(l*u,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*u,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wf(r,t){if(t.constructor===Float32Array)return r;let e=Bh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Xf(r,t){if(t.constructor===Float32Array)return r;let e=Bh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}function dx(){let r={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(i.r=aa(i.r),i.g=aa(i.g),i.b=aa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?co:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[lo]:{primaries:t,whitePoint:n,transfer:co,toXYZ:Hp,fromXYZ:Wp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Hp,fromXYZ:Wp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function zu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}function Gu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function $u(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fs.fromArray(r,s);let o=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function jp(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Zr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}function Zl(r,t,e,n,i,s){na.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ja.x=s*na.x-i*na.y,ja.y=i*na.x+s*na.y):ja.copy(na),r.copy(t),r.x+=ja.x,r.y+=ja.y,r.applyMatrix4(eg)}function Rx(r,t,e,n,i,s,a,o){let l;if(t.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===qr,o),l===null)return null;nc.copy(o),nc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(nc);return c<e.near||c>e.far?null:{distance:c,point:nc.clone(),object:r}}function ic(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ql),r.getVertexPosition(l,jl),r.getVertexPosition(c,tc);let h=Rx(r,t,e,n,Ql,jl,tc,rm);if(h){let d=new z;ur.getBarycoord(rm,Ql,jl,tc,d),i&&(h.uv=ur.getInterpolatedAttribute(i,o,l,c,d,new It)),s&&(h.uv1=ur.getInterpolatedAttribute(s,o,l,c,d,new It)),a&&(h.normal=ur.getInterpolatedAttribute(a,o,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new z,materialIndex:0};ur.getNormal(Ql,jl,tc,f.normal),h.face=f,h.barycoord=d}return h}function ac(r,t,e,n,i,s,a){let o=r.geometry.attributes.position;if(Cc.fromBufferAttribute(o,i),Rc.fromBufferAttribute(o,s),e.distanceSqToSegment(Cc,Rc,rf,om)>n)return;rf.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(rf);if(!(c<t.near||c>t.far))return{distance:c,point:om.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}function qf(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}function hm(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Ix(r,t){let e=1-r;return e*e*t}function Lx(r,t){return 2*(1-r)*r*t}function Dx(r,t){return r*r*t}function so(r,t,e,n){return Ix(r,t)+Lx(r,e)+Dx(r,n)}function Nx(r,t){let e=1-r;return e*e*e*t}function Ux(r,t){let e=1-r;return 3*e*e*r*t}function Fx(r,t){return 3*(1-r)*r*r*t}function Ox(r,t){return r*r*r*t}function ao(r,t,e,n,i){return Nx(r,t)+Ux(r,e)+Fx(r,n)+Ox(r,i)}function Ms(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(um(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(um(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function bn(r){let t={};for(let e=0;e<r.length;e++){let n=Ms(r[e]);for(let i in n)t[i]=n[i]}return t}function um(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function zx(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}function ia(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function oc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function ig(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Gx(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Hx(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=ig(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=Gx(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function fm(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function dm(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}function $f(r,t,e,n){let i=Qx(n);switch(e){case Nf:return r*t;case Ff:return r*t/i.components*i.byteLength;case rh:return r*t/i.components*i.byteLength;case Yr:return r*t*2/i.components*i.byteLength;case sh:return r*t*2/i.components*i.byteLength;case Uf:return r*t*3/i.components*i.byteLength;case Ui:return r*t*4/i.components*i.byteLength;case ah:return r*t*4/i.components*i.byteLength;case Wo:case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qo:case Yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lh:case hh:return Math.max(r,16)*Math.max(t,8)/4;case oh:case ch:return Math.max(r,8)*Math.max(t,8)/2;case uh:case fh:case ph:case mh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dh:case Zo:case gh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Lh:case Dh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nh:case Uh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jo:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qx(r){switch(r){case qn:case Pf:return{byteLength:1,components:1};case ya:case If:case Ni:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Li:case eh:case Di:return{byteLength:4,components:1};case Lf:case Df:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var xm,gf,vm,Vo,ym,_a,qr,Fn,Yi,xs,xa,_f,xf,vf,Sm,vs,Mm,bm,Tm,wm,Em,Am,Cm,Rm,yf,Sf,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,fc,dc,pc,oa,mc,gc,_c,xc,Mf,zm,km,Zi,bf,Tf,wf,Go,Ef,Af,Cf,Rf,ys,va,Qc,jc,vc,ki,yc,ln,Vm,Ho,Nn,th,gr,qn,Pf,If,ya,eh,Li,Di,Ni,nh,ih,Ss,Lf,Df,Nf,Uf,Ui,dr,_r,Ff,rh,Yr,sh,ah,Wo,Xo,qo,Yo,oh,lh,ch,hh,uh,fh,dh,ph,mh,Zo,gh,_h,xh,vh,yh,Sh,Mh,bh,Th,wh,Eh,Ah,Ch,Rh,Ph,Ih,Lh,Dh,Nh,Uh,Jo,Fh,oo,Sc,hc,cf,hf,uf,ff,Gm,Oh,Hm,xr,dn,lo,co,pe,uc,Wm,Xm,qm,Ym,Of,Zm,Jm,Bf,zf,kf,Vf,pi,la,kp,ca,jm,Vi,Sn,Vp,io,ha,Fi,It,Gi,z,Ou,Gp,Gt,Bu,Hp,Wp,ie,Hs,Mc,px,ua,mx,ku,Un,Pe,bc,ni,fo,Tc,be,Ws,Ai,gx,_x,Ur,zl,ti,Xp,qp,pr,po,xx,Yp,Xs,ar,kl,Za,vx,yx,Zp,Jp,$p,Kp,Sx,qs,Vu,cn,Xn,Mx,fa,tg,Fr,Vl,qt,Mn,mo,go,Ci,or,Hu,lr,Ys,Zs,Qp,Wu,Xu,qu,Yu,Zu,Ju,ur,kr,cr,Ri,Gl,Js,$s,Ks,Or,Br,us,Ja,Hl,Wl,fs,Ze,Xl,bx,Ii,_o,xo,xe,Tx,$a,Ku,ms,wx,di,Qu,Qs,ei,Ka,on,pn,wc,Ln,vo,ju,Ex,Ax,Pi,Cx,Hi,da,js,Qa,ta,ea,na,ja,eg,ql,to,Yl,tm,tf,em,yo,hr,ef,Jl,$l,So,gs,nm,ds,Kl,im,Ql,jl,tc,nf,ec,rm,nc,mi,Ec,ps,Px,rc,Vr,sm,Ac,pa,Cc,Rc,am,eo,sc,rf,om,Mo,bo,To,mr,wo,Eo,Gr,Ao,Co,Ro,gi,_s,Pc,lm,cm,sf,af,of,Wi,Ic,Lc,Dc,Nc,Uc,Po,Fc,Bx,Io,Lo,Do,No,Uo,ng,kx,Vx,Xi,Oc,qi,Bc,zc,Hr,kc,Vc,Gc,Hc,ii,Wr,Wc,Xc,qc,Fo,Xr,Yc,Zc,rg,Jc,Oo,Bo,lf,pm,mm,$c,lc,cc,zi,zo,zr,gm,_m,Dn,ko,df,ma,ra,sa,ga,Kc,Zf,Wx,Jf,Xx,qx,Yx,Zx,Jx,$x,Kx,pf,Ae,Q1,mf,Kf=sr(()=>{xm=0,gf=1,vm=2,Vo=1,ym=2,_a=3,qr=0,Fn=1,Yi=2,xs=0,xa=1,_f=2,xf=3,vf=4,Sm=5,vs=100,Mm=101,bm=102,Tm=103,wm=104,Em=200,Am=201,Cm=202,Rm=203,yf=204,Sf=205,Pm=206,Im=207,Lm=208,Dm=209,Nm=210,Um=211,Fm=212,Om=213,Bm=214,fc=0,dc=1,pc=2,oa=3,mc=4,gc=5,_c=6,xc=7,Mf=0,zm=1,km=2,Zi=0,bf=1,Tf=2,wf=3,Go=4,Ef=5,Af=6,Cf=7,Rf=300,ys=301,va=302,Qc=303,jc=304,vc=1e3,ki=1001,yc=1002,ln=1003,Vm=1004,Ho=1005,Nn=1006,th=1007,gr=1008,qn=1009,Pf=1010,If=1011,ya=1012,eh=1013,Li=1014,Di=1015,Ni=1016,nh=1017,ih=1018,Ss=1020,Lf=35902,Df=35899,Nf=1021,Uf=1022,Ui=1023,dr=1026,_r=1027,Ff=1028,rh=1029,Yr=1030,sh=1031,ah=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,oh=35840,lh=35841,ch=35842,hh=35843,uh=36196,fh=37492,dh=37496,ph=37488,mh=37489,Zo=37490,gh=37491,_h=37808,xh=37809,vh=37810,yh=37811,Sh=37812,Mh=37813,bh=37814,Th=37815,wh=37816,Eh=37817,Ah=37818,Ch=37819,Rh=37820,Ph=37821,Ih=36492,Lh=36494,Dh=36495,Nh=36283,Uh=36284,Jo=36285,Fh=36286,oo=2300,Sc=2301,hc=2302,cf=2303,hf=2400,uf=2401,ff=2402,Gm=3200,Oh=0,Hm=1,xr="",dn="srgb",lo="srgb-linear",co="linear",pe="srgb",uc=7680,Wm=519,Xm=512,qm=513,Ym=514,Of=515,Zm=516,Jm=517,Bf=518,zf=519,kf=35044,Vf="300 es",pi=2e3,la=2001;kp={},ca=null;jm={[fc]:fc,[pc]:_c,[mc]:mc,[oa]:gc,[dc]:dc,[_c]:pc,[xc]:xc,[gc]:oa},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vp=1234567,io=Math.PI/180,ha=180/Math.PI;Fi={DEG2RAD:io,RAD2DEG:ha,generateUUID:Zr,clamp:Kt,euclideanModulo:Gf,mapLinear:Q0,inverseLerp:j0,lerp:ro,damp:tx,pingpong:ex,smoothstep:nx,smootherstep:ix,randInt:rx,randFloat:sx,randFloatSpread:ax,seededRandom:ox,degToRad:lx,radToDeg:cx,isPowerOfTwo:hx,ceilPowerOfTwo:ux,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:fx,normalize:Xf,denormalize:Wf},It=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],m=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],m=s[a+3];return t[e]=o*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-o*u,t[e+2]=c*m+h*u+o*f-l*d,t[e+3]=h*m-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ou.copy(this).projectOnVector(t),this.sub(Ou)}reflect(t){return this.sub(Ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ou=new z,Gp=new Gi,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],M=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*M+l*E,s[6]=a*g+o*y+l*x,s[1]=c*_+h*v+d*T,s[4]=c*p+h*M+d*E,s[7]=c*g+h*y+d*x,s[2]=f*_+u*v+m*T,s[5]=f*p+u*M+m*E,s[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(t,e)),this}rotate(t){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-t)),this}translate(t,e){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bu=new Gt,Hp=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie=dx();Mc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=ho("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},px=0,ua=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(zu(i[a].image)):s.push(zu(i[a]))}else s=zu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};mx=0,ku=new z,Un=class r extends Vi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ki,i=ki,s=Nn,a=gr,o=Ui,l=qn,c=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Zr(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ku).x}get height(){return this.source.getSize(ku).y}get depth(){return this.source.getSize(ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vc:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vc:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Rf;Un.DEFAULT_ANISOTROPY=1;Pe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,x=(d+_)/4,S=(m+p)/4;return M>y&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=x/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=S/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=x/s,i=S/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Un({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ua(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Tc=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},be=class r{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,a,o,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,f,u,m,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ws.setFromMatrixColumn(t,0).length(),s=1/Ws.setFromMatrixColumn(t,1).length(),a=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=a*h,u=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,u=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,u=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,u=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gx,t,_x)}lookAt(t,e,n){let i=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(n,ti),Ur.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(n,ti)),Ur.normalize(),zl.crossVectors(ti,Ur),i[0]=Ur.x,i[4]=zl.x,i[8]=ti.x,i[1]=Ur.y,i[5]=zl.y,i[9]=ti.y,i[2]=Ur.z,i[6]=zl.z,i[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],M=n[7],y=n[11],T=n[15],E=i[0],x=i[4],S=i[8],P=i[12],A=i[1],F=i[5],D=i[9],V=i[13],I=i[2],L=i[6],B=i[10],N=i[14],H=i[3],O=i[7],C=i[11],K=i[15];return s[0]=a*E+o*A+l*I+c*H,s[4]=a*x+o*F+l*L+c*O,s[8]=a*S+o*D+l*B+c*C,s[12]=a*P+o*V+l*N+c*K,s[1]=h*E+d*A+f*I+u*H,s[5]=h*x+d*F+f*L+u*O,s[9]=h*S+d*D+f*B+u*C,s[13]=h*P+d*V+f*N+u*K,s[2]=m*E+_*A+p*I+g*H,s[6]=m*x+_*F+p*L+g*O,s[10]=m*S+_*D+p*B+g*C,s[14]=m*P+_*V+p*N+g*K,s[3]=v*E+M*A+y*I+T*H,s[7]=v*x+M*F+y*L+T*O,s[11]=v*S+M*D+y*B+T*C,s[15]=v*P+M*V+y*N+T*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,M=o*u-c*d,y=o*f-l*d,T=a*u-c*h,E=a*f-l*h,x=a*d-o*h;return e*(_*v-p*M+g*y)-n*(m*v-p*T+g*E)+i*(m*M-_*T+g*x)-s*(m*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*o-n*a,M=e*l-i*a,y=e*c-s*a,T=n*l-i*o,E=n*c-s*o,x=i*c-s*l,S=h*_-d*m,P=h*p-f*m,A=h*g-u*m,F=d*p-f*_,D=d*g-u*_,V=f*g-u*p,I=v*V-M*D+y*F+T*A-E*P+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=(o*V-l*D+c*F)*L,t[1]=(i*D-n*V-s*F)*L,t[2]=(_*x-p*E+g*T)*L,t[3]=(f*E-d*x-u*T)*L,t[4]=(l*A-a*V-c*P)*L,t[5]=(e*V-i*A+s*P)*L,t[6]=(p*y-m*x-g*M)*L,t[7]=(h*x-f*y+u*M)*L,t[8]=(a*D-o*A+c*S)*L,t[9]=(n*A-e*D-s*S)*L,t[10]=(m*E-_*y+g*v)*L,t[11]=(d*y-h*E-u*v)*L,t[12]=(o*P-a*F-l*S)*L,t[13]=(e*F-n*P+i*S)*L,t[14]=(_*M-m*T-p*v)*L,t[15]=(h*T-d*M+f*v)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,m=s*d,_=a*h,p=a*d,g=o*d,v=l*c,M=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+y)*T,i[2]=(m-M)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+M)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ws.set(i[0],i[1],i[2]).length(),o=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ai.copy(this);let c=1/a,h=1/o,d=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,e.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=pi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===pi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===la)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===pi)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===la)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ws=new z,Ai=new be,gx=new z(0,0,0),_x=new z(1,1,1),Ur=new z,zl=new z,ti=new z,Xp=new be,qp=new Gi,pr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qp.setFromEuler(this),this.setFromQuaternion(qp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xx=0,Yp=new z,Xs=new Gi,ar=new be,kl=new z,Za=new z,vx=new z,yx=new Gi,Zp=new z(1,0,0),Jp=new z(0,1,0),$p=new z(0,0,1),Kp={type:"added"},Sx={type:"removed"},qs={type:"childadded",child:null},Vu={type:"childremoved",child:null},cn=class r extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new z,e=new pr,n=new Gi,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Gt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(Zp,t)}rotateY(t){return this.rotateOnAxis(Jp,t)}rotateZ(t){return this.rotateOnAxis($p,t)}translateOnAxis(t,e){return Yp.copy(t).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zp,t)}translateY(t){return this.translateOnAxis(Jp,t)}translateZ(t){return this.translateOnAxis($p,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kl.copy(t):kl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Za,kl,this.up):ar.lookAt(kl,Za,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(ar),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kp),qs.child=t,this.dispatchEvent(qs),qs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sx),Vu.child=t,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kp),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,t,vx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xn=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mx={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Gf(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Gu(a,s,t+1/3),this.g=Gu(a,s,t),this.b=Gu(a,s,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=dn){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let n=tg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ie.workingToColorSpace(Mn.copy(this),t),Math.round(Kt(Mn.r*255,0,255))*65536+Math.round(Kt(Mn.g*255,0,255))*256+Math.round(Kt(Mn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=dn){ie.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(Vl);let n=ro(Fr.h,Vl.h,e),i=ro(Fr.s,Vl.s,e),s=ro(Fr.l,Vl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new qt;qt.NAMES=tg;mo=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},go=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ci=new z,or=new z,Hu=new z,lr=new z,Ys=new z,Zs=new z,Qp=new z,Wu=new z,Xu=new z,qu=new z,Yu=new Pe,Zu=new Pe,Ju=new Pe,ur=class r{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ci.subVectors(t,e),i.cross(Ci);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ci.subVectors(i,e),or.subVectors(n,e),Hu.subVectors(t,e);let a=Ci.dot(Ci),o=Ci.dot(or),l=Ci.dot(Hu),c=or.dot(or),h=or.dot(Hu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return s.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(a,lr.y),l.addScaledVector(o,lr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Yu.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Yu.fromBufferAttribute(t,e),Zu.fromBufferAttribute(t,n),Ju.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yu,s.x),a.addScaledVector(Zu,s.y),a.addScaledVector(Ju,s.z),a}static isFrontFacing(t,e,n,i){return Ci.subVectors(n,e),or.subVectors(t,e),Ci.cross(or).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ci.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Ys.subVectors(i,n),Zs.subVectors(s,n),Wu.subVectors(t,n);let l=Ys.dot(Wu),c=Zs.dot(Wu);if(l<=0&&c<=0)return e.copy(n);Xu.subVectors(t,i);let h=Ys.dot(Xu),d=Zs.dot(Xu);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ys,a);qu.subVectors(t,s);let u=Ys.dot(qu),m=Zs.dot(qu);if(m>=0&&u<=m)return e.copy(s);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Zs,o);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Qp.subVectors(s,i),o=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector(Qp,o);let g=1/(p+_+f);return a=_*g,o=f*g,e.copy(n).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kr=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(t.matrixWorld),this.union(Gl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ja),Hl.subVectors(this.max,Ja),Js.subVectors(t.a,Ja),$s.subVectors(t.b,Ja),Ks.subVectors(t.c,Ja),Or.subVectors($s,Js),Br.subVectors(Ks,$s),us.subVectors(Js,Ks);let e=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-us.z,us.y,Or.z,0,-Or.x,Br.z,0,-Br.x,us.z,0,-us.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-us.y,us.x,0];return!$u(e,Js,$s,Ks,Hl)||(e=[1,0,0,0,1,0,0,0,1],!$u(e,Js,$s,Ks,Hl))?!1:(Wl.crossVectors(Or,Br),e=[Wl.x,Wl.y,Wl.z],$u(e,Js,$s,Ks,Hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cr=[new z,new z,new z,new z,new z,new z,new z,new z],Ri=new z,Gl=new kr,Js=new z,$s=new z,Ks=new z,Or=new z,Br=new z,us=new z,Ja=new z,Hl=new z,Wl=new z,fs=new z;Ze=new z,Xl=new It,bx=0,Ii=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kf,this.updateRanges=[],this.gpuType=Di,this.version=0,this._normalizationScale=t!==void 0?Bh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xl.fromBufferAttribute(this,e),Xl.applyMatrix3(t),this.setXY(e,Xl.x,Xl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xf(t,this.array)}},_o=class extends Ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}},xo=class extends Ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}},xe=class extends Ii{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tx=new kr,$a=new z,Ku=new z,ms=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$a.subVectors(t,this.center);let e=$a.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($a,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ku.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($a.copy(t.center).add(Ku)),this.expandByPoint($a.copy(t.center).sub(Ku))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wx=0,di=new be,Qu=new cn,Qs=new z,ei=new kr,Ka=new kr,on=new z,pn=class r extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?xo:_o)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Qu.lookAt(t),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ei.min,Ka.min),ei.expandByPoint(on),on.addVectors(ei.max,Ka.max),ei.expandByPoint(on)):(ei.expandByPoint(Ka.min),ei.expandByPoint(Ka.max))}ei.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)on.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(on));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(t,c),on.add(Qs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ii(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new z,l[P]=new z;let h=new z,d=new z,f=new z,u=new It,m=new It,_=new It,p=new z,g=new z;function v(P,A,F){c[P]=c[A]=c[F]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,F),u.fromBufferAttribute(s,P),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,F),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),o[P].add(p),o[A].add(p),o[F].add(p),l[P].add(g),l[A].add(g),l[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,A=M.length;P<A;++P){let F=M[P],D=F.start,V=F.count;for(let I=D,L=D+V;I<L;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new z,T=new z,E=new z,x=new z;function S(P){E.fromBufferAttribute(i,P),x.copy(E);let A=o[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(x,A);let D=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Ii(f,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=Zr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=jp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=jp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Ln=new z,vo=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Bh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix4(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.applyNormalMatrix(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.transformDirection(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ii(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xf(t,this.data.array)}},ju=new z,Ex=new z,Ax=new Gt,Pi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ju.subVectors(n,e).cross(Ex.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ju),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ax.getNormalMatrix(t),i=this.coplanarPoint(ju).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cx=0,Hi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=xa,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},da=class extends Hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qa=new z,ta=new z,ea=new z,na=new It,ja=new It,eg=new be,ql=new z,to=new z,Yl=new z,tm=new It,tf=new It,em=new It,yo=class extends cn{constructor(t=new da){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new pn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wc(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new vo(n,3,0,!1)),js.setAttribute("uv",new vo(n,2,3,!1))}this.geometry=js,this.material=t,this.center=new It(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),eg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-ea.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Zl(ql.set(-.5,-.5,0),ea,a,ta,i,s),Zl(to.set(.5,-.5,0),ea,a,ta,i,s),Zl(Yl.set(.5,.5,0),ea,a,ta,i,s),tm.set(0,0),tf.set(1,0),em.set(1,1);let o=t.ray.intersectTriangle(ql,to,Yl,!1,Qa);if(o===null&&(Zl(to.set(-.5,.5,0),ea,a,ta,i,s),tf.set(0,1),o=t.ray.intersectTriangle(ql,Yl,to,!1,Qa),o===null))return;let l=t.ray.origin.distanceTo(Qa);l<t.near||l>t.far||e.push({distance:l,point:Qa.clone(),uv:ur.getInterpolation(Qa,ql,to,Yl,tm,tf,em,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};hr=new z,ef=new z,Jl=new z,$l=new z,So=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hr.copy(this.origin).addScaledVector(this.direction,e),hr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ef.copy(t).add(e).multiplyScalar(.5),Jl.copy(e).sub(t).normalize(),$l.copy(this.origin).sub(ef);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Jl),o=$l.dot(this.direction),l=-$l.dot(Jl),c=$l.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ef).addScaledVector(Jl,f),u}intersectSphere(t,e){if(t.radius<0)return null;hr.subVectors(t.center,this.origin);let n=hr.dot(this.direction),i=hr.dot(hr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,S,P,A,F,D,V,I,L,B,N,H;if(y>=T&&y>=E?(P=l,D=d,L=m,H=g,l>=0?(x=c,S=h,A=f,F=u,V=_,I=p,B=v,N=M):(x=h,S=c,A=u,F=f,V=p,I=_,B=M,N=v)):T>=E?(P=c,D=f,L=_,H=v,c>=0?(x=h,S=l,A=u,F=d,V=p,I=m,B=M,N=g):(x=l,S=h,A=d,F=u,V=m,I=p,B=g,N=M)):(P=h,D=u,L=p,H=M,h>=0?(x=l,S=c,A=d,F=f,V=m,I=_,B=g,N=v):(x=c,S=l,A=f,F=d,V=_,I=m,B=v,N=g)),P===0)return null;let O=x/P,C=S/P,K=1/P,ht=A-O*D,Tt=F-C*D,Y=V-O*L,at=I-C*L,dt=B-O*H,Mt=N-C*H,ut=dt*at-Mt*Y,At=ht*Mt-Tt*dt,ge=Y*Tt-at*ht;if(i){if(ut<0||At<0||ge<0)return null}else if((ut<0||At<0||ge<0)&&(ut>0||At>0||ge>0))return null;let Ct=ut+At+ge;if(Ct===0)return null;let Ht=K*(ut*D+At*L+ge*H);return(Ct>0?Ht<0:Ht>0)?null:this.at(Ht/Ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gs=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nm=new be,ds=new So,Kl=new ms,im=new z,Ql=new z,jl=new z,tc=new z,nf=new z,ec=new z,rm=new z,nc=new z,mi=class extends cn{constructor(t=new pn,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(nf.fromBufferAttribute(d,t),a?ec.addScaledVector(nf,h):ec.addScaledVector(nf.sub(e),h))}e.add(ec)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),ds.copy(t.ray).recast(t.near),!(Kl.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Kl,im)===null||ds.origin.distanceToSquared(im)>(t.far-t.near)**2))&&(nm.copy(s).invert(),ds.copy(t.ray).applyMatrix4(nm),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=M;y<T;y+=3){let E=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=ic(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);i=ic(this,a,t,n,c,h,d,v,M,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=M;y<T;y+=3){let E=y,x=y+1,S=y+2;i=ic(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,M=p+1,y=p+2;i=ic(this,a,t,n,c,h,d,v,M,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};Ec=class extends Un{constructor(t=null,e=1,n=1,i,s,a,o,l,c=ln,h=ln,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ps=new ms,Px=new It(.5,.5),rc=new z,Vr=class{constructor(t=new Pi,e=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],m=s[8],_=s[9],p=s[10],g=s[11],v=s[12],M=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,u-h,g-m,T-v).normalize(),i[1].setComponents(c+a,u+h,g+m,T+v).normalize(),i[2].setComponents(c+o,u+d,g+_,T+M).normalize(),i[3].setComponents(c-o,u-d,g-_,T-M).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,T-y).normalize(),e===pi)i[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(e===la)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=Px.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(rc.x=i.normal.x>0?t.max.x:t.min.x,rc.y=i.normal.y>0?t.max.y:t.min.y,rc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sm=new be,Ac=class r{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];sm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Vr),n[i].setFromProjectionMatrix(sm,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Vr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}},pa=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Cc=new z,Rc=new z,am=new be,eo=new So,sc=new ms,rf=new z,om=new z,Mo=class extends cn{constructor(t=new pn,e=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Cc.fromBufferAttribute(e,i-1),Rc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Rc);t.setAttribute("lineDistance",new xe(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=s,t.ray.intersectsSphere(sc)===!1)return;am.copy(i).invert(),eo.copy(t.ray).applyMatrix4(am);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),M=ac(this,t,eo,l,g,v,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(u),g=ac(this,t,eo,l,_,p,m-1);g&&e.push(g)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=ac(this,t,eo,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=ac(this,t,eo,l,m-1,u,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};bo=class extends Un{constructor(t=[],e=ys,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},To=class extends Un{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mr=class extends Un{constructor(t,e,n=Li,i,s,a,o=ln,l=ln,c,h=dr,d=1){if(h!==dr&&h!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ua(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wo=class extends mr{constructor(t,e=Li,n=ys,i,s,a=ln,o=ln,l,c=dr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gr=class r extends pn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function m(_,p,g,v,M,y,T,E,x,S,P){let A=y/x,F=T/S,D=y/2,V=T/2,I=E/2,L=x+1,B=S+1,N=0,H=0,O=new z;for(let C=0;C<B;C++){let K=C*F-V;for(let ht=0;ht<L;ht++){let Tt=ht*A-D;O[_]=Tt*v,O[p]=K*M,O[g]=I,c.push(O.x,O.y,O.z),O[_]=0,O[p]=0,O[g]=E>0?1:-1,h.push(O.x,O.y,O.z),d.push(ht/x),d.push(1-C/S),N+=1}}for(let C=0;C<S;C++)for(let K=0;K<x;K++){let ht=f+K+L*C,Tt=f+K+L*(C+1),Y=f+(K+1)+L*(C+1),at=f+(K+1)+L*C;l.push(ht,Tt,at),l.push(Tt,Y,at),H+=6}o.addGroup(u,H,P),u+=H,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ao=class r extends pn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],u=[],m=0,_=[],p=n/2,g=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(u,2));function v(){let y=new z,T=new z,E=0,x=(e-t)/n;for(let S=0;S<=s;S++){let P=[],A=S/s,F=A*(e-t)+t;for(let D=0;D<=i;D++){let V=D/i,I=V*l+o,L=Math.sin(I),B=Math.cos(I);T.x=F*L,T.y=-A*n+p,T.z=F*B,d.push(T.x,T.y,T.z),y.set(L,x,B).normalize(),f.push(y.x,y.y,y.z),u.push(V,1-A),P.push(m++)}_.push(P)}for(let S=0;S<i;S++)for(let P=0;P<s;P++){let A=_[P][S],F=_[P+1][S],D=_[P+1][S+1],V=_[P][S+1];(t>0||P!==0)&&(h.push(A,F,V),E+=3),(e>0||P!==s-1)&&(h.push(F,D,V),E+=3)}c.addGroup(g,E,0),g+=E}function M(y){let T=m,E=new It,x=new z,S=0,P=y===!0?t:e,A=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*A,0),f.push(0,A,0),u.push(.5,.5),m++;let F=m;for(let D=0;D<=i;D++){let I=D/i*l+o,L=Math.cos(I),B=Math.sin(I);x.x=P*B,x.y=p*A,x.z=P*L,d.push(x.x,x.y,x.z),f.push(0,A,0),E.x=L*.5+.5,E.y=B*.5*A+.5,u.push(E.x,E.y),m++}for(let D=0;D<i;D++){let V=T+D,I=F+D;y===!0?h.push(I,I+1,V):h.push(I+1,I,V),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Co=class r extends pn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new z,y=new z,T=new z;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],y),u(e[E+2],T),l(M,y,T,v)}function l(v,M,y,T){let E=T+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let P=v.clone().lerp(y,S/E),A=M.clone().lerp(y,S/E),F=E-S;for(let D=0;D<=F;D++)D===0&&S===E?x[S][D]=P:x[S][D]=P.clone().lerp(A,D/F)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let A=Math.floor(P/2);P%2===0?(f(x[S][A+1]),f(x[S+1][A]),f(x[S][A])):(f(x[S][A+1]),f(x[S+1][A+1]),f(x[S+1][A]))}}function c(v){let M=new z;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){let v=new z;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let y=p(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(y,1-T)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let M=a[v+0],y=a[v+2],T=a[v+4],E=Math.max(M,y,T),x=Math.min(M,y,T);E>.9&&x<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,M){let y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){let v=new z,M=new z,y=new z,T=new z,E=new It,x=new It,S=new It;for(let P=0,A=0;P<s.length;P+=9,A+=6){v.set(s[P+0],s[P+1],s[P+2]),M.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),T.copy(v).add(M).add(y).divideScalar(3);let F=p(T);_(E,A+0,v,F),_(x,A+2,M,F),_(S,A+4,y,F)}}function _(v,M,y,T){T<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}},Ro=class r extends Co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new It:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,i=[],s=[],a=[],o=new z,l=new be;for(let u=0;u<=t;u++){let m=u/t;i[u]=this.getTangentAt(m,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Kt(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(Kt(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(u=-u);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},_s=class extends gi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new It){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pc=class extends _s{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};lm=new z,cm=new z,sf=new qf,af=new qf,of=new qf,Wi=class extends gi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(cm.subVectors(i[0],i[1]).add(i[0]),c=cm);let d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(lm.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=lm),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),sf.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),af.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),of.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),af.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),of.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(sf.calc(l),af.calc(l),of.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ic=class extends gi{constructor(t=new It,e=new It,n=new It,i=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new It){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ao(t,i.x,s.x,a.x,o.x),ao(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends gi{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ao(t,i.x,s.x,a.x,o.x),ao(t,i.y,s.y,a.y,o.y),ao(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dc=class extends gi{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends gi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends gi{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(so(t,i.x,s.x,a.x),so(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends gi{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(so(t,i.x,s.x,a.x),so(t,i.y,s.y,a.y),so(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(hm(o,l.x,c.x,h.x,d.x),hm(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new It().fromArray(i))}return this}},Bx=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Wi,CubicBezierCurve:Ic,CubicBezierCurve3:Lc,EllipseCurve:_s,LineCurve:Dc,LineCurve3:Nc,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:Po,SplineCurve:Fc}),Io=class r extends Co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Lo=class r extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-a;for(let M=0;M<c;M++){let y=M*d-s;m.push(y,-v,0),_.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(M,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Do=class r extends pn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new z,f=new z,u=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let v=[],M=g/n,y=a+M*o,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let P=S/e,A=i+P*s;d.x=-E*Math.cos(A),d.y=T,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(P+x,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){let M=h[g][v+1],y=h[g][v],T=h[g+1][v],E=h[g+1][v+1];(g!==0||a>0)&&u.push(M,y,E),(g!==n-1||l<Math.PI)&&u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},No=class r extends pn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new z,u=new z,m=new z;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let g=0;g<=i;g++){let v=g/i*s;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,M=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Uo=class r extends pn{constructor(t=new Po(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,l=new z,c=new It,h=new z,d=[],f=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(u,2));function _(){for(let M=0;M<e;M++)p(M);p(s===!1?e:0),v(),g()}function p(M){h=t.getPointAt(M/e,h);let y=a.normals[M],T=a.binormals[M];for(let E=0;E<=i;E++){let x=E/i*Math.PI*2,S=Math.sin(x),P=-Math.cos(x);l.x=P*y.x+S*T.x,l.y=P*y.y+S*T.y,l.z=P*y.z+S*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=e;M++)for(let y=1;y<=i;y++){let T=(i+1)*(M-1)+(y-1),E=(i+1)*M+(y-1),x=(i+1)*M+y,S=(i+1)*(M-1)+y;m.push(T,E,S),m.push(E,x,S)}}function v(){for(let M=0;M<=e;M++)for(let y=0;y<=i;y++)c.x=M/e,c.y=y/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Bx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};ng={clone:Ms,merge:bn},kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=zx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new It().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oc=class extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qi=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Hr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hf,endingEnd:hf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case uf:s=t,o=2*e-n;break;case ff:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uf:a=t,l=2*n-e;break;case ff:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+v*a[c+T]+M*a[l+T]+y*a[d+T];return s}},Vc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},Gc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Hc=class extends Hr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*m;return s}let f=o*2,u=t-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=u*f+m*2,v=d[g],M=d[g+1],y=t*f+m*2,T=h[y],E=h[y+1],x=Hx(n,e,v,T,i);s[m]=ig(x,_,M,E,p)}return s}};ii=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),oc(t.settings)&&(n.settings={inTangents:ia(t.settings.inTangents,Array),outTangents:ia(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case Sc:e=this.InterpolantFactoryMethodLinear;break;case hc:e=this.InterpolantFactoryMethodSmooth;break;case cf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return hc;case this.InterpolantFactoryMethodBezier:return cf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;oc(this.settings)&&(fm(this.settings.inTangents,t),fm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;oc(this.settings)&&(dm(this.settings.inTangents,t),dm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&K0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hc,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,oc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Sc;Wr=class extends ii{constructor(t,e,n){super(t,e,n)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=oo;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;Wc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};Wc.prototype.ValueTypeName="color";Xc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};Xc.prototype.ValueTypeName="number";qc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Gi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Fo=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;Xr=class extends ii{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=oo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;Yc=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="vector";Zc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rg=new Zc,Jc=class{constructor(t){this.manager=t!==void 0?t:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";Oo=class extends cn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bo=class extends Oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lf=new be,pm=new z,mm=new z,$c=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pm.setFromMatrixPosition(t.matrixWorld),e.position.copy(pm),mm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===la||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(lf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lc=new z,cc=new Gi,zi=new z,zo=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lc,cc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lc,cc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zr=new z,gm=new It,_m=new It,Dn=class extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,gm,_m),e.subVectors(_m,gm)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ko=class extends zo{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},df=class extends $c{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ra=-90,sa=1,ga=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dn(ra,sa,t,e);i.layers=this.layers,this.add(i);let s=new Dn(ra,sa,t,e);s.layers=this.layers,this.add(s);let a=new Dn(ra,sa,t,e);a.layers=this.layers,this.add(a);let o=new Dn(ra,sa,t,e);o.layers=this.layers,this.add(o);let l=new Dn(ra,sa,t,e);l.layers=this.layers,this.add(l);let c=new Dn(ra,sa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kc=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Zf="\\[\\]\\.:\\/",Wx=new RegExp("["+Zf+"]","g"),Jf="[^"+Zf+"]",Xx="[^"+Zf.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",Jf),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),$x=new RegExp("^"+qx+Yx+Zx+Jx+"$"),Kx=["material","materials","bones","map"],pf=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(t){let e=$x.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Kx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=pf;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Q1=new Float32Array(1),mf=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Eg(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function tv(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}function US(r,t,e,n,i,s){let a=new qt(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(v){let M=!1,y=u(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,M){let y=u(M);y&&y.isCubeTexture?(c===void 0&&(c=new mi(new Gr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Ms($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ag),c.material.toneMapped=ie.getTransfer(y.colorSpace)!==pe,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new mi(new Lo(2,2),new Xi({name:"BackgroundMaterial",uniforms:Ms($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(zh,Yf(r)),e.buffers.color.setClear(zh.r,zh.g,zh.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function FS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(F,D,V,I,L){let B=!1,N=d(F,I,V,D);s!==N&&(s=N,c(s.object)),B=u(F,I,V,L),B&&m(F,I,V,L),L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(F,D,V,I),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return r.createVertexArray()}function c(F){return r.bindVertexArray(F)}function h(F){return r.deleteVertexArray(F)}function d(F,D,V,I){let L=I.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let N=F.isInstancedMesh===!0?F.id:0,H=B[N];H===void 0&&(H={},B[N]=H);let O=H[V.id];O===void 0&&(O={},H[V.id]=O);let C=O[L];return C===void 0&&(C=f(l()),O[L]=C),C}function f(F){let D=[],V=[],I=[];for(let L=0;L<e;L++)D[L]=0,V[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:I,object:F,attributes:{},index:null}}function u(F,D,V,I){let L=s.attributes,B=D.attributes,N=0,H=V.getAttributes();for(let O in H)if(H[O].location>=0){let K=L[O],ht=B[O];if(ht===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(ht=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(ht=F.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function m(F,D,V,I){let L={},B=D.attributes,N=0,H=V.getAttributes();for(let O in H)if(H[O].location>=0){let K=B[O];K===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));let ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),L[O]=ht,N++}s.attributes=L,s.attributesNum=N,s.index=I}function _(){let F=s.newAttributes;for(let D=0,V=F.length;D<V;D++)F[D]=0}function p(F){g(F,0)}function g(F,D){let V=s.newAttributes,I=s.enabledAttributes,L=s.attributeDivisors;V[F]=1,I[F]===0&&(r.enableVertexAttribArray(F),I[F]=1),L[F]!==D&&(r.vertexAttribDivisor(F,D),L[F]=D)}function v(){let F=s.newAttributes,D=s.enabledAttributes;for(let V=0,I=D.length;V<I;V++)D[V]!==F[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function M(F,D,V,I,L,B,N){N===!0?r.vertexAttribIPointer(F,D,V,L,B):r.vertexAttribPointer(F,D,V,I,L,B)}function y(F,D,V,I){_();let L=I.attributes,B=V.getAttributes(),N=D.defaultAttributeValues;for(let H in B){let O=B[H];if(O.location>=0){let C=L[H];if(C===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(C=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(C=F.instanceColor)),C!==void 0){let K=C.normalized,ht=C.itemSize,Tt=t.get(C);if(Tt===void 0)continue;let Y=Tt.buffer,at=Tt.type,dt=Tt.bytesPerElement,Mt=at===r.INT||at===r.UNSIGNED_INT||C.gpuType===eh;if(C.isInterleavedBufferAttribute){let ut=C.data,At=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,ge=C.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Ct=0;Ct<O.locationSize;Ct++)g(O.location+Ct,ut.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ct=0;Ct<O.locationSize;Ct++)p(O.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let Ct=0;Ct<O.locationSize;Ct++)M(O.location+Ct,ht/O.locationSize,at,K,At*dt,(ge+ht/O.locationSize*Ct)*dt,Mt)}else{if(C.isInstancedBufferAttribute){for(let ut=0;ut<O.locationSize;ut++)g(O.location+ut,C.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let ut=0;ut<O.locationSize;ut++)M(O.location+ut,ht/O.locationSize,at,K,ht*dt,ht/O.locationSize*ut*dt,Mt)}}else if(N!==void 0){let K=N[H];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(O.location,K);break;case 3:r.vertexAttrib3fv(O.location,K);break;case 4:r.vertexAttrib4fv(O.location,K);break;default:r.vertexAttrib1fv(O.location,K)}}}}v()}function T(){P();for(let F in n){let D=n[F];for(let V in D){let I=D[V];for(let L in I){let B=I[L];for(let N in B)h(B[N].object),delete B[N];delete I[L]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let D=n[F.id];for(let V in D){let I=D[V];for(let L in I){let B=I[L];for(let N in B)h(B[N].object),delete B[N];delete I[L]}}delete n[F.id]}function x(F){for(let D in n){let V=n[D];for(let I in V){let L=V[I];if(L[F.id]===void 0)continue;let B=L[F.id];for(let N in B)h(B[N].object),delete B[N];delete L[F.id]}}}function S(F){for(let D in n){let V=n[D],I=F.isInstancedMesh===!0?F.id:0,L=V[I];if(L!==void 0){for(let B in L){let N=L[B];for(let H in N)h(N[H].object),delete N[H];delete L[B]}delete V[I],Object.keys(V).length===0&&delete n[D]}}}function P(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function OS(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function BS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Ui&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==qn&&x!==Di&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function zS(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Pi,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,M,u);for(let T=0;T!==M;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=u;M!==_;++M,y+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ag(r,t,e){return new Qo(r,{minFilter:gr,generateMipmaps:t,type:Ni,colorSpace:lo,depthBuffer:e})}function jo(r,t,e){return new Xi({name:r,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Fn,blending:xs,depthTest:!1,depthWrite:!1})}function XS(){return jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qS(){return jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function YS(){return jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${VS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function og(){return jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function lg(){return jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ZS(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Qc||u===jc)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Qo(m.height);return _.fromEquirectangularTexture(r,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Qc||u===jc,_=u===ys||u===va;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Vh(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Vh(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===Qc?f.mapping=ys:u===jc&&(f.mapping=va),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function JS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&no("WebGLRenderer: "+n+" extension not supported."),i}}}function $S(r,t,e,n){let i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let _=s.get(m);_&&(t.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],r.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?xo:_o,y=new M(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,P=0;S<v;S+=3){let A=x[S+0],F=x[S+1],D=x[S+2];T[P++]=A,T[P++]=F,T[P++]=F,T[P++]=D,T[P++]=D,T[P++]=A}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){let P=x+0,A=x+1,F=x+2;T[S++]=P,T[S++]=A,T[S++]=A,T[S++]=F,T[S++]=F,T[S++]=P}}y.version=g;let E=s.get(m);E&&t.remove(E),s.set(m,y)}function f(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return s.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function KS(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function QS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jS(r,t,e){let n=new WeakMap,i=new Pe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new fo(E,y,T,d);x.type=Di,x.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let F=p[A],D=g[A],V=v[A],I=y*T*4*A;for(let L=0;L<F.count;L++){let B=L*S;u===!0&&(i.fromBufferAttribute(F,L),E[I+B+0]=i.x,E[I+B+1]=i.y,E[I+B+2]=i.z,E[I+B+3]=0),m===!0&&(i.fromBufferAttribute(D,L),E[I+B+4]=i.x,E[I+B+5]=i.y,E[I+B+6]=i.z,E[I+B+7]=0),_===!0&&(i.fromBufferAttribute(V,L),E[I+B+8]=i.x,E[I+B+9]=i.y,E[I+B+10]=i.z,E[I+B+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new It(y,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function tM(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function nM(r,t,e,n,i,s){let a=new ni(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new pn;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let d=new Oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new mi(h,d),u=new ko(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,M=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){M=T,y=M.length>0&&M[0].isRenderPass===!0;let E=a.width,x=a.height;M.length>0&&o===null&&(o=new ni(E,x,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new ni(E,x,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new mr(E,x),s===!0&&(c.format=_r,c.type=Ss)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<M.length;P++){let A=M[P];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Zi&&M.length===0)return!1;if(v=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let x=a,S=o;for(let P=0;P<M.length;P++){let A=M[P];A.enabled!==!1&&(A.render(T,S,x,E),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},ie.getTransfer(m)===pe&&(d.defines.SRGB_TRANSFER="");let P=eM[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function Ma(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=cg[i];if(s===void 0&&(s=new Float32Array(i),cg[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function en(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function nn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Hh(r,t){let e=hg[t];e===void 0&&(e=new Int32Array(t),hg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function iM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2fv(this.addr,t),nn(e,t)}}function sM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;r.uniform3fv(this.addr,t),nn(e,t)}}function aM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4fv(this.addr,t),nn(e,t)}}function oM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;dg.set(n),r.uniformMatrix2fv(this.addr,!1,dg),nn(e,n)}}function lM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;fg.set(n),r.uniformMatrix3fv(this.addr,!1,fg),nn(e,n)}}function cM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ug.set(n),r.uniformMatrix4fv(this.addr,!1,ug),nn(e,n)}}function hM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function uM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2iv(this.addr,t),nn(e,t)}}function fM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3iv(this.addr,t),nn(e,t)}}function dM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4iv(this.addr,t),nn(e,t)}}function pM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function mM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2uiv(this.addr,t),nn(e,t)}}function gM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3uiv(this.addr,t),nn(e,t)}}function _M(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4uiv(this.addr,t),nn(e,t)}}function Wh(r){return r.version===0&&(r.compareFunction=zf,r.needsUpdate=!0),r}function xM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Wh(Ig):s=Pg,e.setTexture2D(t||s,i)}function vM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ng,i)}function yM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Wh(Lg):s=Ug,e.setTextureCube(t||s,i)}function SM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Dg,i)}function MM(r){switch(r){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return hM;case 35667:case 35671:return uM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return SM}}function bM(r,t){r.uniform1fv(this.addr,t)}function TM(r,t){let e=Ma(t,this.size,2);r.uniform2fv(this.addr,e)}function wM(r,t){let e=Ma(t,this.size,3);r.uniform3fv(this.addr,e)}function EM(r,t){let e=Ma(t,this.size,4);r.uniform4fv(this.addr,e)}function AM(r,t){let e=Ma(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function CM(r,t){let e=Ma(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function RM(r,t){let e=Ma(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function PM(r,t){r.uniform1iv(this.addr,t)}function IM(r,t){r.uniform2iv(this.addr,t)}function LM(r,t){r.uniform3iv(this.addr,t)}function DM(r,t){r.uniform4iv(this.addr,t)}function NM(r,t){r.uniform1uiv(this.addr,t)}function UM(r,t){r.uniform2uiv(this.addr,t)}function FM(r,t){r.uniform3uiv(this.addr,t)}function OM(r,t){r.uniform4uiv(this.addr,t)}function BM(r,t,e){let n=this.cache,i=t.length,s=Hh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Wh(Ig):a=Pg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function zM(r,t,e){let n=this.cache,i=t.length,s=Hh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ng,s[a])}function kM(r,t,e){let n=this.cache,i=t.length,s=Hh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Wh(Lg):a=Ug;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,s[o])}function VM(r,t,e){let n=this.cache,i=t.length,s=Hh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Dg,s[a])}function GM(r){switch(r){case 5126:return bM;case 35664:return TM;case 35665:return wM;case 35666:return EM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}function pg(r,t){r.seq.push(t),r.map[t.id]=t}function HM(r,t,e){let n=r.name,i=n.length;for(Qf.lastIndex=0;;){let s=Qf.exec(n),a=Qf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pg(e,c===void 0?new td(o,r,t):new ed(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new nd(o),pg(e,d)),e=d}}}function mg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}function qM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function YM(r){ie._getMatrix(gg,ie.workingColorSpace,r);let t=`mat3( ${gg.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case co:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _g(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+qM(r.getShaderSource(t),o)}else return s}function ZM(r,t){let e=YM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function $M(r,t){let e=JM[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function KM(){ie.getLuminanceCoefficients(kh);let r=kh.x.toFixed(4),t=kh.y.toFixed(4),e=kh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function jM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ko(r){return r!==""}function xg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function vg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function id(r){return r.replace(eb,nb)}function nb(r,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return id(e)}function yg(r){return r.replace(ib,rb)}function rb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ab(r){return sb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function lb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ob[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function hb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cb[r.combine]||"ENVMAP_BLENDING_NONE"}function ub(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ab(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lb(e),d=hb(e),f=QM(e),u=jM(s),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ko).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(_=[Sg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[Sg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?$M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,ZM("linearToOutputTexel",e.outputColorSpace),KM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ko).join(`
`)),a=id(a),a=xg(a,e),a=vg(a,e),o=id(o),o=xg(o,e),o=vg(o,e),a=yg(a),o=yg(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+a,M=g+p+o,y=mg(i,i.VERTEX_SHADER,v),T=mg(i,i.FRAGMENT_SHADER,M);i.attachShader(m,y),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",V=i.getShaderInfoLog(T)||"",I=F.trim(),L=D.trim(),B=V.trim(),N=!0,H=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,T);else{let O=_g(i,y,"vertex"),C=_g(i,T,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+O+`
`+C)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(L===""||B==="")&&(H=!1);H&&(A.diagnostics={runnable:N,programLog:I,vertexShader:{log:L,prefix:_},fragmentShader:{log:B,prefix:p}})}i.deleteShader(y),i.deleteShader(T),x=new Sa(i,m),S=tb(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,WM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}function db(r){return r===Yr||r===Zo||r===Jo}function pb(r,t,e,n,i,s){let a=new po,o=new rd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,A,F,D){let V=A.fog,I=F.geometry,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||L,B),H=f[x.type],O=n.precision;x.precision!==null&&(O=n.getMaxPrecision(x.precision),O!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",O,"instead."));let C=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=C!==void 0?C.length:0,ht=0;I.morphAttributes.position!==void 0&&(ht=1),I.morphAttributes.normal!==void 0&&(ht=2),I.morphAttributes.color!==void 0&&(ht=3);let Tt,Y,at,dt;if(H){let nt=$i[H];Tt=nt.vertexShader,Y=nt.fragmentShader}else{Tt=x.vertexShader,Y=x.fragmentShader;let nt=o.getVertexShaderStage(x),wt=o.getFragmentShaderStage(x);o.update(x,nt,wt),at=nt.id,dt=wt.id}let Mt=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,Ct=!!x.map,Ht=!!x.matcap,Nt=!!N,Ot=Nt&&N.isPMREMTexture===!0,ce=!!x.aoMap,ae=!!x.lightMap,$=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,We=!!x.displacementMap,ve=!!x.emissiveMap,re=!!x.metalnessMap,Fe=!!x.roughnessMap,Ge=x.anisotropy>0,G=x.clearcoat>0,ue=x.diffuseRoughness>0,oe=x.dispersion>0,Vt=x.retroreflectivity>0,pt=x.iridescence>0,he=x.sheen>0,Ut=x.transmission>0,zt=Ge&&!!x.anisotropyMap,R=G&&!!x.clearcoatMap,b=G&&!!x.clearcoatNormalMap,X=G&&!!x.clearcoatRoughnessMap,st=ue&&!!x.diffuseRoughnessMap,it=pt&&!!x.iridescenceMap,ft=pt&&!!x.iridescenceThicknessMap,xt=he&&!!x.sheenColorMap,q=he&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ct=!!x.specularColorMap,U=!!x.specularIntensityMap,j=Ut&&!!x.transmissionMap,Q=Ut&&!!x.thicknessMap,mt=!!x.gradientMap,lt=!!x.alphaMap,gt=x.alphaTest>0,ot=!!x.alphaHash,_t=!!x.extensions,rt=Zi;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(rt=r.toneMapping);let et=Ot?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,vt={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:Tt,fragmentShader:Y,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:O,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Ht,envMap:Nt,envMapMode:Nt&&N.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:ce,lightMap:ae,bumpMap:$,normalMap:jt,displacementMap:We,emissiveMap:ve,normalMapObjectSpace:jt&&x.normalMapType===Hm,normalMapTangentSpace:jt&&x.normalMapType===Oh,packedNormalMap:jt&&x.normalMapType===Oh&&db(x.normalMap.format),metalnessMap:re,roughnessMap:Fe,anisotropy:Ge,anisotropyMap:zt,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:ue,diffuseRoughnessMap:st,dispersion:oe,retroreflection:Vt,iridescence:pt,iridescenceMap:it,iridescenceThicknessMap:ft,sheen:he,sheenColorMap:xt,sheenRoughnessMap:q,specularMap:tt,specularColorMap:ct,specularIntensityMap:U,transmission:Ut,transmissionMap:j,thicknessMap:Q,gradientMap:mt,opaque:x.transparent===!1&&x.blending===xa&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:gt,alphaHash:ot,combine:x.combine,mapUv:Ct&&u(x.map.channel),aoMapUv:ce&&u(x.aoMap.channel),lightMapUv:ae&&u(x.lightMap.channel),bumpMapUv:$&&u(x.bumpMap.channel),normalMapUv:jt&&u(x.normalMap.channel),displacementMapUv:We&&u(x.displacementMap.channel),emissiveMapUv:ve&&u(x.emissiveMap.channel),metalnessMapUv:re&&u(x.metalnessMap.channel),roughnessMapUv:Fe&&u(x.roughnessMap.channel),anisotropyMapUv:zt&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&u(x.sheenRoughnessMap.channel),specularMapUv:tt&&u(x.specularMap.channel),specularColorMapUv:ct&&u(x.specularColorMap.channel),specularIntensityMapUv:U&&u(x.specularIntensityMap.channel),transmissionMapUv:j&&u(x.transmissionMap.channel),thicknessMapUv:Q&&u(x.thicknessMap.channel),alphaMapUv:lt&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||Ge),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Ct||lt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ht,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(nt=>nt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yi,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=f[x.type],P;if(S){let A=$i[S];P=ng.clone(A.uniforms)}else P=x.uniforms;return P}function M(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new ub(r,S,x,i),c.push(P),h.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function mb(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function gb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Mg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,_,p,g){let v=r[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let M=o(f,u,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):e.push(M)}function c(f,u,m,_,p,g){let v=o(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||gb),n.length>1&&n.sort(u||Mg),i.length>1&&i.sort(u||Mg)}function d(){for(let f=t,u=r.length;f<u;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function _b(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new bg,r.set(n,[a])):i>=s.length?(a=new bg,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function xb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function vb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}function Sb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Mb(r){let t=new xb,e=vb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new be,a=new be;function o(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,M=0,y=0,T=0,E=0,x=0,S=0,P=0,A=0;c.sort(Sb);for(let D=0,V=c.length;D<V;D++){let I=c[D],L=I.color,B=I.intensity,N=I.distance,H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yr?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*B,d+=L.g*B,f+=L.b*B;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],B);A++}else if(I.isSunLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,K=e.get(I);K.shadowIntensity=C.intensity,K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=H;let ht=C.getViewportCount();for(let Tt=0;Tt<ht;Tt++)n.sunShadowMatrix[_+Tt]=C.getMatrix(Tt),n.sunShadowCascade[_+Tt]=C._cascadeData[Tt];_+=ht,m++}n.sun[u]=O,u++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,K=e.get(I);K.shadowIntensity=C.intensity,K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=O,p++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(L).multiplyScalar(B),O.distance=N,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[v]=O;let C=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,C.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=C.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=C.intensity,K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=H,x++}v++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(L).multiplyScalar(B),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=O,M++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let C=I.shadow,K=e.get(I);K.shadowIntensity=C.intensity,K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,K.shadowCameraNear=C.camera.near,K.shadowCameraFar=C.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=O,g++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(B),O.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.sunLength!==u||F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==M||F.hemiLength!==y||F.numSunShadows!==m||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==x||F.numSpotMaps!==S||F.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,F.sunLength=u,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=M,F.hemiLength=y,F.numSunShadows=m,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=x,F.numSpotMaps=S,F.numLightProbes=A,n.version=yb++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Tg(r){let t=new Mb(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bb(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Tg(r),t.set(i,[o])):s>=a.length?(o=new Tg(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cb(r,t,e){let n=new Vr,i=new It,s=new It,a=new Pe,o=new Bc,l=new zc,c={},h=e.maxTextureSize,d={[qr]:Fn,[Fn]:qr,[Yi]:Yi},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Tb,fragmentShader:wb}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new pn;m.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new mi(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let g=this.type;this.render=function(E,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ym&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vo);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),D=r.state;D.setBlending(xs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(L=>L.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,L=E.length;I<L;I++){let B=E[I],N=B.shadow;if(N===void 0){Bt("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let H=N.getFrameExtents();i.multiply(H),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/H.x),i.x=s.x*H.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/H.y),i.y=s.y*H.y,N.mapSize.y=s.y));let O=r.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||V===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===_a){if(B.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ni(i.x,i.y,{format:Yr,type:Ni,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new mr(i.x,i.y,Di),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=dr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ln,N.map.depthTexture.magFilter=ln}else B.isPointLight?(N.map=new Qo(i.x),N.map.depthTexture=new wo(i.x,Li)):(N.map=new ni(i.x,i.y),N.map.depthTexture=new mr(i.x,i.y,Li)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=dr,this.type===Vo?(N.map.depthTexture.compareFunction=O?Bf:Of,N.map.depthTexture.minFilter=Nn,N.map.depthTexture.magFilter=Nn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ln,N.map.depthTexture.magFilter=ln);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==i.x||N.map.height!==i.y)&&N.map.setSize(i.x,i.y);let C=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();B.isPointLight!==!0&&N.updateMatrices(B,S);let K=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let ht=0;ht<C;ht++){let Tt=N.getCamera(ht);if(B.isPointLight){let Y=N.camera,at=N.matrix,dt=B.distance||Y.far;dt!==Y.far&&(Y.far=dt,Y.updateProjectionMatrix()),$o.setFromMatrixPosition(B.matrixWorld),Y.position.copy($o),jf.copy(Y.position),jf.add(Eb[ht]),Y.up.copy(Ab[ht]),Y.lookAt(jf),Y.updateMatrixWorld(),at.makeTranslation(-$o.x,-$o.y,-$o.z),wg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),N._frustum.setFromProjectionMatrix(wg,Y.coordinateSystem,Y.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)r.setRenderTarget(N.map,ht),r.clear();else{ht===0&&(r.setRenderTarget(N.map),r.clear());let Y=N.getViewport(ht);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),D.viewport(a)}n=N.getFrustum(ht),y(x,S,Tt,B,K,this.type)}N.isPointLightShadow!==!0&&this.type===_a&&v(N,S),N.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,A,F)};function v(E,x){let S=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ni(i.x,i.y,{format:Yr,type:Ni}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,S,u,_,null)}function M(E,x,S,P){let A=null,F=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)A=F;else if(A=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,V=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let L=I[V];L===void 0&&(L=A.clone(),I[V]=L,x.addEventListener("dispose",T)),A=L}if(A.visible=x.visible,A.wireframe=x.wireframe,P===_a?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=S}return A}function y(E,x,S,P,A,F){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===_a)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),L=E.material;if(Array.isArray(L)){let B=I.groups;for(let N=0,H=B.length;N<H;N++){let O=B[N],C=L[O.materialIndex];if(C&&C.visible){let K=M(E,C,P,F);E.onBeforeShadow(r,E,x,S,I,K,O),r.renderBufferDirect(S,null,I,K,E,O),E.onAfterShadow(r,E,x,S,I,K,O)}}}else if(L.visible){let B=M(E,L,P,F);E.onBeforeShadow(r,E,x,S,I,B,null),r.renderBufferDirect(S,null,I,B,E,null),E.onAfterShadow(r,E,x,S,I,B,null)}}let V=E.children;for(let I=0,L=V.length;I<L;I++)y(V[I],x,S,P,A,F)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let P=c[S],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function Rb(r,t){function e(){let U=!1,j=new Pe,Q=null,mt=new Pe(0,0,0,0);return{setMask:function(lt){Q!==lt&&!U&&(r.colorMask(lt,lt,lt,lt),Q=lt)},setLocked:function(lt){U=lt},setClear:function(lt,gt,ot,_t,rt){rt===!0&&(lt*=_t,gt*=_t,ot*=_t),j.set(lt,gt,ot,_t),mt.equals(j)===!1&&(r.clearColor(lt,gt,ot,_t),mt.copy(j))},reset:function(){U=!1,Q=null,mt.set(-1,0,0,0)}}}function n(){let U=!1,j=!1,Q=null,mt=null,lt=null;return{setReversed:function(gt){if(j!==gt){let ot=t.get("EXT_clip_control");gt?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),j=gt;let _t=lt;lt=null,this.setClear(_t)}},getReversed:function(){return j},setTest:function(gt){gt?ut(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(gt){Q!==gt&&!U&&(r.depthMask(gt),Q=gt)},setFunc:function(gt){if(j&&(gt=jm[gt]),mt!==gt){switch(gt){case fc:r.depthFunc(r.NEVER);break;case dc:r.depthFunc(r.ALWAYS);break;case pc:r.depthFunc(r.LESS);break;case oa:r.depthFunc(r.LEQUAL);break;case mc:r.depthFunc(r.EQUAL);break;case gc:r.depthFunc(r.GEQUAL);break;case _c:r.depthFunc(r.GREATER);break;case xc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=gt}},setLocked:function(gt){U=gt},setClear:function(gt){lt!==gt&&(lt=gt,j&&(gt=1-gt),r.clearDepth(gt))},reset:function(){U=!1,Q=null,mt=null,lt=null,j=!1}}}function i(){let U=!1,j=null,Q=null,mt=null,lt=null,gt=null,ot=null,_t=null,rt=null;return{setTest:function(et){U||(et?ut(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(et){j!==et&&!U&&(r.stencilMask(et),j=et)},setFunc:function(et,vt,nt){(Q!==et||mt!==vt||lt!==nt)&&(r.stencilFunc(et,vt,nt),Q=et,mt=vt,lt=nt)},setOp:function(et,vt,nt){(gt!==et||ot!==vt||_t!==nt)&&(r.stencilOp(et,vt,nt),gt=et,ot=vt,_t=nt)},setLocked:function(et){U=et},setClear:function(et){rt!==et&&(r.clearStencil(et),rt=et)},reset:function(){U=!1,j=null,Q=null,mt=null,lt=null,gt=null,ot=null,_t=null,rt=null}}}let s=new e,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,T=null,E=null,x=null,S=new qt(0,0,0),P=0,A=!1,F=null,D=null,V=null,I=null,L=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=H>=2);let C=null,K={},ht=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Y=new Pe().fromArray(ht),at=new Pe().fromArray(Tt);function dt(U,j,Q,mt){let lt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(U,gt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<Q;ot++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(j+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return gt}let Mt={};Mt[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),a.setFunc(oa),$(!1),jt(gf),ut(r.CULL_FACE),ce(xs);function ut(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function ge(U,j){return f[U]!==j?(r.bindFramebuffer(U,j),f[U]=j,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=j),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=j),!0):!1}function Ct(U,j){let Q=m,mt=!1;if(U){Q=u.get(j),Q===void 0&&(Q=[],u.set(j,Q));let lt=U.textures;if(Q.length!==lt.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,ot=lt.length;gt<ot;gt++)Q[gt]=r.COLOR_ATTACHMENT0+gt;Q.length=lt.length,mt=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,mt=!0);mt&&r.drawBuffers(Q)}function Ht(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let Nt={[vs]:r.FUNC_ADD,[Mm]:r.FUNC_SUBTRACT,[bm]:r.FUNC_REVERSE_SUBTRACT};Nt[Tm]=r.MIN,Nt[wm]=r.MAX;let Ot={[Em]:r.ZERO,[Am]:r.ONE,[Cm]:r.SRC_COLOR,[yf]:r.SRC_ALPHA,[Nm]:r.SRC_ALPHA_SATURATE,[Lm]:r.DST_COLOR,[Pm]:r.DST_ALPHA,[Rm]:r.ONE_MINUS_SRC_COLOR,[Sf]:r.ONE_MINUS_SRC_ALPHA,[Dm]:r.ONE_MINUS_DST_COLOR,[Im]:r.ONE_MINUS_DST_ALPHA,[Um]:r.CONSTANT_COLOR,[Fm]:r.ONE_MINUS_CONSTANT_COLOR,[Om]:r.CONSTANT_ALPHA,[Bm]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(U,j,Q,mt,lt,gt,ot,_t,rt,et){if(U===xs){p===!0&&(At(r.BLEND),p=!1);return}if(p===!1&&(ut(r.BLEND),p=!0),U!==Sm){if(U!==g||et!==A){if((v!==vs||T!==vs)&&(r.blendEquation(r.FUNC_ADD),v=vs,T=vs),et)switch(U){case xa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _f:r.blendFunc(r.ONE,r.ONE);break;case xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",U);break}else switch(U){case xa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _f:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xf:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vf:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",U);break}M=null,y=null,E=null,x=null,S.set(0,0,0),P=0,g=U,A=et}return}lt=lt||j,gt=gt||Q,ot=ot||mt,(j!==v||lt!==T)&&(r.blendEquationSeparate(Nt[j],Nt[lt]),v=j,T=lt),(Q!==M||mt!==y||gt!==E||ot!==x)&&(r.blendFuncSeparate(Ot[Q],Ot[mt],Ot[gt],Ot[ot]),M=Q,y=mt,E=gt,x=ot),(_t.equals(S)===!1||rt!==P)&&(r.blendColor(_t.r,_t.g,_t.b,rt),S.copy(_t),P=rt),g=U,A=!1}function ae(U,j){U.side===Yi?At(r.CULL_FACE):ut(r.CULL_FACE);let Q=U.side===Fn;j&&(Q=!Q),$(Q),U.blending===xa&&U.transparent===!1?ce(xs):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let mt=U.stencilWrite;o.setTest(mt),mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){F!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),F=U)}function jt(U){U!==xm?(ut(r.CULL_FACE),U!==D&&(U===gf?r.cullFace(r.BACK):U===vm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),D=U}function We(U){U!==V&&(N&&r.lineWidth(U),V=U)}function ve(U,j,Q){U?(ut(r.POLYGON_OFFSET_FILL),(I!==j||L!==Q)&&(I=j,L=Q,a.getReversed()&&(j=-j,Q=-Q),r.polygonOffset(j,Q))):At(r.POLYGON_OFFSET_FILL)}function re(U){U?ut(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=r.TEXTURE0+B-1),C!==U&&(r.activeTexture(U),C=U)}function Ge(U,j,Q){Q===void 0&&(C===null?Q=r.TEXTURE0+B-1:Q=C);let mt=K[Q];mt===void 0&&(mt={type:void 0,texture:void 0},K[Q]=mt),(mt.type!==U||mt.texture!==j)&&(C!==Q&&(r.activeTexture(Q),C=Q),r.bindTexture(U,j||Mt[U]),mt.type=U,mt.texture=j)}function G(){let U=K[C];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ue(){try{r.compressedTexImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function pt(){try{r.texSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function zt(){try{r.texStorage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function R(){try{r.texStorage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function b(){try{r.texImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function X(){try{r.texImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function st(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function it(U,j){d[U]!==j&&(r.pixelStorei(U,j),d[U]=j)}function ft(U){Y.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Y.copy(U))}function xt(U){at.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function q(U,j){let Q=c.get(j);Q===void 0&&(Q=new WeakMap,c.set(j,Q));let mt=Q.get(U);mt===void 0&&(mt=r.getUniformBlockIndex(j,U.name),r.uniformBlockBinding(j,mt,mt),Q.set(U,mt))}function tt(U,j,Q){let lt=c.get(j).get(U);l[lt]!==Q&&(r.bindBufferBase(r.UNIFORM_BUFFER,lt,Q),l[lt]=Q)}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,K={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,T=null,E=null,x=null,S=new qt(0,0,0),P=0,A=!1,F=null,D=null,V=null,I=null,L=null,Y.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:At,bindFramebuffer:ge,drawBuffers:Ct,useProgram:Ht,setBlending:ce,setMaterial:ae,setFlipSided:$,setCullFace:jt,setLineWidth:We,setPolygonOffset:ve,setScissorTest:re,activeTexture:Fe,bindTexture:Ge,unbindTexture:G,compressedTexImage2D:ue,compressedTexImage3D:oe,texImage2D:b,texImage3D:X,pixelStorei:it,getParameter:st,updateUBOMapping:q,uniformBlockBinding:tt,texStorage2D:zt,texStorage3D:R,texSubImage2D:Vt,texSubImage3D:pt,compressedTexSubImage2D:he,compressedTexSubImage3D:Ut,scissor:ft,viewport:xt,reset:ct}}function Pb(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):ho("canvas")}function v(R,b,X){let st=1,it=zt(R);if((it.width>X||it.height>X)&&(st=X/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ft=Math.floor(st*it.width),xt=Math.floor(st*it.height);f===void 0&&(f=g(ft,xt));let q=b?g(ft,xt):f;return q.width=ft,q.height=xt,q.getContext("2d").drawImage(R,0,0,ft,xt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ft+"x"+xt+")."),q}else return"data"in R&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,b,X,st,it,ft=!1){if(R!==null){if(r[R]!==void 0)return r[R];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt;st&&(xt=t.get("EXT_texture_norm16"),xt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=b;if(b===r.RED&&(X===r.FLOAT&&(q=r.R32F),X===r.HALF_FLOAT&&(q=r.R16F),X===r.UNSIGNED_BYTE&&(q=r.R8),X===r.UNSIGNED_SHORT&&xt&&(q=xt.R16_EXT),X===r.SHORT&&xt&&(q=xt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.R8UI),X===r.UNSIGNED_SHORT&&(q=r.R16UI),X===r.UNSIGNED_INT&&(q=r.R32UI),X===r.BYTE&&(q=r.R8I),X===r.SHORT&&(q=r.R16I),X===r.INT&&(q=r.R32I)),b===r.RG&&(X===r.FLOAT&&(q=r.RG32F),X===r.HALF_FLOAT&&(q=r.RG16F),X===r.UNSIGNED_BYTE&&(q=r.RG8),X===r.UNSIGNED_SHORT&&xt&&(q=xt.RG16_EXT),X===r.SHORT&&xt&&(q=xt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RG8UI),X===r.UNSIGNED_SHORT&&(q=r.RG16UI),X===r.UNSIGNED_INT&&(q=r.RG32UI),X===r.BYTE&&(q=r.RG8I),X===r.SHORT&&(q=r.RG16I),X===r.INT&&(q=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(q=r.RGB16UI),X===r.UNSIGNED_INT&&(q=r.RGB32UI),X===r.BYTE&&(q=r.RGB8I),X===r.SHORT&&(q=r.RGB16I),X===r.INT&&(q=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),X===r.UNSIGNED_INT&&(q=r.RGBA32UI),X===r.BYTE&&(q=r.RGBA8I),X===r.SHORT&&(q=r.RGBA16I),X===r.INT&&(q=r.RGBA32I)),b===r.RGB&&(X===r.UNSIGNED_SHORT&&xt&&(q=xt.RGB16_EXT),X===r.SHORT&&xt&&(q=xt.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),b===r.RGBA){let tt=ft?co:ie.getTransfer(it);X===r.FLOAT&&(q=r.RGBA32F),X===r.HALF_FLOAT&&(q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(q=tt===pe?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&xt&&(q=xt.RGBA16_EXT),X===r.SHORT&&xt&&(q=xt.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(R,b){let X;return R?b===null||b===Li||b===Ss?X=r.DEPTH24_STENCIL8:b===Di?X=r.DEPTH32F_STENCIL8:b===ya&&(X=r.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Li||b===Ss?X=r.DEPTH_COMPONENT24:b===Di?X=r.DEPTH_COMPONENT32F:b===ya&&(X=r.DEPTH_COMPONENT16),X}function S(R,b){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=new WeakRef(R);n.get(R).__ref=b,m.add(b),_.register(R,b,b)}function A(R){let b=n.get(R).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function F(R){V(R.target)}function D(R){I(R.target)}function V(R){R.removeEventListener("dispose",F),A(R),B(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",D),A(R),H(R)}function L(){for(let R of m){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):V(b))}m.clear(),d.clear()}function B(R){let b=n.get(R);if(b.__webglInit===void 0)return;let X=R.source,st=u.get(X);if(st){let it=st[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&N(R),Object.keys(st).length===0&&u.delete(X)}n.remove(R)}function N(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let X=R.source,st=u.get(X);delete st[b.__cacheKey],a.memory.textures--}function H(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=R.depthTexture;if(X&&X.renderTarget===R&&V(X),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ft=0;ft<b.__webglFramebuffer[it].length;ft++)r.deleteFramebuffer(b.__webglFramebuffer[it][ft]);else r.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)r.deleteFramebuffer(b.__webglFramebuffer[it]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=R.textures;for(let it=0,ft=st.length;it<ft;it++){let xt=n.get(st[it]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(st[it])}n.remove(R)}let O=0;function C(){O=0}function K(){return O}function ht(R){O=R}function Tt(){let R=O;return R>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,R}function Y(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function at(R,b){let X=n.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let st=R.image;if(st===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,R,b);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function dt(R,b){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){ae(X,R,b);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function Mt(R,b){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){ae(X,R,b);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function ut(R,b){let X=n.get(R);if(R.version>0&&X.__version!==R.version){$(X,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}let At={[vc]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[yc]:r.MIRRORED_REPEAT},ge={[ln]:r.NEAREST,[Vm]:r.NEAREST_MIPMAP_NEAREST,[Ho]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[th]:r.LINEAR_MIPMAP_NEAREST,[gr]:r.LINEAR_MIPMAP_LINEAR},Ct={[Xm]:r.NEVER,[zf]:r.ALWAYS,[qm]:r.LESS,[Of]:r.LEQUAL,[Ym]:r.EQUAL,[Bf]:r.GEQUAL,[Zm]:r.GREATER,[Jm]:r.NOTEQUAL};function Ht(R,b){if(b.type===Di&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===th||b.magFilter===Ho||b.magFilter===gr||b.minFilter===Nn||b.minFilter===th||b.minFilter===Ho||b.minFilter===gr)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,At[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,At[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,At[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ge[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ln||b.minFilter!==Ho&&b.minFilter!==gr||b.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(R,b){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",F),P(b));let st=b.source,it=u.get(st);it===void 0&&(it={},u.set(st,it));let ft=Y(b);if(ft!==R.__cacheKey){it[ft]===void 0&&(it[ft]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),it[ft].usedTimes++;let xt=it[R.__cacheKey];xt!==void 0&&(it[R.__cacheKey].usedTimes--,xt.usedTimes===0&&N(b)),R.__cacheKey=ft,R.__webglTexture=it[ft].texture}return X}function Ot(R,b,X){return Math.floor(Math.floor(R/X)/b)}function ce(R,b,X,st){let ft=R.updateRanges;if(ft.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,X,st,b.data);else{ft.sort((U,j)=>U.start-j.start);let xt=0;for(let U=1;U<ft.length;U++){let j=ft[xt],Q=ft[U],mt=j.start+j.count,lt=Ot(Q.start,b.width,4),gt=Ot(j.start,b.width,4);Q.start<=mt+1&&lt===gt&&Ot(Q.start+Q.count-1,b.width,4)===lt?j.count=Math.max(j.count,Q.start+Q.count-j.start):(++xt,ft[xt]=Q)}ft.length=xt+1;let q=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),ct=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let U=0,j=ft.length;U<j;U++){let Q=ft[U],mt=Math.floor(Q.start/4),lt=Math.ceil(Q.count/4),gt=mt%b.width,ot=Math.floor(mt/b.width),_t=lt,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ot),e.texSubImage2D(r.TEXTURE_2D,0,gt,ot,_t,rt,X,st,b.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ct)}}function ae(R,b,X){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);let it=Nt(R,b),ft=b.source;e.bindTexture(st,R.__webglTexture,r.TEXTURE0+X);let xt=n.get(ft);if(ft.version!==xt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=ie.getPrimaries(ie.workingColorSpace),et=b.colorSpace===xr?null:ie.getPrimaries(b.colorSpace),vt=b.colorSpace===xr||rt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let tt=v(b.image,!1,i.maxTextureSize);tt=Ut(b,tt);let ct=s.convert(b.format,b.colorSpace),U=s.convert(b.type),j=E(b.internalFormat,ct,U,b.normalized,b.colorSpace,b.isVideoTexture);Ht(st,b);let Q,mt=b.mipmaps,lt=b.isVideoTexture!==!0,gt=xt.__version===void 0||it===!0,ot=ft.dataReady,_t=S(b,tt);if(b.isDepthTexture)j=x(b.format===_r,b.type),gt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,U,null));else if(b.isDataTexture)if(mt.length>0){lt&&gt&&e.texStorage2D(r.TEXTURE_2D,_t,j,mt[0].width,mt[0].height);for(let rt=0,et=mt.length;rt<et;rt++)Q=mt[rt],lt?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,Q.width,Q.height,ct,U,Q.data):e.texImage2D(r.TEXTURE_2D,rt,j,Q.width,Q.height,0,ct,U,Q.data);b.generateMipmaps=!1}else lt?(gt&&e.texStorage2D(r.TEXTURE_2D,_t,j,tt.width,tt.height),ot&&ce(b,tt,ct,U)):e.texImage2D(r.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,U,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,j,mt[0].width,mt[0].height,tt.depth);for(let rt=0,et=mt.length;rt<et;rt++)if(Q=mt[rt],b.format!==Ui)if(ct!==null)if(lt){if(ot)if(b.layerUpdates.size>0){let vt=$f(Q.width,Q.height,b.format,b.type);for(let nt of b.layerUpdates){let wt=Q.data.subarray(nt*vt/Q.data.BYTES_PER_ELEMENT,(nt+1)*vt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,nt,Q.width,Q.height,1,ct,wt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Q.width,Q.height,tt.depth,ct,Q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,j,Q.width,Q.height,tt.depth,0,Q.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Q.width,Q.height,tt.depth,ct,U,Q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,j,Q.width,Q.height,tt.depth,0,ct,U,Q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{lt&&gt&&e.texStorage2D(r.TEXTURE_2D,_t,j,mt[0].width,mt[0].height);for(let rt=0,et=mt.length;rt<et;rt++)Q=mt[rt],b.format!==Ui?ct!==null?lt?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,Q.width,Q.height,ct,Q.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,j,Q.width,Q.height,0,Q.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,Q.width,Q.height,ct,U,Q.data):e.texImage2D(r.TEXTURE_2D,rt,j,Q.width,Q.height,0,ct,U,Q.data)}else if(b.isDataArrayTexture)if(lt){if(gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,j,tt.width,tt.height,tt.depth),ot)if(b.layerUpdates.size>0){let rt=$f(tt.width,tt.height,b.format,b.type);for(let et of b.layerUpdates){let vt=tt.data.subarray(et*rt/tt.data.BYTES_PER_ELEMENT,(et+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,U,vt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,U,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,U,tt.data);else if(b.isData3DTexture)lt?(gt&&e.texStorage3D(r.TEXTURE_3D,_t,j,tt.width,tt.height,tt.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,U,tt.data)):e.texImage3D(r.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,U,tt.data);else if(b.isFramebufferTexture){if(gt)if(lt)e.texStorage2D(r.TEXTURE_2D,_t,j,tt.width,tt.height);else{let rt=tt.width,et=tt.height;for(let vt=0;vt<_t;vt++)e.texImage2D(r.TEXTURE_2D,vt,j,rt,et,0,ct,U,null),rt>>=1,et>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),d.add(b),rt.onpaint=et=>{let vt=et.changedElements;for(let nt of d)vt.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let vt=r.RGBA,nt=r.RGBA,wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,vt,nt,wt,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(mt.length>0){if(lt&&gt){let rt=zt(mt[0]);e.texStorage2D(r.TEXTURE_2D,_t,j,rt.width,rt.height)}for(let rt=0,et=mt.length;rt<et;rt++)Q=mt[rt],lt?ot&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ct,U,Q):e.texImage2D(r.TEXTURE_2D,rt,j,ct,U,Q);b.generateMipmaps=!1}else if(lt){if(gt){let rt=zt(tt);e.texStorage2D(r.TEXTURE_2D,_t,j,rt.width,rt.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,U,tt)}else e.texImage2D(r.TEXTURE_2D,0,j,ct,U,tt);M(b)&&b.mipmapsAutoUpdate===!0&&y(st),xt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,X){if(b.image.length!==6)return;let st=Nt(R,b),it=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);let ft=n.get(it);if(it.version!==ft.__version||st===!0){e.activeTexture(r.TEXTURE0+X);let xt=ie.getPrimaries(ie.workingColorSpace),q=b.colorSpace===xr?null:ie.getPrimaries(b.colorSpace),tt=b.colorSpace===xr||xt===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!ct&&!U?j[nt]=v(b.image[nt],!0,i.maxCubemapSize):j[nt]=U?b.image[nt].image:b.image[nt],j[nt]=Ut(b,j[nt]);let Q=j[0],mt=s.convert(b.format,b.colorSpace),lt=s.convert(b.type),gt=E(b.internalFormat,mt,lt,b.normalized,b.colorSpace),ot=b.isVideoTexture!==!0,_t=ft.__version===void 0||st===!0,rt=it.dataReady,et=S(b,Q);Ht(r.TEXTURE_CUBE_MAP,b);let vt;if(b.isDepthTexture){if(gt=x(b.format===_r,b.type),_t)if(ot)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,gt,Q.width,Q.height);else for(let nt=0;nt<6;nt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,gt,Q.width,Q.height,0,mt,lt,null)}else if(ct){ot&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,gt,Q.width,Q.height);for(let nt=0;nt<6;nt++){vt=j[nt].mipmaps;for(let wt=0;wt<vt.length;wt++){let te=vt[wt];b.format!==Ui?mt!==null?ot?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,te.width,te.height,mt,te.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,gt,te.width,te.height,0,te.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,te.width,te.height,mt,lt,te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,gt,te.width,te.height,0,mt,lt,te.data)}}}else{if(vt=b.mipmaps,ot&&_t){vt.length>0&&et++;let nt=zt(j[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,gt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(U){ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,mt,lt,j[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,gt,j[nt].width,j[nt].height,0,mt,lt,j[nt].data);for(let wt=0;wt<vt.length;wt++){let Wt=vt[wt].image[nt].image;ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Wt.width,Wt.height,mt,lt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,gt,Wt.width,Wt.height,0,mt,lt,Wt.data)}}else{ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt,lt,j[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,gt,mt,lt,j[nt]);for(let wt=0;wt<vt.length;wt++){let te=vt[wt];ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,mt,lt,te.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,gt,mt,lt,te.image[nt])}}}M(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ft.__version=it.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function jt(R,b,X,st,it,ft){let xt=s.convert(X.format,X.colorSpace),q=s.convert(X.type),tt=E(X.internalFormat,xt,q,X.normalized,X.colorSpace),ct=n.get(b),U=n.get(X);if(U.__renderTarget=b,!ct.__hasExternalTextures){let j=Math.max(1,b.width>>ft),Q=Math.max(1,b.height>>ft);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,ft,tt,j,Q,b.depth,0,xt,q,null):e.texImage2D(it,ft,tt,j,Q,0,xt,q,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,U.__webglTexture,0,Vt(b)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,it,U.__webglTexture,ft),e.bindFramebuffer(r.FRAMEBUFFER,null)}function We(R,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let st=b.depthTexture,it=st&&st.isDepthTexture?st.type:null,ft=x(b.stencilBuffer,it),xt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(b),ft,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,R)}else{let st=b.textures;for(let it=0;it<st.length;it++){let ft=st[it],xt=s.convert(ft.format,ft.colorSpace),q=s.convert(ft.type),tt=E(ft.internalFormat,xt,q,ft.normalized,ft.colorSpace);pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(b),tt,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(b),tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,tt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(R,b,X){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(b.depthTexture);it.__renderTarget=b;let ft=st?b.depthTexture.image[0]:b.depthTexture.image;(!it.__webglTexture||ft.width!==b.width||ft.height!==b.height)&&(ft.width=b.width,ft.height=b.height,b.depthTexture.needsUpdate=!0),st?ut(b.depthTexture,0):at(b.depthTexture,0);let xt=it.__webglTexture,q=Vt(b),tt=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,ct=b.depthTexture.format===_r?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===dr)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,xt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,xt,0);else if(b.depthTexture.format===_r)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,xt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let b=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=st}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let st=0;st<6;st++)ve(b.__webglFramebuffer[st],R,st);else R.texture.mipmaps.length>0?ve(b.__webglFramebuffer[0],R,0):ve(b.__webglFramebuffer,R,0);else if(X){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=r.createRenderbuffer(),We(b.__webglDepthbuffer[st],R,!1);else{let it=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ft)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),We(b.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ft)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(R,b,X){let st=n.get(R);b!==void 0&&jt(st.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&re(R)}function Ge(R){let b=R.texture,X=n.get(R),st=n.get(b);R.addEventListener("dispose",D),P(R);let it=R.textures,ft=R.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,a.memory.textures++),ft){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(b.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let tt=0;tt<b.mipmaps.length;tt++)X.__webglFramebuffer[q][tt]=r.createFramebuffer()}else X.__webglFramebuffer[q]=r.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<b.mipmaps.length;q++)X.__webglFramebuffer[q]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(xt)for(let q=0,tt=it.length;q<tt;q++){let ct=n.get(it[q]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&pt(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<it.length;q++){let tt=it[q];X.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[q]);let ct=s.convert(tt.format,tt.colorSpace),U=s.convert(tt.type),j=E(tt.internalFormat,ct,U,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),Q=Vt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,j,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,X.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),We(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,b);for(let q=0;q<6;q++)if(b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)jt(X.__webglFramebuffer[q][tt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt);else jt(X.__webglFramebuffer[q],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let q=0,tt=it.length;q<tt;q++){let ct=it[q],U=n.get(ct),j=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,U.__webglTexture),Ht(j,ct),jt(X.__webglFramebuffer,R,ct,r.COLOR_ATTACHMENT0+q,j,0),M(ct)&&y(j)}e.unbindTexture()}else{let q=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(q,st.__webglTexture),Ht(q,b),b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)jt(X.__webglFramebuffer[tt],R,b,r.COLOR_ATTACHMENT0,q,tt);else jt(X.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,q,0);M(b)?y(q):b.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&re(R)}function G(R){let b=R.textures;for(let X=0,st=b.length;X<st;X++){let it=b[X];if(M(it)&&it.mipmapsAutoUpdate===!0){let ft=T(R),xt=n.get(it).__webglTexture;e.bindTexture(ft,xt),y(ft),e.unbindTexture()}}}let ue=[];function oe(R){if(R.samples>0){if(pt(R)===!1){let b=R.textures,X=R.width,st=R.height,it=r.COLOR_BUFFER_BIT,ft=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(R),q=b.length>1;if(q)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);let U=n.get(b[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,X,st,0,0,X,st,it,r.NEAREST),l===!0&&(ue.length=0,ue.push(r.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ue.push(ft),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);let U=n.get(b[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,U,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Vt(R){return Math.min(i.maxSamples,R.samples)}function pt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ut(R,b){let X=R.colorSpace,st=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==lo&&X!==xr&&(ie.getTransfer(X)===pe?(st!==Ui||it!==qn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",X)),b}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Tt,this.resetTextureUnits=C,this.getTextureUnits=K,this.setTextureUnits=ht,this.setTexture2D=at,this.setTexture2DArray=dt,this.setTexture3D=Mt,this.setTextureCube=ut,this.rebindTextures=Fe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=pt,this.dispose=L}function Ib(r,t){function e(n,i=xr){let s,a=ie.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pf)return r.BYTE;if(n===If)return r.SHORT;if(n===ya)return r.UNSIGNED_SHORT;if(n===eh)return r.INT;if(n===Li)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===Ni)return r.HALF_FLOAT;if(n===Nf)return r.ALPHA;if(n===Uf)return r.RGB;if(n===Ui)return r.RGBA;if(n===dr)return r.DEPTH_COMPONENT;if(n===_r)return r.DEPTH_STENCIL;if(n===Ff)return r.RED;if(n===rh)return r.RED_INTEGER;if(n===Yr)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===ah)return r.RGBA_INTEGER;if(n===Wo||n===Xo||n===qo||n===Yo)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===lh||n===ch||n===hh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===fh||n===dh||n===ph||n===mh||n===Zo||n===gh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uh||n===fh)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ph)return s.COMPRESSED_R11_EAC;if(n===mh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return s.COMPRESSED_RG11_EAC;if(n===gh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_h||n===xh||n===vh||n===yh||n===Sh||n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_h)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ah)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ch)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rh)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ph)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ih||n===Lh||n===Dh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ih)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Uh||n===Jo||n===Fh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}function Ub(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Fn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Fn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Fg),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fb(r,t,e,n){let i={},s={};function a(v,M){let y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,M){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=M.program;n.updateUBOMapping(v,T);let E=t.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let M=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(v){let M=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,x=y.length;E<x;E++){let S=y[E];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],E,P,T);else h(S,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,M,y,T){if(f(v,M,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],F=_(A,!0);d(A,v.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function f(v,M,y,T){let E=v.value,x=M+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let S=T[x],P=!1;for(let A=0;A<E.length;A++)u(E[A],S,A)===!0&&(P=!0);return P}return u(E,T,x)}function u(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let T=M[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let M=v.uniforms,y=0,T=16;for(let x=0,S=M.length;x<S;x++){let P=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,F=P.length;A<F;A++){let D=P[A],V=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(M[x])||Array.isArray(D.value),L=y;for(let N=0,H=V.length;N<H;N++){let O=V[N],C=_(O,I),K=y%T,ht=K%C.boundary,Tt=K+ht;y+=ht,Tt!==0&&T-Tt<C.storage&&(y+=T-Tt),N===0&&(L=y),y+=C.storage}let B=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new B((y-L)/Float32Array.BYTES_PER_ELEMENT),D.__offset=L}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let M=v.target;M.removeEventListener("dispose",p),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}function Bb(){return Ji===null&&(Ji=new Ec(Ob,16,16,Yr,Ni),Ji.name="DFG_LUT",Ji.minFilter=Nn,Ji.magFilter=Nn,Ji.wrapS=ki,Ji.wrapT=ki,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var ev,nv,iv,rv,sv,av,ov,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Sv,Mv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Fv,Ov,Bv,zv,kv,Vv,Gv,Hv,Wv,Xv,qv,Yv,Zv,Jv,$v,Kv,Qv,jv,ty,ey,ny,iy,ry,sy,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,_y,xy,vy,yy,Sy,My,by,Ty,wy,Ey,Ay,Cy,Ry,Py,Iy,Ly,Dy,Ny,Uy,Fy,Oy,By,zy,ky,Vy,Gy,Hy,Wy,Xy,qy,Yy,Zy,Jy,$y,Ky,Qy,jy,tS,eS,nS,iS,rS,sS,aS,oS,lS,cS,hS,uS,fS,dS,pS,mS,gS,_S,xS,vS,yS,SS,MS,bS,TS,wS,ES,AS,CS,RS,PS,IS,LS,DS,Zt,bt,$i,zh,NS,Ag,Qo,sg,kS,VS,Cg,Rg,GS,HS,WS,Vh,eM,Pg,Ig,Lg,Dg,Ng,Ug,cg,hg,ug,fg,dg,td,ed,nd,Qf,Sa,WM,XM,gg,JM,kh,eb,ib,sb,ob,cb,fb,rd,sd,yb,Tb,wb,Eb,Ab,wg,$o,jf,Lb,Db,ad,od,Nb,Fg,Ob,Ji,Gh,Xh=sr(()=>{Kf();Kf();ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:ev,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:vv,color_fragment:yv,color_pars_fragment:Sv,color_pars_vertex:Mv,color_vertex:bv,common:Tv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Av,emissivemap_fragment:Cv,emissivemap_pars_fragment:Rv,colorspace_fragment:Pv,colorspace_pars_fragment:Iv,envmap_fragment:Lv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Nv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:qv,envmap_vertex:Fv,fog_vertex:Ov,fog_pars_vertex:Bv,fog_fragment:zv,fog_pars_fragment:kv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Yv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:$v,lights_physical_fragment:Kv,lights_physical_pars_fragment:Qv,lights_fragment_begin:jv,lights_fragment_maps:ty,lights_fragment_end:ey,lightprobes_pars_fragment:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:hy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphinstance_vertex:dy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:My,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Iy,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Oy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Vy,skinning_vertex:Gy,skinnormal_vertex:Hy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Qy,worldpos_vertex:jy,background_vert:tS,background_frag:eS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:rS,cube_frag:sS,depth_vert:aS,depth_frag:oS,distance_vert:lS,distance_frag:cS,equirect_vert:hS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:dS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:vS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:bS,meshphysical_vert:TS,meshphysical_frag:wS,meshtoon_vert:ES,meshtoon_frag:AS,points_vert:CS,points_frag:RS,shadow_vert:PS,shadow_frag:IS,sprite_vert:LS,sprite_frag:DS},bt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},$i={basic:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:bn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:bn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:bn([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:bn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:bn([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:bn([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:bn([bt.common,bt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:bn([bt.lights,bt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};$i.physical={uniforms:bn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};zh={r:0,b:0,g:0},NS=new be,Ag=new Gt;Ag.set(-1,0,0,0,1,0,0,0,1);Qo=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gr(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:xs});s.uniforms.tEquirect.value=e;let a=new mi(i,s),o=e.minFilter;return e.minFilter===gr&&(e.minFilter=Nn),new ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},sg=256,kS=3,VS=20,Cg=256,Rg=16,GS=3,HS=new z,WS=new qt,Vh=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ga(1,10,null),this._boxMesh=new mi(new Gr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=HS}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(WS));let p=new ga(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(sg,Hf(t))}_fromTexture(t,e){t.mapping===ys||t.mapping===va?this._setSize(t.image.length===0?sg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ag(t,!1,!1),n=Math.log2(t)-kS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ag(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ys||t.mapping===va?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=og()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=XS(),this._integrationMaterial=qS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Rg);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-GS)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Cg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=YS());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};eM={[bf]:"LINEAR_TONE_MAPPING",[Tf]:"REINHARD_TONE_MAPPING",[wf]:"CINEON_TONE_MAPPING",[Go]:"ACES_FILMIC_TONE_MAPPING",[Af]:"AGX_TONE_MAPPING",[Cf]:"NEUTRAL_TONE_MAPPING",[Ef]:"CUSTOM_TONE_MAPPING"};Pg=new Un,Ig=new mr(1,1),Lg=new wo(1),Dg=new fo,Ng=new Tc,Ug=new bo,cg=[],hg=[],ug=new Float32Array(16),fg=new Float32Array(9),dg=new Float32Array(4);td=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=MM(e.type)}},ed=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=GM(e.type)}},nd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Qf=/(\w+)(\])?(\[|\.)?/g;Sa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);HM(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};WM=37297,XM=0;gg=new Gt;JM={[bf]:"Linear",[Tf]:"Reinhard",[wf]:"Cineon",[Go]:"ACESFilmic",[Af]:"AgX",[Cf]:"Neutral",[Ef]:"Custom"};kh=new z;eb=/^[ \t]*#include +<([\w\d./]+)>/gm;ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;sb={[Vo]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};ob={[va]:"ENVMAP_MODE_REFRACTION"};cb={[Mf]:"ENVMAP_BLENDING_MULTIPLY",[zm]:"ENVMAP_BLENDING_MIX",[km]:"ENVMAP_BLENDING_ADD"};fb=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sd(t),e.set(t,n)),n}},sd=class{constructor(t){this.id=fb++,this.code=t,this.usedTimes=0}};yb=0;Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Eb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Ab=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],wg=new be,$o=new z,jf=new z;Lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xi({vertexShader:Lb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mi(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends Vi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new ad,g={},v=e.getContextAttributes(),M=null,y=null,T=[],E=[],x=new It,S=null,P=null,A=new Dn;A.viewport=new Pe;let F=new Dn;F.viewport=new Pe;let D=[A,F],V=new Kc,I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=T[Y];return at===void 0&&(at=new fa,T[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=T[Y];return at===void 0&&(at=new fa,T[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=T[Y];return at===void 0&&(at=new fa,T[Y]=at),at.getHandSpace()};function B(Y){let at=E.indexOf(Y.inputSource);if(at===-1)return;let dt=T[at];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,c||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<T.length;Y++){let at=E[Y];at!==null&&(E[Y]=null,T[Y].disconnect(at))}I=null,L=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(M),u=null,f=null,d=null,i=null,y=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",N),i.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Mt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?_r:dr,Mt=v.stencil?Ss:Li);let At={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(At),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ni(f.textureWidth,f.textureHeight,{format:Ui,type:qn,depthTexture:new mr(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ni(u.framebufferWidth,u.framebufferHeight,{format:Ui,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Tt.setContext(i),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(Y){for(let at=0;at<Y.removed.length;at++){let dt=Y.removed[at],Mt=E.indexOf(dt);Mt>=0&&(E[Mt]=null,T[Mt].disconnect(dt))}for(let at=0;at<Y.added.length;at++){let dt=Y.added[at],Mt=E.indexOf(dt);if(Mt===-1){for(let At=0;At<T.length;At++)if(At>=E.length){E.push(dt),Mt=At;break}else if(E[At]===null){E[At]=dt,Mt=At;break}if(Mt===-1)break}let ut=T[Mt];ut&&ut.connect(dt)}}function O(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let at=Y.near,dt=Y.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(dt=p.depthFar)),V.near=F.near=A.near=at,V.far=F.far=A.far=dt,(I!==V.near||L!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,L=V.far),V.layers.mask=Y.layers.mask|6,A.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let Mt=Y.parent,ut=V.cameras;O(V,Mt);for(let At=0;At<ut.length;At++)O(ut[At],Mt);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),C(Y,V,Mt)};function C(Y,at,dt){dt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ha*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Y){return g[Y]};let K=null;function ht(Y,at){if(h=at.getViewerPose(c||a),m=at,h!==null){let dt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Mt=!1;dt.length!==V.cameras.length&&(V.cameras.length=0,Mt=!0);for(let Ct=0;Ct<dt.length;Ct++){let Ht=dt[Ct],Nt=null;if(u!==null)Nt=u.getViewport(Ht);else{let ce=d.getViewSubImage(f,Ht);Nt=ce.viewport,Ct===0&&(t.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(y))}let Ot=D[Ct];Ot===void 0&&(Ot=new Dn,Ot.layers.enable(Ct),Ot.viewport=new Pe,D[Ct]=Ot),Ot.matrix.fromArray(Ht.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Ht.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Ct===0&&(V.matrix.copy(Ot.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Mt===!0&&V.cameras.push(Ot)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ct=d.getDepthInformation(dt[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<dt.length;Ct++){let Ht=dt[Ct].camera;if(Ht){let Nt=g[Ht];Nt||(Nt=new Eo,g[Ht]=Nt);let Ot=d.getCameraImage(Ht);Nt.sourceTexture=Ot}}}}for(let dt=0;dt<T.length;dt++){let Mt=E[dt],ut=T[dt];Mt!==null&&ut!==void 0&&ut.update(Mt,at,c||a)}K&&K(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let Tt=new Eg;Tt.setAnimationLoop(ht),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}},Nb=new be,Fg=new Gt;Fg.set(-1,0,0,0,1,0,0,0,1);Ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;Gh=class{constructor(t={}){let{canvas:e=$m(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=qn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=u,p=new Set([ah,sh,rh]),g=new Set([qn,Li,ya,Ss,nh,ih]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,F=!1,D=null,V=null,I=null,L=null;this._outputColorSpace=dn;let B=0,N=0,H=null,O=-1,C=null,K=new Pe,ht=new Pe,Tt=null,Y=new qt(0),at=0,dt=e.width,Mt=e.height,ut=1,At=null,ge=null,Ct=new Pe(0,0,dt,Mt),Ht=new Pe(0,0,dt,Mt),Nt=!1,Ot=new Vr,ce=new Ac,ae=!1,$=!1,jt=new be,We=new z,ve=new Pe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ge(){return H===null?ut:1}let G=n;function ue(w,k){return e.getContext(w,k)}let oe,Vt,pt,he,Ut,zt,R,b,X,st,it,ft,xt,q,tt,ct,U,j,Q,mt,lt,gt,ot;try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),G===null){let k="webgl2";if(G=ue(k,w),G===null)throw ue(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_t()}catch(w){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+w.message),w}function _t(){oe=new JS(G),oe.init(),lt=new Ib(G,oe),Vt=new BS(G,oe,t,lt),pt=new Rb(G,oe),Vt.reversedDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),V=G.createFramebuffer(),I=G.createFramebuffer(),L=G.createFramebuffer(),he=new QS(G),Ut=new mb,zt=new Pb(G,oe,pt,Ut,Vt,lt,he),R=new ZS(A),b=new tv(G),gt=new FS(G,b),X=new $S(G,b,he,gt),st=new tM(G,X,b,gt,he),j=new jS(G,Vt,zt),tt=new zS(Ut),it=new pb(A,R,oe,Vt,gt,tt),ft=new Ub(A,Ut),xt=new _b,q=new bb(oe),U=new US(A,R,pt,st,m,l),ct=new Cb(A,st,Vt),ot=new Fb(G,he,Vt,pt),Q=new OS(G,oe,he),mt=new KS(G,oe,he),he.programs=it.programs,A.capabilities=Vt,A.extensions=oe,A.properties=Ut,A.renderLists=xt,A.shadowMap=ct,A.state=pt,A.info=he}_!==qn&&(P=new nM(_,e.width,e.height,o,i,s));let rt=new od(A,G);this.xr=rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(w){w!==void 0&&(ut=w,this.setSize(dt,Mt,!1))},this.getSize=function(w){return w.set(dt,Mt)},this.setSize=function(w,k,J=!0){if(rt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=w,Mt=k,e.width=Math.floor(w*ut),e.height=Math.floor(k*ut),J===!0&&(e.style.width=w+"px",e.style.height=k+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(dt*ut,Mt*ut).floor()},this.setDrawingBufferSize=function(w,k,J){dt=w,Mt=k,ut=J,e.width=Math.floor(w*J),e.height=Math.floor(k*J),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(_===qn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,k,J,W){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,k,J,W),pt.viewport(K.copy(Ct).multiplyScalar(Ge()).round())},this.getScissor=function(w){return w.copy(Ht)},this.setScissor=function(w,k,J,W){w.isVector4?Ht.set(w.x,w.y,w.z,w.w):Ht.set(w,k,J,W),pt.scissor(ht.copy(Ht).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(w){pt.setScissorTest(Nt=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){ge=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,J=!0){let W=0;if(w){let Z=!1;if(H!==null){let St=H.texture.format;Z=p.has(St)}if(Z){let St=H.texture.type,Pt=g.has(St),yt=U.getClearColor(),Et=U.getClearAlpha(),Ft=yt.r,Xt=yt.g,ee=yt.b;Pt?(v[0]=Ft,v[1]=Xt,v[2]=ee,v[3]=Et,G.clearBufferuiv(G.COLOR,0,v)):(M[0]=Ft,M[1]=Xt,M[2]=ee,M[3]=Et,G.clearBufferiv(G.COLOR,0,M))}else W|=G.COLOR_BUFFER_BIT}k&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),U.dispose(),xt.dispose(),q.dispose(),zt.dispose(),Ut.dispose(),R.dispose(),st.dispose(),X.dispose(),gt.dispose(),ot.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ye),rt.removeEventListener("sessionend",de),Qe.stop()};function et(w){w.preventDefault(),uo("WebGLRenderer: Context Lost."),F=!0}function vt(){uo("WebGLRenderer: Context Restored."),F=!1;let w=he.autoReset,k=ct.enabled,J=ct.autoUpdate,W=ct.needsUpdate,Z=ct.type;_t(),he.autoReset=w,ct.enabled=k,ct.autoUpdate=J,ct.needsUpdate=W,ct.type=Z}function nt(w){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wt(w){let k=w.target;k.removeEventListener("dispose",wt),te(k)}function te(w){Wt(w),Ut.remove(w)}function Wt(w){let k=Ut.get(w).programs;k!==void 0&&(k.forEach(function(J){it.releaseProgram(J)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,J,W,Z,St){k===null&&(k=re);let Pt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,yt=fi(w,k,J,W,Z);pt.setMaterial(W,Pt);let Et=J.index,Ft=1;if(W.wireframe===!0){if(Et=X.getWireframeAttribute(J),Et===void 0)return;Ft=2}let Xt=J.drawRange,ee=J.attributes.position,Lt=Xt.start*Ft,ne=(Xt.start+Xt.count)*Ft;St!==null&&(Lt=Math.max(Lt,St.start*Ft),ne=Math.min(ne,(St.start+St.count)*Ft)),Et!==null?(Lt=Math.max(Lt,0),ne=Math.min(ne,Et.count)):ee!=null&&(Lt=Math.max(Lt,0),ne=Math.min(ne,ee.count));let Ye=ne-Lt;if(Ye<0||Ye===1/0)return;gt.setup(Z,W,yt,J,Et);let Ee,Me=Q;if(Et!==null&&(Ee=b.get(Et),Me=mt,Me.setIndex(Ee)),Z.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*Ge()),Me.setMode(G.LINES)):Me.setMode(G.TRIANGLES);else if(Z.isLine){let vn=W.linewidth;vn===void 0&&(vn=1),pt.setLineWidth(vn*Ge()),Z.isLineSegments?Me.setMode(G.LINES):Z.isLineLoop?Me.setMode(G.LINE_LOOP):Me.setMode(G.LINE_STRIP)}else Z.isPoints?Me.setMode(G.POINTS):Z.isSprite&&Me.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let vn=Z._multiDrawStarts,Dt=Z._multiDrawCounts,In=Z._multiDrawCount,fe=Et?b.get(Et).bytesPerElement:1,cs=Ut.get(W).currentProgram.getUniforms();for(let yn=0;yn<In;yn++)cs.setValue(G,"_gl_DrawID",yn),Me.render(vn[yn]/fe,Dt[yn])}else if(Z.isInstancedMesh)Me.renderInstances(Lt,Ye,Z.count);else if(J.isInstancedBufferGeometry){let vn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Dt=Math.min(J.instanceCount,vn);Me.renderInstances(Lt,Ye,Dt)}else Me.render(Lt,Ye)};function Ce(w,k,J,W){D!==null&&w.isNodeMaterial&&D.setObject(W,w),ae===!0&&tt.setState(w,J,!1),w.transparent===!0&&w.side===Yi&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,jn(w,k,W),w.side=qr,w.needsUpdate=!0,jn(w,k,W),w.side=Yi):jn(w,k,W)}this.compile=function(w,k,J=null){J===null&&(J=w),D!==null&&D.renderStart(w,k,J),E=q.get(J),E.init(k),S.push(E),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),w!==J&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),$=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,$),ae===!0&&tt.setGlobalState(this.clippingPlanes,k),D!==null&&ct.render(E.state.shadowsArray,J,k);let W=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let St=Z.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){let yt=St[Pt];Ce(yt,J,k,Z),W.add(yt)}else Ce(St,J,k,Z),W.add(St)}),E=S.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(w,k,J=null){let W=this.compile(w,k,J);return new Promise(Z=>{function St(){if(W.forEach(function(Pt){let Et=Ut.get(Pt).currentProgram;(Et===void 0||Et.isReady())&&W.delete(Pt)}),W.size===0){Z(w);return}setTimeout(St,10)}oe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Xe=null;function Re(w){Xe&&Xe(w)}function ye(){Qe.stop()}function de(){Qe.start()}let Qe=new Eg;Qe.setAnimationLoop(Re),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(w){Xe=w,rt.setAnimationLoop(w),w===null?Qe.stop():Qe.start()},rt.addEventListener("sessionstart",ye),rt.addEventListener("sessionend",de),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D!==null&&D.renderStart(w,k);let J=rt.enabled===!0&&rt.isPresenting===!0,W=P!==null&&(H===null||J)&&P.begin(A,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,k,H),E=q.get(w,S.length),E.init(k),E.state.textureUnits=zt.getTextureUnits(),S.push(E),jt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ce.setFromArrayCamera(k):Ot.setFromProjectionMatrix(jt,pi,k.reversedDepth),$=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,$),T=xt.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Pt=A.xr.getDepthSensingMesh();Pt!==null&&Se(Pt,k,-1/0,A.sortObjects)}Se(w,k,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(At,ge),Fe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Fe&&U.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),ae===!0&&tt.beginShadows();let Z=E.state.shadowsArray;if(ct.render(Z,w,k),ae===!0&&tt.endShadows(),(W&&P.hasRenderPass())===!1){let Pt=T.opaque,yt=T.transmissive;if(E.setupLights(),k.isArrayCamera){let Et=k.cameras;if(yt.length>0)for(let Ft=0,Xt=Et.length;Ft<Xt;Ft++){let ee=Et[Ft];Qn(Pt,yt,w,ee)}Fe&&U.render(w);for(let Ft=0,Xt=Et.length;Ft<Xt;Ft++){let ee=Et[Ft];xn(T,w,ee,ee.viewport)}}else yt.length>0&&Qn(Pt,yt,w,k),Fe&&U.render(w),xn(T,w,k)}H!==null&&N===0&&(zt.updateMultisampleRenderTarget(H),zt.updateRenderTargetMipmap(H)),W&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,k),gt.resetDefaultState(),O=-1,C=null,S.pop(),S.length>0?(E=S[S.length-1],zt.setTextureUnits(E.state.textureUnits),ae===!0&&tt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Se(w,k,J,W){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Pt=k.isArrayCamera?ce:Ot;if(!w.frustumCulled||w.intersectsFrustum(Pt)){W&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);let yt=st.update(w),Et=w.material;Et.visible&&T.push(w,yt,Et,J,ve.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){let Pt=k.isArrayCamera?ce:Ot;if(!w.frustumCulled||w.intersectsFrustum(Pt)){let yt=st.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ve.copy(yt.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(Et)){let Ft=yt.groups;for(let Xt=0,ee=Ft.length;Xt<ee;Xt++){let Lt=Ft[Xt],ne=Et[Lt.materialIndex];ne&&ne.visible&&T.push(w,yt,ne,J,ve.z,Lt,k)}}else Et.visible&&T.push(w,yt,Et,J,ve.z,null,k)}}}let St=w.children;for(let Pt=0,yt=St.length;Pt<yt;Pt++)Se(St[Pt],k,J,W)}function xn(w,k,J,W){let{opaque:Z,transmissive:St,transparent:Pt}=w;E.setupLightsView(J),ae===!0&&tt.setGlobalState(A.clippingPlanes,J),W&&pt.viewport(K.copy(W)),Z.length>0&&Oe(Z,k,J),St.length>0&&Oe(St,k,J),Pt.length>0&&Oe(Pt,k,J),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Qn(w,k,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Lt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new ni(1,1,{generateMipmaps:!0,type:Lt?Ni:qn,minFilter:gr,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let St=E.state.transmissionRenderTarget[W.id],Pt=W.viewport||K;St.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);let yt=A.getRenderTarget(),Et=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(Y),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&U.render(J);let Xt=A.toneMapping;A.toneMapping=Zi;let ee=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ae===!0&&tt.setGlobalState(A.clippingPlanes,W),Oe(w,J,W),zt.updateMultisampleRenderTarget(St),zt.updateRenderTargetMipmap(St),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ne=0,Ye=k.length;ne<Ye;ne++){let Ee=k[ne],{object:Me,geometry:vn,material:Dt,group:In}=Ee;if(Dt.side===Yi&&Me.layers.test(W.layers)){let fe=Dt.side;Dt.side=Fn,Dt.needsUpdate=!0,qe(Me,J,W,vn,Dt,In),Dt.side=fe,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(zt.updateMultisampleRenderTarget(St),zt.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,Et,Ft),A.setClearColor(Y,at),ee!==void 0&&(W.viewport=ee),A.toneMapping=Xt}function Oe(w,k,J){let W=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,St=w.length;Z<St;Z++){let Pt=w[Z],{object:yt,geometry:Et,group:Ft}=Pt,Xt=Pt.material;Xt.allowOverride===!0&&W!==null&&(Xt=W),yt.layers.test(J.layers)&&qe(yt,k,J,Et,Xt,Ft)}}function qe(w,k,J,W,Z,St){D!==null&&Z.isNodeMaterial&&D.setObject(w,Z),w.onBeforeRender(A,k,J,W,Z,St),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(A,k,J,W,w,St),Z.transparent===!0&&Z.side===Yi&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,A.renderBufferDirect(J,k,W,Z,w,St),Z.side=qr,Z.needsUpdate=!0,A.renderBufferDirect(J,k,W,Z,w,St),Z.side=Yi):A.renderBufferDirect(J,k,W,Z,w,St),w.onAfterRender(A,k,J,W,Z,St)}function je(w){let k=0;for(let J of w)J.texture!==null&&k++;return k}function jn(w,k,J){k.isScene!==!0&&(k=re);let W=Ut.get(w),Z=E.state.lights,St=E.state.shadowsArray,Pt=Z.state.version,yt=it.getParameters(w,Z.state,St,k,J,E.state.lightProbeGridArray),Et=it.getProgramCacheKey(yt),Ft=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;let Xt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=R.get(w.envMap||W.environment,Xt),W.envMapRotation=W.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",wt),Ft=new Map,W.programs=Ft,W.programVariants=new Map);let ee=Ft.get(Et);if(ee!==void 0){if(W.currentProgram===ee&&W.lightsStateVersion===Pt)return Be(w,yt),ee}else yt.uniforms=it.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,yt),w.onBeforeCompile(yt,A),ee=it.acquireProgram(yt,Et),Ft.set(Et,ee),W.uniforms=yt.uniforms;let Lt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=tt.uniform),Be(w,yt),W.needsLights=Ol(w),W.lightsStateVersion=Pt,W.needsLights&&(Lt.ambientLightColor.value=Z.state.ambient,Lt.lightProbe.value=Z.state.probe,Lt.sunLights.value=Z.state.sun,Lt.sunLightShadows.value=Z.state.sunShadow,Lt.directionalLights.value=Z.state.directional,Lt.directionalLightShadows.value=Z.state.directionalShadow,Lt.spotLights.value=Z.state.spot,Lt.spotLightShadows.value=Z.state.spotShadow,Lt.rectAreaLights.value=Z.state.rectArea,Lt.ltc_1.value=Z.state.rectAreaLTC1,Lt.ltc_2.value=Z.state.rectAreaLTC2,Lt.pointLights.value=Z.state.point,Lt.pointLightShadows.value=Z.state.pointShadow,Lt.hemisphereLights.value=Z.state.hemi,Lt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Lt.sunShadowCascade.value=Z.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Z.state.spotLightMatrix,Lt.spotLightMap.value=Z.state.spotLightMap,Lt.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.numLightProbeGrids=je(E.state.lightProbeGridArray),W.currentProgram=ee,W.uniformsList=null,ee}function Gs(w,k,J,W,Z){let St=Ut.get(w),Pt=St.currentProgram.id+","+W+","+Z,yt=St.programVariants.get(Pt);return yt===void 0?(yt=jn(w,k,J),St.programVariants.set(Pt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=W,St.toneMapping=Z),yt}function tn(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Sa.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Be(w,k){let J=Ut.get(w);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function fi(w,k,J,W,Z){k.isScene!==!0&&(k=re),zt.resetTextureUnits();let St=k.fog,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,yt=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ie.workingColorSpace,Et=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ft=R.get(W.envMap||Pt,Et),Xt=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ee=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!J.morphAttributes.position,ne=!!J.morphAttributes.normal,Ye=!!J.morphAttributes.color,Ee=Zi;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vn=Me!==void 0?Me.length:0,Dt=Ut.get(W),In=E.state.lights;if(ae===!0&&($===!0||w!==C)){let Le=w===C&&W.id===O;tt.setState(W,w,Le)}let fe=!1,cs=!1;W.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==In.state.version||Z.isBatchedMesh&&Dt.batching===!1||!Z.isBatchedMesh&&Dt.batching===!0||Z.isBatchedMesh&&Dt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Dt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Dt.instancing===!1||!Z.isInstancedMesh&&Dt.instancing===!0||Z.isSkinnedMesh&&Dt.skinning===!1||!Z.isSkinnedMesh&&Dt.skinning===!0||Z.isInstancedMesh&&Dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Dt.instancingMorph===!1&&Z.morphTexture!==null||Dt.envMap!==Ft||W.fog===!0&&Dt.fog!==St||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==tt.numPlanes||Dt.numIntersection!==tt.numIntersection)||Dt.vertexAlphas!==Xt||Dt.vertexTangents!==ee||Dt.morphTargets!==Lt||Dt.morphNormals!==ne||Dt.morphColors!==Ye||Dt.morphTargetsCount!==vn||Dt.numLightProbeGrids!==je(E.state.lightProbeGridArray)?fe=!0:(Dt.outputColorSpace!==yt||Dt.toneMapping!==Ee)&&(cs=!0):(fe=!0,Dt.__version=W.version);let yn=Dt.currentProgram;(fe===!0||cs===!0)&&(yn=cs===!0?Gs(W,k,Z,yt,Ee):jn(W,k,Z),D&&W.isNodeMaterial&&D.onUpdateProgram(W,yn,Dt));let Bl=!1,Nr=!1,hs=!1,le=yn.getUniforms(),fn=Dt.uniforms;if(pt.useProgram(yn.program)&&(Bl=!0,Nr=!0,hs=!0),W.id!==O&&(O=W.id,Nr=!0),Bl||C!==w){pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),le.setValue(G,"projectionMatrix",w.projectionMatrix),le.setValue(G,"viewMatrix",w.matrixWorldInverse);let an=le.map.cameraPosition;an!==void 0&&an.setValue(G,We.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&le.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Nr=!0,hs=!0)}if(Dt.needsLights&&(In.state.sunShadowMap.length>0&&le.setValue(G,"sunShadowMap",In.state.sunShadowMap,zt),In.state.directionalShadowMap.length>0&&le.setValue(G,"directionalShadowMap",In.state.directionalShadowMap,zt),In.state.spotShadowMap.length>0&&le.setValue(G,"spotShadowMap",In.state.spotShadowMap,zt),In.state.pointShadowMap.length>0&&le.setValue(G,"pointShadowMap",In.state.pointShadowMap,zt)),Z.isSkinnedMesh){le.setOptional(G,Z,"bindMatrix"),le.setOptional(G,Z,"bindMatrixInverse");let Le=Z.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),le.setValue(G,"boneTexture",Le.boneTexture,zt))}Z.isBatchedMesh&&(le.setOptional(G,Z,"batchingTexture"),le.setValue(G,"batchingTexture",Z._matricesTexture,zt),le.setOptional(G,Z,"batchingIdTexture"),le.setValue(G,"batchingIdTexture",Z._indirectTexture,zt),le.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&le.setValue(G,"batchingColorTexture",Z._colorsTexture,zt));let Ei=J.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&j.update(Z,J,yn),(Nr||Dt.receiveShadow!==Z.receiveShadow)&&(Dt.receiveShadow=Z.receiveShadow,le.setValue(G,"receiveShadow",Z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=Bb()),Nr){if(le.setValue(G,"toneMappingExposure",A.toneMappingExposure),Dt.needsLights&&Ya(fn,hs),St&&W.fog===!0&&ft.refreshFogUniforms(fn,St),ft.refreshMaterialUniforms(fn,W,ut,Mt,E.state.transmissionRenderTarget[w.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let Le=y,an=0;for(let rr of E.state.lightProbeGridArray)rr.texture!==null&&(Le.textures[an]=rr.texture,Le.min[an]=rr.boundingBox.min,Le.max[an]=rr.boundingBox.max,Le.resolution[an]=rr.resolution,an++);for(let rr in Le)Le[rr].length=an;fn.probesSH.value=Le.textures,fn.probesMin.value=Le.min,fn.probesMax.value=Le.max,fn.probesResolution.value=Le.resolution}Sa.upload(G,tn(Dt),fn,zt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sa.upload(G,tn(Dt),fn,zt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&le.setValue(G,"center",Z.center),le.setValue(G,"modelViewMatrix",Z.modelViewMatrix),le.setValue(G,"normalMatrix",Z.normalMatrix),le.setValue(G,"modelMatrix",Z.matrixWorld),W.uniformsGroups!==void 0){let Le=W.uniformsGroups;for(let an=0,rr=Le.length;an<rr;an++){let zp=Le[an];ot.update(zp,yn),ot.bind(zp,yn)}}return yn}function Ya(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Ol(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,k,J){let W=Ut.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ut.get(w.texture).__webglTexture=k,Ut.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let J=Ut.get(w);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,J=0){H=w,B=k,N=J;let W=null,Z=!1,St=!1;if(w){let yt=Ut.get(w);if(yt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(G.FRAMEBUFFER,yt.__webglFramebuffer),K.copy(w.viewport),ht.copy(w.scissor),Tt=w.scissorTest,pt.viewport(K),pt.scissor(ht),pt.setScissorTest(Tt),O=-1;return}else if(yt.__webglFramebuffer===void 0)zt.setupRenderTarget(w);else if(yt.__hasExternalTextures)zt.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xt=w.depthTexture;if(yt.__boundDepthTexture!==Xt){if(Xt!==null&&Ut.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(w)}}let Et=w.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(St=!0);let Ft=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?W=Ft[k][J]:W=Ft[k],Z=!0):w.samples>0&&zt.useMultisampledRTT(w)===!1?W=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[J]:W=Ft,K.copy(w.viewport),ht.copy(w.scissor),Tt=w.scissorTest}else K.copy(Ct).multiplyScalar(ut).floor(),ht.copy(Ht).multiplyScalar(ut).floor(),Tt=Nt;if(J!==0&&(W=V),pt.bindFramebuffer(G.FRAMEBUFFER,W)&&pt.drawBuffers(w,W),pt.viewport(K),pt.scissor(ht),pt.setScissorTest(Tt),Z){let yt=Ut.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,J)}else if(St){let yt=k;for(let Et=0;Et<w.textures.length;Et++){let Ft=Ut.get(w.textures[Et]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Et,Ft.__webglTexture,J,yt)}}else if(w!==null&&J!==0){let yt=Ut.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yt.__webglTexture,J)}O=-1};function Dr(w){let k=Ut.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=Vt.textureFormatReadable(w.format),k.__typeReadable=Vt.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,J,W,Z,St,Pt,yt=0){if(!(w&&w.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et){pt.bindFramebuffer(G.FRAMEBUFFER,Et);try{let Ft=w.textures[yt],Xt=Ft.format,ee=Ft.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+yt);let Lt=Dr(Ft);if(Lt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-W&&J>=0&&J<=w.height-Z&&G.readPixels(k,J,W,Z,lt.convert(Xt),lt.convert(ee),St)}finally{let Ft=H!==null?Ut.get(H).__webglFramebuffer:null;pt.bindFramebuffer(G.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,k,J,W,Z,St,Pt,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et)if(k>=0&&k<=w.width-W&&J>=0&&J<=w.height-Z){pt.bindFramebuffer(G.FRAMEBUFFER,Et);let Ft=w.textures[yt],Xt=Ft.format,ee=Ft.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+yt);let Lt=Dr(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ne),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),G.readPixels(k,J,W,Z,lt.convert(Xt),lt.convert(ee),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ye=H!==null?Ut.get(H).__webglFramebuffer:null;pt.bindFramebuffer(G.FRAMEBUFFER,Ye);let Ee=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qm(G,Ee,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ne),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ne),G.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,J=0){let W=Math.pow(2,-J),Z=Math.floor(w.image.width*W),St=Math.floor(w.image.height*W),Pt=k!==null?k.x:0,yt=k!==null?k.y:0;zt.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,Pt,yt,Z,St),pt.unbindTexture()},this.copyTextureToTexture=function(w,k,J=null,W=null,Z=0,St=0){let Pt,yt,Et,Ft,Xt,ee,Lt,ne,Ye,Ee=w.isCompressedTexture?w.mipmaps[St]:w.image;if(J!==null)Pt=J.max.x-J.min.x,yt=J.max.y-J.min.y,Et=J.isBox3?J.max.z-J.min.z:1,Ft=J.min.x,Xt=J.min.y,ee=J.isBox3?J.min.z:0;else{let le=Math.pow(2,-Z);Pt=Math.floor(Ee.width*le),yt=Math.floor(Ee.height*le),w.isDataArrayTexture?Et=Ee.depth:w.isData3DTexture?Et=Math.floor(Ee.depth*le):Et=1,Ft=0,Xt=0,ee=0}W!==null?(Lt=W.x,ne=W.y,Ye=W.z):(Lt=0,ne=0,Ye=0);let Me=lt.convert(k.format),vn=lt.convert(k.type),Dt;k.isData3DTexture?(zt.setTexture3D(k,0),Dt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(zt.setTexture2DArray(k,0),Dt=G.TEXTURE_2D_ARRAY):(zt.setTexture2D(k,0),Dt=G.TEXTURE_2D),pt.activeTexture(G.TEXTURE0),pt.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),pt.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),pt.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let In=pt.getParameter(G.UNPACK_ROW_LENGTH),fe=pt.getParameter(G.UNPACK_IMAGE_HEIGHT),cs=pt.getParameter(G.UNPACK_SKIP_PIXELS),yn=pt.getParameter(G.UNPACK_SKIP_ROWS),Bl=pt.getParameter(G.UNPACK_SKIP_IMAGES);pt.pixelStorei(G.UNPACK_ROW_LENGTH,Ee.width),pt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ee.height),pt.pixelStorei(G.UNPACK_SKIP_PIXELS,Ft),pt.pixelStorei(G.UNPACK_SKIP_ROWS,Xt),pt.pixelStorei(G.UNPACK_SKIP_IMAGES,ee);let Nr=w.isDataArrayTexture||w.isData3DTexture,hs=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let le=Ut.get(w),fn=Ut.get(k),Ei=Ut.get(le.__renderTarget),Le=Ut.get(fn.__renderTarget);pt.bindFramebuffer(G.READ_FRAMEBUFFER,Ei.__webglFramebuffer),pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let an=0;an<Et;an++)Nr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ut.get(w).__webglTexture,Z,ee+an),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ut.get(k).__webglTexture,St,Ye+an)),G.blitFramebuffer(Ft,Xt,Ft+Pt,Xt+yt,Lt,ne,Lt+Pt,ne+yt,G.DEPTH_BUFFER_BIT,G.NEAREST);pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Ut.has(w)){let le=Ut.get(w),fn=Ut.get(k);pt.bindFramebuffer(G.READ_FRAMEBUFFER,I),pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,L);for(let Ei=0;Ei<Et;Ei++)Nr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,le.__webglTexture,Z,ee+Ei):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,le.__webglTexture,Z),hs?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,St,Ye+Ei):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,St),Z!==0?G.blitFramebuffer(Ft,Xt,Ft+Pt,Xt+yt,Lt,ne,Lt+Pt,ne+yt,G.COLOR_BUFFER_BIT,G.NEAREST):hs?G.copyTexSubImage3D(Dt,St,Lt,ne,Ye+Ei,Ft,Xt,Pt,yt):G.copyTexSubImage2D(Dt,St,Lt,ne,Ft,Xt,Pt,yt);pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else hs?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Dt,St,Lt,ne,Ye,Pt,yt,Et,Me,vn,Ee.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Dt,St,Lt,ne,Ye,Pt,yt,Et,Me,Ee.data):G.texSubImage3D(Dt,St,Lt,ne,Ye,Pt,yt,Et,Me,vn,Ee):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,Lt,ne,Pt,yt,Me,vn,Ee.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,Lt,ne,Ee.width,Ee.height,Me,Ee.data):G.texSubImage2D(G.TEXTURE_2D,St,Lt,ne,Pt,yt,Me,vn,Ee);pt.pixelStorei(G.UNPACK_ROW_LENGTH,In),pt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,fe),pt.pixelStorei(G.UNPACK_SKIP_PIXELS,cs),pt.pixelStorei(G.UNPACK_SKIP_ROWS,yn),pt.pixelStorei(G.UNPACK_SKIP_IMAGES,Bl),St===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&G.generateMipmap(Dt),pt.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?zt.setTextureCube(w,0):w.isData3DTexture?zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?zt.setTexture2DArray(w,0):zt.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){B=0,N=0,H=null,pt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}});function vr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qg(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var $n,sl,wd,mn,Ie,xi,we,md,zb,kb,Yg,Vb,Gb,rn,ze,Sr,eu,ji,Jn,Ed,qh,Zg,wn,Hb,Wb,Bg,Ad,Es,ld,Cd,Xb,qb,Ne,Ki,gd,Rd,si,$h,Jg,$g,nu,al,Kg,ol,Yb,Yh,Zb,Pd,$r,_d,Qg,Yn,cd,zg,Zh,Id,Ld,Kr,Dd,On,ke,De,As,Jb,Kh,Nd,jg,t_,e_,ai,$b,Ta,kg,Qh,nl,Kb,n_,iu,Qr,bs,Qb,xd,jb,Vg,wa,jh,ru,su,i_,Qi,r_,s_,tT,vd,eT,nT,Ea,Gg,iT,_i,il,jr,hl,gn,rT,yd,a_,sT,vi,Sd,o_,l_,Md,c_,h_,aT,oT,lT,u_,cT,hT,Ca,f_,uT,Hg,ri,tl,ba,d_,p_,Te,el,hd,m_,g_,Wg,yr,fT,Ud,ll,Zn,Aa,se,dT,pT,mT,gT,_T,xT,Ts,Cs,__,ud,fd,Fd,cl,Tn,vT,Od,yT,Bd,Jr,bd,zd,ST,MT,bT,rl,x_,v_,He,kd,y_,TT,wT,au,S_,ET,Vd,Gd,AT,CT,RT,Hd,Bn,ws,Jh,PT,Xg,IT,dd,Td,M_,LT,tu,DT,NT,pd,En,UT,FT,OT,BT,zT,kT,VT,GT,HT,WT,XT,qT,YT,ZT,JT,$T,KT,QT,Wd=sr(()=>{$n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sl={duration:.5,overwrite:!1,delay:0},xi=1e8,we=1/xi,md=Math.PI*2,zb=md/4,kb=0,Yg=Math.sqrt,Vb=Math.cos,Gb=Math.sin,rn=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},Sr=function(t){return typeof t=="number"},eu=function(t){return typeof t>"u"},ji=function(t){return typeof t=="object"},Jn=function(t){return t!==!1},Ed=function(){return typeof window<"u"},qh=function(t){return ze(t)||rn(t)},Zg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,Hb=/random\([^)]+\)/g,Wb=/,\s*/g,Bg=/(?:-?\.?\d|\.)+/gi,Ad=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ld=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,Xb=/[^,'"\[\]\s]+/gi,qb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,si={},$h={},$g=function(t){return($h=Ta(t,si))&&En},nu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},al=function(t,e){return!e&&console.warn(t)},Kg=function(t,e){return t&&(si[t]=e)&&$h&&($h[t]=e)||si},ol=function(){return 0},Yb={suppressEvents:!0,isStart:!0,kill:!1},Yh={suppressEvents:!0,kill:!1},Zb={suppressEvents:!0},Pd={},$r=[],_d={},Yn={},cd={},zg=30,Zh=[],Id="",Ld=function(t){var e=t[0],n,i;if(ji(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Zh.length;i--&&!Zh[i].targetTest(e););n=Zh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Fd(t[i],n)))||t.splice(i,1);return t},Kr=function(t){return t._gsap||Ld(vi(t))[0]._gsap},Dd=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():eu(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},As=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Jb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Kh=function(){var t=$r.length,e=$r.slice(0),n,i;for(_d={},$r.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nd=function(t){return!!(t._initted||t._startAt||t.add)},jg=function(t,e,n,i){$r.length&&!mn&&Kh(),t.render(e,n,i||!!(mn&&e<0&&Nd(t))),$r.length&&!mn&&Kh()},t_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xb).length<2?e:rn(t)?t.trim():t},e_=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},$b=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ta=function(t,e){for(var n in e)t[n]=e[n];return t},kg=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ji(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Qh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},nl=function(t){var e=t.parent||Ne,n=t.keyframes?$b(wn(t.keyframes)):ai;if(Jn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Kb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},n_=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},iu=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Qr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Qb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xd=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(Yh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},jb=function r(t){return!t||t._ts&&r(t.parent)},Vg=function(t){return t._repeat?wa(t._tTime,t=t.duration()+t._rDelay)*t:0},wa=function(t,e){var n=Math.floor(t=De(t/e));return t&&n===t?n-1:n},jh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ru=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},su=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ru(t),n._dirty||bs(n,t)),t},i_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=jh(t.rawTime(),e),(!e._dur||hl(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Qi=function(t,e,n,i){return e.parent&&Qr(e),e._start=De((Sr(n)?n:n||t!==Ne?_i(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),n_(t,e,"_first","_last",t._sort?"_start":0),vd(e)||(t._recent=e),i||i_(t,e),t._ts<0&&su(t,t._tTime),t},r_=function(t,e){return(si.ScrollTrigger||nu("scrollTrigger",e))&&si.ScrollTrigger.create(e,t)},s_=function(t,e,n,i,s){if(zd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qg!==Zn.frame)return $r.push(t),t._lazy=[s,i],1},tT=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},vd=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},eT=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&tT(t)&&!(!t._initted&&vd(t))||(t._ts<0||t._dp._ts<0)&&!vd(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=hl(0,t._tDur,e),h=wa(l,o),t._yoyo&&h&1&&(a=1-a),h!==wa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||mn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&s_(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&xd(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Qr(t,1),!n&&!mn&&(ri(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},nT=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ea=function(t,e,n,i){var s=t._repeat,a=De(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:De(a*(s+1)+t._rDelay*s):a,o>0&&!i&&su(t,t._tTime=t._tDur*o),t.parent&&ru(t),n||bs(t.parent,t),t},Gg=function(t){return t instanceof Tn?bs(t):Ea(t,t._dur)},iT={_start:0,endTime:ol,totalDuration:ol},_i=function r(t,e,n){var i=t.labels,s=t._recent||iT,a=t.duration()>=xi?s.endTime(!1):t._dur,o,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},il=function(t,e,n){var i=Sr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;a.immediateRender=Jn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new He(e[0],a,e[s+1])},jr=function(t,e){return t||t===0?e(t):e},hl=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!rn(t)||!(e=qb.exec(t))?"":e[1]},rT=function(t,e,n){return jr(n,function(i){return hl(t,e,i)})},yd=[].slice,a_=function(t,e){return t&&ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ji(t[0]))&&!t.nodeType&&t!==Ki},sT=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||a_(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):rn(t)&&!n&&(gd||!Aa())?yd.call((e||Rd).querySelectorAll(t),0):wn(t)?sT(t,n):a_(t)?yd.call(t,0):t?[t]:[]},Sd=function(t){return t=vi(t)[0]||al("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vi(e,n.querySelectorAll?n:n===t?al("Invalid scope")||Rd.createElement("div"):t)}},o_=function(t){return t.sort(function(){return .5-Math.random()})},l_=function(t){if(ze(t))return t;var e=ji(t)?t:{each:t},n=Ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||e).length,p=a[_],g,v,M,y,T,E,x,S,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,xi])[1],!P){for(x=-xi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=a[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===xi?0:l?_*d/P-.5:i/P|0,x=0,S=xi,E=0;E<_;E++)M=E%P-g,y=v-(E/P|0),p[E]=T=c?Math.abs(c==="y"?y:M):Yg(M*M+y*y),T>x&&(x=T),T<S&&(S=T);i==="random"&&o_(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=gn(e.amount||e.each)||0,n=n&&_<0?xT(n):n}return _=(p[f]-p.min)/p.max||0,De(p.b+(n?n(_):_)*p.v)+p.u}},Md=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=De(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Sr(n)?0:gn(n))}},c_=function(t,e){var n=wn(t),i,s;return!n&&ji(t)&&(i=n=t.radius||xi,t.values?(t=vi(t.values),(s=!Sr(t[0]))&&(i*=i)):t=Md(t.increment)),jr(e,n?ze(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xi,h=0,d=t.length,f,u;d--;)s?(f=t[d].x-o,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:a,s||h===a||Sr(a)?h:h+gn(a)}:Md(t))},h_=function(t,e,n,i){return jr(wn(t)?!e:n===!0?!!(n=0):!i,function(){return wn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},aT=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},oT=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},lT=function(t,e,n){return f_(t,e,0,1,n)},u_=function(t,e,n){return jr(n,function(i){return t[~~e(i)]})},cT=function r(t,e,n){var i=e-t;return wn(t)?u_(t,r(0,t.length),e):jr(n,function(s){return(i+(s-t)%i)%i+t})},hT=function r(t,e,n){var i=e-t,s=i*2;return wn(t)?u_(t,r(0,t.length-1),e):jr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ca=function(t){return t.replace(Hb,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Wb);return h_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},f_=function(t,e,n,i,s){var a=e-t,o=i-n;return jr(s,function(l){return n+((l-t)/a*o||0)})},uT=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var a=rn(t),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(wn(t)&&!wn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else i||(t=Ta(wn(t)?[]:{},t));if(!h){for(l in e)Od.call(o,t,l,"get",e[l]);s=function(m){return Gd(m,o)||(a?t.p:t)}}}return jr(n,s)},Hg=function(t,e,n){var i=t.labels,s=xi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(t,e,n){var i=t.vars,s=i[e],a=Ie,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&$r.length&&Kh(),o&&(Ie=o),h=l?s.apply(c,l):s.call(c),Ie=a,h},tl=function(t){return Qr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ri(t,"onInterrupt"),t},d_=[],p_=function(t){if(t)if(t=!t.name&&t.default||t,Ed()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ol,render:Gd,add:Od,kill:CT,modifier:AT,rawVars:0},a={targetTest:0,get:0,getSetter:au,aliases:{},register:0};if(Aa(),t!==i){if(Yn[e])return;ai(i,ai(Qh(t,s),a)),Ta(i.prototype,Ta(s,Qh(t,a))),Yn[i.prop=e]=i,t.targetTest&&(Zh.push(i),Pd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Kg(e,i),t.register&&t.register(En,i,Bn)}else d_.push(t)},Te=255,el={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},hd=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},m_=function(t,e,n){var i=t?Sr(t)?[t>>16,t>>8&Te,t&Te]:0:el.black,s,a,o,l,c,h,d,f,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),el[t])i=el[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Bg),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=hd(l+1/3,s,a),i[1]=hd(l,s,a),i[2]=hd(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Ad),n&&i.length<4&&(i[3]=1),i}else i=t.match(Bg)||el.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/Te,a=i[1]/Te,o=i[2]/Te,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},g_=function(t){var e=[],n=[],i=-1;return t.split(yr).forEach(function(s){var a=s.match(Es)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Wg=function(t,e,n){var i="",s=(t+i).match(yr),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=m_(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=g_(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(yr,"1").split(Es),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(yr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in el)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),fT=/hsl[a]?\(/,Ud=function(t){var e=t.join(" "),n;if(yr.lastIndex=0,yr.test(e))return n=fT.test(e),t[1]=Wg(t[1],n),t[0]=Wg(t[0],n,g_(t[1])),!0},Zn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,m=function _(p){var g=r()-i,v=p===!0,M,y,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,M=T-a,(M>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=M+(M>=s?4:s-M),y=1),v||(l=c(_)),y)for(u=0;u<o.length;u++)o[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Jg&&(!gd&&Ed()&&(Ki=gd=window,Rd=Ki.document||{},si.gsap=En,(Ki.gsapVersions||(Ki.gsapVersions=[])).push(En.version),$g($h||Ki.GreenSockGlobals||!Ki.gsap&&Ki||{}),d_.forEach(p_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ll=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ll=0,c=ol},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var M=g?function(y,T,E,x){p(y,T,E,x),d.remove(M)}:p;return d.remove(p),o[v?"unshift":"push"](M),Aa(),M},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},d})(),Aa=function(){return!ll&&Zn.wake()},se={},dT=/^[\d.\-M][\d.\-,\s]/,pT=/["']/g,mT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(pT,"").trim():+c,i=l.substr(o+1).trim();return e},gT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},_T=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[mT(e[1])]:gT(t).split(",").map(t_)):se._CE&&dT.test(t)?se._CE("",t):n},xT=function(t){return function(e){return 1-t(1-e)}},Ts=function(t,e){return t&&(ze(t)?t:se[t]||_T(t))||e},Cs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return On(t,function(o){se[o]=si[o]=s,se[a=o.toLowerCase()]=n;for(var l in s)se[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[o+"."+l]=s[l]}),s},__=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ud=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/md*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Gb((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:__(o);return s=md/s,l.config=function(c,h){return r(t,c,h)},l},fd=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:__(n);return i.config=function(s){return r(t,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Cs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Cs("Elastic",ud("in"),ud("out"),ud());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Cs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Cs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Cs("Circ",function(r){return-(Yg(1-r*r)-1)});Cs("Sine",function(r){return r===1?1:-Vb(r*zb)+1});Cs("Back",fd("in"),fd("out"),fd());se.SteppedEase=se.steps=si.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-we;return function(o){return((i*hl(0,a,o)|0)+s)*n}}};sl.ease=se["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Id+=r+","+r+"Params,"});Fd=function(t,e){this.id=kb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Dd,this.set=e?e.getSetter:au},cl=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ea(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),ll||Zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(su(this,n),!s._dp||s.parent||i_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?wa(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ru(this),Qb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=De(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Zb);var i=mn;return mn=n,Nd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gg(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(_i(this,n),Jn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ze(n)?n:e_,l=function(){var h=i.then;i.then=null,s&&s(),ze(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){tl(this)},r})();ai(cl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});Tn=(function(r){qg(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jn(n.sortChildren),Ne&&Qi(n.parent||Ne,vr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&r_(vr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return il(0,arguments,this),this},e.from=function(i,s,a){return il(1,arguments,this),this},e.fromTo=function(i,s,a,o){return il(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,nl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,_i(this,a),1),this},e.call=function(i,s,a){return Qi(this,He.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new He(i,a,_i(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,nl(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,nl(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:De(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,M,y,T,E,x;if(this!==Ne&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,M=this._ts,g=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=De(h%p),h===l?(_=this._repeat,f=c):(T=De(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=wa(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var S=E&&T&1,P=S===(E&&_&1);if(_<T&&(S=!S),o=S?0:h%c?c:h,this._lock=1,this.render(o||(x?0:De(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=nT(this,De(o),De(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!T&&(ri(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-we);break}}u=m}else{u=this._last;for(var A=i<0?i:f;u;){if(m=u._prev,(u._act||A<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,s,a||mn&&Nd(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=A?-we:we);break}}u=m}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-we)._zTime=f>=o?1:-1,this._ts))return this._start=y,ru(this),this.render(i,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Qr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Sr(s)||(s=_i(this,s,i)),!(i instanceof cl)){if(wn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(ze(i))i=He.delayedCall(0,i);else return this}return this!==i?Qi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof He?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return rn(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&iu(this,i),i===this._recent&&(this._recent=this._last),bs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=_i(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=He.delayedCall(0,s||ol,a);return o.data="isPause",this._hasPause=1,Qi(this,o,_i(this,i))},e.removePause=function(i){var s=this._first;for(i=_i(this,i);s;)s._start===i&&s.data==="isPause"&&Qr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Jr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=vi(i),l=this._first,c=Sr(s),h;l;)l instanceof He?Jb(l._targets,o)&&(c?(!Jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=_i(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=He.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||we,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Ea(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:_i(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Hg(this,_i(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Hg(this,_i(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=De(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return bs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bs(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=xi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=De(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ea(a,a===Ne&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ne._ts&&(jg(Ne,jh(i,Ne)),Qg=Zn.frame),Zn.frame>=zg){zg+=$n.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},t})(cl);ai(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});vT=function(t,e,n,i,s,a,o){var l=new Bn(this._pt,t,e,0,1,Vd,null,s),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ca(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),f=n.match(ld)||[];d=ld.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?As(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=ld.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||g)&&(l.e=0),this._pt=l,l},Od=function(t,e,n,i,s,a,o,l,c,h){ze(i)&&(i=i(s||0,t,a));var d=t[e],f=n!=="get"?n:ze(d)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=ze(d)?c?TT:y_:kd,m;if(rn(i)&&(~i.indexOf("random(")&&(i=Ca(i)),i.charAt(1)==="="&&(m=As(f,i)+(gn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||bd)return!isNaN(f*i)&&i!==""?(m=new Bn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?ET:S_,0,u),c&&(m.fp=c),o&&m.modifier(o,this,t),this._pt=m):(!d&&!(e in t)&&nu(e,i),vT.call(this,t,e,f,i,u,l||$n.stringFilter,c))},yT=function(t,e,n,i,s){if(ze(t)&&(t=rl(t,s,e,n,i)),!ji(t)||t.style&&t.nodeType||wn(t)||Zg(t))return rn(t)?rl(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=rl(t[o],s,e,n,i);return a},Bd=function(t,e,n,i,s,a){var o,l,c,h;if(Yn[t]&&(o=new Yn[t]).init(s,o.rawVars?e[t]:yT(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ba))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},zd=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,M=t._overwrite==="auto"&&!wd,y=t.timeline,T=i.easeReverse||d,E,x,S,P,A,F,D,V,I,L,B,N,H;if(y&&(!f||!s)&&(s="none"),t._ease=Ts(s,sl.ease),t._rEase=T&&(Ts(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(V=p[0]?Kr(p[0]).harness:0,N=V&&i[V.prop],E=Qh(i,Pd),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&m?Yh:Yb),_._lazy=0),a){if(Qr(t._startAt=He.set(p,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!o&&!u)&&t._startAt.revert(Yh),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(o=!1),S=ai({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Jn(l),immediateRender:o,stagger:0,parent:g},E),N&&(S[V.prop]=N),Qr(t._startAt=He.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(Yh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Jn(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],D=A._gsap||Ld(p)[x]._gsap,t._ptLookup[x]=L={},_d[D.id]&&$r.length&&Kh(),B=v===p?x:v.indexOf(A),V&&(I=new V).init(A,N||E,t,B,v)!==!1&&(t._pt=P=new Bn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(O){L[O]=P}),I.priority&&(F=1)),!V||N)for(S in E)Yn[S]&&(I=Bd(S,E,t,B,A,v))?I.priority&&(F=1):L[S]=P=Od.call(t,A,S,"get",E[S],B,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),M&&t._pt&&(Jr=t,Ne.killTweensOf(A,L,t.globalTime(e)),H=!t.parent,Jr=0),t._pt&&l&&(_d[D.id]=1)}F&&Hd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&y.render(xi,!0,!0)},ST=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return bd=1,t.vars[e]="+=0",zd(t,o),bd=0,l?al(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=ke(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},MT=function(t,e){var n=t[0]?Kr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ta({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},bT=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(wn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},rl=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf("random(")?Ca(t):t},x_=Id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",v_={};On(x_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return v_[r]=1});He=(function(r){qg(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:nl(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ne,v=(wn(n)||Zg(n)?Sr(n[0]):"length"in i)?[n]:vi(n),M,y,T,E,x,S,P,A;if(o._targets=v.length?Ld(v):al("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||f||qh(c)||qh(h)){i=o.vars;var F=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Tn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),M.kill(),M.parent=M._dp=vr(o),M._start=0,f||qh(c)||qh(h)){if(E=v.length,P=f&&l_(f),ji(f))for(x in f)~x_.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(y=0;y<E;y++)T=Qh(i,v_),T.stagger=0,F&&(T.easeReverse=F),A&&Ta(T,A),S=v[y],T.duration=+rl(c,vr(o),y,S,v),T.delay=(+rl(h,vr(o),y,S,v)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),M.to(S,T,P?P(y,S,v):0),M._ease=se.none;M.duration()?c=h=0:o.timeline=0}else if(m){nl(ai(M.vars.defaults,{ease:"none"})),M._ease=Ts(m.ease||i.ease||"none");var D=0,V,I,L;if(wn(m))m.forEach(function(B){return M.to(v,B,">")}),M.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||bT(x,m[x],T,m.easeEach);for(x in T)for(V=T[x].sort(function(B,N){return B.t-N.t}),D=0,y=0;y<V.length;y++)I=V[y],L={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},L[x]=I.v,M.to(v,L,D),D+=L.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return u===!0&&!wd&&(Jr=vr(o),Ne.killTweensOf(v),Jr=0),Qi(g,vr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===De(g._time)&&Jn(d)&&jb(vr(o))&&g.data!=="nested")&&(o._tTime=-we,o.render(Math.max(0,-h)||0)),p&&r_(vr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-we&&!h?l:i<we?0:i,f,u,m,_,p,g,v,M;if(!c)eT(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=De(d%_),d===l?(m=this._repeat,f=c):(p=De(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=wa(this._tTime,_),f===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(De(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(s_(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var T=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ri(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&xd(this,i,s,a),ri(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&xd(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Qr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ll||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zd(this,c),h=this._ease(c/this._dur),ST(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(su(this,0),this.parent||n_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?tl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jr&&Jr.vars.overwrite!==!0)._first||tl(this),this.parent&&a!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vi(i):o,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!s||s==="all")&&Kb(o,l))return s==="all"&&(this._pt=0),tl(this);for(d=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},On(s,function(v){return _[v]=1}),s=_),s=MT(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,m=f,u={}):(u=d[g]=d[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&iu(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&tl(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return il(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return il(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ne.killTweensOf(i,s,a)},t})(cl);ai(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new Tn,e=yd.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});kd=function(t,e,n){return t[e]=n},y_=function(t,e,n){return t[e](n)},TT=function(t,e,n,i){return t[e](i.fp,n)},wT=function(t,e,n){return t.setAttribute(e,n)},au=function(t,e){return ze(t[e])?y_:eu(t[e])&&t.setAttribute?wT:kd},S_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ET=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Gd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},AT=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},CT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?iu(this,e,"_pt"):e.dep||(n=1),e=i;return!n},RT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Hd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Bn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||S_,this.d=l||this,this.set=c||kd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=RT,this.m=n,this.mt=s,this.tween=i},r})();On(Id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Pd[r]=1});si.TweenMax=si.TweenLite=He;si.TimelineLite=si.TimelineMax=Tn;Ne=new Tn({sortChildren:!1,defaults:sl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Ud;ws=[],Jh={},PT=[],Xg=0,IT=0,dd=function(t){return(Jh[t]||PT).map(function(e){return e()})},Td=function(){var t=Date.now(),e=[];t-Xg>2&&(dd("matchMediaInit"),ws.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ki.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),dd("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xg=t,dd("matchMedia"))},M_=(function(){function r(e,n){this.selector=n&&Sd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IT++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var a=this,o=function(){var c=Ie,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Sd(s)),Ie=a,d=i.apply(a,arguments),ze(d)&&a._r.push(d),Ie=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===ze?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ws.length;a--;)ws[a].id===this.id&&ws.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),LT=(function(){function r(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ji(n)||(n={matches:n});var a=new M_(0,s||this.scope),o=a.conditions={},l,c,h;Ie&&!a.selector&&(a.selector=Ie.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ki.matchMedia(n[c]),l&&(ws.indexOf(a)<0&&ws.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Td):l.addEventListener("change",Td)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),tu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return p_(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=vi(t)[0]);var s=Kr(t||{}).get,a=n?e_:t_;return n==="native"&&(n=""),t&&(e?a((Yn[e]&&Yn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Yn[e],o=Kr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ba._pt=0,d.init(t,n?h+n:h,ba,0,[t]),d.render(1,d),ba._pt&&Gd(1,ba)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=En.to(t,ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ts(t.ease,sl.ease)),kg(sl,t||{})},config:function(t){return kg($n,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!si[o]&&al(e+" effect requires "+o+" plugin.")}),cd[e]=function(o,l,c){return n(vi(o),ai(l||{},s),c)},a&&(Tn.prototype[e]=function(o,l,c){return this.add(cd[e](o,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=Ts(e)},parseEase:function(t,e){return arguments.length?Ts(t,e):se},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=Jn(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,i=Ne._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=s;return Qi(Ne,n,0),n},context:function(t,e){return t?new M_(t,e):Ie},matchMedia:function(t){return new LT(t)},matchMediaRefresh:function(){return ws.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Td()},addEventListener:function(t,e){var n=Jh[t]||(Jh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Jh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:cT,wrapYoyo:hT,distribute:l_,random:h_,snap:c_,normalize:lT,getUnit:gn,clamp:rT,splitColor:m_,toArray:vi,selector:Sd,mapRange:f_,pipe:aT,unitize:oT,interpolate:uT,shuffle:o_},install:$g,effects:cd,ticker:Zn,updateRoot:Tn.updateRoot,plugins:Yn,globalTimeline:Ne,core:{PropTween:Bn,globals:Kg,Tween:He,Timeline:Tn,Animation:cl,getCache:Kr,_removeLinkedListItem:iu,reverting:function(){return mn},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return wd=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return tu[r]=He[r]});Zn.add(Tn.updateRoot);ba=tu.to({},{duration:0});DT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},NT=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=DT(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},pd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}NT(o,s)}}}},En=tu.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},pd("roundProps",Md),pd("modifiers"),pd("snap",c_))||tu;He.version=Tn.version=En.version="3.15.0";Jg=1;Ed()&&Aa();UT=se.Power0,FT=se.Power1,OT=se.Power2,BT=se.Power3,zT=se.Power4,kT=se.Linear,VT=se.Quad,GT=se.Cubic,HT=se.Quart,WT=se.Quint,XT=se.Strong,qT=se.Elastic,YT=se.Back,ZT=se.SteppedEase,JT=se.Bounce,$T=se.Sine,KT=se.Expo,QT=se.Circ});var b_,ts,Pa,$d,Ls,jT,T_,Kd,t1,br,Is,Ia,Ra,w_,Qd,e1,n1,tr,qd,i1,r1,s1,a1,D_,N_,o1,l1,c1,h1,u1,f1,Ue,Kn,d1,U_,p1,F_,O_,Yd,oi,E_,La,Zd,A_,C_,B_,z_,ns,es,R_,m1,is,Mr,g1,P_,_1,x1,ou,fl,k_,V_,I_,jd,Jd,dl,lu,Xd,v1,Rs,ul,Ps,G_,y1,S1,L_,M1,tp,H_=sr(()=>{Wd();t1=function(){return typeof window<"u"},br={},Is=180/Math.PI,Ia=Math.PI/180,Ra=Math.atan2,w_=1e8,Qd=/([A-Z])/g,e1=/(left|right|width|margin|padding|x)/i,n1=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},i1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},r1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},s1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},a1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},D_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},N_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},o1=function(t,e,n){return t.style[e]=n},l1=function(t,e,n){return t.style.setProperty(e,n)},c1=function(t,e,n){return t._gsap[e]=n},h1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},u1=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},f1=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ue="transform",Kn=Ue+"Origin",d1=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in br&&s){if(this.tfm=this.tfm||{},t!=="transform")t=tr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Mr(i,o)}):this.tfm[t]=a.x?a[t]:Mr(i,t),t===Kn&&(this.tfm.zOrigin=a.zOrigin);else return tr.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},U_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},p1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Qd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Kd(),(!s||!s.isStart)&&!n[Ue]&&(U_(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},F_=function(t,e){var n={target:t,props:[],revert:p1,save:d1};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Yd=function(t,e){var n=ts.createElementNS?ts.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ts.createElement(t);return n&&n.style?n:ts.createElement(t)},oi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Qd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,La(e)||e,1)||""},E_="O,Moz,ms,Ms,Webkit".split(","),La=function(t,e,n){var i=e||Ls,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(E_[a]+t in s););return a<0?null:(a===3?"ms":a>=0?E_[a]:"")+t},Zd=function(){t1()&&window.document&&(b_=window,ts=b_.document,Pa=ts.documentElement,Ls=Yd("div")||{style:{}},jT=Yd("div"),Ue=La(Ue),Kn=Ue+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",O_=!!La("perspective"),Kd=En.core.reverting,$d=1)},A_=function(t){var e=t.ownerSVGElement,n=Yd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Pa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Pa.removeChild(n),s},C_=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},B_=function(t){var e,n;try{e=t.getBBox()}catch{e=A_(t),n=1}return e&&(e.width||e.height)||n||(e=A_(t)),e&&!e.width&&!e.x&&!e.y?{x:+C_(t,["x","cx","x1"])||0,y:+C_(t,["y","cy","y1"])||0,width:0,height:0}:e},z_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&B_(t))},ns=function(t,e){if(e){var n=t.style,i;e in br&&e!==Kn&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Qd,"-$1").toLowerCase())):n.removeAttribute(e)}},es=function(t,e,n,i,s,a){var o=new Bn(t._pt,e,n,0,1,a?N_:D_);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},R_={deg:1,rad:1,turn:1},m1={grid:1,flex:1},is=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ls.style,l=e1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===a||!s||R_[i]||R_[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),g=t.getCTM&&z_(t),(u||a==="%")&&(br[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],ke(u?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ts||!_.appendChild)&&(_=ts.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Zn.time&&!p.uncache)return ke(s/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:ns(t,e)}else(u||a==="%")&&!m1[oi(_,"display")]&&(o.position=oi(t,"position")),_===t&&(o.position="static"),_.appendChild(Ls),m=Ls[h],_.removeChild(Ls),o.position="absolute";return l&&u&&(p=Kr(_),p.time=Zn.time,p.width=_[h]),ke(f?m*s/d:m&&s?d/m*s:0)},Mr=function(t,e,n,i){var s;return $d||Zd(),e in tr&&e!=="transform"&&(e=tr[e],~e.indexOf(",")&&(e=e.split(",")[0])),br[e]&&e!=="transform"?(s=dl(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:lu(oi(t,Kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ou[e]&&ou[e](t,e,n)||oi(t,e)||Dd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?is(t,e,s,n)+n:s},g1=function(t,e,n,i){if(!n||n==="none"){var s=La(e,t,1),a=s&&oi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var o=new Bn(this._pt,t.style,e,0,1,Vd),l=0,c=0,h,d,f,u,m,_,p,g,v,M,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=oi(t,e)||i,_?t.style[e]=_:ns(t,e)),h=[n,i],Ud(h),n=h[0],i=h[1],f=n.match(Es)||[],T=i.match(Es)||[],T.length){for(;d=Es.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=As(u,p)+y),g=parseFloat(p),M=p.substr((g+"").length),l=Es.lastIndex-M.length,M||(M=M||$n.units[e]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(u=is(t,e,_,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?N_:D_;return Cd.test(i)&&(o.e=0),this._pt=o,o},P_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=P_[n]||n,e[1]=P_[i]||i,e.join(" ")},x1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],br[o]&&(l=1,o=o==="transformOrigin"?Kn:Ue),ns(n,o);l&&(ns(n,Ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",dl(n,1),a.uncache=1,U_(i)))}},ou={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Bn(t._pt,e,n,0,0,x1);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},fl=[1,0,0,1,0,0],k_={},V_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},I_=function(t){var e=oi(t,Ue);return V_(e)?fl:e.substr(7).match(Ad).map(ke)},jd=function(t,e){var n=t._gsap||Kr(t),i=t.style,s=I_(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fl:s):(s===fl&&!t.offsetParent&&t!==Pa&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Pa.appendChild(t)),s=I_(t),l?i.display=l:ns(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Pa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jd=function(t,e,n,i,s,a){var o=t._gsap,l=s||jd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],M=e.split(" "),y=parseFloat(M[0])||0,T=parseFloat(M[1])||0,E,x,S,P;n?l!==fl&&(x=u*p-m*_)&&(S=y*(p/x)+T*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+T*(u/x)-(u*v-m*g)/x,y=S,T=P):(E=B_(t),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(M[1]||M[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(g=y-c,v=T-h,o.xOffset=d+(g*u+v*_)-g,o.yOffset=f+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Kn]="0px 0px",a&&(es(a,o,"xOrigin",c,y),es(a,o,"yOrigin",h,T),es(a,o,"xOffset",d,o.xOffset),es(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},dl=function(t,e){var n=t._gsap||new Fd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=oi(t,Kn)||"0",h,d,f,u,m,_,p,g,v,M,y,T,E,x,S,P,A,F,D,V,I,L,B,N,H,O,C,K,ht,Tt,Y,at;return h=d=f=_=p=g=v=M=y=0,u=m=1,n.svg=!!(t.getCTM&&z_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),x=jd(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),Jd(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==fl&&(F=x[0],D=x[1],V=x[2],I=x[3],h=L=x[4],d=B=x[5],x.length===6?(u=Math.sqrt(F*F+D*D),m=Math.sqrt(I*I+V*V),_=F||D?Ra(D,F)*Is:0,v=V||I?Ra(V,I)*Is+_:0,v&&(m*=Math.abs(Math.cos(v*Ia))),n.svg&&(h-=T-(T*F+E*V),d-=E-(T*D+E*I))):(at=x[6],Tt=x[7],C=x[8],K=x[9],ht=x[10],Y=x[11],h=x[12],d=x[13],f=x[14],S=Ra(at,ht),p=S*Is,S&&(P=Math.cos(-S),A=Math.sin(-S),N=L*P+C*A,H=B*P+K*A,O=at*P+ht*A,C=L*-A+C*P,K=B*-A+K*P,ht=at*-A+ht*P,Y=Tt*-A+Y*P,L=N,B=H,at=O),S=Ra(-V,ht),g=S*Is,S&&(P=Math.cos(-S),A=Math.sin(-S),N=F*P-C*A,H=D*P-K*A,O=V*P-ht*A,Y=I*A+Y*P,F=N,D=H,V=O),S=Ra(D,F),_=S*Is,S&&(P=Math.cos(S),A=Math.sin(S),N=F*P+D*A,H=L*P+B*A,D=D*P-F*A,B=B*P-L*A,F=N,L=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=ke(Math.sqrt(F*F+D*D+V*V)),m=ke(Math.sqrt(B*B+at*at)),S=Ra(L,B),v=Math.abs(S)>2e-4?S*Is:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!V_(oi(t,Ue)),N&&t.setAttribute("transform",N))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ke(u),n.scaleY=ke(m),n.rotation=ke(_)+o,n.rotationX=ke(p)+o,n.rotationY=ke(g)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Kn]=lu(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?y1:O_?G_:v1,n.uncache=0,n},lu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xd=function(t,e,n){var i=gn(e);return ke(parseFloat(e)+parseFloat(is(t,"x",n+"px",i)))+i},v1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,G_(t,e)},Rs="0deg",ul="0px",Ps=") ",G_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,M=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==Rs||h!==Rs)){var E=parseFloat(h)*Ia,x=Math.sin(E),S=Math.cos(E),P;E=parseFloat(d)*Ia,P=Math.cos(E),a=Xd(v,a,x*P*-M),o=Xd(v,o,-Math.sin(E)*-M),l=Xd(v,l,S*P*-M+M)}p!==ul&&(y+="perspective("+p+Ps),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||a!==ul||o!==ul||l!==ul)&&(y+=l!==ul||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ps),c!==Rs&&(y+="rotate("+c+Ps),h!==Rs&&(y+="rotateY("+h+Ps),d!==Rs&&(y+="rotateX("+d+Ps),(f!==Rs||u!==Rs)&&(y+="skew("+f+", "+u+Ps),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Ps),v.style[Ue]=y||"translate(0, 0)"},y1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),T,E,x,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ia,c*=Ia,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Ia,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=ke(T),E=ke(E),x=ke(x),S=ke(S)):(T=d,S=f,E=x=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=is(u,"x",a,"px"),y=is(u,"y",o,"px")),(m||_||p||g)&&(M=ke(M+m-(m*T+_*x)+p),y=ke(y+_-(m*E+_*S)+g)),(i||s)&&(P=u.getBBox(),M=ke(M+i/100*P.width),y=ke(y+s/100*P.height)),P="matrix("+T+","+E+","+x+","+S+","+M+","+y+")",u.setAttribute("transform",P),v&&(u.style[Ue]=P)},S1=function(t,e,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Is:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*w_)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*w_)%a-~~(c/a)*a)),t._pt=f=new Bn(t._pt,e,n,i,c,i1),f.e=h,f.u="deg",t._props.push(n),f},L_=function(t,e){for(var n in e)t[n]=e[n];return t},M1=function(t,e,n){var i=L_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ue]=e,o=dl(n,1),ns(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],a[Ue]=e,o=dl(n,1),a[Ue]=c);for(l in br)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=gn(c),m=gn(h),d=u!==m?is(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new Bn(t._pt,o,l,d,f-d,qd),t._pt.u=m||0,t._props.push(l));L_(o,i)};On("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ou[t>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(m){return Mr(o,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,u,d)}});tp={name:"css",register:Zd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,M,y,T,E,x,S,P;$d||Zd(),this.styles=this.styles||F_(t),S=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Yn[_]&&Bd(_,e,n,i,t,s)))){if(u=typeof h,m=ou[_],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Ca(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",yr.lastIndex=0,yr.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=is(t,_,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Ca(c)),gn(c+"")||c==="auto"||(c+=$n.units[_]||gn(Mr(t,_))||""),(c+"").charAt(1)==="="&&(c=Mr(t,_))):c=Mr(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in tr&&(_==="autoAlpha"&&(f===1&&Mr(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,o.visibility),es(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in br,M){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=oi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=oi(t,"perspective"),A?t.style.perspective=A:ns(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||dl(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Bn(this._pt,o,Ue,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(v?As(T.scaleY,v+d):d)-T.scaleY||0,qd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Kn,0,o[Kn]),h=_1(h),T.svg?Jd(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&es(this,T,"zOrigin",T.zOrigin,g),es(this,o,_,lu(c),lu(h)));continue}else if(_==="svgOrigin"){Jd(t,h,1,E,0,this);continue}else if(_ in k_){S1(this,T,_,f,v?As(f,v+h):h);continue}else if(_==="smoothOrigin"){es(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){M1(this,h,t);continue}}else _ in o||(_=La(_)||_);if(M||(d||d===0)&&(f||f===0)&&!n1.test(h)&&_ in o)p=(c+"").substr((f+"").length),d||(d=0),g=gn(h)||(_ in $n.units?$n.units[_]:p),p!==g&&(f=is(t,_,c,g)),this._pt=new Bn(this._pt,M?T:o,_,f,(v?As(f,v+d):d)-f,!M&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?a1:qd),this._pt.u=g||0,M&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=s1):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=r1);else if(_ in o)g1.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,s);else if(_!=="parseTransform"){nu(_,h);continue}M||(_ in o?S.push(_,0,o[_]):typeof t[_]=="function"?S.push(_,2,t[_]()):S.push(_,1,c||t[_])),a.push(_)}}x&&Hd(this)},render:function(t,e){if(e.tween._time||!Kd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mr,aliases:tr,getSetter:function(t,e,n){var i=tr[e];return i&&i.indexOf(",")<0&&(e=i),e in br&&e!==Kn&&(t._gsap.x||Mr(t,"x"))?n&&T_===n?e==="scale"?h1:c1:(T_=n||{})&&(e==="scale"?u1:f1):t.style&&!eu(t.style[e])?o1:~e.indexOf("-")?l1:au(t,e)},core:{_removeProperty:ns,_getMatrix:jd}};En.utils.checkPrefix=La;En.core.getStyleSaver=F_;(function(r,t,e,n){var i=On(r+","+t+","+e,function(s){br[s]=1});On(t,function(s){$n.units[s]="deg",k_[s]=1}),tr[i[13]]=r+","+t,On(n,function(s){var a=s.split(":");tr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});En.registerPlugin(tp)});var ep,_C,W_=sr(()=>{Wd();H_();ep=En.registerPlugin(tp)||En,_C=ep.core.Tween});function X_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function b1(r,t,e){return t&&X_(r.prototype,t),e&&X_(r,e),r}var _n,uu,T1,li,rs,ss,Na,Y_,Ds,Ua,Z_,Tr,Oi,J_,$_,K_,Da,Jt,Bi,ml,np,w1,Er,gl,kn,zn,cu,hu,ip,fu,An,Je,Vn,E1,wr,du,pl,q_,Q_,j_,Ve,t0=sr(()=>{$_=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},K_=1,Da=[],Jt=[],Bi=[],ml=Date.now,np=function(t,e){return e},w1=function(){var t=Ua.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,Bi),Jt=n,Bi=i,np=function(a,o){return e[a](o)}},Er=function(t,e){return~Bi.indexOf(t)&&Bi[Bi.indexOf(t)+1][e]},gl=function(t){return!!~Z_.indexOf(t)},kn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},cu="scrollLeft",hu="scrollTop",ip=function(){return Tr&&Tr.isPressed||Jt.cache++},fu=function(t,e){var n=function i(s){if(s||s===0){K_&&(li.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=i.v=Math.round(s)||(Tr&&Tr.iOS?1:0),t(s),i.cacheID=Jt.cache,a&&np("ss",s)}else(e||Jt.cache!==i.cacheID||np("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:cu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fu(function(r){return arguments.length?li.scrollTo(r,Je.sc()):li.pageXOffset||rs[cu]||ss[cu]||Na[cu]||0})},Je={s:hu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:fu(function(r){return arguments.length?li.scrollTo(An.sc(),r):li.pageYOffset||rs[hu]||ss[hu]||Na[hu]||0})},Vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},E1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},wr=function(t,e){var n=e.s,i=e.sc;gl(t)&&(t=rs.scrollingElement||ss);var s=Jt.indexOf(t),a=i===Je.sc?1:2;!~s&&(s=Jt.push(t)-1),Jt[s+a]||kn(t,"scroll",ip);var o=Jt[s+a],l=o||(Jt[s+a]=fu(Er(t,n),!0)||(gl(t)?i:fu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},du=function(t,e,n){var i=t,s=t,a=ml(),o=a,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=ml();_||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(m){var _=o,p=s,g=ml();return(m||m===0)&&m!==i&&h(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-_)*1e3};return{update:h,reset:d,getVelocity:f}},pl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},q_=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Q_=function(){Ua=_n.core.globals().ScrollTrigger,Ua&&Ua.core&&w1()},j_=function(t){return _n=t||$_(),!uu&&_n&&typeof document<"u"&&document.body&&(li=window,rs=document,ss=rs.documentElement,Na=rs.body,Z_=[li,rs,ss,Na],T1=_n.utils.clamp,J_=_n.core.context||function(){},Ds="onpointerenter"in Na?"pointer":"mouse",Y_=Ve.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Ve.eventTypes=("ontouchstart"in ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return K_=0},500),uu=1),Ua||Q_(),uu};An.op=Je;Jt.cache=0;Ve=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){uu||j_(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||Q_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,A=n.onChangeY,F=n.onChange,D=n.onToggleX,V=n.onToggleY,I=n.onHover,L=n.onHoverEnd,B=n.onMove,N=n.ignoreCheck,H=n.isNormalizer,O=n.onGestureStart,C=n.onGestureEnd,K=n.onWheel,ht=n.onEnable,Tt=n.onDisable,Y=n.onClick,at=n.scrollSpeed,dt=n.capture,Mt=n.allowClicks,ut=n.lockAxis,At=n.onLockAxis;this.target=o=Vn(o)||ss,this.vars=n,u&&(u=_n.utils.toArray(u)),i=i||1e-9,s=s||0,m=m||1,at=at||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Na).lineHeight)||22);var ge,Ct,Ht,Nt,Ot,ce,ae,$=this,jt=0,We=0,ve=n.passive||!h&&n.passive!==!1,re=wr(o,An),Fe=wr(o,Je),Ge=re(),G=Fe(),ue=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Oi[0]==="pointerdown",oe=gl(o),Vt=o.ownerDocument||rs,pt=[0,0,0],he=[0,0,0],Ut=0,zt=function(){return Ut=ml()},R=function(_t,rt){return($.event=_t)&&u&&E1(_t.target,u)||rt&&ue&&_t.pointerType!=="touch"||N&&N(_t,rt)},b=function(){$._vx.reset(),$._vy.reset(),Ct.pause(),d&&d($)},X=function(){var _t=$.deltaX=q_(pt),rt=$.deltaY=q_(he),et=Math.abs(_t)>=i,vt=Math.abs(rt)>=i;F&&(et||vt)&&F($,_t,rt,pt,he),et&&(T&&$.deltaX>0&&T($),E&&$.deltaX<0&&E($),P&&P($),D&&$.deltaX<0!=jt<0&&D($),jt=$.deltaX,pt[0]=pt[1]=pt[2]=0),vt&&(S&&$.deltaY>0&&S($),x&&$.deltaY<0&&x($),A&&A($),V&&$.deltaY<0!=We<0&&V($),We=$.deltaY,he[0]=he[1]=he[2]=0),(Nt||Ht)&&(B&&B($),Ht&&(p&&Ht===1&&p($),v&&v($),Ht=0),Nt=!1),ce&&!(ce=!1)&&At&&At($),Ot&&(K($),Ot=!1),ge=0},st=function(_t,rt,et){pt[et]+=_t,he[et]+=rt,$._vx.update(_t),$._vy.update(rt),c?ge||(ge=requestAnimationFrame(X)):X()},it=function(_t,rt){ut&&!ae&&($.axis=ae=Math.abs(_t)>Math.abs(rt)?"x":"y",ce=!0),ae!=="y"&&(pt[2]+=_t,$._vx.update(_t,!0)),ae!=="x"&&(he[2]+=rt,$._vy.update(rt,!0)),c?ge||(ge=requestAnimationFrame(X)):X()},ft=function(_t){if(!R(_t,1)){_t=pl(_t,h);var rt=_t.clientX,et=_t.clientY,vt=rt-$.x,nt=et-$.y,wt=$.isDragging;$.x=rt,$.y=et,(wt||(vt||nt)&&(Math.abs($.startX-rt)>=s||Math.abs($.startY-et)>=s))&&(Ht||(Ht=wt?2:1),wt||($.isDragging=!0),it(vt,nt))}},xt=$.onPress=function(ot){R(ot,1)||ot&&ot.button||($.axis=ae=null,Ct.pause(),$.isPressed=!0,ot=pl(ot),jt=We=0,$.startX=$.x=ot.clientX,$.startY=$.y=ot.clientY,$._vx.reset(),$._vy.reset(),kn(H?o:Vt,Oi[1],ft,ve,!0),$.deltaX=$.deltaY=0,M&&M($))},q=$.onRelease=function(ot){if(!R(ot,1)){zn(H?o:Vt,Oi[1],ft,!0);var _t=!isNaN($.y-$.startY),rt=$.isDragging,et=rt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),vt=pl(ot);!et&&_t&&($._vx.reset(),$._vy.reset(),h&&Mt&&_n.delayedCall(.08,function(){if(ml()-Ut>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(Vt.createEvent){var nt=Vt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,li,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(nt)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&rt&&!H&&Ct.restart(!0),Ht&&X(),g&&rt&&g($),y&&y($,et)}},tt=function(_t){return _t.touches&&_t.touches.length>1&&($.isGesturing=!0)&&O(_t,$.isDragging)},ct=function(){return($.isGesturing=!1)||C($)},U=function(_t){if(!R(_t)){var rt=re(),et=Fe();st((rt-Ge)*at,(et-G)*at,1),Ge=rt,G=et,d&&Ct.restart(!0)}},j=function(_t){if(!R(_t)){_t=pl(_t,h),K&&(Ot=!0);var rt=(_t.deltaMode===1?l:_t.deltaMode===2?li.innerHeight:1)*m;st(_t.deltaX*rt,_t.deltaY*rt,0),d&&!H&&Ct.restart(!0)}},Q=function(_t){if(!R(_t)){var rt=_t.clientX,et=_t.clientY,vt=rt-$.x,nt=et-$.y;$.x=rt,$.y=et,Nt=!0,d&&Ct.restart(!0),(vt||nt)&&it(vt,nt)}},mt=function(_t){$.event=_t,I($)},lt=function(_t){$.event=_t,L($)},gt=function(_t){return R(_t)||pl(_t,h)&&Y($)};Ct=$._dc=_n.delayedCall(f||.25,b).pause(),$.deltaX=$.deltaY=0,$._vx=du(0,50,!0),$._vy=du(0,50,!0),$.scrollX=re,$.scrollY=Fe,$.isDragging=$.isGesturing=$.isPressed=!1,J_(this),$.enable=function(ot){return $.isEnabled||(kn(oe?Vt:o,"scroll",ip),a.indexOf("scroll")>=0&&kn(oe?Vt:o,"scroll",U,ve,dt),a.indexOf("wheel")>=0&&kn(o,"wheel",j,ve,dt),(a.indexOf("touch")>=0&&Y_||a.indexOf("pointer")>=0)&&(kn(o,Oi[0],xt,ve,dt),kn(Vt,Oi[2],q),kn(Vt,Oi[3],q),Mt&&kn(o,"click",zt,!0,!0),Y&&kn(o,"click",gt),O&&kn(Vt,"gesturestart",tt),C&&kn(Vt,"gestureend",ct),I&&kn(o,Ds+"enter",mt),L&&kn(o,Ds+"leave",lt),B&&kn(o,Ds+"move",Q)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Nt=Ht=!1,$._vx.reset(),$._vy.reset(),Ge=re(),G=Fe(),ot&&ot.type&&xt(ot),ht&&ht($)),$},$.disable=function(){$.isEnabled&&(Da.filter(function(ot){return ot!==$&&gl(ot.target)}).length||zn(oe?Vt:o,"scroll",ip),$.isPressed&&($._vx.reset(),$._vy.reset(),zn(H?o:Vt,Oi[1],ft,!0)),zn(oe?Vt:o,"scroll",U,dt),zn(o,"wheel",j,dt),zn(o,Oi[0],xt,dt),zn(Vt,Oi[2],q),zn(Vt,Oi[3],q),zn(o,"click",zt,!0),zn(o,"click",gt),zn(Vt,"gesturestart",tt),zn(Vt,"gestureend",ct),zn(o,Ds+"enter",mt),zn(o,Ds+"leave",lt),zn(o,Ds+"move",Q),$.isEnabled=$.isPressed=$.isDragging=!1,Tt&&Tt($))},$.kill=$.revert=function(){$.disable();var ot=Da.indexOf($);ot>=0&&Da.splice(ot,1),Tr===$&&(Tr=0)},Da.push($),H&&gl(o)&&(Tr=$),$.enable(_)},b1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ve.version="3.15.0";Ve.create=function(r){return new Ve(r)};Ve.register=j_;Ve.getAll=function(){return Da.slice()};Ve.getById=function(r){return Da.filter(function(t){return t.vars.id===r})[0]};$_()&&_n.registerPlugin(Ve)});var Rt,za,Qt,_e,ui,me,_p,Ru,Pl,bl,xl,pu,Cn,Lu,hp,Hn,e0,n0,ka,x0,rp,v0,Gn,up,y0,S0,as,fp,xp,Va,vp,Tl,dp,sp,mu,Rn,ap,Mi,vl,i0,r0,A1,s0,a0,er,yl,M0,b0,zs,T0,w0,C1,R1,nr,gu,hi,Pn,Sl,Ns,_l,Fa,Oa,E0,A0,yp,Sp,Fs,Os,wl,El,Al,Cl,$e,yi,Ha,Mp,sn,Si,P1,o0,Ar,Pu,C0,I1,bp,L1,_u,un,hn,xu,l0,vu,Iu,Tu,yu,wu,$t,pp,Il,c0,Ba,op,Ml,ks,D1,R0,Vs,ci,P0,I0,Tp,L0,Wn,Bs,h0,N1,D0,u0,Us,mp,Eu,Rl,Cr,gp,Au,U1,lp,F1,Ga,Su,O1,Cu,f0,B1,d0,N0,Mu,p0,Yt,m0,cp,bu,z1,U0,k1,g0,_0,V1,F0=sr(()=>{t0();mu=1,Rn=Date.now,ap=Rn(),Mi=0,vl=0,i0=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},r0=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},A1=function r(){return vl&&requestAnimationFrame(r)},s0=function(){return Lu=1},a0=function(){return Lu=0},er=function(t){return t},yl=function(t){return Math.round(t*1e5)/1e5||0},M0=function(){return typeof window<"u"},b0=function(){return Rt||M0()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},zs=function(t){return!!~_p.indexOf(t)},T0=function(t){return(t==="Height"?vp:Qt["inner"+t])||ui["client"+t]||me["client"+t]},w0=function(t){return Er(t,"getBoundingClientRect")||(zs(t)?function(){return Cu.width=Qt.innerWidth,Cu.height=vp,Cu}:function(){return Ar(t)})},C1=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Er(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?T0(s):t["client"+s])||0}},R1=function(t,e){return!e||~Bi.indexOf(t)?w0(t):function(){return Cu}},nr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Er(t,n))?a()-w0(t)()[s]:zs(t)?(ui[n]||me[n])-T0(i):t[n]-t["offset"+i])},gu=function(t,e){for(var n=0;n<ka.length;n+=3)(!e||~e.indexOf(ka[n+1]))&&t(ka[n],ka[n+1],ka[n+2])},hi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},Sl=function(t){return typeof t=="number"},Ns=function(t){return typeof t=="object"},_l=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Fa=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Oa=Math.abs,E0="left",A0="top",yp="right",Sp="bottom",Fs="width",Os="height",wl="Right",El="Left",Al="Top",Cl="Bottom",$e="padding",yi="margin",Ha="Width",Mp="Height",sn="px",Si=function(t){return Qt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},P1=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},o0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ar=function(t,e){var n=e&&Si(t)[hp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},C0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},I1=function(t){return function(e){return Rt.utils.snap(C0(t),e)}},bp=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},L1=function(t){return function(e,n){return bp(C0(t))(e,n.direction)}},_u=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},xu=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},l0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vu={toggleActions:"play",anticipatePin:0},Iu={top:0,left:0,center:.5,bottom:1,right:1},Tu=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Iu?Iu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},yu=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,m=_e.createElement("div"),_=zs(n)||Er(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?me:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,M=v?c:h,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Je?yp:Sp)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],wu(m,0,i,v),m},wu=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ha]=1,s["border"+o+Ha]=0,s[n.p]=e+"px",Rt.set(t,s)},$t=[],pp={},c0=function(){return Rn()-Mi>34&&(Il||(Il=requestAnimationFrame(Cr)))},Ba=function(){(!Gn||!Gn.isPressed||Gn.startX>me.clientWidth)&&(Jt.cache++,Gn?Il||(Il=requestAnimationFrame(Cr)):Cr(),Mi||Vs("scrollStart"),Mi=Rn())},op=function(){S0=Qt.innerWidth,y0=Qt.innerHeight},Ml=function(t){Jt.cache++,(t===!0||!Cn&&!v0&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!up||S0!==Qt.innerWidth||Math.abs(Qt.innerHeight-y0)>Qt.innerHeight*.25))&&Ru.restart(!0)},ks={},D1=[],R0=function r(){return hn(Yt,"scrollEnd",r)||Us(!0)},Vs=function(t){return ks[t]&&ks[t].map(function(e){return e()})||D1},ci=[],P0=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},I0=function(){return Jt.forEach(function(t){return Pn(t)&&++t.cacheID&&(t.rec=t())})},Tp=function(t,e){var n;for(Hn=0;Hn<$t.length;Hn++)n=$t[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Tl=!0,e&&P0(e),e||Vs("revert")},L0=function(t,e){Jt.cache++,(e||!Wn)&&Jt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(Qt.history.scrollRestoration=xp=t)},Bs=0,N1=function(){if(h0!==Bs){var t=h0=Bs;requestAnimationFrame(function(){return t===Bs&&Us(!0)})}},D0=function(){me.appendChild(Va),vp=!Gn&&Va.offsetHeight||Qt.innerHeight,me.removeChild(Va)},u0=function(t){return Pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Us=function(t,e){if(ui=_e.documentElement,me=_e.body,_p=[Qt,_e,ui,me],Mi&&!t&&!Tl){un(Yt,"scrollEnd",R0);return}D0(),Wn=Yt.isRefreshing=!0,Tl||I0();var n=Vs("refreshInit");x0&&Yt.sort(),e||Tp(),Jt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),Tl=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),dp=1,u0(!0),$t.forEach(function(i){var s=nr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),u0(!1),dp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),L0(xp,1),Ru.pause(),Bs++,Wn=2,Cr(2),$t.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=Yt.isRefreshing=!1,Vs("refresh")},mp=0,Eu=1,Cr=function(t){if(t===2||!Wn&&!Tl){Yt.isUpdating=!0,Rl&&Rl.update(0);var e=$t.length,n=Rn(),i=n-ap>=50,s=e&&$t[0].scroll();if(Eu=mp>s?-1:1,Wn||(mp=s),i&&(Mi&&!Lu&&n-Mi>200&&(Mi=0,Vs("scrollEnd")),xl=ap,ap=n),Eu<0){for(Hn=e;Hn-- >0;)$t[Hn]&&$t[Hn].update(0,i);Eu=1}else for(Hn=0;Hn<e;Hn++)$t[Hn]&&$t[Hn].update(0,i);Yt.isUpdating=!1}Il=0},gp=[E0,A0,Sp,yp,yi+Cl,yi+wl,yi+Al,yi+El,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Au=gp.concat([Fs,Os,"boxSizing","max"+Ha,"max"+Mp,"position",yi,$e,$e+Al,$e+wl,$e+Cl,$e+El]),U1=function(t,e,n){Ga(n);var i=t._gsap;if(i.spacerIsNative)Ga(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},lp=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=gp.length,a=e.style,o=t.style,l;s--;)l=gp[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Sp]=o[yp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Fs]=Pu(t,An)+sn,a[Os]=Pu(t,Je)+sn,a[$e]=o[yi]=o[A0]=o[E0]="0",Ga(i),o[Fs]=o["max"+Ha]=n[Fs],o[Os]=o["max"+Mp]=n[Os],o[$e]=n[$e],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},F1=/([A-Z])/g,Ga=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(F1,"-$1").toLowerCase())}},Su=function(t){for(var e=Au.length,n=t.style,i=[],s=0;s<e;s++)i.push(Au[s],n[Au[s]]);return i.t=t,i},O1=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Cu={left:0,top:0},f0=function(t,e,n,i,s,a,o,l,c,h,d,f,u,m){Pn(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Tu("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Sl(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),o&&wu(o,n,i,!0);else{Pn(e)&&(e=e(l));var M=(t||"0").split(" "),y,T,E,x;v=Vn(e,l)||me,y=Ar(v)||{},(!y||!y.left&&!y.top)&&Si(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Ar(v),x?v.style.display=x:v.style.removeProperty("display")),T=Tu(M[0],y[i.d]),E=Tu(M[1]||"0",n),t=y[i.p]-c[i.p]-h+T+s-E,o&&wu(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),a){var S=t+n,P=a._isStart;p="scroll"+i.d2,wu(a,S,i,P&&S>20||!P&&(d?Math.max(me[p],ui[p]):a.parentNode[p])<=S+1),d&&(c=Ar(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+sn))}return u&&v&&(p=Ar(v),u.seek(f),g=Ar(v),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},B1=/(webkit|moz|length|cssText|inset)/i,d0=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===me){t._stOrig=s.cssText,o=Si(t);for(a in o)!+a&&!B1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},N0=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Mu=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},p0=function(t,e){var n=wr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,m={};c=c||n();var _=N0(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Jt.cache++,a.tween&&Cr()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(t,"wheel",n.wheelHandler),Yt.isTouch&&un(t,"touchmove",n.wheelHandler),s},Yt=(function(){function r(e,n){za||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fp(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vl){this.update=this.refresh=this.kill=er;return}n=o0(hi(n)||Sl(n)||n.nodeType?{trigger:n}:n,vu);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,P=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Je,F=!d&&d!==0,D=Vn(n.scroller||Qt),V=Rt.core.getCache(D),I=zs(D),L=("pinType"in n?n.pinType:Er(D,"pinType")||I&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=F&&n.toggleActions.split(" "),H="markers"in n?n.markers:vu.markers,O=I?0:parseFloat(Si(D)["border"+A.p2+Ha])||0,C=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ht=C1(D,I,A),Tt=R1(D,I),Y=0,at=0,dt=0,Mt=wr(D,A),ut,At,ge,Ct,Ht,Nt,Ot,ce,ae,$,jt,We,ve,re,Fe,Ge,G,ue,oe,Vt,pt,he,Ut,zt,R,b,X,st,it,ft,xt,q,tt,ct,U,j,Q,mt,lt;if(C._startClamp=C._endClamp=!1,C._dir=A,p*=45,C.scroller=D,C.scroll=x?x.time.bind(x):Mt,Ct=Mt(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(x0=1,n.refreshPriority===-9999&&(Rl=C)),V.tweenScroll=V.tweenScroll||{top:p0(D,Je),left:p0(D,An)},C.tweenTo=ut=V.tweenScroll[A.p],C.scrubDuration=function(et){tt=Sl(et)&&et,tt?q?q.duration(et):q=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(C)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),ft=0,l||(l=i.vars.id)),y&&((!Ns(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in me.style&&Rt.set(I?[me,ui]:D,{scrollBehavior:"auto"}),Jt.forEach(function(et){return Pn(et)&&et.target===(I?_e.scrollingElement||ui:D)&&(et.smooth=!1)}),ge=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?I1(i):y.snapTo==="labelsDirectional"?L1(i):y.directional!==!1?function(et,vt){return bp(y.snapTo)(et,Rn()-at<500?0:vt.direction)}:Rt.utils.snap(y.snapTo),ct=y.duration||{min:.1,max:2},ct=Ns(ct)?bl(ct.min,ct.max):bl(ct,ct),U=Rt.delayedCall(y.delay||tt/2||.1,function(){var et=Mt(),vt=Rn()-at<500,nt=ut.tween;if((vt||Math.abs(C.getVelocity())<10)&&!nt&&!Lu&&Y!==et){var wt=(et-Nt)/re,te=i&&!F?i.totalProgress():wt,Wt=vt?0:(te-xt)/(Rn()-xl)*1e3||0,Ce=Rt.utils.clamp(-wt,1-wt,Oa(Wt/2)*Wt/.185),Xe=wt+(y.inertia===!1?0:Ce),Re,ye,de=y,Qe=de.onStart,Se=de.onInterrupt,xn=de.onComplete;if(Re=ge(Xe,C),Sl(Re)||(Re=Xe),ye=Math.max(0,Math.round(Nt+Re*re)),et<=Ot&&et>=Nt&&ye!==et){if(nt&&!nt._initted&&nt.data<=Oa(ye-et))return;y.inertia===!1&&(Ce=Re-wt),ut(ye,{duration:ct(Oa(Math.max(Oa(Xe-te),Oa(Re-te))*.185/Wt/.05||0)),ease:y.ease||"power3",data:Oa(ye-et),onInterrupt:function(){return U.restart(!0)&&Se&&Fa(C,Se)},onComplete:function(){C.update(),Y=Mt(),i&&!F&&(q?q.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),ft=xt=i&&!F?i.totalProgress():C.progress,v&&v(C),xn&&Fa(C,xn)}},et,Ce*re,ye-et-Ce*re),Qe&&Fa(C,Qe,ut.tween)}}else C.isActive&&Y!==et&&U.restart(!0)}).pause()),l&&(pp[l]=C),f=C.trigger=Vn(f||u!==!0&&u),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(C)),u=u===!0?f:Vn(u),hi(o)&&(o={targets:f,className:o}),u&&(m===!1||m===yi||(m=!m&&u.parentNode&&u.parentNode.style&&Si(u.parentNode).display==="flex"?!1:$e),C.pin=u,At=Rt.core.getCache(u),At.spacer?Fe=At.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),At.spacerIsNative=!!E,E&&(At.spacerState=Su(E))),At.spacer=ue=E||_e.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),At.pinState=Fe=Su(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),C.spacer=ue=At.spacer,it=Si(u),zt=it[m+A.os2],Vt=Rt.getProperty(u),pt=Rt.quickSetter(u,A.a,sn),lp(u,ue,it),G=Su(u)),H){We=Ns(H)?o0(H,l0):l0,$=yu("scroller-start",l,D,A,We,0),jt=yu("scroller-end",l,D,A,We,0,$),oe=$["offset"+A.op.d2];var gt=Vn(Er(D,"content")||D);ce=this.markerStart=yu("start",l,gt,A,We,oe,0,x),ae=this.markerEnd=yu("end",l,gt,A,We,oe,0,x),x&&(mt=Rt.quickSetter([ce,ae],A.a,sn)),!L&&!(Bi.length&&Er(D,"fixedMarkers")===!0)&&(P1(I?me:D),Rt.set([$,jt],{force3D:!0}),b=Rt.quickSetter($,A.a,sn),st=Rt.quickSetter(jt,A.a,sn))}if(x){var ot=x.vars.onUpdate,_t=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),ot&&ot.apply(x,_t||[])})}if(C.previous=function(){return $t[$t.indexOf(C)-1]},C.next=function(){return $t[$t.indexOf(C)+1]},C.revert=function(et,vt){if(!vt)return C.kill(!0);var nt=et!==!1||!C.enabled,wt=Cn;nt!==C.isReverted&&(nt&&(j=Math.max(Mt(),C.scroll.rec||0),dt=C.progress,Q=i&&i.progress()),ce&&[ce,ae,$,jt].forEach(function(te){return te.style.display=nt?"none":"block"}),nt&&(Cn=C,C.update(nt)),u&&(!T||!C.isActive)&&(nt?U1(u,ue,Fe):lp(u,ue,Si(u),R)),nt||C.update(nt),Cn=wt,C.isReverted=nt)},C.refresh=function(et,vt,nt,wt){if(!((Cn||!C.enabled)&&!vt)){if(u&&et&&Mi){un(r,"scrollEnd",R0);return}!Wn&&K&&K(C),Cn=C,ut.tween&&!nt&&(ut.tween.kill(),ut.tween=0),q&&q.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(W){return W.vars.immediateRender&&W.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var te=ht(),Wt=Tt(),Ce=x?x.duration():nr(D,A),Xe=re<=.01||!re,Re=0,ye=wt||0,de=Ns(nt)?nt.end:n.end,Qe=n.endTrigger||f,Se=Ns(nt)?nt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),xn=C.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,C),Qn=f&&Math.max(0,$t.indexOf(C))||0,Oe=Qn,qe,je,jn,Gs,tn,Be,fi,Ya,Ol,Dr,w,k,J;for(H&&Ns(nt)&&(k=Rt.getProperty($,A.p),J=Rt.getProperty(jt,A.p));Oe-- >0;)Be=$t[Oe],Be.end||Be.refresh(0,1)||(Cn=C),fi=Be.pin,fi&&(fi===f||fi===u||fi===xn)&&!Be.isReverted&&(Dr||(Dr=[]),Dr.unshift(Be),Be.revert(!0,!0)),Be!==$t[Oe]&&(Qn--,Oe--);for(Pn(Se)&&(Se=Se(C)),Se=i0(Se,"start",C),Nt=f0(Se,f,te,A,Mt(),ce,$,C,Wt,O,L,Ce,x,C._startClamp&&"_startClamp")||(u?-.001:0),Pn(de)&&(de=de(C)),hi(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(hi(Se)?Se.split(" ")[0]:"")+de:(Re=Tu(de.substr(2),te),de=hi(Se)?Se:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Nt):Nt)+Re,Qe=f)),de=i0(de,"end",C),Ot=Math.max(Nt,f0(de||(Qe?"100% 0":Ce),Qe,te,A,Mt()+Re,ae,jt,C,Wt,O,L,Ce,x,C._endClamp&&"_endClamp"))||-.001,Re=0,Oe=Qn;Oe--;)Be=$t[Oe]||{},fi=Be.pin,fi&&Be.start-Be._pinPush<=Nt&&!x&&Be.end>0&&(qe=Be.end-(C._startClamp?Math.max(0,Be.start):Be.start),(fi===f&&Be.start-Be._pinPush<Nt||fi===xn)&&isNaN(Se)&&(Re+=qe*(1-Be.progress)),fi===u&&(ye+=qe));if(Nt+=Re,Ot+=Re,C._startClamp&&(C._startClamp+=Re),C._endClamp&&!Wn&&(C._endClamp=Ot||-.001,Ot=Math.min(Ot,nr(D,A))),re=Ot-Nt||(Nt-=.01)&&.001,Xe&&(dt=Rt.utils.clamp(0,1,Rt.utils.normalize(Nt,Ot,j))),C._pinPush=ye,ce&&Re&&(qe={},qe[A.a]="+="+Re,xn&&(qe[A.p]="-="+Mt()),Rt.set([ce,ae],qe)),u&&!(dp&&C.end>=nr(D,A)))qe=Si(u),Gs=A===Je,jn=Mt(),he=parseFloat(Vt(A.a))+ye,!Ce&&Ot>1&&(w=(I?_e.scrollingElement||ui:D).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},I&&Si(me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),lp(u,ue,qe),G=Su(u),je=Ar(u,!0),Ya=L&&wr(D,Gs?An:Je)(),m?(R=[m+A.os2,re+ye+sn],R.t=ue,Oe=m===$e?Pu(u,A)+re+ye:0,Oe&&(R.push(A.d,Oe+sn),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Oe+sn)),Ga(R),xn&&$t.forEach(function(W){W.pin===xn&&W.vars.pinSpacing!==!1&&(W._subPinOffset=!0)}),L&&Mt(j)):(Oe=Pu(u,A),Oe&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Oe+sn)),L&&(tn={top:je.top+(Gs?jn-Nt:Ya)+sn,left:je.left+(Gs?Ya:jn-Nt)+sn,boxSizing:"border-box",position:"fixed"},tn[Fs]=tn["max"+Ha]=Math.ceil(je.width)+sn,tn[Os]=tn["max"+Mp]=Math.ceil(je.height)+sn,tn[yi]=tn[yi+Al]=tn[yi+wl]=tn[yi+Cl]=tn[yi+El]="0",tn[$e]=qe[$e],tn[$e+Al]=qe[$e+Al],tn[$e+wl]=qe[$e+wl],tn[$e+Cl]=qe[$e+Cl],tn[$e+El]=qe[$e+El],Ge=O1(Fe,tn,T),Wn&&Mt(0)),i?(Ol=i._initted,rp(1),i.render(i.duration(),!0,!0),Ut=Vt(A.a)-he+re+ye,X=Math.abs(re-Ut)>1,L&&X&&Ge.splice(Ge.length-2,2),i.render(0,!0,!0),Ol||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),rp(0)):Ut=re,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(f&&Mt()&&!x)for(je=f.parentNode;je&&je!==me;)je._pinOffset&&(Nt-=je._pinOffset,Ot-=je._pinOffset),je=je.parentNode;Dr&&Dr.forEach(function(W){return W.revert(!1,!0)}),C.start=Nt,C.end=Ot,Ct=Ht=Wn?j:Mt(),!x&&!Wn&&(Ct<j&&Mt(j),C.scroll.rec=0),C.revert(!1,!0),at=Rn(),U&&(Y=-1,U.restart(!0)),Cn=0,i&&F&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Xe||dt!==C.progress||x||_||i&&!i._initted)&&(i&&!F&&(i._initted||dt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Nt<-.001&&!dt?Rt.utils.normalize(Nt,Ot,0):dt,!0),C.progress=Xe||(Ct-Nt)/re===dt?0:dt),u&&m&&(ue._pinOffset=Math.round(C.progress*Ut)),q&&q.invalidate(),isNaN(k)||(k-=Rt.getProperty($,A.p),J-=Rt.getProperty(jt,A.p),Mu($,A,k),Mu(ce,A,k-(wt||0)),Mu(jt,A,J),Mu(ae,A,J-(wt||0))),Xe&&!Wn&&C.update(),h&&!Wn&&!ve&&(ve=!0,h(C),ve=!1)}},C.getVelocity=function(){return(Mt()-Ht)/(Rn()-xl)*1e3||0},C.endAnimation=function(){_l(C.callbackAnimation),i&&(q?q.progress(1):i.paused()?F||_l(i,C.direction<0,1):_l(i,i.reversed()))},C.labelToScroll=function(et){return i&&i.labels&&(Nt||C.refresh()||Nt)+i.labels[et]/i.duration()*re||0},C.getTrailing=function(et){var vt=$t.indexOf(C),nt=C.direction>0?$t.slice(0,vt).reverse():$t.slice(vt+1);return(hi(et)?nt.filter(function(wt){return wt.vars.preventOverlaps===et}):nt).filter(function(wt){return C.direction>0?wt.end<=Nt:wt.start>=Ot})},C.update=function(et,vt,nt){if(!(x&&!nt&&!et)){var wt=Wn===!0?j:C.scroll(),te=et?0:(wt-Nt)/re,Wt=te<0?0:te>1?1:te||0,Ce=C.progress,Xe,Re,ye,de,Qe,Se,xn,Qn;if(vt&&(Ht=Ct,Ct=x?Mt():wt,y&&(xt=ft,ft=i&&!F?i.totalProgress():Wt)),p&&u&&!Cn&&!mu&&Mi&&(!Wt&&Nt<wt+(wt-Ht)/(Rn()-xl)*p?Wt=1e-4:Wt===1&&Ot>wt+(wt-Ht)/(Rn()-xl)*p&&(Wt=.9999)),Wt!==Ce&&C.enabled){if(Xe=C.isActive=!!Wt&&Wt<1,Re=!!Ce&&Ce<1,Se=Xe!==Re,Qe=Se||!!Wt!=!!Ce,C.direction=Wt>Ce?1:-1,C.progress=Wt,Qe&&!Cn&&(ye=Wt&&!Ce?0:Wt===1?1:Ce===1?2:3,F&&(de=!Se&&N[ye+1]!=="none"&&N[ye+1]||N[ye],Qn=i&&(de==="complete"||de==="reset"||de in i))),P&&(Se||Qn)&&(Qn||d||!i)&&(Pn(P)?P(C):C.getTrailing(P).forEach(function(jn){return jn.endAnimation()})),F||(q&&!Cn&&!mu?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Wt,i._tTime/i._tDur):(q.vars.totalProgress=Wt,q.invalidate().restart())):i&&i.totalProgress(Wt,!!(Cn&&(at||et)))),u){if(et&&m&&(ue.style[m+A.os2]=zt),!L)pt(yl(he+Ut*Wt));else if(Qe){if(xn=!et&&Wt>Ce&&Ot+1>wt&&wt+1>=nr(D,A),T)if(!et&&(Xe||xn)){var Oe=Ar(u,!0),qe=wt-Nt;d0(u,me,Oe.top+(A===Je?qe:0)+sn,Oe.left+(A===Je?0:qe)+sn)}else d0(u,ue);Ga(Xe||xn?Ge:G),X&&Wt<1&&Xe||pt(he+(Wt===1&&!xn?Ut:0))}}y&&!ut.tween&&!Cn&&!mu&&U.restart(!0),o&&(Se||M&&Wt&&(Wt<1||!sp))&&Pl(o.targets).forEach(function(jn){return jn.classList[Xe||M?"add":"remove"](o.className)}),a&&!F&&!et&&a(C),Qe&&!Cn?(F&&(Qn&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),a&&a(C)),(Se||!sp)&&(c&&Se&&Fa(C,c),B[ye]&&Fa(C,B[ye]),M&&(Wt===1?C.kill(!1,1):B[ye]=0),Se||(ye=Wt===1?1:3,B[ye]&&Fa(C,B[ye]))),S&&!Xe&&Math.abs(C.getVelocity())>(Sl(S)?S:2500)&&(_l(C.callbackAnimation),q?q.progress(1):_l(i,de==="reverse"?1:!Wt,1))):F&&a&&!Cn&&a(C)}if(st){var je=x?wt/x.duration()*(x._caScrollDist||0):wt;b(je+($._isFlipped?1:0)),st(je)}mt&&mt(-wt/x.duration()*(x._caScrollDist||0))}},C.enable=function(et,vt){C.enabled||(C.enabled=!0,un(D,"resize",Ml),I||un(D,"scroll",Ba),K&&un(r,"refreshInit",K),et!==!1&&(C.progress=dt=0,Ct=Ht=Y=Mt()),vt!==!1&&C.refresh())},C.getTween=function(et){return et&&ut?ut.tween:q},C.setPositions=function(et,vt,nt,wt){if(x){var te=x.scrollTrigger,Wt=x.duration(),Ce=te.end-te.start;et=te.start+Ce*et/Wt,vt=te.start+Ce*vt/Wt}C.refresh(!1,!1,{start:r0(et,nt&&!!C._startClamp),end:r0(vt,nt&&!!C._endClamp)},wt),C.update()},C.adjustPinSpacing=function(et){if(R&&et){var vt=R.indexOf(A.d)+1;R[vt]=parseFloat(R[vt])+et+sn,R[1]=parseFloat(R[1])+et+sn,Ga(R)}},C.disable=function(et,vt){if(et!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,vt||q&&q.pause(),j=0,At&&(At.uncache=1),K&&hn(r,"refreshInit",K),U&&(U.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var nt=$t.length;nt--;)if($t[nt].scroller===D&&$t[nt]!==C)return;hn(D,"resize",Ml),I||hn(D,"scroll",Ba)}},C.kill=function(et,vt){C.disable(et,vt),q&&!vt&&q.kill(),l&&delete pp[l];var nt=$t.indexOf(C);nt>=0&&$t.splice(nt,1),nt===Hn&&Eu>0&&Hn--,nt=0,$t.forEach(function(wt){return wt.scroller===C.scroller&&(nt=1)}),nt||Wn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),ce&&[ce,ae,$,jt].forEach(function(wt){return wt.parentNode&&wt.parentNode.removeChild(wt)}),Rl===C&&(Rl=0),u&&(At&&(At.uncache=1),nt=0,$t.forEach(function(wt){return wt.pin===u&&nt++}),nt||(At.spacer=0)),n.onKill&&n.onKill(C)},$t.push(C),C.enable(!1,!1),lt&&lt(C),i&&i.add&&!re){var rt=C.update;C.update=function(){C.update=rt,Jt.cache++,Nt||Ot||C.refresh()},Rt.delayedCall(.01,C.update),re=.01,Nt=Ot=0}else C.refresh();u&&N1()},r.register=function(n){return za||(Rt=n||b0(),M0()&&window.document&&r.enable(),za=vl),za},r.defaults=function(n){if(n)for(var i in n)vu[i]=n[i];return vu},r.disable=function(n,i){vl=0,$t.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(Qt,"wheel",Ba),hn(_e,"scroll",Ba),clearInterval(pu),hn(_e,"touchcancel",er),hn(me,"touchstart",er),_u(hn,_e,"pointerdown,touchstart,mousedown",s0),_u(hn,_e,"pointerup,touchend,mouseup",a0),Ru.kill(),gu(hn);for(var s=0;s<Jt.length;s+=3)xu(hn,Jt[s],Jt[s+1]),xu(hn,Jt[s],Jt[s+2])},r.enable=function(){if(Qt=window,_e=document,ui=_e.documentElement,me=_e.body,Rt){if(Pl=Rt.utils.toArray,bl=Rt.utils.clamp,fp=Rt.core.context||er,rp=Rt.core.suppressOverwrites||er,xp=Qt.history.scrollRestoration||"auto",mp=Qt.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),me){vl=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",D0(),A1(),Ve.register(Rt),r.isTouch=Ve.isTouch,as=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),up=Ve.isTouch===1,un(Qt,"wheel",Ba),_p=[Qt,_e,ui,me],Rt.matchMedia?(r.matchMedia=function(h){var d=Rt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Rt.addEventListener("matchMediaInit",function(){I0(),Tp()}),Rt.addEventListener("matchMediaRevert",function(){return P0()}),Rt.addEventListener("matchMedia",function(){Us(0,1),Vs("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return op(),op})):console.warn("Requires GSAP 3.11.0 or later"),op(),un(_e,"scroll",Ba);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,a=Rt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ar(me),Je.m=Math.round(o.top+Je.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),pu=setInterval(c0,250),Rt.delayedCall(.5,function(){return mu=0}),un(_e,"touchcancel",er),un(me,"touchstart",er),_u(un,_e,"pointerdown,touchstart,mousedown",s0),_u(un,_e,"pointerup,touchend,mouseup",a0),hp=Rt.utils.checkPrefix("transform"),Au.push(hp),za=Rn(),Ru=Rt.delayedCall(.2,Us).pause(),ka=[_e,"visibilitychange",function(){var h=Qt.innerWidth,d=Qt.innerHeight;_e.hidden?(e0=h,n0=d):(e0!==h||n0!==d)&&Ml()},_e,"DOMContentLoaded",Us,Qt,"load",Us,Qt,"resize",Ml],gu(un),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)xu(hn,Jt[l],Jt[l+1]),xu(hn,Jt[l],Jt[l+2])}else if(_e){var c=function h(){r.enable(),_e.removeEventListener("DOMContentLoaded",h)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(sp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pu)||(pu=i)&&setInterval(c0,i),"ignoreMobileResize"in n&&(up=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gu(hn)||gu(un,n.autoRefreshEvents||"none"),v0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),a=Jt.indexOf(s),o=zs(s);~a&&Jt.splice(a,o?6:2),i&&(o?Bi.unshift(Qt,i,me,i,ui,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?Vn(n):n).getBoundingClientRect(),o=a[s?Fs:Os]*i||0;return s?a.right-o>0&&a.left+o<Qt.innerWidth:a.bottom-o>0&&a.top+o<Qt.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?Fs:Os],l=i==null?o/2:i in Iu?Iu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Qt.innerWidth:(a.top+l)/Qt.innerHeight},r.killAll=function(n){if($t.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ks.killAll||[];ks={},i.forEach(function(s){return s()})}},r})();Yt.version="3.15.0";Yt.saveStyles=function(r){return r?Pl(r).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),fp())}}):ci};Yt.revert=function(r,t){return Tp(!r,t)};Yt.create=function(r,t){return new Yt(r,t)};Yt.refresh=function(r){return r?Ml(!0):(za||Yt.register())&&Us(!0)};Yt.update=function(r){return++Jt.cache&&Cr(r===!0?2:0)};Yt.clearScrollMemory=L0;Yt.maxScroll=function(r,t){return nr(r,t?An:Je)};Yt.getScrollFunc=function(r,t){return wr(Vn(r),t?An:Je)};Yt.getById=function(r){return pp[r]};Yt.getAll=function(){return $t.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Yt.isScrolling=function(){return!!Mi};Yt.snapDirectional=bp;Yt.addEventListener=function(r,t){var e=ks[r]||(ks[r]=[]);~e.indexOf(t)||e.push(t)};Yt.removeEventListener=function(r,t){var e=ks[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Yt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],f=[],u=Rt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&u.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Pn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Pn(s)&&(s=s(),un(Yt,"refresh",function(){return s=t.batchMax()})),Pl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Yt.create(c))}),e};m0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},cp=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===ui&&r(me,e)},bu={auto:1,scroll:1},z1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Rt.core.getCache(s),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bu[(l=Si(s)).overflowY]||bu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!zs(s)&&(bu[(l=Si(s)).overflowY]||bu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},U0=function(t,e,n,i){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&z1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(_e,Ve.eventTypes[0],_0,!1,!0)},onDisable:function(){return hn(_e,Ve.eventTypes[0],_0,!0)}})},k1=/(input|label|select|textarea)/i,_0=function(t){var e=k1.test(t.target.tagName);(e||g0)&&(t._gsapAllow=!0,g0=e)},V1=function(t){Ns(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Vn(t.target)||ui,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),f=as&&(t.content&&Vn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=wr(c,Je),m=wr(c,An),_=1,p=(Ve.isTouch&&Qt.visualViewport?Qt.visualViewport.scale*Qt.visualViewport.width:Qt.outerWidth)/Qt.innerWidth,g=0,v=Pn(i)?function(){return i(o)}:function(){return i||2.8},M,y,T=U0(c,t.type,!0,s),E=function(){return y=!1},x=er,S=er,P=function(){l=nr(c,Je),S=bl(as?1:0,l),n&&(x=bl(0,nr(c,An))),M=Bs},A=function(){f._gsap.y=yl(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},F=function(){if(y){requestAnimationFrame(E);var H=yl(o.deltaY/2),O=S(u.v-H);if(f&&O!==u.v+u.offset){u.offset=O-u.v;var C=yl((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",u.cacheID=Jt.cache,Cr()}return!0}u.offset&&A(),y=!0},D,V,I,L,B=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(N){return as&&N.type==="touchmove"&&F(N)||_>1.05&&N.type!=="touchstart"||o.isGesturing||N.touches&&N.touches.length>1},t.onPress=function(){y=!1;var N=_;_=yl((Qt.visualViewport&&Qt.visualViewport.scale||1)/p),D.pause(),N!==_&&cp(c,_>1.01?!0:n?!1:"x"),V=m(),I=u(),P(),M=Bs},t.onRelease=t.onGestureStart=function(N,H){if(u.offset&&A(),!H)L.restart(!0);else{Jt.cache++;var O=v(),C,K;n&&(C=m(),K=C+O*.05*-N.velocityX/.227,O*=m0(m,C,K,nr(c,An)),D.vars.scrollX=x(K)),C=u(),K=C+O*.05*-N.velocityY/.227,O*=m0(u,C,K,nr(c,Je)),D.vars.scrollY=S(K),D.invalidate().duration(O).play(.01),(as&&D.vars.scrollY>=l||C>=l-1)&&Rt.to({},{onUpdate:B,duration:O})}a&&a(N)},t.onWheel=function(){D._ts&&D.pause(),Rn()-g>1e3&&(M=0,g=Rn())},t.onChange=function(N,H,O,C,K){if(Bs!==M&&P(),H&&n&&m(x(C[2]===H?V+(N.startX-N.x):m()+H-C[1])),O){u.offset&&A();var ht=K[2]===O,Tt=ht?I+N.startY-N.y:u()+O-K[1],Y=S(Tt);ht&&Tt!==Y&&(I+=Y-Tt),u(Y)}(O||H)&&Cr()},t.onEnable=function(){cp(c,n?!1:"x"),Yt.addEventListener("refresh",B),un(Qt,"resize",B),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){cp(c,!0),hn(Qt,"resize",B),Yt.removeEventListener("refresh",B),T.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ve(t),o.iOS=as,as&&!u()&&u(1),as&&Rt.ticker.add(er),L=o._dc,D=Rt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:N0(u,u(),function(){return D.pause()})},onUpdate:Cr,onComplete:L.vars.onComplete}),o};Yt.sort=function(r){if(Pn(r))return $t.sort(r);var t=Qt.pageYOffset||0;return Yt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Qt.innerHeight}),$t.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Yt.observe=function(r){return new Ve(r)};Yt.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var t=r instanceof Ve?r:V1(r);return Gn&&Gn.target===t.target&&Gn.kill(),zs(t.target)&&(Gn=t),t};Yt.core={_getVelocityProp:du,_inputObserver:U0,_scrollers:Jt,_proxies:Bi,bridge:{ss:function(){Mi||Vs("scrollStart"),Mi=Rn()},ref:function(){return Cn}}};b0()&&Rt.registerPlugin(Yt)});function bi(r,t,e,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Ll.copy(t),Ll[n]=0,Ll.normalize();let c=.5*a/(a+o),h=1-Ll.angleTo(r)/l;return Math.sign(Ll[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ll,Du,O0=sr(()=>{Xh();Ll=new z;Du=class r extends Gr{constructor(t=1,e=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,h=new z(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=d.length/6,_=new z,p=.5/a;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*s,d[g+1]=h.y*Math.sign(l.y)+c.y*s,d[g+2]=h.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),u[v+0]=bi(_,c,"z","y",s,n),u[v+1]=1-bi(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),u[v+0]=1-bi(_,c,"z","y",s,n),u[v+1]=1-bi(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),u[v+0]=1-bi(_,c,"x","z",s,t),u[v+1]=bi(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),u[v+0]=1-bi(_,c,"x","z",s,t),u[v+1]=1-bi(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),u[v+0]=1-bi(_,c,"x","y",s,t),u[v+1]=1-bi(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),u[v+0]=bi(_,c,"x","y",s,t),u[v+1]=1-bi(_,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}}});function B0(){let r=new go;r.name="Systems exhibition",r.fog=new mo(2309559,.031);let t=new ma(15988479,2.5),e=new ma(Wa,1.7);r.add(t,e,new Bo(13227775,1584242,1.55));let n=new qi({color:Dl,roughness:.34,metalness:.04}),i=new qi({color:G1,roughness:.37,metalness:.26}),s=new qi({color:H1,roughness:.44,metalness:.52}),a=new qi({color:8692967,roughness:.28,metalness:.61}),o=new qi({color:8568557,roughness:.38,transparent:!0,opacity:.35,depthWrite:!1}),l=new gs({color:Wa,toneMapped:!1}),c=new gs({color:4678818,toneMapped:!1}),h=new pa({color:6653403,transparent:!0,opacity:.47}),d=new Do(.068,12,8);function f(L,B,N,H=[0,0,0],O=[0,0,0]){let C=new mi(B,N);return C.position.set(...H),C.rotation.set(...O),L.add(C),C}function u(L,B,N,H,O=.04){let[C,K,ht]=B,Tt=Math.min(O,C*.4,K*.4,ht*.4);return f(L,new Du(C,K,ht,1,Tt),N,H)}function m(L,B,N,H,O,C){return f(L,new Ao(B,B,N,32),H,O,C)}function _(L,B,N,H,O=!1){return f(L,new Uo(B,48,N,6,O),H)}function p(L,B,N,H,O,C,K=W1){return f(L,new No(B,N,8,48,K),H,O,C)}function g(L,B,N=h){let H=new pn().setFromPoints(B.map(O=>new z(...O)));L.add(new Mo(H,N))}function v(L,B,N,H=1.1){let O=document.createElement("canvas");O.width=320,O.height=76;let C=O.getContext("2d");if(!C)return;C.font="650 50px Arial, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillStyle="#eaf1ff",C.fillText(B,160,38,300);let K=new To(O);K.colorSpace=dn;let ht=new da({map:K,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1}),Tt=new yo(ht);Tt.position.set(...N),Tt.scale.set(H,H*O.height/O.width,1),L.add(Tt)}function M(L,B,N){u(L,[B,.24,N],s,[0,-1.31,0],.09),u(L,[B-.16,.06,N-.15],i,[0,-1.17,0],.027),u(L,[B-.48,.022,.025],l,[0,-1.28,N/2+.002]);for(let H of[-B/2+.25,B/2-.25])for(let O of[-N/2+.25,N/2-.25])m(L,.043,.03,a,[H,-1.13,O])}function y(L){m(L,1.65,.27,s,[0,-1.25,0]),m(L,1.53,.09,a,[0,-1.07,0]),m(L,.74,.17,i,[0,-.96,0]),p(L,1.42,.027,l,[0,-1.01,0],[Math.PI/2,0,0]);let B=new Xn;L.add(B);let N=f(B,new Io(.86,0),n,[0,.03,0],[.14,.26,-.18]),H=p(B,1.26,.07,a,[0,.03,0],[.17,-.32,.2]);p(B,1.4,.029,l,[0,.03,0],[.8,.35,-.53],4.78);for(let O of[-1.27,1.27])u(L,[.13,.7,.2],s,[O,-.55,-.15]),m(L,.105,.14,a,[O,-.16,-.15],[0,0,Math.PI/2]);return O=>{N.rotation.y=.26+O*.16,H.rotation.y=-.32+Math.sin(O*.48)*.24,B.position.y=Math.sin(O*.42)*.055}}function T(L,B,N,H=n){let O=new Xn;O.position.set(B,-.78,N),L.add(O),u(O,[.66,.042,.93],H,[0,0,0]),u(O,[.26,.013,.05],c,[-.11,.03,-.29]);for(let[C,K]of[.46,.37,.46,.29].entries())u(O,[K,.013,.024],c,[K/2-.24,.03,-.11+C*.125]);return O}function E(L){M(L,5.35,2.35),u(L,[4.83,.18,1.13],s,[0,-.99,0],.06);for(let O of[-.68,.68])u(L,[4.9,.14,.095],a,[0,-.89,O]),u(L,[4.65,.018,.045],i,[0,-.8,O]);let B=[-2.07,-1.27,-.47].map(O=>T(L,O,0));for(let O of[-.79,.79])u(L,[.46,1.25,.32],n,[0,-.48,O],.08);u(L,[.67,.29,1.99],n,[0,.19,0],.08),u(L,[.48,.045,1.35],l,[0,.027,0]);let N=u(L,[.057,.046,1.22],l,[0,-.715,0]),H=T(L,1.81,0,n);for(let O of[-.15,.06,.27])u(H,[.095,.016,.044],l,[.14,.035,O]);return v(L,"Document",[-1.88,-.48,1.14],1.32),v(L,"Extract",[0,.55,.35],1.04),v(L,"Validated KPIs",[1.77,-.48,1.14],1.51),O=>{let C=Fi.clamp(O/6,0,1);B.forEach((K,ht)=>{K.position.x=-2.07+ht*.8+C*.33}),N.position.x=-.2+.4*C,H.position.x=1.47+C*.48}}function x(L){let B=[Math.PI/2,0,0],N=new _s(0,0,1.95,1.15),H=new Wi(N.getSpacedPoints(48).slice(0,-1).map(Y=>new z(Y.x,-.35,Y.y)),!0);m(L,1.35,.23,s,[0,-1.25,0]),m(L,1.17,.06,i,[0,-1.11,0]),m(L,.31,.46,a,[0,-.85,0]),p(L,.67,.06,a,[0,-.55,0],B),_(L,H,.105,a,!0);let O=H.clone();O.points.forEach(Y=>{Y.y+=.102}),_(L,O,.022,l,!0);let C=["Generate","Evaluate","Improve","Plan"],K=C.map(()=>new qi({color:Dl,roughness:.36,emissive:Wa,emissiveIntensity:.07})),ht=C.map((Y,at)=>{let dt=H.getPointAt(.12+at*.25),Mt=m(L,.225,.31,K[at],[dt.x,-.19,dt.z]);return m(L,.098,.035,i,[dt.x,-.014,dt.z]),v(L,Y,[dt.x,at>1?.43:.21,dt.z+.07],1.15),Mt}),Tt=f(L,d,l);return Tt.scale.setScalar(1.38),Y=>{let dt=(.87+Fi.clamp(Y/6,0,1))%1;Tt.position.copy(H.getPointAt(dt)),Tt.position.y+=.11;let Mt=Math.floor((dt+.005)%1*4);ht.forEach((ut,At)=>{ut.material.emissiveIntensity=Mt===At?.55:.07})}}function S(L){M(L,4.5,2.66);let B=[-.87,-.33,.21,.75],N=[-1.51,1.51];for(let O of N)for(let C of[-.69,.69])m(L,.045,1.9,a,[O,-.18,C]),m(L,.095,.13,i,[O,.78,C]);B.forEach((O,C)=>{let K=u(L,[3.22,.085,1.55],C===0?i:o,[0,O,0]);K.renderOrder=C===0?0:C,u(L,[3.18,.07,.08],C===3?n:a,[0,O,.75]),u(L,[3.18,.04,.04],l,[0,O+.047,.72]);for(let ht=0;ht<5;ht++)for(let Tt=0;Tt<2;Tt++){let Y=.19+(ht+C*Tt)%3*.08;u(L,[Y,.035,.18],(ht+Tt+C)%4===0?l:n,[-1.09+ht*.49,O+.075,-.27+Tt*.54])}}),v(L,"Tokens",[1.8,-.86,.85],.96),v(L,"Attention",[1.8,-.3,.85],1.13),v(L,"Decoder",[1.8,.25,.85],1.08),v(L,"Evaluate",[1.8,.83,.85],1.1);let H=f(L,d,l,[-.36,-.85,.77]);return H.scale.setScalar(1.55),O=>{H.position.y=-.87+Fi.clamp(O/6,0,1)*1.62}}function P(L){M(L,5.5,2.35);for(let H of[-1.84,1.84]){u(L,[.85,.12,.62],a,[H,-1.02,.32]),u(L,[.17,.46,.16],s,[H,-.76,.08]),u(L,[1.32,.92,.17],n,[H,-.27,.05],.065),u(L,[1.12,.71,.025],i,[H,-.26,.151],.04);for(let[O,C]of[.49,.34,.55].entries())u(L,[C,.078,.025],O===0?l:a,[H+(O%2?.15:-.12),-.07-O*.2,.172])}m(L,.52,.09,a,[0,-1.02,.34]);for(let H of[-.86,-.67,-.48])m(L,.47,.13,n,[0,H,.34]);let B=new Wi([new z(-1.25,.02,-.1),new z(-.8,.46,-.4),new z(0,.67,-.52),new z(.8,.46,-.4),new z(1.25,.02,-.1)]);_(L,B,.037,l);let N=f(L,d,l);return N.scale.setScalar(1.58),v(L,"Client",[-1.83,.44,.15],1),v(L,"WebSocket",[0,.92,-.42],1.32),v(L,"SQLite",[0,-.85,1.15],.98),H=>{N.position.copy(B.getPoint(Fi.clamp(H/6,0,1)))}}function A(L){M(L,5.12,2.45);let B=[-1.68,-.55,.55,1.68].map(N=>{let H=new Xn;return H.position.set(N,-.63,-.12),L.add(H),u(L,[.92,.08,.98],s,[N,-1.08,-.12]),H});f(B[0],new Ro(.44),n,[0,0,0],[.3,.25,.15]),p(B[0],.53,.025,l,[0,0,0],[.34,.4,.25],5.3);for(let N of[-.25,-.035,.18])m(B[1],.37,.155,n,[0,N,0]);u(B[2],[.79,.68,.09],n,[0,.04,0],.065),u(B[2],[.64,.5,.036],i,[0,.02,.065]);for(let N of[.13,-.01,-.15])u(B[2],[.39,.034,.025],l,[0,N,.092]);return u(B[3],[.69,.58,.61],n,[0,-.02,0],.08),u(B[3],[.52,.06,.48],i,[0,.23,0],.02),u(B[3],[.29,.12,.035],i,[0,-.015,.314]),["AI","Data","Web","Delivery"].forEach((N,H)=>v(L,N,[B[H].position.x,-.9,.98],.85)),N=>{let H=Fi.clamp(N/6,0,1);B.forEach((O,C)=>{O.position.y=-.65+Math.sin(Math.PI*Fi.clamp(H*4-C,0,1))*.24})}}let F=[y,E,x,S,P,A],D=new Xn;D.name="Six systems",r.add(D);let V=Rr.map((L,B)=>{let N=new Xn;N.name=L.name,N.position.set(...L.anchor);let H=F[B](N);return D.add(N),{group:N,animate:H}}),I=new Xn;I.name="Shared floor",r.add(I);for(let L of[-1.77,1.76])g(I,[[-5,-1.46,L],[53,-1.46,L]]);for(let{anchor:[L]}of Rr)for(let B of[-1.77,1.76])g(I,[[L-2.7,-1.46,B],[L-2.7,-1.46,B+.23]]),g(I,[[L+2.7,-1.46,B],[L+2.7,-1.46,B+.23]]);return{scene:r,landmarks:V,key:t,rim:e}}var Dl,Wa,G1,H1,W1,Rr,z0=sr(()=>{Xh();O0();Dl=15397375,Wa=9167615,G1=3428277,H1=1320033,W1=Math.PI*2,Rr=[{name:"top",anchor:[0,0,0],view:[3.8,2.8,8.3],lens:35,color:Dl},{name:"production",anchor:[9.5,0,-.6],view:[.9,2.35,8.7],lens:35,color:Wa},{name:"agentic",anchor:[19,0,.3],view:[.45,2.15,8.65],lens:36,color:Dl},{name:"generative",anchor:[28.5,0,-.55],view:[-2.5,2.7,8.2],lens:36,color:Wa},{name:"backend",anchor:[38,0,.35],view:[1.15,2.15,8.7],lens:35,color:Dl},{name:"toolkit",anchor:[47.5,0,-.2],view:[-2.6,2.8,8.1],lens:35,color:Wa}]});var $1=J0(()=>{Xh();W_();F0();z0();ep.registerPlugin(Yt);var Ti=document.querySelector("#world"),ir=document.querySelector(".right-pane"),X1=Ti?.closest(".stage"),qa=Array.from(document.querySelectorAll("[data-chapter]")),Lr=document.documentElement,q1=Array.from(document.querySelectorAll("[data-nav]")),Xa=document.querySelector("#scroll-progress"),Nl=document.querySelector("#motion-toggle"),Ul=window.matchMedia("(prefers-reduced-motion: reduce)"),V0=window.matchMedia("(min-width: 900px) and (min-height: 620px)"),{clamp:os,damp:Y1,lerp:Nu}=Fi,Ip=()=>Ul.matches||Rp,Lp=()=>V0.matches&&ir?ir:window,Ke=Lp(),Rp=!1,Pr=0,Dp=0,wp=-1,Ir=[],ls=1,Pp,Uu=0,Ep=!1,Np=0,Up=()=>{},G0=new AbortController,wi=(r,t,e,n={})=>r?.addEventListener(t,e,{...n,signal:G0.signal});function H0(){return Ke===window?window.scrollY:Ke.scrollTop}function Fp(r){if(r===ir)return 0;let e=parseFloat(getComputedStyle(Ke===window?Lr:Ke).scrollPaddingTop),n=Number.isFinite(e)?e:Ke===ir&&X1?.clientHeight||0,i=parseFloat(getComputedStyle(r).scrollMarginTop)||0,s=Ke===window?0:Ke.getBoundingClientRect().top+Ke.clientTop,a=H0()+r.getBoundingClientRect().top-s;return os(a-n-i,0,ls)}function W0(){let r=Ke===window?window.innerHeight:Ke.clientHeight,t=Ke===window?Lr.scrollHeight:Ke.scrollHeight;ls=Math.max(0,t-r),Ir=qa.map((e,n)=>n===0?0:Fp(e))}function Op(r){let t=0;for(;t<Ir.length-1&&r>=Ir[t+1];)t++;let e=Ir[t+1],n=(e??ls)-Ir[t],i=n>0?os((r-Ir[t])/n,0,1):0;return{index:t,local:i,nextAnchor:e}}function X0(r){let t=Math.min(Math.floor(r),Ir.length-1);return Nu(Ir[t],Ir[t+1]??ls,r-t)}function Bp(){if(Ke!==Lp())return;let r=os(H0(),0,ls),{index:t,local:e,nextAnchor:n}=Op(r);Dp=t+e,Pr=t+(n===void 0?0:Fi.smoothstep(e,.43,1));let i=Math.min(Math.round(Pr),qa.length-1),s=ls>0?r/ls:0;if(Xa?.style.setProperty("--progress",String(s)),Xa instanceof HTMLProgressElement?(Xa.max=1,Xa.value=s):Xa?.getAttribute("role")==="progressbar"&&Xa.setAttribute("aria-valuenow",String(Math.round(s*100))),i!==wp){wp=i;let a=qa[wp],o=a.dataset.chapter||a.id;Lr.dataset.activeChapter=o;for(let l of q1)l.dataset.nav===o||l.getAttribute("href")===`#${a.id}`?l.setAttribute("aria-current","location"):l.removeAttribute("aria-current")}Up()}function Fu(){W0(),Bp()}function k0(){Pp?.kill(),Pp=Yt.create({id:"portfolio-world",scroller:Ke,start:0,end:"max",onUpdate:Bp,onRefresh:Fu})}function Fl(r,t=!1){Np=performance.now()+1e3;let e=t&&!Ip()?"smooth":"instant";Ke.scrollTo({top:r,behavior:e}),e==="instant"&&Bp()}function q0(r){if(!r||r==="#")return null;try{return document.getElementById(decodeURIComponent(r.slice(1)))}catch{return null}}function Y0(){if(Ke!==ir)return;let{index:r,local:t}=Op(os(ir.scrollTop,0,ls));history.replaceState({...history.state,portfolioPanelProgress:r+t},"")}function Z0(r){if(Ke!==ir)return;let t=history.state?.portfolioPanelProgress;if(r&&Number.isFinite(t)){Fl(X0(os(t,0,qa.length)));return}let e=q0(location.hash);e&&ir.contains(e)?Fl(Fp(e)):location.hash||Fl(0)}function Ap(r=!1){Np=performance.now()+1e3,Ep||=r,!Uu&&(Uu=requestAnimationFrame(()=>{Uu=0,Fu(),Z0(Ep),Ep=!1}))}function Z1(r){if(Ke!==ir||r.defaultPrevented||r.button!==0||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey)return;let t=r.target.closest('a[href^="#"]:not([target]):not([download])'),e=t?.getAttribute("href"),n=q0(e);if(!n||!ir.contains(n))return;r.preventDefault(),W0();let i=Fp(n);if(location.hash!==e){Y0();let{index:s,local:a}=Op(i);history.pushState({portfolioPanelProgress:s+a},"",e)}if(t.classList.contains("skip-link")||r.detail===0){let s=n.closest(".chapter")||n;s.hasAttribute("tabindex")||(s.tabIndex=-1),s.focus({preventScroll:!0})}Fl(i,!t.classList.contains("skip-link"))}function Cp(){let r=Ip(),t=Ul.matches?"Motion disabled":r?"Resume motion":"Pause motion";Lr.classList.toggle("motion-paused",r),document.body.classList.toggle("motion-paused",r),Nl?.setAttribute("aria-label",Ul.matches?"Motion disabled by system settings":t),Nl&&(Nl.disabled=Ul.matches);let e=Nl?.querySelector("[data-motion-label]");e&&(e.textContent=t),Up()}function J1(){if(!Ti||qa.length!==Rr.length)return()=>{};let r=Ti.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!r)return()=>{};let t;try{t=new Gh({canvas:Ti,context:r,alpha:!0})}catch{return Lr.dataset.worldState="fallback",()=>{}}t.outputColorSpace=dn,t.toneMapping=Go,t.toneMappingExposure=1.15,t.setClearColor(0,0);let{scene:e,landmarks:n,key:i,rim:s}=B0(),a=new Dn(38,1,.1,85),o=Rr.map(V=>new z(...V.anchor)),l=Rr.map((V,I)=>o[I].clone().add(new z(...V.view))),c=new Wi(l,!1,"catmullrom",.43),h=new Wi(o,!1,"catmullrom",.38),d=new z,f=new qt,u=new qt,m=Rr.map(V=>new qt(V.color)),_=Pr,p=0,g=0,v=!1,M=!1,y=!0,T=1.6,E=0,x=1.6;function S(){let V=Ti.clientWidth||Ti.parentElement.clientWidth||innerWidth,I=Ti.clientHeight||Ti.parentElement.clientHeight||innerHeight;M=innerWidth<780;let L=Math.min(window.devicePixelRatio||1,M?1.25:1.6,x);T=L,t.setPixelRatio(L),t.setSize(V,I,!1),a.aspect=V/Math.max(I,1),a.updateProjectionMatrix(),A()}function P(V){if(g=0,v||document.hidden||!y)return;let I=p?V-p:16.67,L=Math.min(I/1e3,1/30);p=V;let B=Ip(),N=V<Np?16:7.2;_=B?Math.round(Pr):Y1(_,Pr,N,L),!B&&Math.abs(_-Pr)<=.001&&(_=Pr);let H=n.length-1,O=Math.min(Math.floor(_),H),C=Math.min(O+1,H),K=_-O,ht=os(_/H,0,1);h.getPoint(ht,d),c.getPoint(ht,a.position),M&&(a.position.x=Nu(a.position.x,d.x,.3),a.position.y+=.35),a.fov=Nu(Rr[O].lens,Rr[C].lens,K)+(M?2:0);let Tt=Math.tan(a.fov*Math.PI/360),Y=a.position.distanceTo(d),at=M&&a.aspect>1.35,dt=at?Nu(.84,.72,os(_,0,1)):1,Mt=Math.max(6.2/(2*Tt*a.aspect),Y*dt);a.position.sub(d).multiplyScalar(Mt/Y).add(d),d.y+=at?-.24:.16,a.lookAt(d),a.updateProjectionMatrix(),f.copy(m[O]).lerp(u.copy(m[C]),K),s.color.copy(f),s.position.set(d.x-6,4,-5),i.position.set(d.x+1,8,9),i.target.position.copy(d),s.target.position.copy(d),i.target.updateMatrixWorld(),s.target.updateMatrixWorld();for(let[ut,At]of n.entries())At.group.visible=Math.abs(ut-_)<.85,At.group.visible&&At.animate(B?0:os(Dp-ut,0,1)*6);t.render(e,a),Lr.dataset.worldState!=="ready"&&(Lr.dataset.worldState="ready"),!B&&T>1&&I>25?E++:E=Math.max(0,E-2),E>75&&x>1&&(x=1,E=0,S()),!B&&Math.abs(_-Pr)>.001?A():p=0}function A(){!g&&!v&&!document.hidden&&y&&(g=requestAnimationFrame(P))}wi(document,"visibilitychange",()=>{p=0,A()}),wi(Ti,"webglcontextlost",V=>{V.preventDefault(),v=!0,Lr.dataset.worldState="lost",cancelAnimationFrame(g),g=0}),wi(Ti,"webglcontextrestored",()=>{v=!1,_=Pr,p=0,S()});let F=new ResizeObserver(S);F.observe(Ti);let D=new IntersectionObserver(([V])=>{y=V.isIntersecting,p=0,A()});return D.observe(Ti),Up=A,S(),()=>{cancelAnimationFrame(g),F.disconnect(),D.disconnect();let V=new Set;e.traverse(I=>{I.geometry&&V.add(I.geometry),I.material&&V.add(I.material),I.material?.map&&V.add(I.material.map),I.isInstancedMesh&&V.add(I)});for(let I of V)I.dispose();t.dispose()}}if(qa.length){Lr.dataset.worldState="fallback",Fu(),Z0(!0),Cp(),k0();let r=J1();wi(Nl,"click",()=>{Rp=!Rp,Cp()}),wi(Ul,"change",Cp),wi(document,"click",Z1),wi(window,"hashchange",()=>Ap()),wi(window,"popstate",()=>Ap(!0)),wi(V0,"change",()=>{let t=Lp();if(t===Ke)return;let e=Dp;Ke=t,Fu(),Fl(X0(e)),k0(),Yt.refresh()}),wi(window,"pageshow",t=>{Yt.refresh(),t.persisted&&Ap(!0)}),wi(document,"toggle",t=>{t.target instanceof HTMLDetailsElement&&Yt.refresh()},{capture:!0}),wi(window,"pagehide",t=>{Y0(),!t.persisted&&(G0.abort(),cancelAnimationFrame(Uu),Pp.kill(),r())}),document.fonts?.ready.then(()=>Yt.refresh())}});$1();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
