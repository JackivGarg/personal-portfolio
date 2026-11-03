(()=>{var Rr=(r,e)=>()=>(r&&(e=r(r=0)),e);var _0=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);function x0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function v0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function no(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tm(){let r=no("canvas");return r.style.display="block",r}function xf(...r){let e="THREE."+r.shift();Qs?Qs("log",e,...r):console.log(e,...r)}function wm(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=wm(r);let e="THREE."+r.shift();if(Qs)Qs("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ze(...r){r=wm(r);let e="THREE."+r.shift();if(Qs)Qs("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ka(...r){let e=r.join(" ");e in hp||(hp[e]=!0,Fe(...r))}function Em(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ga(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function vf(r,e){return(r%e+e)%e}function y0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function S0(r,e,t){return r!==e?(t-r)/(e-r):0}function Qa(r,e,t){return(1-t)*r+t*e}function M0(r,e,t,n){return Qa(r,e,1-Math.exp(-t*n))}function b0(r,e=1){return e-Math.abs(vf(r,e*2)-e)}function T0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function w0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function E0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function A0(r,e){return r+Math.random()*(e-r)}function C0(r){return r*(.5-Math.random())}function R0(r){r!==void 0&&(up=r);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(r){return r*Zs}function I0(r){return r*js}function L0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function D0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function N0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),u=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*u,o*c);break;case"YXY":r.set(l*u,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*u,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cm(r,e){if(e.constructor===Float32Array)return r;let t=Sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Rm(r,e){if(e.constructor===Float32Array)return r;let t=Sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}function U0(){let r={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?to:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[eo]:{primaries:e,whitePoint:n,transfer:to,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),r}function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function gu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function vu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Au(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rs.fromArray(r,s);let o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function K0(r,e,t,n,i,s,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Gr,o),l===null)return null;Bl.copy(o),Bl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Bl);return c<t.near||c>t.far?null:{distance:c,point:Bl.clone(),object:r}}function zl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Nl),r.getVertexPosition(l,Ul),r.getVertexPosition(c,Ol);let h=K0(r,e,t,n,Nl,Ul,Ol,wp);if(h){let d=new G;lr.getBarycoord(wp,Nl,Ul,Ol,d),i&&(h.uv=lr.getInterpolatedAttribute(i,o,l,c,d,new qe)),s&&(h.uv1=lr.getInterpolatedAttribute(s,o,l,c,d,new qe)),a&&(h.normal=lr.getInterpolatedAttribute(a,o,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new G,materialIndex:0};lr.getNormal(Nl,Ul,Ol,f.normal),h.face=f,h.barycoord=d}return h}function Hl(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(pc.fromBufferAttribute(o,i),mc.fromBufferAttribute(o,s),t.distanceSqToSegment(pc,mc,Du,Pp)>n)return;Du.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Du);if(!(c<e.near||c>e.far))return{distance:c,point:Pp.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}function Np(r,e,t,n,i,s,a){let o=Hu.distanceSqToPoint(r);if(o<t){let l=new G;Hu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Mf(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}function Fp(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}function us(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Bp(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Bp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Tn(r){let e={};for(let t=0;t<r.length;t++){let n=us(r[t]);for(let i in n)e[i]=n[i]}return e}function Bp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ex(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}function Xs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Lm(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function ix(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function rx(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Lm(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=ix(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function zp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function kp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}function Ef(r,e,t,n){let i=dx(n);switch(t){case ff:return r*e;case Bc:return r*e/i.components*i.byteLength;case zc:return r*e/i.components*i.byteLength;case Vr:return r*e*2/i.components*i.byteLength;case kc:return r*e*2/i.components*i.byteLength;case df:return r*e*3/i.components*i.byteLength;case Ii:return r*e*4/i.components*i.byteLength;case Gc:return r*e*4/i.components*i.byteLength;case Io:case Lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Do:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Xc:return Math.max(r,16)*Math.max(e,8)/4;case Vc:case Wc:return Math.max(r,8)*Math.max(e,8)/2;case qc:case Yc:case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Uo:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fh:case dh:case ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Oo:case _h:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dx(r){switch(r){case Yn:case lf:return{byteLength:1,components:1};case ma:case cf:case Pi:return{byteLength:2,components:1};case Oc:case Fc:return{byteLength:2,components:4};case Ri:case Uc:case _i:return{byteLength:4,components:1};case hf:case uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var Xp,Yu,qp,Co,Yp,fa,Gr,On,Wi,os,da,Zu,Ju,$u,Zp,ls,Jp,$p,Kp,Qp,jp,em,tm,nm,Ku,Qu,im,rm,sm,am,om,lm,cm,hm,um,ec,tc,nc,$s,ic,rc,sc,ac,ju,fm,dm,Xi,ef,tf,nf,Ro,rf,sf,af,of,cs,pa,Lc,Dc,oc,Oi,lc,ln,pm,Po,Un,Nc,pr,Yn,lf,cf,ma,Uc,Ri,_i,Pi,Oc,Fc,hs,hf,uf,ff,df,Ii,hr,mr,Bc,zc,Vr,kc,Gc,Io,Lo,Do,No,Vc,Hc,Wc,Xc,qc,Yc,Zc,Jc,$c,Uo,Kc,Qc,jc,eh,th,nh,ih,rh,sh,ah,oh,lh,ch,hh,uh,fh,dh,ph,mh,gh,Oo,_h,ja,cc,Ql,zu,ku,Gu,Vu,mm,xh,gm,gr,Dn,eo,to,pt,jl,_m,xm,vm,ym,pf,Sm,Mm,mf,gf,bm,_f,gi,Ks,hp,Qs,Am,Fi,Mn,up,Zs,js,vh,qe,Bi,G,pu,fp,Ge,mu,dp,pp,it,Ns,hc,O0,ea,F0,_u,qn,Pt,uc,ri,io,fc,mt,Us,wi,B0,z0,Pr,Tl,ti,mp,gp,ur,ro,k0,_p,Os,ir,wl,Wa,G0,V0,xp,vp,yp,Sp,H0,Fs,xu,Jt,Xn,W0,ta,Pm,Ir,El,Ve,bn,so,ao,Ei,rr,yu,sr,Bs,zs,Mp,Su,Mu,bu,Tu,wu,Eu,lr,zi,ar,Ai,Al,ks,Gs,Vs,Lr,Dr,is,Xa,Cl,Rl,rs,Zt,Pl,X0,ii,oo,lo,Rt,q0,qa,Cu,ki,Y0,mi,Ru,Hs,ni,Ya,on,cn,Pu,Z0,J0,Ci,$0,Gi,or,Iu,Il,Ll,na,ia,bp,ss,Dl,Tp,Nl,Ul,Ol,Lu,Fl,wp,Bl,hn,co,ho,Ws,Ep,kl,Ap,Q0,Za,Ja,uo,as,j0,Gl,Ur,Cp,dc,Or,pc,mc,Rp,$a,Vl,Du,Pp,ra,Ip,Lp,Vi,sa,Dp,Hu,Wl,Xl,fo,po,fr,mo,go,dr,aa,_o,ql,Yl,Nu,Zl,Fr,gc,Up,Op,Uu,Ou,Fu,oa,la,xo,vo,yo,So,Im,tx,nx,Hi,_c,ca,xc,vc,Br,yc,Sc,Mc,bc,si,zr,Tc,wc,Ec,Mo,kr,Ac,Cc,Dm,Rc,bo,To,Bu,Gp,Vp,Pc,$l,Kl,Ui,wo,Nr,Hp,Wp,Nn,Eo,Wu,ha,qs,Ys,ua,Ic,Tf,sx,wf,ax,ox,lx,cx,hx,ux,fx,Xu,Et,f1,qu,Ao,Af=Rr(()=>{Xp=0,Yu=1,qp=2,Co=1,Yp=2,fa=3,Gr=0,On=1,Wi=2,os=0,da=1,Zu=2,Ju=3,$u=4,Zp=5,ls=100,Jp=101,$p=102,Kp=103,Qp=104,jp=200,em=201,tm=202,nm=203,Ku=204,Qu=205,im=206,rm=207,sm=208,am=209,om=210,lm=211,cm=212,hm=213,um=214,ec=0,tc=1,nc=2,$s=3,ic=4,rc=5,sc=6,ac=7,ju=0,fm=1,dm=2,Xi=0,ef=1,tf=2,nf=3,Ro=4,rf=5,sf=6,af=7,of=300,cs=301,pa=302,Lc=303,Dc=304,oc=1e3,Oi=1001,lc=1002,ln=1003,pm=1004,Po=1005,Un=1006,Nc=1007,pr=1008,Yn=1009,lf=1010,cf=1011,ma=1012,Uc=1013,Ri=1014,_i=1015,Pi=1016,Oc=1017,Fc=1018,hs=1020,hf=35902,uf=35899,ff=1021,df=1022,Ii=1023,hr=1026,mr=1027,Bc=1028,zc=1029,Vr=1030,kc=1031,Gc=1033,Io=33776,Lo=33777,Do=33778,No=33779,Vc=35840,Hc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,Zc=37496,Jc=37488,$c=37489,Uo=37490,Kc=37491,Qc=37808,jc=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,fh=36492,dh=36494,ph=36495,mh=36283,gh=36284,Oo=36285,_h=36286,ja=2300,cc=2301,Ql=2302,zu=2303,ku=2400,Gu=2401,Vu=2402,mm=3200,xh=0,gm=1,gr="",Dn="srgb",eo="srgb-linear",to="linear",pt="srgb",jl=7680,_m=519,xm=512,vm=513,ym=514,pf=515,Sm=516,Mm=517,mf=518,gf=519,bm=35044,_f="300 es",gi=2e3,Ks=2001;hp={},Qs=null;Am={[ec]:ec,[nc]:sc,[ic]:ic,[$s]:rc,[tc]:tc,[sc]:nc,[ac]:ac,[rc]:$s},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=1234567,Zs=Math.PI/180,js=180/Math.PI;vh={DEG2RAD:Zs,RAD2DEG:js,generateUUID:ga,clamp:Ke,euclideanModulo:vf,mapLinear:y0,inverseLerp:S0,lerp:Qa,damp:M0,pingpong:b0,smoothstep:T0,smootherstep:w0,randInt:E0,randFloat:A0,randFloatSpread:C0,seededRandom:R0,degToRad:P0,radToDeg:I0,isPowerOfTwo:L0,ceilPowerOfTwo:D0,floorPowerOfTwo:yf,setQuaternionFromProperEuler:N0,normalize:Rm,denormalize:Cm},qe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],m=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);g=Math.sin(g*v)/T,o=Math.sin(o*v)/T,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-o*u,e[t+2]=c*m+h*u+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pu=new G,fp=new Bi,Ge=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],T=i[4],y=i[7],E=i[2],A=i[5],x=i[8];return s[0]=a*_+o*v+l*E,s[3]=a*p+o*T+l*A,s[6]=a*g+o*y+l*x,s[1]=c*_+h*v+d*E,s[4]=c*p+h*T+d*A,s[7]=c*g+h*y+d*x,s[2]=f*_+u*v+m*E,s[5]=f*p+u*T+m*A,s[8]=f*g+u*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(e,t)),this}rotate(e){return Ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return Ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mu=new Ge,dp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it=U0();hc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=no("canvas")),Ns.width=e.width,Ns.height=e.height;let i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,ea=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(gu(i[a].image)):s.push(gu(i[a]))}else s=gu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};F0=0,_u=new G,qn=class r extends Fi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Oi,i=Oi,s=Un,a=pr,o=Ii,l=Yn,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ga(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=of;qn.DEFAULT_ANISOTROPY=1;Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(u+1)/2,E=(g+1)/2,A=(h+f)/4,x=(d+_)/4,S=(m+p)/4;return T>y&&T>E?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=A/n,s=x/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=S/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new qn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ea(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends uc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},io=class extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},fc=class extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},mt=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p)}set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,u=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f+_*o,t[4]=m*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,u=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,z0)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pr.crossVectors(n,ti),Pr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pr.crossVectors(n,ti)),Pr.normalize(),Tl.crossVectors(ti,Pr),i[0]=Pr.x,i[4]=Tl.x,i[8]=ti.x,i[1]=Pr.y,i[5]=Tl.y,i[9]=ti.y,i[2]=Pr.z,i[6]=Tl.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],T=n[7],y=n[11],E=n[15],A=i[0],x=i[4],S=i[8],I=i[12],M=i[1],L=i[5],D=i[9],U=i[13],C=i[2],O=i[6],z=i[10],F=i[14],$=i[3],V=i[7],P=i[11],j=i[15];return s[0]=a*A+o*M+l*C+c*$,s[4]=a*x+o*L+l*O+c*V,s[8]=a*S+o*D+l*z+c*P,s[12]=a*I+o*U+l*F+c*j,s[1]=h*A+d*M+f*C+u*$,s[5]=h*x+d*L+f*O+u*V,s[9]=h*S+d*D+f*z+u*P,s[13]=h*I+d*U+f*F+u*j,s[2]=m*A+_*M+p*C+g*$,s[6]=m*x+_*L+p*O+g*V,s[10]=m*S+_*D+p*z+g*P,s[14]=m*I+_*U+p*F+g*j,s[3]=v*A+T*M+y*C+E*$,s[7]=v*x+T*L+y*O+E*V,s[11]=v*S+T*D+y*z+E*P,s[15]=v*I+T*U+y*F+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*u-c*f,T=o*u-c*d,y=o*f-l*d,E=a*u-c*h,A=a*f-l*h,x=a*d-o*h;return t*(_*v-p*T+g*y)-n*(m*v-p*E+g*A)+i*(m*T-_*E+g*x)-s*(m*y-_*A+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*o-n*a,T=t*l-i*a,y=t*c-s*a,E=n*l-i*o,A=n*c-s*o,x=i*c-s*l,S=h*_-d*m,I=h*p-f*m,M=h*g-u*m,L=d*p-f*_,D=d*g-u*_,U=f*g-u*p,C=v*U-T*D+y*L+E*M-A*I+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=(o*U-l*D+c*L)*O,e[1]=(i*D-n*U-s*L)*O,e[2]=(_*x-p*A+g*E)*O,e[3]=(f*A-d*x-u*E)*O,e[4]=(l*M-a*U-c*I)*O,e[5]=(t*U-i*M+s*I)*O,e[6]=(p*y-m*x-g*T)*O,e[7]=(h*x-f*y+u*T)*O,e[8]=(a*D-o*M+c*S)*O,e[9]=(n*M-t*D-s*S)*O,e[10]=(m*A-_*y+g*v)*O,e[11]=(d*y-h*A-u*v)*O,e[12]=(o*I-a*L-l*S)*O,e[13]=(t*L-n*I+i*S)*O,e[14]=(_*T-m*E-p*v)*O,e[15]=(h*E-d*T+f*v)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,m=s*d,_=a*h,p=a*d,g=o*d,v=l*c,T=l*h,y=l*d,E=n.x,A=n.y,x=n.z;return i[0]=(1-(_+g))*E,i[1]=(u+y)*E,i[2]=(m-T)*E,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(f+g))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(m+T)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Us.set(i[0],i[1],i[2]).length(),o=Us.set(i[4],i[5],i[6]).length(),l=Us.set(i[8],i[9],i[10]).length();s<0&&(a=-a),wi.copy(this);let c=1/a,h=1/o,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=gi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===gi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ks)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=gi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===gi)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ks)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new G,wi=new mt,B0=new G(0,0,0),z0=new G(1,1,1),Pr=new G,Tl=new G,ti=new G,mp=new mt,gp=new Bi,ur=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ur.DEFAULT_ORDER="XYZ";ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k0=0,_p=new G,Os=new Bi,ir=new mt,wl=new G,Wa=new G,G0=new G,V0=new Bi,xp=new G(1,0,0),vp=new G(0,1,0),yp=new G(0,0,1),Sp={type:"added"},H0={type:"removed"},Fs={type:"childadded",child:null},xu={type:"childremoved",child:null},Jt=class r extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new G,t=new ur,n=new Bi,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wl.copy(e):wl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Wa,wl,this.up):ir.lookAt(wl,Wa,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(ir),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new G(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xn=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},El={h:0,s:0,l:0};Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=vf(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vu(a,s,e+1/3),this.g=vu(a,s,e),this.b=vu(a,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){let n=Pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return it.workingToColorSpace(bn.copy(this),e),Math.round(Ke(bn.r*255,0,255))*65536+Math.round(Ke(bn.g*255,0,255))*256+Math.round(Ke(bn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(bn.copy(this),t);let n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Dn){it.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,i=bn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(El);let n=Qa(Ir.h,El.h,t),i=Qa(Ir.s,El.s,t),s=Qa(Ir.l,El.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ve;Ve.NAMES=Pm;so=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ao=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new G,rr=new G,yu=new G,sr=new G,Bs=new G,zs=new G,Mp=new G,Su=new G,Mu=new G,bu=new G,Tu=new Pt,wu=new Pt,Eu=new Pt,lr=class r{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),rr.subVectors(n,t),yu.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(rr),l=Ei.dot(yu),c=rr.dot(rr),h=rr.dot(yu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(a,sr.y),l.addScaledVector(o,sr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Tu.setScalar(0),wu.setScalar(0),Eu.setScalar(0),Tu.fromBufferAttribute(e,t),wu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Tu,s.x),a.addScaledVector(wu,s.y),a.addScaledVector(Eu,s.z),a}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),rr.subVectors(e,t),Ei.cross(rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ei.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Bs.subVectors(i,n),zs.subVectors(s,n),Su.subVectors(e,n);let l=Bs.dot(Su),c=zs.dot(Su);if(l<=0&&c<=0)return t.copy(n);Mu.subVectors(e,i);let h=Bs.dot(Mu),d=zs.dot(Mu);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Bs,a);bu.subVectors(e,s);let u=Bs.dot(bu),m=zs.dot(bu);if(m>=0&&u<=m)return t.copy(s);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(zs,o);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Mp.subVectors(s,i),o=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(Mp,o);let g=1/(p+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(Bs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zi=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Cl.subVectors(this.max,Xa),ks.subVectors(e.a,Xa),Gs.subVectors(e.b,Xa),Vs.subVectors(e.c,Xa),Lr.subVectors(Gs,ks),Dr.subVectors(Vs,Gs),is.subVectors(ks,Vs);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-is.z,is.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,is.z,0,-is.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-is.y,is.x,0];return!Au(t,ks,Gs,Vs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,ks,Gs,Vs,Cl))?!1:(Rl.crossVectors(Lr,Dr),t=[Rl.x,Rl.y,Rl.z],Au(t,ks,Gs,Vs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new G,new G,new G,new G,new G,new G,new G,new G],Ai=new G,Al=new zi,ks=new G,Gs=new G,Vs=new G,Lr=new G,Dr=new G,is=new G,Xa=new G,Cl=new G,Rl=new G,rs=new G;Zt=new G,Pl=new qe,X0=0,ii=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bm,this.updateRanges=[],this.gpuType=_i,this.version=0,this._normalizationScale=e!==void 0?Sf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rm(e,this.array)}},oo=class extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}},lo=class extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Rt=class extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}},q0=new zi,qa=new G,Cu=new G,ki=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);let t=qa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(Cu)),this.expandByPoint(qa.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Y0=0,mi=new mt,Ru=new Jt,Hs=new G,ni=new zi,Ya=new zi,on=new G,cn=class r extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?lo:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ya.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ni.min,Ya.min),ni.expandByPoint(on),on.addVectors(ni.max,Ya.max),ni.expandByPoint(on)):(ni.expandByPoint(Ya.min),ni.expandByPoint(Ya.max))}ni.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),on.add(Hs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ii(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new G,l[I]=new G;let h=new G,d=new G,f=new G,u=new qe,m=new qe,_=new qe,p=new G,g=new G;function v(I,M,L){c[I]=c[M]=c[L]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,L),u.fromBufferAttribute(s,I),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,L),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),o[I].add(p),o[M].add(p),o[L].add(p),l[I].add(g),l[M].add(g),l[L].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,M=T.length;I<M;++I){let L=T[I],D=L.start,U=L.count;for(let C=D,O=D+U;C<O;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new G,E=new G,A=new G,x=new G;function S(I){A.fromBufferAttribute(i,I),x.copy(A);let M=o[I];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(x,M);let D=E.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,M=n.count;I<M;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new ii(f,h,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=new G,Z0=new G,J0=new Ge,Ci=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Pu.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Pu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||J0.getNormalMatrix(e),i=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$0=0,Gi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=da,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Qu,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jl,this.stencilZFail=jl,this.stencilZPass=jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},or=new G,Iu=new G,Il=new G,Ll=new G,na=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Iu.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Ll.copy(this.origin).sub(Iu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Il),o=Ll.dot(this.direction),l=-Ll.dot(Il),c=Ll.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Iu).addScaledVector(Il,f),u}intersectSphere(e,t){if(e.radius<0)return null;or.subVectors(e.center,this.origin);let n=or.dot(this.direction),i=or.dot(or)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,T=n.z-a.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(h),x,S,I,M,L,D,U,C,O,z,F,$;if(y>=E&&y>=A?(I=l,D=d,O=m,$=g,l>=0?(x=c,S=h,M=f,L=u,U=_,C=p,z=v,F=T):(x=h,S=c,M=u,L=f,U=p,C=_,z=T,F=v)):E>=A?(I=c,D=f,O=_,$=v,c>=0?(x=h,S=l,M=u,L=d,U=p,C=m,z=T,F=g):(x=l,S=h,M=d,L=u,U=m,C=p,z=g,F=T)):(I=h,D=u,O=p,$=T,h>=0?(x=l,S=c,M=d,L=f,U=m,C=_,z=g,F=v):(x=c,S=l,M=f,L=d,U=_,C=m,z=v,F=g)),I===0)return null;let V=x/I,P=S/I,j=1/I,Se=M-V*D,Ue=L-P*D,Z=U-V*O,ce=C-P*O,xe=z-V*$,be=F-P*$,ue=xe*ce-be*Z,Ce=Se*be-Ue*xe,_t=Z*Ue-ce*Se;if(i){if(ue<0||Ce<0||_t<0)return null}else if((ue<0||Ce<0||_t<0)&&(ue>0||Ce>0||_t>0))return null;let Ee=ue+Ce+_t;if(Ee===0)return null;let He=j*(ue*D+Ce*O+_t*$);return(Ee>0?He<0:He>0)?null:this.at(He/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ia=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bp=new mt,ss=new na,Dl=new ki,Tp=new G,Nl=new G,Ul=new G,Ol=new G,Lu=new G,Fl=new G,wp=new G,Bl=new G,hn=class extends Jt{constructor(e=new cn,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Lu.fromBufferAttribute(d,e),a?Fl.addScaledVector(Lu,h):Fl.addScaledVector(Lu.sub(t),h))}t.add(Fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(Dl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Dl,Tp)===null||ss.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(bp.copy(s).invert(),ss.copy(e.ray).applyMatrix4(bp),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),T=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,E=T;y<E;y+=3){let A=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=zl(this,g,e,n,c,h,d,A,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=zl(this,a,e,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),T=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,E=T;y<E;y+=3){let A=y,x=y+1,S=y+2;i=zl(this,g,e,n,c,h,d,A,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,T=p+1,y=p+2;i=zl(this,a,e,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};co=class extends qn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ln,h=ln,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ho=class extends ii{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new mt,Ep=new mt,kl=[],Ap=new zi,Q0=new mt,Za=new hn,Ja=new ki,uo=class extends hn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Ap.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Ja.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(n),e.ray.intersectsSphere(Ja)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ws),Ep.multiplyMatrices(n,Ws),Za.matrixWorld=Ep,Za.raycast(e,kl);for(let a=0,o=kl.length;a<o;a++){let l=kl[a];l.instanceId=s,l.object=this,t.push(l)}kl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(i*this.count),i,this.count,Bc,_i));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new ki,j0=new qe(.5,.5),Gl=new G,Ur=class{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],m=s[8],_=s[9],p=s[10],g=s[11],v=s[12],T=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-a,u-h,g-m,E-v).normalize(),i[1].setComponents(c+a,u+h,g+m,E+v).normalize(),i[2].setComponents(c+o,u+d,g+_,E+T).normalize(),i[3].setComponents(c-o,u-d,g-_,E-T).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,E-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,E-y).normalize(),t===gi)i[5].setComponents(c+l,u+f,g+p,E+y).normalize();else if(t===Ks)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=j0.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gl.x=i.normal.x>0?e.max.x:e.min.x,Gl.y=i.normal.y>0?e.max.y:e.min.y,Gl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cp=new mt,dc=class r{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];Cp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(Cp,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ur),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}},Or=class extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pc=new G,mc=new G,Rp=new mt,$a=new na,Vl=new ki,Du=new G,Pp=new G,ra=class extends Jt{constructor(e=new cn,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)pc.fromBufferAttribute(t,i-1),mc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Rt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vl.copy(n.boundingSphere),Vl.applyMatrix4(i),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;Rp.copy(i).invert(),$a.copy(e.ray).applyMatrix4(Rp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),T=Hl(this,e,$a,l,g,v,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(u),g=Hl(this,e,$a,l,_,p,m-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=Hl(this,e,$a,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Hl(this,e,$a,l,m-1,u,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Ip=new G,Lp=new G,Vi=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ip.fromBufferAttribute(t,i),Lp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ip.distanceTo(Lp);e.setAttribute("lineDistance",new Rt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new mt,Hu=new na,Wl=new ki,Xl=new G,fo=class extends Jt{constructor(e=new cn,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(i),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;Dp.copy(i).invert(),Hu.copy(e.ray).applyMatrix4(Dp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=f,_=u;m<_;m++){let p=c.getX(m);Xl.fromBufferAttribute(d,p),Np(Xl,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,_=u;m<_;m++)Xl.fromBufferAttribute(d,m),Np(Xl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};po=class extends qn{constructor(e=[],t=cs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fr=class extends qn{constructor(e,t,n=Ri,i,s,a,o=ln,l=ln,c,h=hr,d=1){if(h!==hr&&h!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mo=class extends fr{constructor(e,t=Ri,n=cs,i,s,a=ln,o=ln,l,c=hr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},go=class extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dr=class r extends cn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function m(_,p,g,v,T,y,E,A,x,S,I){let M=y/x,L=E/S,D=y/2,U=E/2,C=A/2,O=x+1,z=S+1,F=0,$=0,V=new G;for(let P=0;P<z;P++){let j=P*L-U;for(let Se=0;Se<O;Se++){let Ue=Se*M-D;V[_]=Ue*v,V[p]=j*T,V[g]=C,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[g]=A>0?1:-1,h.push(V.x,V.y,V.z),d.push(Se/x),d.push(1-P/S),F+=1}}for(let P=0;P<S;P++)for(let j=0;j<x;j++){let Se=f+j+O*P,Ue=f+j+O*(P+1),Z=f+(j+1)+O*(P+1),ce=f+(j+1)+O*P;l.push(Se,Ue,ce),l.push(Ue,Z,ce),$+=6}o.addGroup(u,$,I),u+=$,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},aa=class r extends cn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new G,y=new G,E=new G;for(let A=0;A<t.length;A+=3)u(t[A+0],T),u(t[A+1],y),u(t[A+2],E),l(T,y,E,v)}function l(v,T,y,E){let A=E+1,x=[];for(let S=0;S<=A;S++){x[S]=[];let I=v.clone().lerp(y,S/A),M=T.clone().lerp(y,S/A),L=A-S;for(let D=0;D<=L;D++)D===0&&S===A?x[S][D]=I:x[S][D]=I.clone().lerp(M,D/L)}for(let S=0;S<A;S++)for(let I=0;I<2*(A-S)-1;I++){let M=Math.floor(I/2);I%2===0?(f(x[S][M+1]),f(x[S+1][M]),f(x[S][M])):(f(x[S][M+1]),f(x[S+1][M+1]),f(x[S+1][M]))}}function c(v){let T=new G;for(let y=0;y<s.length;y+=3)T.x=s[y+0],T.y=s[y+1],T.z=s[y+2],T.normalize().multiplyScalar(v),s[y+0]=T.x,s[y+1]=T.y,s[y+2]=T.z}function h(){let v=new G;for(let T=0;T<s.length;T+=3){v.x=s[T+0],v.y=s[T+1],v.z=s[T+2];let y=p(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;a.push(y,1-E)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],y=a[v+2],E=a[v+4],A=Math.max(T,y,E),x=Math.min(T,y,E);A>.9&&x<.1&&(T<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function m(){let v=new G,T=new G,y=new G,E=new G,A=new qe,x=new qe,S=new qe;for(let I=0,M=0;I<s.length;I+=9,M+=6){v.set(s[I+0],s[I+1],s[I+2]),T.set(s[I+3],s[I+4],s[I+5]),y.set(s[I+6],s[I+7],s[I+8]),A.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),E.copy(v).add(T).add(y).divideScalar(3);let L=p(E);_(A,M+0,v,L),_(x,M+2,T,L),_(S,M+4,y,L)}}function _(v,T,y,E){E<0&&v.x===1&&(a[T]=v.x-1),y.x===0&&y.z===0&&(a[T]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},_o=class r extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ql=new G,Yl=new G,Nu=new G,Zl=new lr,Fr=class extends cn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Zs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f=new Map,u=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:p,c:g}=Zl;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Zl.getNormal(Nu),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let T=(v+1)%3,y=d[v],E=d[T],A=Zl[h[v]],x=Zl[h[T]],S=`${y}_${E}`,I=`${E}_${y}`,M=f.get(I);M?(Nu.dot(M.normal)<=s&&(u.push(A.x,A.y,A.z),u.push(x.x,x.y,x.z)),f.set(I,null)):f.has(S)||f.set(S,{index0:c[v],index1:c[T],normal:Nu.clone()})}}for(let m of f.values())if(m){let{index0:_,index1:p}=m;ql.fromBufferAttribute(o,_),Yl.fromBufferAttribute(o,p),u.push(ql.x,ql.y,ql.z),u.push(Yl.x,Yl.y,Yl.z)}this.setAttribute("position",new Rt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},gc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new qe:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,i=[],s=[],a=[],o=new G,l=new mt;for(let u=0;u<=e;u++){let m=u/e;i[u]=this.getTangentAt(m,new G)}s[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ke(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(Ke(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};Up=new G,Op=new G,Uu=new Mf,Ou=new Mf,Fu=new Mf,oa=class extends gc{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new G){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Op.subVectors(i[0],i[1]).add(i[0]),c=Op);let d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Up.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Up),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Uu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),Ou.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),Fu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ou.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Fu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Uu.calc(l),Ou.calc(l),Fu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new G().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},la=class r extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},xo=class r extends aa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},vo=class r extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-a;for(let T=0;T<c;T++){let y=T*d-s;m.push(y,-v,0),_.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let T=v+c*g,y=v+c*(g+1),E=v+1+c*(g+1),A=v+1+c*g;u.push(T,y,A),u.push(y,E,A)}this.setIndex(u),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},yo=class r extends cn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new G,u=new G,m=new G;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let g=0;g<=i;g++){let v=g/i*s;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),c.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,T=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},So=class extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new G,s=new G;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,u=d.count;for(let m=f,_=f+u;m<_;m+=3)for(let p=0;p<3;p++){let g=o.getX(m+p),v=o.getX(m+(p+1)%3);i.fromBufferAttribute(a,g),s.fromBufferAttribute(a,v),Fp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Fp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Rt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};Im={clone:us,merge:Tn},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_c=class extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ca=class extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xc=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gu:s=e,o=2*t-n;break;case Vu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:a=e,l=2*n-t;break;case Vu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,T=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+T*a[l+E]+y*a[d+E];return s}},Sc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},Mc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*m;return s}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=u*f+m*2,v=d[g],T=d[g+1],y=e*f+m*2,E=h[y],A=h[y+1],x=rx(n,t,v,E,i);s[m]=Lm(x,_,T,A,p)}return s}};si=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Jl(e.settings)&&(n.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ja:t=this.InterpolantFactoryMethodDiscrete;break;case cc:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break;case zu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Ql;case this.InterpolantFactoryMethodBezier:return zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Jl(this.settings)&&(zp(this.settings.inTangents,e),zp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Jl(this.settings)&&(kp(this.settings.inTangents,e),kp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&v0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ql,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[f+m]||_!==t[u+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Jl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=cc;zr=class extends si{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=ja;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;Tc=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};Tc.prototype.ValueTypeName="color";wc=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};wc.prototype.ValueTypeName="number";Ec=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Mo=class extends si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;kr=class extends si{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ja;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;Ac=class extends si{constructor(e,t,n,i){super(e,t,n,i)}};Ac.prototype.ValueTypeName="vector";Cc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dm=new Cc,Rc=class{constructor(e){this.manager=e!==void 0?e:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Rc.DEFAULT_MATERIAL_NAME="__DEFAULT";bo=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},To=class extends bo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bu=new mt,Gp=new G,Vp=new G,Pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$l=new G,Kl=new Bi,Ui=new G,wo=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Kl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($l,Kl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nr=new G,Hp=new qe,Wp=new qe,Nn=class extends wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Hp,Wp),t.subVectors(Wp,Hp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=class extends wo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wu=class extends Pc{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},qs=-90,Ys=1,ua=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(qs,Ys,e,t);i.layers=this.layers,this.add(i);let s=new Nn(qs,Ys,e,t);s.layers=this.layers,this.add(s);let a=new Nn(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new Nn(qs,Ys,e,t);o.layers=this.layers,this.add(o);let l=new Nn(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Nn(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ic=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Tf="\\[\\]\\.:\\/",sx=new RegExp("["+Tf+"]","g"),wf="[^"+Tf+"]",ax="[^"+Tf.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",wf),lx=/(WCOD+)?/.source.replace("WCOD",ax),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wf),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wf),ux=new RegExp("^"+ox+lx+cx+hx+"$"),fx=["material","materials","bones","map"],Xu=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){let t=ux.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);fx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Xu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];f1=new Float32Array(1),qu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}},Ao=class extends Vi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,u=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let _=f===s?n:i;_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3}let h=new cn;h.setAttribute("position",new Rt(l,3)),h.setAttribute("color",new Rt(c,3));let d=new Or({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function tg(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mx(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}function $y(r,e,t,n,i,s){let a=new Ve(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(v){let T=!1,y=u(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,T){let y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new hn(new dr(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:us(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ng),c.material.toneMapped=it.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hn(new vo(2,2),new Hi({name:"BackgroundMaterial",uniforms:us(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=it.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(yh,bf(r)),t.buffers.color.setClear(yh.r,yh.g,yh.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function Ky(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(L,D,U,C,O){let z=!1,F=d(L,C,U,D);s!==F&&(s=F,c(s.object)),z=u(L,C,U,O),z&&m(L,C,U,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(L,D,U,C),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function d(L,D,U,C){let O=C.wireframe===!0,z=n[D.id];z===void 0&&(z={},n[D.id]=z);let F=L.isInstancedMesh===!0?L.id:0,$=z[F];$===void 0&&($={},z[F]=$);let V=$[U.id];V===void 0&&(V={},$[U.id]=V);let P=V[O];return P===void 0&&(P=f(l()),V[O]=P),P}function f(L){let D=[],U=[],C=[];for(let O=0;O<t;O++)D[O]=0,U[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:C,object:L,attributes:{},index:null}}function u(L,D,U,C){let O=s.attributes,z=D.attributes,F=0,$=U.getAttributes();for(let V in $)if($[V].location>=0){let j=O[V],Se=z[V];if(Se===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;F++}return s.attributesNum!==F||s.index!==C}function m(L,D,U,C){let O={},z=D.attributes,F=0,$=U.getAttributes();for(let V in $)if($[V].location>=0){let j=z[V];j===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),O[V]=Se,F++}s.attributes=O,s.attributesNum=F,s.index=C}function _(){let L=s.newAttributes;for(let D=0,U=L.length;D<U;D++)L[D]=0}function p(L){g(L,0)}function g(L,D){let U=s.newAttributes,C=s.enabledAttributes,O=s.attributeDivisors;U[L]=1,C[L]===0&&(r.enableVertexAttribArray(L),C[L]=1),O[L]!==D&&(r.vertexAttribDivisor(L,D),O[L]=D)}function v(){let L=s.newAttributes,D=s.enabledAttributes;for(let U=0,C=D.length;U<C;U++)D[U]!==L[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function T(L,D,U,C,O,z,F){F===!0?r.vertexAttribIPointer(L,D,U,O,z):r.vertexAttribPointer(L,D,U,C,O,z)}function y(L,D,U,C){_();let O=C.attributes,z=U.getAttributes(),F=D.defaultAttributeValues;for(let $ in z){let V=z[$];if(V.location>=0){let P=O[$];if(P===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){let j=P.normalized,Se=P.itemSize,Ue=e.get(P);if(Ue===void 0)continue;let Z=Ue.buffer,ce=Ue.type,xe=Ue.bytesPerElement,be=ce===r.INT||ce===r.UNSIGNED_INT||P.gpuType===Uc;if(P.isInterleavedBufferAttribute){let ue=P.data,Ce=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,_t=P.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)g(V.location+Ee,ue.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Ee=0;Ee<V.locationSize;Ee++)T(V.location+Ee,Se/V.locationSize,ce,j,Ce*xe,(_t+Se/V.locationSize*Ee)*xe,be)}else{if(P.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)g(V.location+ue,P.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let ue=0;ue<V.locationSize;ue++)T(V.location+ue,Se/V.locationSize,ce,j,Se*xe,Se/V.locationSize*ue*xe,be)}}else if(F!==void 0){let j=F[$];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(V.location,j);break;case 3:r.vertexAttrib3fv(V.location,j);break;case 4:r.vertexAttrib4fv(V.location,j);break;default:r.vertexAttrib1fv(V.location,j)}}}}v()}function E(){I();for(let L in n){let D=n[L];for(let U in D){let C=D[U];for(let O in C){let z=C[O];for(let F in z)h(z[F].object),delete z[F];delete C[O]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let U in D){let C=D[U];for(let O in C){let z=C[O];for(let F in z)h(z[F].object),delete z[F];delete C[O]}}delete n[L.id]}function x(L){for(let D in n){let U=n[D];for(let C in U){let O=U[C];if(O[L.id]===void 0)continue;let z=O[L.id];for(let F in z)h(z[F].object),delete z[F];delete O[L.id]}}}function S(L){for(let D in n){let U=n[D],C=L.isInstancedMesh===!0?L.id:0,O=U[C];if(O!==void 0){for(let z in O){let F=O[z];for(let $ in F)h(F[$].object),delete F[$];delete O[z]}delete U[C],Object.keys(U).length===0&&delete n[D]}}}function I(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Qy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Ii&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==_i&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:A}}function eS(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ci,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,T,u);for(let E=0;E!==T;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=u;T!==_;++T,y+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Um(r,e,t){return new zo(r,{minFilter:pr,generateMipmaps:e,type:Pi,colorSpace:eo,depthBuffer:t})}function ko(r,e,t){return new Hi({name:r,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:On,blending:os,depthTest:!1,depthWrite:!1})}function aS(){return ko("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ig}u

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
	`)}function oS(){return ko("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rg}},`

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
	`)}function lS(){return ko("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nS}
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
	`)}function Om(){return ko("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fm(){return ko("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Lc||u===Dc)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new zo(m.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Lc||u===Dc,_=u===cs||u===pa;if(m||_){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Mh(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Mh(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===Lc?f.mapping=cs:u===Dc&&(f.mapping=pa),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function hS(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ka("WebGLRenderer: "+n+" extension not supported."),i}}}function uS(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],r.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,T=p.count>=65535?lo:oo,y=new T(Math.ceil(v/3)*6,1),E=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,I=0;S<v;S+=3){let M=x[S+0],L=x[S+1],D=x[S+2];E[I++]=M,E[I++]=L,E[I++]=L,E[I++]=D,E[I++]=D,E[I++]=M}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){let I=x+0,M=x+1,L=x+2;E[S++]=I,E[S++]=M,E[S++]=M,E[S++]=L,E[S++]=L,E[S++]=I}}y.version=g;let A=s.get(m);A&&e.remove(A),s.set(m,y)}function f(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return s.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function fS(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pS(r,e,t){let n=new WeakMap,i=new Pt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;u===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*d),x=new io(A,y,E,d);x.type=_i,x.needsUpdate=!0;let S=T*4;for(let M=0;M<d;M++){let L=p[M],D=g[M],U=v[M],C=y*E*4*M;for(let O=0;O<L.count;O++){let z=O*S;u===!0&&(i.fromBufferAttribute(L,O),A[C+z+0]=i.x,A[C+z+1]=i.y,A[C+z+2]=i.z,A[C+z+3]=0),m===!0&&(i.fromBufferAttribute(D,O),A[C+z+4]=i.x,A[C+z+5]=i.y,A[C+z+6]=i.z,A[C+z+7]=0),_===!0&&(i.fromBufferAttribute(U,O),A[C+z+8]=i.x,A[C+z+9]=i.y,A[C+z+10]=i.z,A[C+z+11]=U.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new qe(y,E)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function mS(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function _S(r,e,t,n,i,s){let a=new ri(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new cn;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let d=new _c({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new hn(h,d),u=new Eo(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,T=[],y=!1;this.setSize=function(E,A){a.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let x=0;x<T.length;x++){let S=T[x];S.setSize&&S.setSize(E,A)}},this.setEffects=function(E){T=E,y=T.length>0&&T[0].isRenderPass===!0;let A=a.width,x=a.height;T.length>0&&o===null&&(o=new ri(A,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ri(A,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&T.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new fr(A,x),s===!0&&(c.format=mr,c.type=hs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<T.length;I++){let M=T[I];M.setSize&&M.setSize(A,x),S&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(c)}},this.begin=function(E,A){if(p||E.toneMapping===Xi&&T.length===0)return!1;if(v=A,A!==null){let x=A.width,S=A.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=g,p=!0;let x=a,S=o;for(let I=0;I<T.length;I++){let M=T[I];M.enabled!==!1&&(M.render(E,S,x,A),M.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,d.defines={},it.getTransfer(m)===pt&&(d.defines.SRGB_TRANSFER="");let I=gS[_];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function xa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Bm[i];if(s===void 0&&(s=new Float32Array(i),Bm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Th(r,e){let t=zm[e];t===void 0&&(t=new Int32Array(e),zm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function yS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function SS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function MS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Vm.set(n),r.uniformMatrix2fv(this.addr,!1,Vm),nn(t,n)}}function bS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Gm.set(n),r.uniformMatrix3fv(this.addr,!1,Gm),nn(t,n)}}function TS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;km.set(n),r.uniformMatrix4fv(this.addr,!1,km),nn(t,n)}}function wS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ES(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function AS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function CS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function RS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function PS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function IS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function LS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function wh(r){return r.version===0&&(r.compareFunction=gf,r.needsUpdate=!0),r}function DS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=wh(ag):s=sg,t.setTexture2D(e||s,i)}function NS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cg,i)}function US(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=wh(og):s=hg,t.setTextureCube(e||s,i)}function OS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lg,i)}function FS(r){switch(r){case 5126:return xS;case 35664:return vS;case 35665:return yS;case 35666:return SS;case 35674:return MS;case 35675:return bS;case 35676:return TS;case 5124:case 35670:return wS;case 35667:case 35671:return ES;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return PS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(r,e){r.uniform1fv(this.addr,e)}function zS(r,e){let t=xa(e,this.size,2);r.uniform2fv(this.addr,t)}function kS(r,e){let t=xa(e,this.size,3);r.uniform3fv(this.addr,t)}function GS(r,e){let t=xa(e,this.size,4);r.uniform4fv(this.addr,t)}function VS(r,e){let t=xa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function HS(r,e){let t=xa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function WS(r,e){let t=xa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function XS(r,e){r.uniform1iv(this.addr,e)}function qS(r,e){r.uniform2iv(this.addr,e)}function YS(r,e){r.uniform3iv(this.addr,e)}function ZS(r,e){r.uniform4iv(this.addr,e)}function JS(r,e){r.uniform1uiv(this.addr,e)}function $S(r,e){r.uniform2uiv(this.addr,e)}function KS(r,e){r.uniform3uiv(this.addr,e)}function QS(r,e){r.uniform4uiv(this.addr,e)}function jS(r,e,t){let n=this.cache,i=e.length,s=Th(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=wh(ag):a=sg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function eM(r,e,t){let n=this.cache,i=e.length,s=Th(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cg,s[a])}function tM(r,e,t){let n=this.cache,i=e.length,s=Th(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=wh(og):a=hg;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function nM(r,e,t){let n=this.cache,i=e.length,s=Th(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lg,s[a])}function iM(r){switch(r){case 5126:return BS;case 35664:return zS;case 35665:return kS;case 35666:return GS;case 35674:return VS;case 35675:return HS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return ZS;case 5125:return JS;case 36294:return $S;case 36295:return KS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function Hm(r,e){r.seq.push(e),r.map[e.id]=e}function rM(r,e,t){let n=r.name,i=n.length;for(Cf.lastIndex=0;;){let s=Cf.exec(n),a=Cf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hm(t,c===void 0?new Pf(o,r,e):new If(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Lf(o),Hm(t,d)),t=d}}}function Wm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function oM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lM(r){it._getMatrix(Xm,it.workingColorSpace,r);let e=`mat3( ${Xm.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case to:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+oM(r.getShaderSource(e),o)}else return s}function cM(r,e){let t=lM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function uM(r,e){let t=hM[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fM(){it.getLuminanceCoefficients(Sh);let r=Sh.x.toFixed(4),e=Sh.y.toFixed(4),t=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function pM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Bo(r){return r!==""}function Ym(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Df(r){return r.replace(gM,_M)}function _M(r,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Df(t)}function Jm(r){return r.replace(xM,vM)}function vM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $m(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(r){return yM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function bM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function wM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TM[r.combine]||"ENVMAP_BLENDING_NONE"}function EM(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=SM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=bM(t),d=wM(t),f=dM(t),u=pM(s),m=i.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Bo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(_=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Xi?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,cM("linearToOutputTexel",t.outputColorSpace),fM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),a=Df(a),a=Ym(a,t),a=Zm(a,t),o=Df(o),o=Ym(o,t),o=Zm(o,t),a=Jm(a),o=Jm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+a,T=g+p+o,y=Wm(i,i.VERTEX_SHADER,v),E=Wm(i,i.FRAGMENT_SHADER,T);i.attachShader(m,y),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(M){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",U=i.getShaderInfoLog(E)||"",C=L.trim(),O=D.trim(),z=U.trim(),F=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,E);else{let V=qm(i,y,"vertex"),P=qm(i,E,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+C+`
`+V+`
`+P)}else C!==""?Fe("WebGLProgram: Program Info Log:",C):(O===""||z==="")&&($=!1);$&&(M.diagnostics={runnable:F,programLog:C,vertexShader:{log:O,prefix:_},fragmentShader:{log:z,prefix:p}})}i.deleteShader(y),i.deleteShader(E),x=new _a(i,m),S=mM(i,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,sM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}function CM(r){return r===Vr||r===Uo||r===Oo}function RM(r,e,t,n,i,s){let a=new ro,o=new Nf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,I,M,L,D){let U=M.fog,C=L.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?M.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||O,z),$=f[x.type],V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let P=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=P!==void 0?P.length:0,Se=0;C.morphAttributes.position!==void 0&&(Se=1),C.morphAttributes.normal!==void 0&&(Se=2),C.morphAttributes.color!==void 0&&(Se=3);let Ue,Z,ce,xe;if($){let ne=Yi[$];Ue=ne.vertexShader,Z=ne.fragmentShader}else{Ue=x.vertexShader,Z=x.fragmentShader;let ne=o.getVertexShaderStage(x),Te=o.getFragmentShaderStage(x);o.update(x,ne,Te),ce=ne.id,xe=Te.id}let be=r.getRenderTarget(),ue=r.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,_t=L.isBatchedMesh===!0,Ee=!!x.map,He=!!x.matcap,Le=!!F,Oe=Le&&F.isPMREMTexture===!0,ct=!!x.aoMap,at=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,je=!!x.normalMap,Wt=!!x.displacementMap,vt=!!x.emissiveMap,rt=!!x.metalnessMap,Ot=!!x.roughnessMap,Vt=x.anisotropy>0,k=x.clearcoat>0,ut=x.diffuseRoughness>0,ot=x.dispersion>0,ke=x.retroreflectivity>0,fe=x.iridescence>0,ht=x.sheen>0,De=x.transmission>0,Be=Vt&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,b=k&&!!x.clearcoatNormalMap,W=k&&!!x.clearcoatRoughnessMap,se=ut&&!!x.diffuseRoughnessMap,ie=fe&&!!x.iridescenceMap,he=fe&&!!x.iridescenceThicknessMap,ge=ht&&!!x.sheenColorMap,X=ht&&!!x.sheenRoughnessMap,ee=!!x.specularMap,le=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=De&&!!x.transmissionMap,K=De&&!!x.thicknessMap,de=!!x.gradientMap,oe=!!x.alphaMap,pe=x.alphaTest>0,ae=!!x.alphaHash,me=!!x.extensions,re=Xi;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(re=r.toneMapping);let te=Oe?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,_e={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:Z,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:_t,batchingColor:_t&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:He,envMap:Le,envMapMode:Le&&F.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?te.length-1:null,envMapSize:Oe?te[0].width:null,aoMap:ct,lightMap:at,bumpMap:J,normalMap:je,displacementMap:Wt,emissiveMap:vt,normalMapObjectSpace:je&&x.normalMapType===gm,normalMapTangentSpace:je&&x.normalMapType===xh,packedNormalMap:je&&x.normalMapType===xh&&CM(x.normalMap.format),metalnessMap:rt,roughnessMap:Ot,anisotropy:Vt,anisotropyMap:Be,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:ut,diffuseRoughnessMap:se,dispersion:ot,retroreflection:ke,iridescence:fe,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:ht,sheenColorMap:ge,sheenRoughnessMap:X,specularMap:ee,specularColorMap:le,specularIntensityMap:N,transmission:De,transmissionMap:Q,thicknessMap:K,gradientMap:de,opaque:x.transparent===!1&&x.blending===da&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:pe,alphaHash:ae,combine:x.combine,mapUv:Ee&&u(x.map.channel),aoMapUv:ct&&u(x.aoMap.channel),lightMapUv:at&&u(x.lightMap.channel),bumpMapUv:J&&u(x.bumpMap.channel),normalMapUv:je&&u(x.normalMap.channel),displacementMapUv:Wt&&u(x.displacementMap.channel),emissiveMapUv:vt&&u(x.emissiveMap.channel),metalnessMapUv:rt&&u(x.metalnessMap.channel),roughnessMapUv:Ot&&u(x.roughnessMap.channel),anisotropyMapUv:Be&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&u(x.sheenRoughnessMap.channel),specularMapUv:ee&&u(x.specularMap.channel),specularColorMapUv:le&&u(x.specularColorMap.channel),specularIntensityMapUv:N&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:oe&&u(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(je||Vt),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Ee||oe),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:vt&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wi,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||_t)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=f[x.type],I;if(S){let M=Yi[S];I=Im.clone(M.uniforms)}else I=x.uniforms;return I}function T(x,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new EM(r,S,x,i),c.push(I),h.set(S,I)),I}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function PM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function IM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Km(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,_,p,g){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let T=o(f,u,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function c(f,u,m,_,p,g){let v=o(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||IM),n.length>1&&n.sort(u||Km),i.length>1&&i.sort(u||Km)}function d(){for(let f=e,u=r.length;f<u;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function LM(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Qm,r.set(n,[a])):i>=s.length?(a=new Qm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function DM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function NM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function OM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FM(r){let e=new DM,t=NM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new mt,a=new mt;function o(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,T=0,y=0,E=0,A=0,x=0,S=0,I=0,M=0;c.sort(OM);for(let D=0,U=c.length;D<U;D++){let C=c[D],O=C.color,z=C.intensity,F=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Vr?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*z,d+=O.g*z,f+=O.b*z;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],z);M++}else if(C.isSunLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let P=C.shadow,j=t.get(C);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=$;let Se=P.getViewportCount();for(let Ue=0;Ue<Se;Ue++)n.sunShadowMatrix[_+Ue]=P.getMatrix(Ue),n.sunShadowCascade[_+Ue]=P._cascadeData[Ue];_+=Se,m++}n.sun[u]=V,u++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let P=C.shadow,j=t.get(C);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=V,p++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(O).multiplyScalar(z),V.distance=F,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[v]=V;let P=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,P.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[v]=P.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=$,x++}v++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=V,T++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let P=C.shadow,j=t.get(C);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,j.shadowCameraNear=P.camera.near,j.shadowCameraFar=P.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=V,g++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(z),V.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[y]=V,y++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.sunLength!==u||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==M)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=M,L.sunLength=u,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=M,n.version=UM++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),f++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function jm(r){let e=new FM(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function BM(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new jm(r),e.set(i,[o])):s>=a.length?(o=new jm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function HM(r,e,t){let n=new Ur,i=new qe,s=new qe,a=new Pt,o=new xc,l=new vc,c={},h=t.maxTextureSize,d={[Gr]:On,[On]:Gr,[Wi]:Wi},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:zM,fragmentShader:kM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new cn;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new hn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let g=this.type;this.render=function(A,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Yp&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);let I=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(os),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=g!==this.type;U&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=A.length;C<O;C++){let z=A[C],F=z.shadow;if(F===void 0){Fe("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let $=F.getFrameExtents();i.multiply($),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,F.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===fa){if(z.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ri(i.x,i.y,{format:Vr,type:Pi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new fr(i.x,i.y,_i),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=hr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ln,F.map.depthTexture.magFilter=ln}else z.isPointLight?(F.map=new zo(i.x),F.map.depthTexture=new mo(i.x,Ri)):(F.map=new ri(i.x,i.y),F.map.depthTexture=new fr(i.x,i.y,Ri)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=hr,this.type===Co?(F.map.depthTexture.compareFunction=V?mf:pf,F.map.depthTexture.minFilter=Un,F.map.depthTexture.magFilter=Un):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ln,F.map.depthTexture.magFilter=ln);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let P=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();z.isPointLight!==!0&&F.updateMatrices(z,S);let j=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let Se=0;Se<P;Se++){let Ue=F.getCamera(Se);if(z.isPointLight){let Z=F.camera,ce=F.matrix,xe=z.distance||Z.far;xe!==Z.far&&(Z.far=xe,Z.updateProjectionMatrix()),Fo.setFromMatrixPosition(z.matrixWorld),Z.position.copy(Fo),Rf.copy(Z.position),Rf.add(GM[Se]),Z.up.copy(VM[Se]),Z.lookAt(Rf),Z.updateMatrixWorld(),ce.makeTranslation(-Fo.x,-Fo.y,-Fo.z),eg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(eg,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(F.map),r.clear());let Z=F.getViewport(Se);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(a)}n=F.getFrustum(Se),y(x,S,Ue,z,j,this.type)}F.isPointLightShadow!==!0&&this.type===fa&&v(F,S),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(I,M,L)};function v(A,x){let S=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new ri(i.x,i.y,{format:Vr,type:Pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(x,null,S,u,_,null)}function T(A,x,S,I){let M=null,L=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=M.uuid,U=x.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let O=C[U];O===void 0&&(O=M.clone(),C[U]=O,x.addEventListener("dispose",E)),M=O}if(M.visible=x.visible,M.wireframe=x.wireframe,I===fa?M.side=x.shadowSide!==null?x.shadowSide:x.side:M.side=x.shadowSide!==null?x.shadowSide:d[x.side],M.alphaMap=x.alphaMap,M.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,M.map=x.map,M.clipShadows=x.clipShadows,M.clippingPlanes=x.clippingPlanes,M.clipIntersection=x.clipIntersection,M.displacementMap=x.displacementMap,M.displacementScale=x.displacementScale,M.displacementBias=x.displacementBias,M.wireframeLinewidth=x.wireframeLinewidth,M.linewidth=x.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=r.properties.get(M);D.light=S}return M}function y(A,x,S,I,M,L){if(A.visible===!1)return;if(A.layers.test(M)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===fa)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let C=e.update(A),O=A.material;if(Array.isArray(O)){let z=C.groups;for(let F=0,$=z.length;F<$;F++){let V=z[F],P=O[V.materialIndex];if(P&&P.visible){let j=T(A,P,I,L);A.onBeforeShadow(r,A,x,S,C,j,V),r.renderBufferDirect(S,null,C,j,A,V),A.onAfterShadow(r,A,x,S,C,j,V)}}}else if(O.visible){let z=T(A,O,I,L);A.onBeforeShadow(r,A,x,S,C,z,null),r.renderBufferDirect(S,null,C,z,A,null),A.onAfterShadow(r,A,x,S,C,z,null)}}let U=A.children;for(let C=0,O=U.length;C<O;C++)y(U[C],x,S,I,M,L)}function E(A){A.target.removeEventListener("dispose",E);for(let S in c){let I=c[S],M=A.target.uuid;M in I&&(I[M].dispose(),delete I[M])}}}function WM(r,e){function t(){let N=!1,Q=new Pt,K=null,de=new Pt(0,0,0,0);return{setMask:function(oe){K!==oe&&!N&&(r.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){N=oe},setClear:function(oe,pe,ae,me,re){re===!0&&(oe*=me,pe*=me,ae*=me),Q.set(oe,pe,ae,me),de.equals(Q)===!1&&(r.clearColor(oe,pe,ae,me),de.copy(Q))},reset:function(){N=!1,K=null,de.set(-1,0,0,0)}}}function n(){let N=!1,Q=!1,K=null,de=null,oe=null;return{setReversed:function(pe){if(Q!==pe){let ae=e.get("EXT_clip_control");pe?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Q=pe;let me=oe;oe=null,this.setClear(me)}},getReversed:function(){return Q},setTest:function(pe){pe?ue(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(pe){K!==pe&&!N&&(r.depthMask(pe),K=pe)},setFunc:function(pe){if(Q&&(pe=Am[pe]),de!==pe){switch(pe){case ec:r.depthFunc(r.NEVER);break;case tc:r.depthFunc(r.ALWAYS);break;case nc:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case ic:r.depthFunc(r.EQUAL);break;case rc:r.depthFunc(r.GEQUAL);break;case sc:r.depthFunc(r.GREATER);break;case ac:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=pe}},setLocked:function(pe){N=pe},setClear:function(pe){oe!==pe&&(oe=pe,Q&&(pe=1-pe),r.clearDepth(pe))},reset:function(){N=!1,K=null,de=null,oe=null,Q=!1}}}function i(){let N=!1,Q=null,K=null,de=null,oe=null,pe=null,ae=null,me=null,re=null;return{setTest:function(te){N||(te?ue(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(te){Q!==te&&!N&&(r.stencilMask(te),Q=te)},setFunc:function(te,_e,ne){(K!==te||de!==_e||oe!==ne)&&(r.stencilFunc(te,_e,ne),K=te,de=_e,oe=ne)},setOp:function(te,_e,ne){(pe!==te||ae!==_e||me!==ne)&&(r.stencilOp(te,_e,ne),pe=te,ae=_e,me=ne)},setLocked:function(te){N=te},setClear:function(te){re!==te&&(r.clearStencil(te),re=te)},reset:function(){N=!1,Q=null,K=null,de=null,oe=null,pe=null,ae=null,me=null,re=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,T=null,y=null,E=null,A=null,x=null,S=new Ve(0,0,0),I=0,M=!1,L=null,D=null,U=null,C=null,O=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,$=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=$>=2);let P=null,j={},Se=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Z=new Pt().fromArray(Se),ce=new Pt().fromArray(Ue);function xe(N,Q,K,de){let oe=new Uint8Array(4),pe=r.createTexture();r.bindTexture(N,pe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<K;ae++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(Q+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return pe}let be={};be[r.TEXTURE_2D]=xe(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(r.DEPTH_TEST),a.setFunc($s),J(!1),je(Yu),ue(r.CULL_FACE),ct(os);function ue(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Ce(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function _t(N,Q){return f[N]!==Q?(r.bindFramebuffer(N,Q),f[N]=Q,N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ee(N,Q){let K=m,de=!1;if(N){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let oe=N.textures;if(K.length!==oe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,ae=oe.length;pe<ae;pe++)K[pe]=r.COLOR_ATTACHMENT0+pe;K.length=oe.length,de=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,de=!0);de&&r.drawBuffers(K)}function He(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Le={[ls]:r.FUNC_ADD,[Jp]:r.FUNC_SUBTRACT,[$p]:r.FUNC_REVERSE_SUBTRACT};Le[Kp]=r.MIN,Le[Qp]=r.MAX;let Oe={[jp]:r.ZERO,[em]:r.ONE,[tm]:r.SRC_COLOR,[Ku]:r.SRC_ALPHA,[om]:r.SRC_ALPHA_SATURATE,[sm]:r.DST_COLOR,[im]:r.DST_ALPHA,[nm]:r.ONE_MINUS_SRC_COLOR,[Qu]:r.ONE_MINUS_SRC_ALPHA,[am]:r.ONE_MINUS_DST_COLOR,[rm]:r.ONE_MINUS_DST_ALPHA,[lm]:r.CONSTANT_COLOR,[cm]:r.ONE_MINUS_CONSTANT_COLOR,[hm]:r.CONSTANT_ALPHA,[um]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(N,Q,K,de,oe,pe,ae,me,re,te){if(N===os){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(ue(r.BLEND),p=!0),N!==Zp){if(N!==g||te!==M){if((v!==ls||E!==ls)&&(r.blendEquation(r.FUNC_ADD),v=ls,E=ls),te)switch(N){case da:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zu:r.blendFunc(r.ONE,r.ONE);break;case Ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $u:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",N);break}else switch(N){case da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ju:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",N);break}T=null,y=null,A=null,x=null,S.set(0,0,0),I=0,g=N,M=te}return}oe=oe||Q,pe=pe||K,ae=ae||de,(Q!==v||oe!==E)&&(r.blendEquationSeparate(Le[Q],Le[oe]),v=Q,E=oe),(K!==T||de!==y||pe!==A||ae!==x)&&(r.blendFuncSeparate(Oe[K],Oe[de],Oe[pe],Oe[ae]),T=K,y=de,A=pe,x=ae),(me.equals(S)===!1||re!==I)&&(r.blendColor(me.r,me.g,me.b,re),S.copy(me),I=re),g=N,M=!1}function at(N,Q){N.side===Wi?Ce(r.CULL_FACE):ue(r.CULL_FACE);let K=N.side===On;Q&&(K=!K),J(K),N.blending===da&&N.transparent===!1?ct(os):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function je(N){N!==Xp?(ue(r.CULL_FACE),N!==D&&(N===Yu?r.cullFace(r.BACK):N===qp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),D=N}function Wt(N){N!==U&&(F&&r.lineWidth(N),U=N)}function vt(N,Q,K){N?(ue(r.POLYGON_OFFSET_FILL),(C!==Q||O!==K)&&(C=Q,O=K,a.getReversed()&&(Q=-Q,K=-K),r.polygonOffset(Q,K))):Ce(r.POLYGON_OFFSET_FILL)}function rt(N){N?ue(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=r.TEXTURE0+z-1),P!==N&&(r.activeTexture(N),P=N)}function Vt(N,Q,K){K===void 0&&(P===null?K=r.TEXTURE0+z-1:K=P);let de=j[K];de===void 0&&(de={type:void 0,texture:void 0},j[K]=de),(de.type!==N||de.texture!==Q)&&(P!==K&&(r.activeTexture(K),P=K),r.bindTexture(N,Q||be[N]),de.type=N,de.texture=Q)}function k(){let N=j[P];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ut(){try{r.compressedTexImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function ot(){try{r.compressedTexImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ke(){try{r.texSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function fe(){try{r.texSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function De(){try{r.compressedTexSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function Be(){try{r.texStorage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function R(){try{r.texStorage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function b(){try{r.texImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function W(){try{r.texImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function se(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function ie(N,Q){d[N]!==Q&&(r.pixelStorei(N,Q),d[N]=Q)}function he(N){Z.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ge(N){ce.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function X(N,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let de=K.get(N);de===void 0&&(de=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,de,de),K.set(N,de))}function ee(N,Q,K){let oe=c.get(Q).get(N);l[oe]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,oe,K),l[oe]=K)}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,j={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,T=null,y=null,E=null,A=null,x=null,S=new Ve(0,0,0),I=0,M=!1,L=null,D=null,U=null,C=null,O=null,Z.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ce,bindFramebuffer:_t,drawBuffers:Ee,useProgram:He,setBlending:ct,setMaterial:at,setFlipSided:J,setCullFace:je,setLineWidth:Wt,setPolygonOffset:vt,setScissorTest:rt,activeTexture:Ot,bindTexture:Vt,unbindTexture:k,compressedTexImage2D:ut,compressedTexImage3D:ot,texImage2D:b,texImage3D:W,pixelStorei:ie,getParameter:se,updateUBOMapping:X,uniformBlockBinding:ee,texStorage2D:Be,texStorage3D:R,texSubImage2D:ke,texSubImage3D:fe,compressedTexSubImage2D:ht,compressedTexSubImage3D:De,scissor:he,viewport:ge,reset:le}}function XM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):no("canvas")}function v(R,b,W){let se=1,ie=Be(R);if((ie.width>W||ie.height>W)&&(se=W/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let he=Math.floor(se*ie.width),ge=Math.floor(se*ie.height);f===void 0&&(f=g(he,ge));let X=b?g(he,ge):f;return X.width=he,X.height=ge,X.getContext("2d").drawImage(R,0,0,he,ge),Fe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+he+"x"+ge+")."),X}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(R,b,W,se,ie,he=!1){if(R!==null){if(r[R]!==void 0)return r[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===r.RED&&(W===r.FLOAT&&(X=r.R32F),W===r.HALF_FLOAT&&(X=r.R16F),W===r.UNSIGNED_BYTE&&(X=r.R8),W===r.UNSIGNED_SHORT&&ge&&(X=ge.R16_EXT),W===r.SHORT&&ge&&(X=ge.R16_SNORM_EXT)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.R8UI),W===r.UNSIGNED_SHORT&&(X=r.R16UI),W===r.UNSIGNED_INT&&(X=r.R32UI),W===r.BYTE&&(X=r.R8I),W===r.SHORT&&(X=r.R16I),W===r.INT&&(X=r.R32I)),b===r.RG&&(W===r.FLOAT&&(X=r.RG32F),W===r.HALF_FLOAT&&(X=r.RG16F),W===r.UNSIGNED_BYTE&&(X=r.RG8),W===r.UNSIGNED_SHORT&&ge&&(X=ge.RG16_EXT),W===r.SHORT&&ge&&(X=ge.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RG8UI),W===r.UNSIGNED_SHORT&&(X=r.RG16UI),W===r.UNSIGNED_INT&&(X=r.RG32UI),W===r.BYTE&&(X=r.RG8I),W===r.SHORT&&(X=r.RG16I),W===r.INT&&(X=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RGB8UI),W===r.UNSIGNED_SHORT&&(X=r.RGB16UI),W===r.UNSIGNED_INT&&(X=r.RGB32UI),W===r.BYTE&&(X=r.RGB8I),W===r.SHORT&&(X=r.RGB16I),W===r.INT&&(X=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),W===r.UNSIGNED_INT&&(X=r.RGBA32UI),W===r.BYTE&&(X=r.RGBA8I),W===r.SHORT&&(X=r.RGBA16I),W===r.INT&&(X=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_SHORT&&ge&&(X=ge.RGB16_EXT),W===r.SHORT&&ge&&(X=ge.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),b===r.RGBA){let ee=he?to:it.getTransfer(ie);W===r.FLOAT&&(X=r.RGBA32F),W===r.HALF_FLOAT&&(X=r.RGBA16F),W===r.UNSIGNED_BYTE&&(X=ee===pt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&ge&&(X=ge.RGBA16_EXT),W===r.SHORT&&ge&&(X=ge.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(R,b){let W;return R?b===null||b===Ri||b===hs?W=r.DEPTH24_STENCIL8:b===_i?W=r.DEPTH32F_STENCIL8:b===ma&&(W=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===hs?W=r.DEPTH_COMPONENT24:b===_i?W=r.DEPTH_COMPONENT32F:b===ma&&(W=r.DEPTH_COMPONENT16),W}function S(R,b){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function I(R){let b=new WeakRef(R);n.get(R).__ref=b,m.add(b),_.register(R,b,b)}function M(R){let b=n.get(R).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function L(R){U(R.target)}function D(R){C(R.target)}function U(R){R.removeEventListener("dispose",L),M(R),z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function C(R){R.removeEventListener("dispose",D),M(R),$(R)}function O(){for(let R of m){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):U(b))}m.clear(),d.clear()}function z(R){let b=n.get(R);if(b.__webglInit===void 0)return;let W=R.source,se=u.get(W);if(se){let ie=se[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(R),Object.keys(se).length===0&&u.delete(W)}n.remove(R)}function F(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let W=R.source,se=u.get(W);delete se[b.__cacheKey],a.memory.textures--}function $(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&U(W),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let he=0;he<b.__webglFramebuffer[ie].length;he++)r.deleteFramebuffer(b.__webglFramebuffer[ie][he]);else r.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[ie]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let se=R.textures;for(let ie=0,he=se.length;ie<he;ie++){let ge=n.get(se[ie]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(se[ie])}n.remove(R)}let V=0;function P(){V=0}function j(){return V}function Se(R){V=R}function Ue(){let R=V;return R>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,R}function Z(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ce(R,b){let W=n.get(R);if(R.isVideoTexture&&ht(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let se=R.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(W,R,b);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function xe(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){at(W,R,b);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function be(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){at(W,R,b);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function ue(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){J(W,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}let Ce={[oc]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[lc]:r.MIRRORED_REPEAT},_t={[ln]:r.NEAREST,[pm]:r.NEAREST_MIPMAP_NEAREST,[Po]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Nc]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Ee={[xm]:r.NEVER,[gf]:r.ALWAYS,[vm]:r.LESS,[pf]:r.LEQUAL,[ym]:r.EQUAL,[mf]:r.GEQUAL,[Sm]:r.GREATER,[Mm]:r.NOTEQUAL};function He(R,b){if(b.type===_i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Nc||b.magFilter===Po||b.magFilter===pr||b.minFilter===Un||b.minFilter===Nc||b.minFilter===Po||b.minFilter===pr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Ce[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Ce[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Ce[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,_t[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ln||b.minFilter!==Po&&b.minFilter!==pr||b.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Le(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",L),I(b));let se=b.source,ie=u.get(se);ie===void 0&&(ie={},u.set(se,ie));let he=Z(b);if(he!==R.__cacheKey){ie[he]===void 0&&(ie[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[he].usedTimes++;let ge=ie[R.__cacheKey];ge!==void 0&&(ie[R.__cacheKey].usedTimes--,ge.usedTimes===0&&F(b)),R.__cacheKey=he,R.__webglTexture=ie[he].texture}return W}function Oe(R,b,W){return Math.floor(Math.floor(R/W)/b)}function ct(R,b,W,se){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,se,b.data);else{he.sort((N,Q)=>N.start-Q.start);let ge=0;for(let N=1;N<he.length;N++){let Q=he[ge],K=he[N],de=Q.start+Q.count,oe=Oe(K.start,b.width,4),pe=Oe(Q.start,b.width,4);K.start<=de+1&&oe===pe&&Oe(K.start+K.count-1,b.width,4)===oe?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++ge,he[ge]=K)}he.length=ge+1;let X=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let N=0,Q=he.length;N<Q;N++){let K=he[N],de=Math.floor(K.start/4),oe=Math.ceil(K.count/4),pe=de%b.width,ae=Math.floor(de/b.width),me=oe,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae),t.texSubImage2D(r.TEXTURE_2D,0,pe,ae,me,re,W,se,b.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,X),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function at(R,b,W){let se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=r.TEXTURE_3D);let ie=Le(R,b),he=b.source;t.bindTexture(se,R.__webglTexture,r.TEXTURE0+W);let ge=n.get(he);if(he.version!==ge.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=it.getPrimaries(it.workingColorSpace),te=b.colorSpace===gr?null:it.getPrimaries(b.colorSpace),_e=b.colorSpace===gr||re===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ee=v(b.image,!1,i.maxTextureSize);ee=De(b,ee);let le=s.convert(b.format,b.colorSpace),N=s.convert(b.type),Q=A(b.internalFormat,le,N,b.normalized,b.colorSpace,b.isVideoTexture);He(se,b);let K,de=b.mipmaps,oe=b.isVideoTexture!==!0,pe=ge.__version===void 0||ie===!0,ae=he.dataReady,me=S(b,ee);if(b.isDepthTexture)Q=x(b.format===mr,b.type),pe&&(oe?t.texStorage2D(r.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,le,N,null));else if(b.isDataTexture)if(de.length>0){oe&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,de[0].width,de[0].height);for(let re=0,te=de.length;re<te;re++)K=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,N,K.data):t.texImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,le,N,K.data);b.generateMipmaps=!1}else oe?(pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,ee.width,ee.height),ae&&ct(b,ee,le,N)):t.texImage2D(r.TEXTURE_2D,0,Q,ee.width,ee.height,0,le,N,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,de[0].width,de[0].height,ee.depth);for(let re=0,te=de.length;re<te;re++)if(K=de[re],b.format!==Ii)if(le!==null)if(oe){if(ae)if(b.layerUpdates.size>0){let _e=Ef(K.width,K.height,b.format,b.type);for(let ne of b.layerUpdates){let Te=K.data.subarray(ne*_e/K.data.BYTES_PER_ELEMENT,(ne+1)*_e/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ne,K.width,K.height,1,le,Te)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,ee.depth,le,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,ee.depth,0,K.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,ee.depth,le,N,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,ee.depth,0,le,N,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{oe&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,de[0].width,de[0].height);for(let re=0,te=de.length;re<te;re++)K=de[re],b.format!==Ii?le!==null?oe?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,K.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,K.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,N,K.data):t.texImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,le,N,K.data)}else if(b.isDataArrayTexture)if(oe){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,ee.width,ee.height,ee.depth),ae)if(b.layerUpdates.size>0){let re=Ef(ee.width,ee.height,b.format,b.type);for(let te of b.layerUpdates){let _e=ee.data.subarray(te*re/ee.data.BYTES_PER_ELEMENT,(te+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,le,N,_e)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,N,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,le,N,ee.data);else if(b.isData3DTexture)oe?(pe&&t.texStorage3D(r.TEXTURE_3D,me,Q,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,N,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,le,N,ee.data);else if(b.isFramebufferTexture){if(pe)if(oe)t.texStorage2D(r.TEXTURE_2D,me,Q,ee.width,ee.height);else{let re=ee.width,te=ee.height;for(let _e=0;_e<me;_e++)t.texImage2D(r.TEXTURE_2D,_e,Q,re,te,0,le,N,null),re>>=1,te>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),d.add(b),re.onpaint=te=>{let _e=te.changedElements;for(let ne of d)_e.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let _e=r.RGBA,ne=r.RGBA,Te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_e,ne,Te,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&pe){let re=Be(de[0]);t.texStorage2D(r.TEXTURE_2D,me,Q,re.width,re.height)}for(let re=0,te=de.length;re<te;re++)K=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,N,K):t.texImage2D(r.TEXTURE_2D,re,Q,le,N,K);b.generateMipmaps=!1}else if(oe){if(pe){let re=Be(ee);t.texStorage2D(r.TEXTURE_2D,me,Q,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,N,ee)}else t.texImage2D(r.TEXTURE_2D,0,Q,le,N,ee);T(b)&&b.mipmapsAutoUpdate===!0&&y(se),ge.__version=he.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,W){if(b.image.length!==6)return;let se=Le(R,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);let he=n.get(ie);if(ie.version!==he.__version||se===!0){t.activeTexture(r.TEXTURE0+W);let ge=it.getPrimaries(it.workingColorSpace),X=b.colorSpace===gr?null:it.getPrimaries(b.colorSpace),ee=b.colorSpace===gr||ge===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let le=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!le&&!N?Q[ne]=v(b.image[ne],!0,i.maxCubemapSize):Q[ne]=N?b.image[ne].image:b.image[ne],Q[ne]=De(b,Q[ne]);let K=Q[0],de=s.convert(b.format,b.colorSpace),oe=s.convert(b.type),pe=A(b.internalFormat,de,oe,b.normalized,b.colorSpace),ae=b.isVideoTexture!==!0,me=he.__version===void 0||se===!0,re=ie.dataReady,te=S(b,K);He(r.TEXTURE_CUBE_MAP,b);let _e;if(b.isDepthTexture){if(pe=x(b.format===mr,b.type),me)if(ae)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,pe,K.width,K.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,K.width,K.height,0,de,oe,null)}else if(le){ae&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,pe,K.width,K.height);for(let ne=0;ne<6;ne++){_e=Q[ne].mipmaps;for(let Te=0;Te<_e.length;Te++){let et=_e[Te];b.format!==Ii?de!==null?ae?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,et.width,et.height,de,et.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,pe,et.width,et.height,0,et.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,et.width,et.height,de,oe,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,pe,et.width,et.height,0,de,oe,et.data)}}}else{if(_e=b.mipmaps,ae&&me){_e.length>0&&te++;let ne=Be(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,pe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(N){ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,de,oe,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Q[ne].width,Q[ne].height,0,de,oe,Q[ne].data);for(let Te=0;Te<_e.length;Te++){let We=_e[Te].image[ne].image;ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,We.width,We.height,de,oe,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,pe,We.width,We.height,0,de,oe,We.data)}}else{ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de,oe,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,de,oe,Q[ne]);for(let Te=0;Te<_e.length;Te++){let et=_e[Te];ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,de,oe,et.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,pe,de,oe,et.image[ne])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),he.__version=ie.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function je(R,b,W,se,ie,he){let ge=s.convert(W.format,W.colorSpace),X=s.convert(W.type),ee=A(W.internalFormat,ge,X,W.normalized,W.colorSpace),le=n.get(b),N=n.get(W);if(N.__renderTarget=b,!le.__hasExternalTextures){let Q=Math.max(1,b.width>>he),K=Math.max(1,b.height>>he);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,he,ee,Q,K,b.depth,0,ge,X,null):t.texImage2D(ie,he,ee,Q,K,0,ge,X,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ie,N.__webglTexture,0,ke(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ie,N.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(R,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let se=b.depthTexture,ie=se&&se.isDepthTexture?se.type:null,he=x(b.stencilBuffer,ie),ge=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(b),he,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(b),he,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,he,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{let se=b.textures;for(let ie=0;ie<se.length;ie++){let he=se[ie],ge=s.convert(he.format,he.colorSpace),X=s.convert(he.type),ee=A(he.internalFormat,ge,X,he.normalized,he.colorSpace);fe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(b),ee,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(b),ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ee,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(R,b,W){let se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(b.depthTexture);ie.__renderTarget=b;let he=se?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||he.width!==b.width||he.height!==b.height)&&(he.width=b.width,he.height=b.height,b.depthTexture.needsUpdate=!0),se?ue(b.depthTexture,0):ce(b.depthTexture,0);let ge=ie.__webglTexture,X=ke(b),ee=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,le=b.depthTexture.format===mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===hr)fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ee,ge,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,le,ee,ge,0);else if(b.depthTexture.format===mr)fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ee,ge,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,le,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){let b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=se}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let se=0;se<6;se++)vt(b.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?vt(b.__webglFramebuffer[0],R,0):vt(b.__webglFramebuffer,R,0);else if(W){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=r.createRenderbuffer(),Wt(b.__webglDepthbuffer[se],R,!1);else{let ie=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,he)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Wt(b.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,he)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,b,W){let se=n.get(R);b!==void 0&&je(se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&rt(R)}function Vt(R){let b=R.texture,W=n.get(R),se=n.get(b);R.addEventListener("dispose",D),I(R);let ie=R.textures,he=R.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=b.version,a.memory.textures++),he){W.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps.length>0){W.__webglFramebuffer[X]=[];for(let ee=0;ee<b.mipmaps.length;ee++)W.__webglFramebuffer[X][ee]=r.createFramebuffer()}else W.__webglFramebuffer[X]=r.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)W.__webglFramebuffer[X]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ge)for(let X=0,ee=ie.length;X<ee;X++){let le=n.get(ie[X]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let X=0;X<ie.length;X++){let ee=ie[X];W.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[X]);let le=s.convert(ee.format,ee.colorSpace),N=s.convert(ee.type),Q=A(ee.internalFormat,le,N,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),K=ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,W.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),He(r.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)je(W.__webglFramebuffer[X][ee],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee);else je(W.__webglFramebuffer[X],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);T(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let X=0,ee=ie.length;X<ee;X++){let le=ie[X],N=n.get(le),Q=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),He(Q,le),je(W.__webglFramebuffer,R,le,r.COLOR_ATTACHMENT0+X,Q,0),T(le)&&y(Q)}t.unbindTexture()}else{let X=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(X,se.__webglTexture),He(X,b),b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)je(W.__webglFramebuffer[ee],R,b,r.COLOR_ATTACHMENT0,X,ee);else je(W.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,X,0);T(b)?y(X):b.mipmaps.length>0&&r.texParameteri(X,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&rt(R)}function k(R){let b=R.textures;for(let W=0,se=b.length;W<se;W++){let ie=b[W];if(T(ie)&&ie.mipmapsAutoUpdate===!0){let he=E(R),ge=n.get(ie).__webglTexture;t.bindTexture(he,ge),y(he),t.unbindTexture()}}}let ut=[];function ot(R){if(R.samples>0){if(fe(R)===!1){let b=R.textures,W=R.width,se=R.height,ie=r.COLOR_BUFFER_BIT,he=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),X=b.length>1;if(X)for(let le=0;le<b.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let le=0;le<b.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let N=n.get(b[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,W,se,0,0,W,se,ie,r.NEAREST),l===!0&&(ut.length=0,ut.push(r.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ut.push(he),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let le=0;le<b.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let N=n.get(b[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ke(R){return Math.min(i.maxSamples,R.samples)}function fe(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function De(R,b){let W=R.colorSpace,se=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==eo&&W!==gr&&(it.getTransfer(W)===pt?(se!==Ii||ie!==Yn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",W)),b}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=P,this.getTextureUnits=j,this.setTextureUnits=Se,this.setTexture2D=ce,this.setTexture2DArray=xe,this.setTexture3D=be,this.setTextureCube=ue,this.rebindTextures=Ot,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=fe,this.dispose=O}function qM(r,e){function t(n,i=gr){let s,a=it.getTransfer(i);if(n===Yn)return r.UNSIGNED_BYTE;if(n===Oc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lf)return r.BYTE;if(n===cf)return r.SHORT;if(n===ma)return r.UNSIGNED_SHORT;if(n===Uc)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===_i)return r.FLOAT;if(n===Pi)return r.HALF_FLOAT;if(n===ff)return r.ALPHA;if(n===df)return r.RGB;if(n===Ii)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===Bc)return r.RED;if(n===zc)return r.RED_INTEGER;if(n===Vr)return r.RG;if(n===kc)return r.RG_INTEGER;if(n===Gc)return r.RGBA_INTEGER;if(n===Io||n===Lo||n===Do||n===No)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Hc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Uo||n===Kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qc||n===Yc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jc)return s.COMPRESSED_R11_EAC;if(n===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return s.COMPRESSED_RG11_EAC;if(n===Kc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qc||n===jc||n===eh||n===th||n===nh||n===ih||n===rh||n===sh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fh||n===dh||n===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fh)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===Oo||n===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}function $M(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,bf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===On&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===On&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ug),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KM(r,e,t,n){let i={},s={};function a(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,T){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let E=T.program;n.updateUBOMapping(v,E);let A=e.render.frame;s[v.id]!==A&&(c(v),s[v.id]=A)}function l(v){let T=r.createBuffer(),y=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,y,E),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,x=y.length;A<x;A++){let S=y[A];if(Array.isArray(S))for(let I=0,M=S.length;I<M;I++)h(S[I],A,I,E);else h(S,A,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,T,y,E){if(f(v,T,y,E)===!0){let A=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let I=0;I<x.length;I++){let M=x[I],L=_(M,!0);d(M,v.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function f(v,T,y,E){let A=v.value,x=T+"_"+y;if(Array.isArray(A)){E[x]===void 0&&(E[x]=[]);let S=E[x],I=!1;for(let M=0;M<A.length;M++)u(A[M],S,M)===!0&&(I=!0);return I}return u(A,E,x)}function u(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let E=T[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,E=16;for(let x=0,S=T.length;x<S;x++){let I=Array.isArray(T[x])?T[x]:[T[x]];for(let M=0,L=I.length;M<L;M++){let D=I[M],U=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(T[x])||Array.isArray(D.value),O=y;for(let F=0,$=U.length;F<$;F++){let V=U[F],P=_(V,C),j=y%E,Se=j%P.boundary,Ue=j+Se;y+=Se,Ue!==0&&E-Ue<P.storage&&(y+=E-Ue),F===0&&(O=y),y+=P.storage}let z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new z((y-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let A=y%E;return A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function _(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}function jM(){return qi===null&&(qi=new co(QM,16,16,Vr,Pi),qi.name="DFG_LUT",qi.minFilter=Un,qi.magFilter=Un,qi.wrapS=Oi,qi.wrapT=Oi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var gx,_x,xx,vx,yx,Sx,Mx,bx,Tx,wx,Ex,Ax,Cx,Rx,Px,Ix,Lx,Dx,Nx,Ux,Ox,Fx,Bx,zx,kx,Gx,Vx,Hx,Wx,Xx,qx,Yx,Zx,Jx,$x,Kx,Qx,jx,ev,tv,nv,iv,rv,sv,av,ov,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Sv,Mv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Ov,Fv,Bv,zv,kv,Gv,Vv,Hv,Wv,Xv,qv,Yv,Zv,Jv,$v,Kv,Qv,jv,ey,ty,ny,iy,ry,sy,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,_y,xy,vy,yy,Sy,My,by,Ty,wy,Ey,Ay,Cy,Ry,Py,Iy,Ly,Dy,Ny,Uy,Oy,Fy,By,zy,ky,Gy,Vy,Hy,Wy,Xy,qy,Yy,Zy,Ze,Me,Yi,yh,Jy,ng,zo,Nm,tS,nS,ig,rg,iS,rS,sS,Mh,gS,sg,ag,og,lg,cg,hg,Bm,zm,km,Gm,Vm,Pf,If,Lf,Cf,_a,sM,aM,Xm,hM,Sh,gM,xM,yM,MM,TM,AM,Nf,Uf,UM,zM,kM,GM,VM,eg,Fo,Rf,YM,ZM,Of,Ff,JM,ug,QM,qi,bh,Bf=Rr(()=>{Af();Af();gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,dv=`uniform sampler2D dfgLUT;
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
}`,pv=`
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform float backgroundBlurriness;
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,by=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,zy=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:gx,alphahash_pars_fragment:_x,alphamap_fragment:xx,alphamap_pars_fragment:vx,alphatest_fragment:yx,alphatest_pars_fragment:Sx,aomap_fragment:Mx,aomap_pars_fragment:bx,batching_pars_vertex:Tx,batching_vertex:wx,begin_vertex:Ex,beginnormal_vertex:Ax,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Ox,color_pars_vertex:Fx,color_vertex:Bx,common:zx,defaultnormal_vertex:kx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Vx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Jx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ov,envmap_vertex:Kx,fog_vertex:Qx,fog_pars_vertex:jx,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:av,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:dv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:Sv,map_fragment:Mv,map_pars_fragment:bv,map_particle_fragment:Tv,map_particle_pars_fragment:wv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Av,morphinstance_vertex:Cv,morphcolor_vertex:Rv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Lv,normal_fragment_begin:Dv,normal_fragment_maps:Nv,normal_pars_fragment:Uv,normal_pars_vertex:Ov,normal_vertex:Fv,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Vv,opaque_fragment:Hv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:Zv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:Qv,shadowmap_vertex:jv,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:ry,specularmap_fragment:sy,specularmap_pars_fragment:ay,tonemapping_fragment:oy,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:_y,backgroundCube_frag:xy,cube_vert:vy,cube_frag:yy,depth_vert:Sy,depth_frag:My,distance_vert:by,distance_frag:Ty,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:Ay,linedashed_frag:Cy,meshbasic_vert:Ry,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:By,meshphysical_vert:zy,meshphysical_frag:ky,meshtoon_vert:Gy,meshtoon_frag:Vy,points_vert:Hy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Zy},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yi={basic:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Tn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Tn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Tn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Tn([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Tn([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Yi.physical={uniforms:Tn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};yh={r:0,b:0,g:0},Jy=new mt,ng=new Ge;ng.set(-1,0,0,0,1,0,0,0,1);zo=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dr(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:os});s.uniforms.tEquirect.value=t;let a=new hn(i,s),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=Un),new ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Nm=256,tS=3,nS=20,ig=256,rg=16,iS=3,rS=new G,sS=new Ve,Mh=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ua(1,10,null),this._boxMesh=new hn(new dr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=rS}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(sS));let p=new ua(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nm,yf(e))}_fromTexture(e,t){e.mapping===cs||e.mapping===pa?this._setSize(e.image.length===0?Nm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Um(e,!1,!1),n=Math.log2(e)-tS;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Um(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===cs||e.mapping===pa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Om()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=aS(),this._integrationMaterial=oS());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/rg);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-iS)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ig*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lS());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};gS={[ef]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[sf]:"AGX_TONE_MAPPING",[af]:"NEUTRAL_TONE_MAPPING",[rf]:"CUSTOM_TONE_MAPPING"};sg=new qn,ag=new fr(1,1),og=new mo(1),lg=new io,cg=new fc,hg=new po,Bm=[],zm=[],km=new Float32Array(16),Gm=new Float32Array(9),Vm=new Float32Array(4);Pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FS(t.type)}},If=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iM(t.type)}},Lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Cf=/(\w+)(\])?(\[|\.)?/g;_a=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rM(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};sM=37297,aM=0;Xm=new Ge;hM={[ef]:"Linear",[tf]:"Reinhard",[nf]:"Cineon",[Ro]:"ACESFilmic",[sf]:"AgX",[af]:"Neutral",[rf]:"Custom"};Sh=new G;gM=/^[ \t]*#include +<([\w\d./]+)>/gm;xM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;yM={[Co]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};MM={[pa]:"ENVMAP_MODE_REFRACTION"};TM={[ju]:"ENVMAP_BLENDING_MULTIPLY",[fm]:"ENVMAP_BLENDING_MIX",[dm]:"ENVMAP_BLENDING_ADD"};AM=0,Nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uf(e),t.set(e,n)),n}},Uf=class{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}};UM=0;zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`,GM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],VM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],eg=new mt,Fo=new G,Rf=new G;YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new go(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hi({vertexShader:YM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends Fi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new Of,g={},v=t.getContextAttributes(),T=null,y=null,E=[],A=[],x=new qe,S=null,I=null,M=new Nn;M.viewport=new Pt;let L=new Nn;L.viewport=new Pt;let D=[M,L],U=new Ic,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=E[Z];return ce===void 0&&(ce=new ta,E[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=E[Z];return ce===void 0&&(ce=new ta,E[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=E[Z];return ce===void 0&&(ce=new ta,E[Z]=ce),ce.getHandSpace()};function z(Z){let ce=A.indexOf(Z.inputSource);if(ce===-1)return;let xe=E[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",$);for(let Z=0;Z<E.length;Z++){let ce=A[Z];ce!==null&&(A[Z]=null,E[Z].disconnect(ce))}C=null,O=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(T),u=null,f=null,d=null,i=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",F),i.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?mr:hr,be=v.stencil?hs:Ri);let Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ri(f.textureWidth,f.textureHeight,{format:Ii,type:Yn,depthTexture:new fr(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ri(u.framebufferWidth,u.framebufferHeight,{format:Ii,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Z){for(let ce=0;ce<Z.removed.length;ce++){let xe=Z.removed[ce],be=A.indexOf(xe);be>=0&&(A[be]=null,E[be].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){let xe=Z.added[ce],be=A.indexOf(xe);if(be===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=A.length){A.push(xe),be=Ce;break}else if(A[Ce]===null){A[Ce]=xe,be=Ce;break}if(be===-1)break}let ue=E[be];ue&&ue.connect(xe)}}function V(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ce=Z.near,xe=Z.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),U.near=L.near=M.near=ce,U.far=L.far=M.far=xe,(C!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,O=U.far),U.layers.mask=Z.layers.mask|6,M.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let be=Z.parent,ue=U.cameras;V(U,be);for(let Ce=0;Ce<ue.length;Ce++)V(ue[Ce],be);U.projectionMatrix.copy(M.projectionMatrix),U.projectionMatrixInverse.copy(M.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),P(Z,U,be)};function P(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(Z){return g[Z]};let j=null;function Se(Z,ce){if(h=ce.getViewerPose(c||a),m=ce,h!==null){let xe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let be=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,be=!0);for(let Ee=0;Ee<xe.length;Ee++){let He=xe[Ee],Le=null;if(u!==null)Le=u.getViewport(He);else{let ct=d.getViewSubImage(f,He);Le=ct.viewport,Ee===0&&(e.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(y))}let Oe=D[Ee];Oe===void 0&&(Oe=new Nn,Oe.layers.enable(Ee),Oe.viewport=new Pt,D[Ee]=Oe),Oe.matrix.fromArray(He.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(He.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Le.x,Le.y,Le.width,Le.height),Ee===0&&(U.matrix.copy(Oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),be===!0&&U.cameras.push(Oe)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ee=d.getDepthInformation(xe[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<xe.length;Ee++){let He=xe[Ee].camera;if(He){let Le=g[He];Le||(Le=new go,g[He]=Le);let Oe=d.getCameraImage(He);Le.sourceTexture=Oe}}}}for(let xe=0;xe<E.length;xe++){let be=A[xe],ue=E[xe];be!==null&&ue!==void 0&&ue.update(be,ce,c||a)}j&&j(Z,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),m=null}let Ue=new tg;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},JM=new mt,ug=new Ge;ug.set(-1,0,0,0,1,0,0,0,1);QM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;bh=class{constructor(e={}){let{canvas:t=Tm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Yn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=u,p=new Set([Gc,kc,zc]),g=new Set([Yn,Ri,ma,hs,Oc,Fc]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,x=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,L=!1,D=null,U=null,C=null,O=null;this._outputColorSpace=Dn;let z=0,F=0,$=null,V=-1,P=null,j=new Pt,Se=new Pt,Ue=null,Z=new Ve(0),ce=0,xe=t.width,be=t.height,ue=1,Ce=null,_t=null,Ee=new Pt(0,0,xe,be),He=new Pt(0,0,xe,be),Le=!1,Oe=new Ur,ct=new dc,at=!1,J=!1,je=new mt,Wt=new G,vt=new Pt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Vt(){return $===null?ue:1}let k=n;function ut(w,B){return t.getContext(w,B)}let ot,ke,fe,ht,De,Be,R,b,W,se,ie,he,ge,X,ee,le,N,Q,K,de,oe,pe,ae;try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),k===null){let B="webgl2";if(k=ut(B,w),k===null)throw ut(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}me()}catch(w){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ze("WebGLRenderer: "+w.message),w}function me(){ot=new hS(k),ot.init(),oe=new qM(k,ot),ke=new jy(k,ot,e,oe),fe=new WM(k,ot),ke.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),U=k.createFramebuffer(),C=k.createFramebuffer(),O=k.createFramebuffer(),ht=new dS(k),De=new PM,Be=new XM(k,ot,fe,De,ke,oe,ht),R=new cS(M),b=new mx(k),pe=new Ky(k,b),W=new uS(k,b,ht,pe),se=new mS(k,W,b,pe,ht),Q=new pS(k,ke,Be),ee=new eS(De),ie=new RM(M,R,ot,ke,pe,ee),he=new $M(M,De),ge=new LM,X=new BM(ot),N=new $y(M,R,fe,se,m,l),le=new HM(M,se,ke),ae=new KM(k,ht,ke,fe),K=new Qy(k,ot,ht),de=new fS(k,ot,ht),ht.programs=ie.programs,M.capabilities=ke,M.extensions=ot,M.properties=De,M.renderLists=ge,M.shadowMap=le,M.state=fe,M.info=ht}_!==Yn&&(I=new _S(_,t.width,t.height,o,i,s));let re=new Ff(M,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(w){w!==void 0&&(ue=w,this.setSize(xe,be,!1))},this.getSize=function(w){return w.set(xe,be)},this.setSize=function(w,B,Y=!0){if(re.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=w,be=B,t.width=Math.floor(w*ue),t.height=Math.floor(B*ue),Y===!0&&(t.style.width=w+"px",t.style.height=B+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(xe*ue,be*ue).floor()},this.setDrawingBufferSize=function(w,B,Y){xe=w,be=B,ue=Y,t.width=Math.floor(w*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===Yn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,B,Y,H){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,B,Y,H),fe.viewport(j.copy(Ee).multiplyScalar(Vt()).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,B,Y,H){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,B,Y,H),fe.scissor(Se.copy(He).multiplyScalar(Vt()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){fe.setScissorTest(Le=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,Y=!0){let H=0;if(w){let q=!1;if($!==null){let ye=$.texture.format;q=p.has(ye)}if(q){let ye=$.texture.type,Re=g.has(ye),ve=N.getClearColor(),we=N.getClearAlpha(),Ne=ve.r,Xe=ve.g,tt=ve.b;Re?(v[0]=Ne,v[1]=Xe,v[2]=tt,v[3]=we,k.clearBufferuiv(k.COLOR,0,v)):(T[0]=Ne,T[1]=Xe,T[2]=tt,T[3]=we,k.clearBufferiv(k.COLOR,0,T))}else H|=k.COLOR_BUFFER_BIT}B&&(H|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),N.dispose(),ge.dispose(),X.dispose(),Be.dispose(),De.dispose(),R.dispose(),se.dispose(),W.dispose(),pe.dispose(),ae.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",yt),re.removeEventListener("sessionend",dt),Qt.stop()};function te(w){w.preventDefault(),xf("WebGLRenderer: Context Lost."),L=!0}function _e(){xf("WebGLRenderer: Context Restored."),L=!1;let w=ht.autoReset,B=le.enabled,Y=le.autoUpdate,H=le.needsUpdate,q=le.type;me(),ht.autoReset=w,le.enabled=B,le.autoUpdate=Y,le.needsUpdate=H,le.type=q}function ne(w){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){let B=w.target;B.removeEventListener("dispose",Te),et(B)}function et(w){We(w),De.remove(w)}function We(w){let B=De.get(w).programs;B!==void 0&&(B.forEach(function(Y){ie.releaseProgram(Y)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,H,q,ye){B===null&&(B=rt);let Re=q.isMesh&&q.matrixWorld.determinantAffine()<0,ve=pi(w,B,Y,H,q);fe.setMaterial(H,Re);let we=Y.index,Ne=1;if(H.wireframe===!0){if(we=W.getWireframeAttribute(Y),we===void 0)return;Ne=2}let Xe=Y.drawRange,tt=Y.attributes.position,Pe=Xe.start*Ne,nt=(Xe.start+Xe.count)*Ne;ye!==null&&(Pe=Math.max(Pe,ye.start*Ne),nt=Math.min(nt,(ye.start+ye.count)*Ne)),we!==null?(Pe=Math.max(Pe,0),nt=Math.min(nt,we.count)):tt!=null&&(Pe=Math.max(Pe,0),nt=Math.min(nt,tt.count));let Yt=nt-Pe;if(Yt<0||Yt===1/0)return;pe.setup(q,H,ve,Y,we);let wt,Mt=K;if(we!==null&&(wt=b.get(we),Mt=de,Mt.setIndex(wt)),q.isMesh)H.wireframe===!0?(fe.setLineWidth(H.wireframeLinewidth*Vt()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(q.isLine){let yn=H.linewidth;yn===void 0&&(yn=1),fe.setLineWidth(yn*Vt()),q.isLineSegments?Mt.setMode(k.LINES):q.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else q.isPoints?Mt.setMode(k.POINTS):q.isSprite&&Mt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let yn=q._multiDrawStarts,Ie=q._multiDrawCounts,Ln=q._multiDrawCount,ft=we?b.get(we).bytesPerElement:1,ts=De.get(H).currentProgram.getUniforms();for(let Sn=0;Sn<Ln;Sn++)ts.setValue(k,"_gl_DrawID",Sn),Mt.render(yn[Sn]/ft,Ie[Sn])}else if(q.isInstancedMesh)Mt.renderInstances(Pe,Yt,q.count);else if(Y.isInstancedBufferGeometry){let yn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ie=Math.min(Y.instanceCount,yn);Mt.renderInstances(Pe,Yt,Ie)}else Mt.render(Pe,Yt)};function At(w,B,Y,H){D!==null&&w.isNodeMaterial&&D.setObject(H,w),at===!0&&ee.setState(w,Y,!1),w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,ei(w,B,H),w.side=Gr,w.needsUpdate=!0,ei(w,B,H),w.side=Wi):ei(w,B,H)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),D!==null&&D.renderStart(w,B,Y),A=X.get(Y),A.init(B),S.push(A),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),w!==Y&&w.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),J=this.localClippingEnabled,at=ee.init(this.clippingPlanes,J),at===!0&&ee.setGlobalState(this.clippingPlanes,B),D!==null&&le.render(A.state.shadowsArray,Y,B);let H=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ye=q.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){let ve=ye[Re];At(ve,Y,B,q),H.add(ve)}else At(ye,Y,B,q),H.add(ye)}),A=S.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(w,B,Y=null){let H=this.compile(w,B,Y);return new Promise(q=>{function ye(){if(H.forEach(function(Re){let we=De.get(Re).currentProgram;(we===void 0||we.isReady())&&H.delete(Re)}),H.size===0){q(w);return}setTimeout(ye,10)}ot.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Xt=null;function Ct(w){Xt&&Xt(w)}function yt(){Qt.stop()}function dt(){Qt.start()}let Qt=new tg;Qt.setAnimationLoop(Ct),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(w){Xt=w,re.setAnimationLoop(w),w===null?Qt.stop():Qt.start()},re.addEventListener("sessionstart",yt),re.addEventListener("sessionend",dt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,B);let Y=re.enabled===!0&&re.isPresenting===!0,H=I!==null&&($===null||Y)&&I.begin(M,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(B),B=re.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,B,$),A=X.get(w,S.length),A.init(B),A.state.textureUnits=Be.getTextureUnits(),S.push(A),je.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ct.setFromArrayCamera(B):Oe.setFromProjectionMatrix(je,gi,B.reversedDepth),J=this.localClippingEnabled,at=ee.init(this.clippingPlanes,J),E=ge.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Re=M.xr.getDepthSensingMesh();Re!==null&&St(Re,B,-1/0,M.sortObjects)}St(w,B,0,M.sortObjects),E.finish(),D!==null&&D.updateLights(A.state.lightsArray),M.sortObjects===!0&&E.sort(Ce,_t),Ot=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ot&&N.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),at===!0&&ee.beginShadows();let q=A.state.shadowsArray;if(le.render(q,w,B),at===!0&&ee.endShadows(),(H&&I.hasRenderPass())===!1){let Re=E.opaque,ve=E.transmissive;if(A.setupLights(),B.isArrayCamera){let we=B.cameras;if(ve.length>0)for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){let tt=we[Ne];jn(Re,ve,w,tt)}Ot&&N.render(w);for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){let tt=we[Ne];vn(E,w,tt,tt.viewport)}}else ve.length>0&&jn(Re,ve,w,B),Ot&&N.render(w),vn(E,w,B)}$!==null&&F===0&&(Be.updateMultisampleRenderTarget($),Be.updateRenderTargetMipmap($)),H&&I.end(M),w.isScene===!0&&w.onAfterRender(M,w,B),pe.resetDefaultState(),V=-1,P=null,S.pop(),S.length>0?(A=S[S.length-1],Be.setTextureUnits(A.state.textureUnits),at===!0&&ee.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,D!==null&&D.renderEnd()};function St(w,B,Y,H){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){let Re=B.isArrayCamera?ct:Oe;if(!w.frustumCulled||w.intersectsFrustum(Re)){H&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);let ve=se.update(w),we=w.material;we.visible&&E.push(w,ve,we,Y,vt.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Re=B.isArrayCamera?ct:Oe;if(!w.frustumCulled||w.intersectsFrustum(Re)){let ve=se.update(w),we=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),vt.copy(ve.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(we)){let Ne=ve.groups;for(let Xe=0,tt=Ne.length;Xe<tt;Xe++){let Pe=Ne[Xe],nt=we[Pe.materialIndex];nt&&nt.visible&&E.push(w,ve,nt,Y,vt.z,Pe,B)}}else we.visible&&E.push(w,ve,we,Y,vt.z,null,B)}}}let ye=w.children;for(let Re=0,ve=ye.length;Re<ve;Re++)St(ye[Re],B,Y,H)}function vn(w,B,Y,H){let{opaque:q,transmissive:ye,transparent:Re}=w;A.setupLightsView(Y),at===!0&&ee.setGlobalState(M.clippingPlanes,Y),H&&fe.viewport(j.copy(H)),q.length>0&&Ft(q,B,Y),ye.length>0&&Ft(ye,B,Y),Re.length>0&&Ft(Re,B,Y),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function jn(w,B,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Pe=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:Pe?Pi:Yn,minFilter:pr,samples:Math.max(4,ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ye=A.state.transmissionRenderTarget[H.id],Re=H.viewport||j;ye.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);let ve=M.getRenderTarget(),we=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(Z),ce=M.getClearAlpha(),ce<1&&M.setClearColor(16777215,.5),M.clear(),Ot&&N.render(Y);let Xe=M.toneMapping;M.toneMapping=Xi;let tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),at===!0&&ee.setGlobalState(M.clippingPlanes,H),Ft(w,Y,H),Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let nt=0,Yt=B.length;nt<Yt;nt++){let wt=B[nt],{object:Mt,geometry:yn,material:Ie,group:Ln}=wt;if(Ie.side===Wi&&Mt.layers.test(H.layers)){let ft=Ie.side;Ie.side=On,Ie.needsUpdate=!0,qt(Mt,Y,H,yn,Ie,Ln),Ie.side=ft,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye))}M.setRenderTarget(ve,we,Ne),M.setClearColor(Z,ce),tt!==void 0&&(H.viewport=tt),M.toneMapping=Xe}function Ft(w,B,Y){let H=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ye=w.length;q<ye;q++){let Re=w[q],{object:ve,geometry:we,group:Ne}=Re,Xe=Re.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),ve.layers.test(Y.layers)&&qt(ve,B,Y,we,Xe,Ne)}}function qt(w,B,Y,H,q,ye){D!==null&&q.isNodeMaterial&&D.setObject(w,q),w.onBeforeRender(M,B,Y,H,q,ye),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(M,B,Y,H,w,ye),q.transparent===!0&&q.side===Wi&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,M.renderBufferDirect(Y,B,H,q,w,ye),q.side=Gr,q.needsUpdate=!0,M.renderBufferDirect(Y,B,H,q,w,ye),q.side=Wi):M.renderBufferDirect(Y,B,H,q,w,ye),w.onAfterRender(M,B,Y,H,q,ye)}function jt(w){let B=0;for(let Y of w)Y.texture!==null&&B++;return B}function ei(w,B,Y){B.isScene!==!0&&(B=rt);let H=De.get(w),q=A.state.lights,ye=A.state.shadowsArray,Re=q.state.version,ve=ie.getParameters(w,q.state,ye,B,Y,A.state.lightProbeGridArray),we=ie.getProgramCacheKey(ve),Ne=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let Xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=R.get(w.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Te),Ne=new Map,H.programs=Ne,H.programVariants=new Map);let tt=Ne.get(we);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===Re)return Bt(w,ve),tt}else ve.uniforms=ie.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,Y,ve),w.onBeforeCompile(ve,M),tt=ie.acquireProgram(ve,we),Ne.set(we,tt),H.uniforms=ve.uniforms;let Pe=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ee.uniform),Bt(w,ve),H.needsLights=Ml(w),H.lightsStateVersion=Re,H.needsLights&&(Pe.ambientLightColor.value=q.state.ambient,Pe.lightProbe.value=q.state.probe,Pe.sunLights.value=q.state.sun,Pe.sunLightShadows.value=q.state.sunShadow,Pe.directionalLights.value=q.state.directional,Pe.directionalLightShadows.value=q.state.directionalShadow,Pe.spotLights.value=q.state.spot,Pe.spotLightShadows.value=q.state.spotShadow,Pe.rectAreaLights.value=q.state.rectArea,Pe.ltc_1.value=q.state.rectAreaLTC1,Pe.ltc_2.value=q.state.rectAreaLTC2,Pe.pointLights.value=q.state.point,Pe.pointLightShadows.value=q.state.pointShadow,Pe.hemisphereLights.value=q.state.hemi,Pe.sunShadowMatrix.value=q.state.sunShadowMatrix,Pe.sunShadowCascade.value=q.state.sunShadowCascade,Pe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pe.spotLightMatrix.value=q.state.spotLightMatrix,Pe.spotLightMap.value=q.state.spotLightMap,Pe.pointShadowMatrix.value=q.state.pointShadowMatrix),H.numLightProbeGrids=jt(A.state.lightProbeGridArray),H.currentProgram=tt,H.uniformsList=null,tt}function Ds(w,B,Y,H,q){let ye=De.get(w),Re=ye.currentProgram.id+","+H+","+q,ve=ye.programVariants.get(Re);return ve===void 0?(ve=ei(w,B,Y),ye.programVariants.set(Re,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=q),ve}function en(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=_a.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Bt(w,B){let Y=De.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function pi(w,B,Y,H,q){B.isScene!==!0&&(B=rt),Be.resetTextureUnits();let ye=B.fog,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,ve=$===null?M.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:it.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=R.get(H.envMap||Re,we),Xe=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,tt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color,wt=Xi;H.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(wt=M.toneMapping);let Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yn=Mt!==void 0?Mt.length:0,Ie=De.get(H),Ln=A.state.lights;if(at===!0&&(J===!0||w!==P)){let Lt=w===P&&H.id===V;ee.setState(H,w,Lt)}let ft=!1,ts=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==Ln.state.version||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==Ne||H.fog===!0&&Ie.fog!==ye||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ee.numPlanes||Ie.numIntersection!==ee.numIntersection)||Ie.vertexAlphas!==Xe||Ie.vertexTangents!==tt||Ie.morphTargets!==Pe||Ie.morphNormals!==nt||Ie.morphColors!==Yt||Ie.morphTargetsCount!==yn||Ie.numLightProbeGrids!==jt(A.state.lightProbeGridArray)?ft=!0:(Ie.outputColorSpace!==ve||Ie.toneMapping!==wt)&&(ts=!0):(ft=!0,Ie.__version=H.version);let Sn=Ie.currentProgram;(ft===!0||ts===!0)&&(Sn=ts===!0?Ds(H,B,q,ve,wt):ei(H,B,q),D&&H.isNodeMaterial&&D.onUpdateProgram(H,Sn,Ie));let bl=!1,Cr=!1,ns=!1,lt=Sn.getUniforms(),dn=Ie.uniforms;if(fe.useProgram(Sn.program)&&(bl=!0,Cr=!0,ns=!0),H.id!==V&&(V=H.id,Cr=!0),bl||P!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),lt.setValue(k,"projectionMatrix",w.projectionMatrix),lt.setValue(k,"viewMatrix",w.matrixWorldInverse);let an=lt.map.cameraPosition;an!==void 0&&an.setValue(k,Wt.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&lt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,Cr=!0,ns=!0)}if(Ie.needsLights&&(Ln.state.sunShadowMap.length>0&&lt.setValue(k,"sunShadowMap",Ln.state.sunShadowMap,Be),Ln.state.directionalShadowMap.length>0&&lt.setValue(k,"directionalShadowMap",Ln.state.directionalShadowMap,Be),Ln.state.spotShadowMap.length>0&&lt.setValue(k,"spotShadowMap",Ln.state.spotShadowMap,Be),Ln.state.pointShadowMap.length>0&&lt.setValue(k,"pointShadowMap",Ln.state.pointShadowMap,Be)),q.isSkinnedMesh){lt.setOptional(k,q,"bindMatrix"),lt.setOptional(k,q,"bindMatrixInverse");let Lt=q.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),lt.setValue(k,"boneTexture",Lt.boneTexture,Be))}q.isBatchedMesh&&(lt.setOptional(k,q,"batchingTexture"),lt.setValue(k,"batchingTexture",q._matricesTexture,Be),lt.setOptional(k,q,"batchingIdTexture"),lt.setValue(k,"batchingIdTexture",q._indirectTexture,Be),lt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(k,"batchingColorTexture",q._colorsTexture,Be));let Ti=Y.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Q.update(q,Y,Sn),(Cr||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,lt.setValue(k,"receiveShadow",q.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(dn.envMapIntensity.value=B.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=jM()),Cr){if(lt.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&Ha(dn,ns),ye&&H.fog===!0&&he.refreshFogUniforms(dn,ye),he.refreshMaterialUniforms(dn,H,ue,be,A.state.transmissionRenderTarget[w.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Lt=y,an=0;for(let nr of A.state.lightProbeGridArray)nr.texture!==null&&(Lt.textures[an]=nr.texture,Lt.min[an]=nr.boundingBox.min,Lt.max[an]=nr.boundingBox.max,Lt.resolution[an]=nr.resolution,an++);for(let nr in Lt)Lt[nr].length=an;dn.probesSH.value=Lt.textures,dn.probesMin.value=Lt.min,dn.probesMax.value=Lt.max,dn.probesResolution.value=Lt.resolution}_a.upload(k,en(Ie),dn,Be)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_a.upload(k,en(Ie),dn,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(k,"center",q.center),lt.setValue(k,"modelViewMatrix",q.modelViewMatrix),lt.setValue(k,"normalMatrix",q.normalMatrix),lt.setValue(k,"modelMatrix",q.matrixWorld),H.uniformsGroups!==void 0){let Lt=H.uniformsGroups;for(let an=0,nr=Lt.length;an<nr;an++){let cp=Lt[an];ae.update(cp,Sn),ae.bind(cp,Sn)}}return Sn}function Ha(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Ml(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,B,Y){let H=De.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),De.get(w.texture).__webglTexture=B,De.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let Y=De.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Y=0){$=w,z=B,F=Y;let H=null,q=!1,ye=!1;if(w){let ve=De.get(w);if(ve.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(k.FRAMEBUFFER,ve.__webglFramebuffer),j.copy(w.viewport),Se.copy(w.scissor),Ue=w.scissorTest,fe.viewport(j),fe.scissor(Se),fe.setScissorTest(Ue),V=-1;return}else if(ve.__webglFramebuffer===void 0)Be.setupRenderTarget(w);else if(ve.__hasExternalTextures)Be.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xe=w.depthTexture;if(ve.__boundDepthTexture!==Xe){if(Xe!==null&&De.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(w)}}let we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Ne=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?H=Ne[B][Y]:H=Ne[B],q=!0):w.samples>0&&Be.useMultisampledRTT(w)===!1?H=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[Y]:H=Ne,j.copy(w.viewport),Se.copy(w.scissor),Ue=w.scissorTest}else j.copy(Ee).multiplyScalar(ue).floor(),Se.copy(He).multiplyScalar(ue).floor(),Ue=Le;if(Y!==0&&(H=U),fe.bindFramebuffer(k.FRAMEBUFFER,H)&&fe.drawBuffers(w,H),fe.viewport(j),fe.scissor(Se),fe.setScissorTest(Ue),q){let ve=De.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,Y)}else if(ye){let ve=B;for(let we=0;we<w.textures.length;we++){let Ne=De.get(w.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Ne.__webglTexture,Y,ve)}}else if(w!==null&&Y!==0){let ve=De.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ve.__webglTexture,Y)}V=-1};function Ar(w){let B=De.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=ke.textureFormatReadable(w.format),B.__typeReadable=ke.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,Y,H,q,ye,Re,ve=0){if(!(w&&w.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we){fe.bindFramebuffer(k.FRAMEBUFFER,we);try{let Ne=w.textures[ve],Xe=Ne.format,tt=Ne.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve);let Pe=Ar(Ne);if(Pe.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-H&&Y>=0&&Y<=w.height-q&&k.readPixels(B,Y,H,q,oe.convert(Xe),oe.convert(tt),ye)}finally{let Ne=$!==null?De.get($).__webglFramebuffer:null;fe.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,H,q,ye,Re,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we)if(B>=0&&B<=w.width-H&&Y>=0&&Y<=w.height-q){fe.bindFramebuffer(k.FRAMEBUFFER,we);let Ne=w.textures[ve],Xe=Ne.format,tt=Ne.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve);let Pe=Ar(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(B,Y,H,q,oe.convert(Xe),oe.convert(tt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Yt=$!==null?De.get($).__webglFramebuffer:null;fe.bindFramebuffer(k.FRAMEBUFFER,Yt);let wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Em(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(nt),k.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,Y=0){let H=Math.pow(2,-Y),q=Math.floor(w.image.width*H),ye=Math.floor(w.image.height*H),Re=B!==null?B.x:0,ve=B!==null?B.y:0;Be.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Re,ve,q,ye),fe.unbindTexture()},this.copyTextureToTexture=function(w,B,Y=null,H=null,q=0,ye=0){let Re,ve,we,Ne,Xe,tt,Pe,nt,Yt,wt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(Y!==null)Re=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Xe=Y.min.y,tt=Y.isBox3?Y.min.z:0;else{let lt=Math.pow(2,-q);Re=Math.floor(wt.width*lt),ve=Math.floor(wt.height*lt),w.isDataArrayTexture?we=wt.depth:w.isData3DTexture?we=Math.floor(wt.depth*lt):we=1,Ne=0,Xe=0,tt=0}H!==null?(Pe=H.x,nt=H.y,Yt=H.z):(Pe=0,nt=0,Yt=0);let Mt=oe.convert(B.format),yn=oe.convert(B.type),Ie;B.isData3DTexture?(Be.setTexture3D(B,0),Ie=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Be.setTexture2DArray(B,0),Ie=k.TEXTURE_2D_ARRAY):(Be.setTexture2D(B,0),Ie=k.TEXTURE_2D),fe.activeTexture(k.TEXTURE0),fe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),fe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),fe.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Ln=fe.getParameter(k.UNPACK_ROW_LENGTH),ft=fe.getParameter(k.UNPACK_IMAGE_HEIGHT),ts=fe.getParameter(k.UNPACK_SKIP_PIXELS),Sn=fe.getParameter(k.UNPACK_SKIP_ROWS),bl=fe.getParameter(k.UNPACK_SKIP_IMAGES);fe.pixelStorei(k.UNPACK_ROW_LENGTH,wt.width),fe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt.height),fe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),fe.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),fe.pixelStorei(k.UNPACK_SKIP_IMAGES,tt);let Cr=w.isDataArrayTexture||w.isData3DTexture,ns=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let lt=De.get(w),dn=De.get(B),Ti=De.get(lt.__renderTarget),Lt=De.get(dn.__renderTarget);fe.bindFramebuffer(k.READ_FRAMEBUFFER,Ti.__webglFramebuffer),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let an=0;an<we;an++)Cr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(w).__webglTexture,q,tt+an),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(B).__webglTexture,ye,Yt+an)),k.blitFramebuffer(Ne,Xe,Ne+Re,Xe+ve,Pe,nt,Pe+Re,nt+ve,k.DEPTH_BUFFER_BIT,k.NEAREST);fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||De.has(w)){let lt=De.get(w),dn=De.get(B);fe.bindFramebuffer(k.READ_FRAMEBUFFER,C),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Ti=0;Ti<we;Ti++)Cr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,lt.__webglTexture,q,tt+Ti):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,lt.__webglTexture,q),ns?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dn.__webglTexture,ye,Yt+Ti):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dn.__webglTexture,ye),q!==0?k.blitFramebuffer(Ne,Xe,Ne+Re,Xe+ve,Pe,nt,Pe+Re,nt+ve,k.COLOR_BUFFER_BIT,k.NEAREST):ns?k.copyTexSubImage3D(Ie,ye,Pe,nt,Yt+Ti,Ne,Xe,Re,ve):k.copyTexSubImage2D(Ie,ye,Pe,nt,Ne,Xe,Re,ve);fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ns?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ie,ye,Pe,nt,Yt,Re,ve,we,Mt,yn,wt.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ie,ye,Pe,nt,Yt,Re,ve,we,Mt,wt.data):k.texSubImage3D(Ie,ye,Pe,nt,Yt,Re,ve,we,Mt,yn,wt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,Pe,nt,Re,ve,Mt,yn,wt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,Pe,nt,wt.width,wt.height,Mt,wt.data):k.texSubImage2D(k.TEXTURE_2D,ye,Pe,nt,Re,ve,Mt,yn,wt);fe.pixelStorei(k.UNPACK_ROW_LENGTH,Ln),fe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),fe.pixelStorei(k.UNPACK_SKIP_PIXELS,ts),fe.pixelStorei(k.UNPACK_SKIP_ROWS,Sn),fe.pixelStorei(k.UNPACK_SKIP_IMAGES,bl),ye===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Ie),fe.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&Be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){z=0,F=0,$=null,fe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}});function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Kn,qo,nd,pn,It,vi,Tt,qf,eb,tb,Mg,nb,ib,rn,zt,vr,Uh,$i,$n,id,Eh,bg,En,rb,sb,dg,rd,ms,zf,sd,ab,ob,Nt,Zi,Yf,ad,oi,Ph,Tg,wg,Oh,Yo,Eg,Zo,lb,Ah,cb,od,Wr,Zf,Ag,Zn,kf,pg,Ch,ld,cd,Xr,hd,Fn,kt,Dt,gs,hb,Ih,ud,Cg,Rg,Pg,li,ub,ya,mg,Lh,Ho,fb,Ig,Fh,qr,fs,db,Jf,pb,gg,Sa,Dh,Bh,zh,Lg,Ji,Dg,Ng,mb,$f,gb,_b,Ma,_g,xb,xi,Wo,Yr,Ko,mn,vb,Kf,Ug,yb,yi,Qf,Og,Fg,jf,Bg,zg,Sb,Mb,bb,kg,Tb,wb,Ta,Gg,Eb,xg,ai,Go,va,Vg,Hg,bt,Vo,Gf,Wg,Xg,vg,xr,Ab,fd,Jo,Jn,ba,st,Cb,Rb,Pb,Ib,Lb,Db,ds,_s,qg,Vf,Hf,dd,$o,wn,Nb,pd,Ub,md,Hr,ed,gd,Ob,Fb,Bb,Xo,Yg,Zg,Ht,_d,Jg,zb,kb,kh,$g,Gb,xd,vd,Vb,Hb,Wb,yd,Bn,ps,Rh,Xb,yg,qb,Wf,td,Kg,Yb,Nh,Zb,Jb,Xf,An,$b,Kb,Qb,jb,eT,tT,nT,iT,rT,sT,aT,oT,lT,cT,hT,uT,fT,dT,Sd=Rr(()=>{Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qo={duration:.5,overwrite:!1,delay:0},vi=1e8,Tt=1/vi,qf=Math.PI*2,eb=qf/4,tb=0,Mg=Math.sqrt,nb=Math.cos,ib=Math.sin,rn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},Uh=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},$n=function(e){return e!==!1},id=function(){return typeof window<"u"},Eh=function(e){return zt(e)||rn(e)},bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,rb=/random\([^)]+\)/g,sb=/,\s*/g,dg=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,ab=/[^,'"\[\]\s]+/gi,ob=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oi={},Ph={},wg=function(e){return(Ph=ya(e,oi))&&An},Oh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yo=function(e,t){return!t&&console.warn(e)},Eg=function(e,t){return e&&(oi[e]=t)&&Ph&&(Ph[e]=t)||oi},Zo=function(){return 0},lb={suppressEvents:!0,isStart:!0,kill:!1},Ah={suppressEvents:!0,kill:!1},cb={suppressEvents:!0},od={},Wr=[],Zf={},Zn={},kf={},pg=30,Ch=[],ld="",cd=function(e){var t=e[0],n,i;if($i(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ch.length;i--&&!Ch[i].targetTest(t););n=Ch[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dd(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||cd(yi(e))[0]._gsap},hd=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Uh(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ih=function(){var e=Wr.length,t=Wr.slice(0),n,i;for(Zf={},Wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ud=function(e){return!!(e._initted||e._startAt||e.add)},Cg=function(e,t,n,i){Wr.length&&!pn&&Ih(),e.render(t,n,i||!!(pn&&t<0&&ud(e))),Wr.length&&!pn&&Ih()},Rg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ab).length<2?t:rn(e)?e.trim():e},Pg=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ub=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ya=function(e,t){for(var n in t)e[n]=t[n];return e},mg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Lh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ho=function(e){var t=e.parent||Nt,n=e.keyframes?ub(En(e.keyframes)):li;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},fb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ig=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Fh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},db=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jf=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(Ah):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},pb=function r(e){return!e||e._ts&&r(e.parent)},gg=function(e){return e._repeat?Sa(e._tTime,e=e.duration()+e._rDelay)*e:0},Sa=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},Dh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bh=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},zh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bh(e),n._dirty||fs(n,e)),e},Lg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Dh(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ji=function(e,t,n,i){return t.parent&&qr(t),t._start=Dt((vr(n)?n:n||e!==Nt?xi(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ig(e,t,"_first","_last",e._sort?"_start":0),$f(t)||(e._recent=t),i||Lg(e,t),e._ts<0&&zh(e,e._tTime),e},Dg=function(e,t){return(oi.ScrollTrigger||Oh("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},Ng=function(e,t,n,i,s){if(gd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ag!==Jn.frame)return Wr.push(e),e._lazy=[s,i],1},mb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},$f=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&mb(e)&&!(!e._initted&&$f(e))||(e._ts<0||e._dp._ts<0)&&!$f(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Ko(0,e._tDur,t),h=Sa(l,o),e._yoyo&&h&1&&(a=1-a),h!==Sa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Ng(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Jf(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qr(e,1),!n&&!pn&&(ai(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_b=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ma=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&zh(e,e._tTime=e._tDur*o),e.parent&&Bh(e),n||fs(e.parent,e),e},_g=function(e){return e instanceof wn?fs(e):Ma(e,e._dur)},xb={_start:0,endTime:Zo,totalDuration:Zo},xi=function r(e,t,n){var i=e.labels,s=e._recent||xb,a=e.duration()>=vi?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Wo=function(e,t,n){var i=vr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ht(t[0],a,t[s+1])},Yr=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!rn(e)||!(t=ob.exec(e))?"":t[1]},vb=function(e,t,n){return Yr(n,function(i){return Ko(e,t,i)})},Kf=[].slice,Ug=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Zi},yb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||Ug(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):rn(e)&&!n&&(Yf||!ba())?Kf.call((t||ad).querySelectorAll(e),0):En(e)?yb(e,n):Ug(e)?Kf.call(e,0):e?[e]:[]},Qf=function(e){return e=yi(e)[0]||Yo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?Yo("Invalid scope")||ad.createElement("div"):e)}},Og=function(e){return e.sort(function(){return .5-Math.random()})},Fg=function(e){if(zt(e))return e;var t=$i(e)?e:{each:e},n=ds(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||t).length,p=a[_],g,v,T,y,E,A,x,S,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,vi])[1],!I){for(x=-vi;x<(x=m[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(p=a[_]=[],g=l?Math.min(I,_)*h-.5:i%I,v=I===vi?0:l?_*d/I-.5:i/I|0,x=0,S=vi,A=0;A<_;A++)T=A%I-g,y=v-(A/I|0),p[A]=E=c?Math.abs(c==="y"?y:T):Mg(T*T+y*y),E>x&&(x=E),E<S&&(S=E);i==="random"&&Og(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:c?c==="y"?_/I:I:Math.max(I,_/I))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=mn(t.amount||t.each)||0,n=n&&_<0?Db(n):n}return _=(p[f]-p.min)/p.max||0,Dt(p.b+(n?n(_):_)*p.v)+p.u}},jf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vr(n)?0:mn(n))}},Bg=function(e,t){var n=En(e),i,s;return!n&&$i(e)&&(i=n=e.radius||vi,e.values?(e=yi(e.values),(s=!vr(e[0]))&&(i*=i)):e=jf(e.increment)),Yr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vi,h=0,d=e.length,f,u;d--;)s?(f=e[d].x-o,u=e[d].y-l,f=f*f+u*u):f=Math.abs(e[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:a,s||h===a||vr(a)?h:h+mn(a)}:jf(e))},zg=function(e,t,n,i){return Yr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Sb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Mb=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},bb=function(e,t,n){return Gg(e,t,0,1,n)},kg=function(e,t,n){return Yr(n,function(i){return e[~~t(i)]})},Tb=function r(e,t,n){var i=t-e;return En(e)?kg(e,r(0,e.length),t):Yr(n,function(s){return(i+(s-e)%i)%i+e})},wb=function r(e,t,n){var i=t-e,s=i*2;return En(e)?kg(e,r(0,e.length-1),t):Yr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ta=function(e){return e.replace(rb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(sb);return zg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gg=function(e,t,n,i,s){var a=t-e,o=i-n;return Yr(s,function(l){return n+((l-e)/a*o||0)})},Eb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var a=rn(e),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=t}else i||(e=ya(En(e)?[]:{},e));if(!h){for(l in t)pd.call(o,e,l,"get",t[l]);s=function(m){return vd(m,o)||(a?e.p:e)}}}return Yr(n,s)},xg=function(e,t,n){var i=e.labels,s=vi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ai=function(e,t,n){var i=e.vars,s=i[t],a=It,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Wr.length&&Ih(),o&&(It=o),h=l?s.apply(c,l):s.call(c),It=a,h},Go=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ai(e,"onInterrupt"),e},Vg=[],Hg=function(e){if(e)if(e=!e.name&&e.default||e,id()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zo,render:vd,add:pd,kill:Hb,modifier:Vb,rawVars:0},a={targetTest:0,get:0,getSetter:kh,aliases:{},register:0};if(ba(),e!==i){if(Zn[t])return;li(i,li(Lh(e,s),a)),ya(i.prototype,ya(s,Lh(e,a))),Zn[i.prop=t]=i,e.targetTest&&(Ch.push(i),od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Eg(t,i),e.register&&e.register(An,i,Bn)}else Vg.push(e)},bt=255,Vo={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Gf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Wg=function(e,t,n){var i=e?vr(e)?[e>>16,e>>8&bt,e&bt]:0:Vo.black,s,a,o,l,c,h,d,f,u,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vo[e])i=Vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(dg),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Gf(l+1/3,s,a),i[1]=Gf(l,s,a),i[2]=Gf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(rd),n&&i.length<4&&(i[3]=1),i}else i=e.match(dg)||Vo.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xg=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(ms)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vg=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=Wg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Xg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(xr,"1").split(ms),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(xr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Ab=/hsl[a]?\(/,fd=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=Ab.test(t),e[1]=vg(e[1],n),e[0]=vg(e[0],n,Xg(e[1])),!0},Jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,m=function _(p){var g=r()-i,v=p===!0,T,y,E,A;if((g>e||g<0)&&(n+=g-t),i+=g,E=i-n,T=E-a,(T>0||v)&&(A=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=T+(T>=s?4:s-T),y=1),v||(l=c(_)),y)for(u=0;u<o.length;u++)o[u](E,f,A,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Tg&&(!Yf&&id()&&(Zi=Yf=window,ad=Zi.document||{},oi.gsap=An,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(An.version),wg(Ph||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),Vg.forEach(Hg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Jo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Jo=0,c=Zo},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var T=g?function(y,E,A,x){p(y,E,A,x),d.remove(T)}:p;return d.remove(p),o[v?"unshift":"push"](T),ba(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},d})(),ba=function(){return!Jo&&Jn.wake()},st={},Cb=/^[\d.\-M][\d.\-,\s]/,Rb=/["']/g,Pb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Rb,"").trim():+c,i=l.substr(o+1).trim();return t},Ib=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Lb=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Pb(t[1])]:Ib(e).split(",").map(Rg)):st._CE&&Cb.test(e)?st._CE("",e):n},Db=function(e){return function(t){return 1-e(1-t)}},ds=function(e,t){return e&&(zt(e)?e:st[e]||Lb(e))||t},_s=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Fn(e,function(o){st[o]=oi[o]=s,st[a=o.toLowerCase()]=n;for(var l in s)st[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[o+"."+l]=s[l]}),s},qg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/qf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*ib((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:qg(o);return s=qf/s,l.config=function(c,h){return r(e,c,h)},l},Hf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:qg(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;_s(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;_s("Elastic",Vf("in"),Vf("out"),Vf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};_s("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);_s("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});_s("Circ",function(r){return-(Mg(1-r*r)-1)});_s("Sine",function(r){return r===1?1:-nb(r*eb)+1});_s("Back",Hf("in"),Hf("out"),Hf());st.SteppedEase=st.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Tt;return function(o){return((i*Ko(0,a,o)|0)+s)*n}}};qo.ease=st["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ld+=r+","+r+"Params,"});dd=function(e,t){this.id=tb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hd,this.set=t?t.getSetter:kh},$o=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ma(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Jo||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ba(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zh(this,n),!s._dp||s.parent||Lg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Dh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Bh(this),db(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ba(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cb);var i=pn;return pn=n,ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_g(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_g(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:Pg,l=function(){var h=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Go(this)},r})();li($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});wn=(function(r){Sg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),Nt&&Ji(n.parent||Nt,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Dg(_r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Wo(0,arguments,this),this},t.from=function(i,s,a){return Wo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Wo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ho(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,xi(this,a),1),this},t.call=function(i,s,a){return Ji(this,Ht.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ht(i,a,xi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Ho(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Ho(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,T,y,E,A,x;if(this!==Nt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,T=this._ts,g=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Dt(h%p),h===l?(_=this._repeat,f=c):(E=Dt(h/p),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=Sa(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,x=1),_!==E&&!this._lock){var S=A&&E&1,I=S===(A&&_&1);if(_<E&&(S=!S),o=S?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Dt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_b(this,Dt(o),Dt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!E&&(ai(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Tt);break}}u=m}else{u=this._last;for(var M=i<0?i:f;u;){if(m=u._prev,(u._act||M<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(M-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(M-u._start)*u._ts,s,a||pn&&ud(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=M?-Tt:Tt);break}}u=m}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-Tt)._zTime=f>=o?1:-1,this._ts))return this._start=y,Bh(this),this.render(i,s,a);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ai(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(vr(s)||(s=xi(this,s,i)),!(i instanceof $o)){if(En(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(zt(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Ji(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ht?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return rn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Fh(this,i),i===this._recent&&(this._recent=this._last),fs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ht.delayedCall(0,s||Zo,a);return o.data="isPause",this._hasPause=1,Ji(this,o,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&qr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Hr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=yi(i),l=this._first,c=vr(s),h;l;)l instanceof Ht?hb(l._targets,o)&&(c?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=xi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Ht.to(a,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Tt,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Ma(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,li({startAt:{time:xi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xg(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xg(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return fs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=vi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ma(a,a===Nt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Nt._ts&&(Cg(Nt,Dh(i,Nt)),Ag=Jn.frame),Jn.frame>=pg){pg+=Kn.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&Kn.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e})($o);li(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});Nb=function(e,t,n,i,s,a,o){var l=new Bn(this._pt,e,t,0,1,xd,null,s),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ta(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(zf)||[];d=zf.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?gs(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=zf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sd.test(i)||g)&&(l.e=0),this._pt=l,l},pd=function(e,t,n,i,s,a,o,l,c,h){zt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,u=zt(d)?c?zb:Jg:_d,m;if(rn(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(m=gs(f,i)+(mn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||ed)return!isNaN(f*i)&&i!==""?(m=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Gb:$g,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&Oh(t,i),Nb.call(this,e,t,f,i,u,l||Kn.stringFilter,c))},Ub=function(e,t,n,i,s){if(zt(e)&&(e=Xo(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||En(e)||bg(e))return rn(e)?Xo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Xo(e[o],s,t,n,i);return a},md=function(e,t,n,i,s,a){var o,l,c,h;if(Zn[e]&&(o=new Zn[e]).init(s,o.rawVars?t[e]:Ub(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==va))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},gd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!nd,y=e.timeline,E=i.easeReverse||d,A,x,S,I,M,L,D,U,C,O,z,F,$;if(y&&(!f||!s)&&(s="none"),e._ease=ds(s,qo.ease),e._rEase=E&&(ds(E)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(U=p[0]?Xr(p[0]).harness:0,F=U&&i[U.prop],A=Lh(i,od),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&m?Ah:lb),_._lazy=0),a){if(qr(e._startAt=Ht.set(p,li({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!u)&&e._startAt.revert(Ah),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),S=li({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$n(l),immediateRender:o,stagger:0,parent:g},A),F&&(S[U.prop]=F),qr(e._startAt=Ht.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(Ah):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&$n(l)||l&&!m,x=0;x<p.length;x++){if(M=p[x],D=M._gsap||cd(p)[x]._gsap,e._ptLookup[x]=O={},Zf[D.id]&&Wr.length&&Ih(),z=v===p?x:v.indexOf(M),U&&(C=new U).init(M,F||A,e,z,v)!==!1&&(e._pt=I=new Bn(e._pt,M,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(V){O[V]=I}),C.priority&&(L=1)),!U||F)for(S in A)Zn[S]&&(C=md(S,A,e,z,M,v))?C.priority&&(L=1):O[S]=I=pd.call(e,M,S,"get",A[S],z,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(M,e._op[x]),T&&e._pt&&(Hr=e,Nt.killTweensOf(M,O,e.globalTime(t)),$=!e.parent,Hr=0),e._pt&&l&&(Zf[D.id]=1)}L&&yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&y.render(vi,!0,!0)},Ob=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ed=1,e.vars[t]="+=0",gd(e,o),ed=0,l?Yo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=kt(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},Fb=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ya({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Bb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(En(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Xo=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?Ta(e):e},Yg=ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zg={};Fn(Yg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zg[r]=1});Ht=(function(r){Sg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ho(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Nt,v=(En(n)||bg(n)?vr(n[0]):"length"in i)?[n]:yi(n),T,y,E,A,x,S,I,M;if(o._targets=v.length?cd(v):Yo("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||f||Eh(c)||Eh(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(T=o.timeline=new wn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=_r(o),T._start=0,f||Eh(c)||Eh(h)){if(A=v.length,I=f&&Fg(f),$i(f))for(x in f)~Yg.indexOf(x)&&(M||(M={}),M[x]=f[x]);for(y=0;y<A;y++)E=Lh(i,Zg),E.stagger=0,L&&(E.easeReverse=L),M&&ya(E,M),S=v[y],E.duration=+Xo(c,_r(o),y,S,v),E.delay=(+Xo(h,_r(o),y,S,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),T.to(S,E,I?I(y,S,v):0),T._ease=st.none;T.duration()?c=h=0:o.timeline=0}else if(m){Ho(li(T.vars.defaults,{ease:"none"})),T._ease=ds(m.ease||i.ease||"none");var D=0,U,C,O;if(En(m))m.forEach(function(z){return T.to(v,z,">")}),T.duration();else{E={};for(x in m)x==="ease"||x==="easeEach"||Bb(x,m[x],E,m.easeEach);for(x in E)for(U=E[x].sort(function(z,F){return z.t-F.t}),D=0,y=0;y<U.length;y++)C=U[y],O={ease:C.e,duration:(C.t-(y?U[y-1].t:0))/100*c},O[x]=C.v,T.to(v,O,D),D+=O.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return u===!0&&!nd&&(Hr=_r(o),Nt.killTweensOf(v),Hr=0),Ji(g,_r(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Dt(g._time)&&$n(d)&&pb(_r(o))&&g.data!=="nested")&&(o._tTime=-Tt,o.render(Math.max(0,-h)||0)),p&&Dg(_r(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Tt&&!h?l:i<Tt?0:i,f,u,m,_,p,g,v,T;if(!c)gb(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Dt(d%_),d===l?(m=this._repeat,f=c):(p=Dt(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Sa(this._tTime,_),f===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Ng(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var E=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ai(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Jf(this,i,s,a),ai(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Jf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Jo||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gd(this,c),h=this._ease(c/this._dur),Ob(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(zh(this,0),this.parent||Ig(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hr&&Hr.vars.overwrite!==!0)._first||Go(this),this.parent&&a!==this.timeline.totalDuration()&&Ma(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?yi(i):o,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!s||s==="all")&&fb(o,l))return s==="all"&&(this._pt=0),Go(this);for(d=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Fn(s,function(v){return _[v]=1}),s=_),s=Fb(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,m=f,u={}):(u=d[g]=d[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Fh(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Go(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Wo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Wo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Nt.killTweensOf(i,s,a)},e})($o);li(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new wn,t=Kf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});_d=function(e,t,n){return e[t]=n},Jg=function(e,t,n){return e[t](n)},zb=function(e,t,n,i){return e[t](i.fp,n)},kb=function(e,t,n){return e.setAttribute(t,n)},kh=function(e,t){return zt(e[t])?Jg:Uh(e[t])&&e.setAttribute?kb:_d},$g=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Vb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Hb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Wb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||$g,this.d=l||this,this.set=c||_d,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Wb,this.m=n,this.mt=s,this.tween=i},r})();Fn(ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return od[r]=1});oi.TweenMax=oi.TweenLite=Ht;oi.TimelineLite=oi.TimelineMax=wn;Nt=new wn({sortChildren:!1,defaults:qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=fd;ps=[],Rh={},Xb=[],yg=0,qb=0,Wf=function(e){return(Rh[e]||Xb).map(function(t){return t()})},td=function(){var e=Date.now(),t=[];e-yg>2&&(Wf("matchMediaInit"),ps.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Wf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),yg=e,Wf("matchMedia"))},Kg=(function(){function r(t,n){this.selector=n&&Qf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=It,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qf(s)),It=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),It=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ps.length;a--;)ps[a].id===this.id&&ps.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Yb=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var a=new Kg(0,s||this.scope),o=a.conditions={},l,c,h;It&&!a.selector&&(a.selector=It.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(ps.indexOf(a)<0&&ps.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(td):l.addEventListener("change",td)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Nh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hg(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=yi(e)[0]);var s=Xr(e||{}).get,a=n?Pg:Rg;return n==="native"&&(n=""),e&&(t?a((Zn[t]&&Zn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Zn[o]&&Zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(h){return An.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Zn[t],o=Xr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;va._pt=0,d.init(e,n?h+n:h,va,0,[e]),d.render(1,d),va._pt&&vd(1,va)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=An.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ds(e.ease,qo.ease)),mg(qo,e||{})},config:function(e){return mg(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zn[o]&&!oi[o]&&Yo(t+" effect requires "+o+" plugin.")}),kf[t]=function(o,l,c){return n(yi(o),li(l||{},s),c)},a&&(wn.prototype[t]=function(o,l,c){return this.add(kf[t](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=ds(t)},parseEase:function(e,t){return arguments.length?ds(e,t):st},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=$n(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=s;return Ji(Nt,n,0),n},context:function(e,t){return e?new Kg(e,t):It},matchMedia:function(e){return new Yb(e)},matchMediaRefresh:function(){return ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||td()},addEventListener:function(e,t){var n=Rh[e]||(Rh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Tb,wrapYoyo:wb,distribute:Fg,random:zg,snap:Bg,normalize:bb,getUnit:mn,clamp:vb,splitColor:Wg,toArray:yi,selector:Qf,mapRange:Gg,pipe:Sb,unitize:Mb,interpolate:Eb,shuffle:Og},install:wg,effects:kf,ticker:Jn,updateRoot:wn.updateRoot,plugins:Zn,globalTimeline:Nt,core:{PropTween:Bn,globals:Eg,Tween:Ht,Timeline:wn,Animation:$o,getCache:Xr,_removeLinkedListItem:Fh,reverting:function(){return pn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return nd=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Nh[r]=Ht[r]});Jn.add(wn.updateRoot);va=Nh.to({},{duration:0});Zb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Jb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Xf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Jb(o,s)}}}},An=Nh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xf("roundProps",jf),Xf("modifiers"),Xf("snap",Bg))||Nh;Ht.version=wn.version=An.version="3.15.0";Tg=1;id()&&ba();$b=st.Power0,Kb=st.Power1,Qb=st.Power2,jb=st.Power3,eT=st.Power4,tT=st.Linear,nT=st.Quad,iT=st.Cubic,rT=st.Quart,sT=st.Quint,aT=st.Strong,oT=st.Elastic,lT=st.Back,cT=st.SteppedEase,hT=st.Bounce,uT=st.Sine,fT=st.Expo,dT=st.Circ});var Qg,Zr,Ea,Ad,Ss,pT,jg,Cd,mT,Sr,ys,Aa,wa,e_,Rd,gT,_T,Ki,bd,xT,vT,yT,ST,l_,c_,MT,bT,TT,wT,ET,AT,Ut,Qn,CT,h_,RT,u_,f_,Td,ci,t_,Ca,wd,n_,i_,d_,p_,$r,Jr,r_,PT,Kr,yr,IT,s_,LT,DT,Gh,jo,m_,g_,a_,Pd,Ed,el,Vh,Md,NT,xs,Qo,vs,__,UT,OT,o_,FT,Id,x_=Rr(()=>{Sd();mT=function(){return typeof window<"u"},Sr={},ys=180/Math.PI,Aa=Math.PI/180,wa=Math.atan2,e_=1e8,Rd=/([A-Z])/g,gT=/(left|right|width|margin|padding|x)/i,_T=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ST=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},l_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},c_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},MT=function(e,t,n){return e.style[t]=n},bT=function(e,t,n){return e.style.setProperty(t,n)},TT=function(e,t,n){return e._gsap[t]=n},wT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ET=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},AT=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Qn=Ut+"Origin",CT=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=yr(i,o)}):this.tfm[e]=a.x?a[e]:yr(i,e),e===Qn&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},h_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},RT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!n[Ut]&&(h_(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},u_=function(e,t){var n={target:e,props:[],revert:RT,save:CT};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Td=function(e,t){var n=Zr.createElementNS?Zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zr.createElement(e);return n&&n.style?n:Zr.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ca(t)||t,1)||""},t_="O,Moz,ms,Ms,Webkit".split(","),Ca=function(e,t,n){var i=t||Ss,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(t_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?t_[a]:"")+e},wd=function(){mT()&&window.document&&(Qg=window,Zr=Qg.document,Ea=Zr.documentElement,Ss=Td("div")||{style:{}},pT=Td("div"),Ut=Ca(Ut),Qn=Ut+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f_=!!Ca("perspective"),Cd=An.core.reverting,Ad=1)},n_=function(e){var t=e.ownerSVGElement,n=Td("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ea.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ea.removeChild(n),s},i_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},d_=function(e){var t,n;try{t=e.getBBox()}catch{t=n_(e),n=1}return t&&(t.width||t.height)||n||(t=n_(e)),t&&!t.width&&!t.x&&!t.y?{x:+i_(e,["x","cx","x1"])||0,y:+i_(e,["y","cy","y1"])||0,width:0,height:0}:t},p_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&d_(e))},$r=function(e,t){if(t){var n=e.style,i;t in Sr&&t!==Qn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,s,a){var o=new Bn(e._pt,t,n,0,1,a?c_:l_);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},r_={deg:1,rad:1,turn:1},PT={grid:1,flex:1},Kr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ss.style,l=gT.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===a||!s||r_[i]||r_[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&p_(e),(u||a==="%")&&(Sr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],kt(u?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Zr||!_.appendChild)&&(_=Zr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Jn.time&&!p.uncache)return kt(s/p.width*d);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,m=e[h],v?e.style[t]=v:$r(e,t)}else(u||a==="%")&&!PT[ci(_,"display")]&&(o.position=ci(e,"position")),_===e&&(o.position="static"),_.appendChild(Ss),m=Ss[h],_.removeChild(Ss),o.position="absolute";return l&&u&&(p=Xr(_),p.time=Jn.time,p.width=_[h]),kt(f?m*s/d:m&&s?d/m*s:0)},yr=function(e,t,n,i){var s;return Ad||wd(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sr[t]&&t!=="transform"?(s=el(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vh(ci(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gh[t]&&Gh[t](e,t,n)||ci(e,t)||hd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,n)+n:s},IT=function(e,t,n,i){if(!n||n==="none"){var s=Ca(t,e,1),a=s&&ci(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,xd),l=0,c=0,h,d,f,u,m,_,p,g,v,T,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ci(e,t)||i,_?e.style[t]=_:$r(e,t)),h=[n,i],fd(h),n=h[0],i=h[1],f=n.match(ms)||[],E=i.match(ms)||[],E.length){for(;d=ms.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=gs(u,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=ms.lastIndex-T.length,T||(T=T||Kn.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(u=Kr(e,t,_,T)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?c_:l_;return sd.test(i)&&(o.e=0),this._pt=o,o},s_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=s_[n]||n,t[1]=s_[i]||i,t.join(" ")},DT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Sr[o]&&(l=1,o=o==="transformOrigin"?Qn:Ut),$r(n,o);l&&($r(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",el(n,1),a.uncache=1,h_(i)))}},Gh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,n,0,0,DT);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},jo=[1,0,0,1,0,0],m_={},g_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},a_=function(e){var t=ci(e,Ut);return g_(t)?jo:t.substr(7).match(rd).map(kt)},Pd=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=a_(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jo:s):(s===jo&&!e.offsetParent&&e!==Ea&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ea.appendChild(e)),s=a_(e),l?i.display=l:$r(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ea.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ed=function(e,t,n,i,s,a){var o=e._gsap,l=s||Pd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,E=parseFloat(T[1])||0,A,x,S,I;n?l!==jo&&(x=u*p-m*_)&&(S=y*(p/x)+E*(-_/x)+(_*v-p*g)/x,I=y*(-m/x)+E*(u/x)-(u*v-m*g)/x,y=S,E=I):(A=d_(e),y=A.x+(~T[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(T[1]||T[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(g=y-c,v=E-h,o.xOffset=d+(g*u+v*_)-g,o.yOffset=f+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(Jr(a,o,"xOrigin",c,y),Jr(a,o,"yOrigin",h,E),Jr(a,o,"xOffset",d,o.xOffset),Jr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},el=function(e,t){var n=e._gsap||new dd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ci(e,Qn)||"0",h,d,f,u,m,_,p,g,v,T,y,E,A,x,S,I,M,L,D,U,C,O,z,F,$,V,P,j,Se,Ue,Z,ce;return h=d=f=_=p=g=v=T=y=0,u=m=1,n.svg=!!(e.getCTM&&p_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),x=Pd(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Ed(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),E=n.xOrigin||0,A=n.yOrigin||0,x!==jo&&(L=x[0],D=x[1],U=x[2],C=x[3],h=O=x[4],d=z=x[5],x.length===6?(u=Math.sqrt(L*L+D*D),m=Math.sqrt(C*C+U*U),_=L||D?wa(D,L)*ys:0,v=U||C?wa(U,C)*ys+_:0,v&&(m*=Math.abs(Math.cos(v*Aa))),n.svg&&(h-=E-(E*L+A*U),d-=A-(E*D+A*C))):(ce=x[6],Ue=x[7],P=x[8],j=x[9],Se=x[10],Z=x[11],h=x[12],d=x[13],f=x[14],S=wa(ce,Se),p=S*ys,S&&(I=Math.cos(-S),M=Math.sin(-S),F=O*I+P*M,$=z*I+j*M,V=ce*I+Se*M,P=O*-M+P*I,j=z*-M+j*I,Se=ce*-M+Se*I,Z=Ue*-M+Z*I,O=F,z=$,ce=V),S=wa(-U,Se),g=S*ys,S&&(I=Math.cos(-S),M=Math.sin(-S),F=L*I-P*M,$=D*I-j*M,V=U*I-Se*M,Z=C*M+Z*I,L=F,D=$,U=V),S=wa(D,L),_=S*ys,S&&(I=Math.cos(S),M=Math.sin(S),F=L*I+D*M,$=O*I+z*M,D=D*I-L*M,z=z*I-O*M,L=F,O=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=kt(Math.sqrt(L*L+D*D+U*U)),m=kt(Math.sqrt(z*z+ce*ce)),S=wa(O,z),v=Math.abs(S)>2e-4?S*ys:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!g_(ci(e,Ut)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=kt(u),n.scaleY=kt(m),n.rotation=kt(_)+o,n.rotationX=kt(p)+o,n.rotationY=kt(g)+o,n.skewX=v+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=Vh(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?UT:f_?__:NT,n.uncache=0,n},Vh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Md=function(e,t,n){var i=mn(t);return kt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",i)))+i},NT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,__(e,t)},xs="0deg",Qo="0px",vs=") ",__=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",E=g==="auto"&&e&&e!==1||g===!0;if(T&&(d!==xs||h!==xs)){var A=parseFloat(h)*Aa,x=Math.sin(A),S=Math.cos(A),I;A=parseFloat(d)*Aa,I=Math.cos(A),a=Md(v,a,x*I*-T),o=Md(v,o,-Math.sin(A)*-T),l=Md(v,l,S*I*-T+T)}p!==Qo&&(y+="perspective("+p+vs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==Qo||o!==Qo||l!==Qo)&&(y+=l!==Qo||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vs),c!==xs&&(y+="rotate("+c+vs),h!==xs&&(y+="rotateY("+h+vs),d!==xs&&(y+="rotateX("+d+vs),(f!==xs||u!==xs)&&(y+="skew("+f+", "+u+vs),(m!==1||_!==1)&&(y+="scale("+m+", "+_+vs),v.style[Ut]=y||"translate(0, 0)"},UT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(a),y=parseFloat(o),E,A,x,S,I;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Aa,c*=Aa,E=Math.cos(l)*d,A=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Aa,I=Math.tan(c-h),I=Math.sqrt(1+I*I),x*=I,S*=I,h&&(I=Math.tan(h),I=Math.sqrt(1+I*I),E*=I,A*=I)),E=kt(E),A=kt(A),x=kt(x),S=kt(S)):(E=d,S=f,A=x=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Kr(u,"x",a,"px"),y=Kr(u,"y",o,"px")),(m||_||p||g)&&(T=kt(T+m-(m*E+_*x)+p),y=kt(y+_-(m*A+_*S)+g)),(i||s)&&(I=u.getBBox(),T=kt(T+i/100*I.width),y=kt(y+s/100*I.height)),I="matrix("+E+","+A+","+x+","+S+","+T+","+y+")",u.setAttribute("transform",I),v&&(u.style[Ut]=I)},OT=function(e,t,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*e_)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*e_)%a-~~(c/a)*a)),e._pt=f=new Bn(e._pt,t,n,i,c,xT),f.e=h,f.u="deg",e._props.push(n),f},o_=function(e,t){for(var n in t)e[n]=t[n];return e},FT=function(e,t,n){var i=o_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=el(n,1),$r(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=el(n,1),a[Ut]=c);for(l in Sr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=mn(c),m=mn(h),d=u!==m?Kr(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new Bn(e._pt,o,l,d,f-d,bd),e._pt.u=m||0,e._props.push(l));o_(o,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Gh[e>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(m){return yr(o,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,u,d)}});Id={name:"css",register:wd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,T,y,E,A,x,S,I;Ad||wd(),this.styles=this.styles||u_(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Zn[_]&&md(_,t,n,i,e,s)))){if(u=typeof h,m=Gh[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Ta(h)),m)m(this,e,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(p=mn(c),g=mn(h),g?p!==g&&(c=Kr(e,_,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Ta(c)),mn(c+"")||c==="auto"||(c+=Kn.units[_]||mn(yr(e,_))||""),(c+"").charAt(1)==="="&&(c=yr(e,_))):c=yr(e,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(f===1&&yr(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,o.visibility),Jr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Sr,T){if(this.styles.save(_),I=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ci(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=h,h=ci(e,"perspective"),M?e.style.perspective=M:$r(e,"perspective")}d=parseFloat(h)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||el(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Bn(this._pt,o,Ut,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,E,"scaleY",E.scaleY,(v?gs(E.scaleY,v+d):d)-E.scaleY||0,bd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Qn,0,o[Qn]),h=LT(h),E.svg?Ed(e,h,0,A,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==E.zOrigin&&Jr(this,E,"zOrigin",E.zOrigin,g),Jr(this,o,_,Vh(c),Vh(h)));continue}else if(_==="svgOrigin"){Ed(e,h,1,A,0,this);continue}else if(_ in m_){OT(this,E,_,f,v?gs(f,v+h):h);continue}else if(_==="smoothOrigin"){Jr(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){FT(this,h,e);continue}}else _ in o||(_=Ca(_)||_);if(T||(d||d===0)&&(f||f===0)&&!_T.test(h)&&_ in o)p=(c+"").substr((f+"").length),d||(d=0),g=mn(h)||(_ in Kn.units?Kn.units[_]:p),p!==g&&(f=Kr(e,_,c,g)),this._pt=new Bn(this._pt,T?E:o,_,f,(v?gs(f,v+d):d)-f,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?ST:bd),this._pt.u=g||0,T&&I!==h?(this._pt.b=c,this._pt.e=I,this._pt.r=yT):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=vT);else if(_ in o)IT.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,s);else if(_!=="parseTransform"){Oh(_,h);continue}T||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}x&&yd(this)},render:function(e,t){if(t.tween._time||!Cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:yr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in Sr&&t!==Qn&&(e._gsap.x||yr(e,"x"))?n&&jg===n?t==="scale"?wT:TT:(jg=n||{})&&(t==="scale"?ET:AT):e.style&&!Uh(e.style[t])?MT:~t.indexOf("-")?bT:kh(e,t)},core:{_removeProperty:$r,_getMatrix:Pd}};An.utils.checkPrefix=Ca;An.core.getStyleSaver=u_;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){Sr[s]=1});Fn(e,function(s){Kn.units[s]="deg",m_[s]=1}),Ki[i[13]]=r+","+e,Fn(n,function(s){var a=s.split(":");Ki[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});An.registerPlugin(Id)});var Ld,zA,v_=Rr(()=>{Sd();x_();Ld=An.registerPlugin(Id)||An,zA=Ld.core.Tween});function y_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function BT(r,e,t){return e&&y_(r.prototype,e),t&&y_(r,t),r}var gn,Xh,zT,hi,Qr,jr,Pa,M_,Ms,Ia,b_,Mr,Li,T_,w_,E_,Ra,Je,Di,nl,Dd,kT,Tr,il,kn,zn,Hh,Wh,Nd,qh,Cn,$t,Gn,GT,br,Yh,tl,S_,A_,C_,Gt,R_=Rr(()=>{w_=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},E_=1,Ra=[],Je=[],Di=[],nl=Date.now,Dd=function(e,t){return t},kT=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,Di),Je=n,Di=i,Dd=function(a,o){return t[a](o)}},Tr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},il=function(e){return!!~b_.indexOf(e)},kn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Hh="scrollLeft",Wh="scrollTop",Nd=function(){return Mr&&Mr.isPressed||Je.cache++},qh=function(e,t){var n=function i(s){if(s||s===0){E_&&(hi.history.scrollRestoration="manual");var a=Mr&&Mr.isPressed;s=i.v=Math.round(s)||(Mr&&Mr.iOS?1:0),e(s),i.cacheID=Je.cache,a&&Dd("ss",s)}else(t||Je.cache!==i.cacheID||Dd("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:Hh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qh(function(r){return arguments.length?hi.scrollTo(r,$t.sc()):hi.pageXOffset||Qr[Hh]||jr[Hh]||Pa[Hh]||0})},$t={s:Wh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:qh(function(r){return arguments.length?hi.scrollTo(Cn.sc(),r):hi.pageYOffset||Qr[Wh]||jr[Wh]||Pa[Wh]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},GT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},br=function(e,t){var n=t.s,i=t.sc;il(e)&&(e=Qr.scrollingElement||jr);var s=Je.indexOf(e),a=i===$t.sc?1:2;!~s&&(s=Je.push(e)-1),Je[s+a]||kn(e,"scroll",Nd);var o=Je[s+a],l=o||(Je[s+a]=qh(Tr(e,n),!0)||(il(e)?i:qh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Yh=function(e,t,n){var i=e,s=e,a=nl(),o=a,l=t||50,c=Math.max(500,l*3),h=function(m,_){var p=nl();_||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(m){var _=o,p=s,g=nl();return(m||m===0)&&m!==i&&h(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-_)*1e3};return{update:h,reset:d,getVelocity:f}},tl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},S_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},A_=function(){Ia=gn.core.globals().ScrollTrigger,Ia&&Ia.core&&kT()},C_=function(e){return gn=e||w_(),!Xh&&gn&&typeof document<"u"&&document.body&&(hi=window,Qr=document,jr=Qr.documentElement,Pa=Qr.body,b_=[hi,Qr,jr,Pa],zT=gn.utils.clamp,T_=gn.core.context||function(){},Ms="onpointerenter"in Pa?"pointer":"mouse",M_=Gt.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=Gt.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E_=0},500),Xh=1),Ia||A_(),Xh};Cn.op=$t;Je.cache=0;Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xh||C_(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||A_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,E=n.onRight,A=n.onLeft,x=n.onUp,S=n.onDown,I=n.onChangeX,M=n.onChangeY,L=n.onChange,D=n.onToggleX,U=n.onToggleY,C=n.onHover,O=n.onHoverEnd,z=n.onMove,F=n.ignoreCheck,$=n.isNormalizer,V=n.onGestureStart,P=n.onGestureEnd,j=n.onWheel,Se=n.onEnable,Ue=n.onDisable,Z=n.onClick,ce=n.scrollSpeed,xe=n.capture,be=n.allowClicks,ue=n.lockAxis,Ce=n.onLockAxis;this.target=o=Gn(o)||jr,this.vars=n,u&&(u=gn.utils.toArray(u)),i=i||1e-9,s=s||0,m=m||1,ce=ce||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hi.getComputedStyle(Pa).lineHeight)||22);var _t,Ee,He,Le,Oe,ct,at,J=this,je=0,Wt=0,vt=n.passive||!h&&n.passive!==!1,rt=br(o,Cn),Ot=br(o,$t),Vt=rt(),k=Ot(),ut=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Li[0]==="pointerdown",ot=il(o),ke=o.ownerDocument||Qr,fe=[0,0,0],ht=[0,0,0],De=0,Be=function(){return De=nl()},R=function(me,re){return(J.event=me)&&u&&GT(me.target,u)||re&&ut&&me.pointerType!=="touch"||F&&F(me,re)},b=function(){J._vx.reset(),J._vy.reset(),Ee.pause(),d&&d(J)},W=function(){var me=J.deltaX=S_(fe),re=J.deltaY=S_(ht),te=Math.abs(me)>=i,_e=Math.abs(re)>=i;L&&(te||_e)&&L(J,me,re,fe,ht),te&&(E&&J.deltaX>0&&E(J),A&&J.deltaX<0&&A(J),I&&I(J),D&&J.deltaX<0!=je<0&&D(J),je=J.deltaX,fe[0]=fe[1]=fe[2]=0),_e&&(S&&J.deltaY>0&&S(J),x&&J.deltaY<0&&x(J),M&&M(J),U&&J.deltaY<0!=Wt<0&&U(J),Wt=J.deltaY,ht[0]=ht[1]=ht[2]=0),(Le||He)&&(z&&z(J),He&&(p&&He===1&&p(J),v&&v(J),He=0),Le=!1),ct&&!(ct=!1)&&Ce&&Ce(J),Oe&&(j(J),Oe=!1),_t=0},se=function(me,re,te){fe[te]+=me,ht[te]+=re,J._vx.update(me),J._vy.update(re),c?_t||(_t=requestAnimationFrame(W)):W()},ie=function(me,re){ue&&!at&&(J.axis=at=Math.abs(me)>Math.abs(re)?"x":"y",ct=!0),at!=="y"&&(fe[2]+=me,J._vx.update(me,!0)),at!=="x"&&(ht[2]+=re,J._vy.update(re,!0)),c?_t||(_t=requestAnimationFrame(W)):W()},he=function(me){if(!R(me,1)){me=tl(me,h);var re=me.clientX,te=me.clientY,_e=re-J.x,ne=te-J.y,Te=J.isDragging;J.x=re,J.y=te,(Te||(_e||ne)&&(Math.abs(J.startX-re)>=s||Math.abs(J.startY-te)>=s))&&(He||(He=Te?2:1),Te||(J.isDragging=!0),ie(_e,ne))}},ge=J.onPress=function(ae){R(ae,1)||ae&&ae.button||(J.axis=at=null,Ee.pause(),J.isPressed=!0,ae=tl(ae),je=Wt=0,J.startX=J.x=ae.clientX,J.startY=J.y=ae.clientY,J._vx.reset(),J._vy.reset(),kn($?o:ke,Li[1],he,vt,!0),J.deltaX=J.deltaY=0,T&&T(J))},X=J.onRelease=function(ae){if(!R(ae,1)){zn($?o:ke,Li[1],he,!0);var me=!isNaN(J.y-J.startY),re=J.isDragging,te=re&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),_e=tl(ae);!te&&me&&(J._vx.reset(),J._vy.reset(),h&&be&&gn.delayedCall(.08,function(){if(nl()-De>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(ke.createEvent){var ne=ke.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,hi,1,_e.screenX,_e.screenY,_e.clientX,_e.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(ne)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&re&&!$&&Ee.restart(!0),He&&W(),g&&re&&g(J),y&&y(J,te)}},ee=function(me){return me.touches&&me.touches.length>1&&(J.isGesturing=!0)&&V(me,J.isDragging)},le=function(){return(J.isGesturing=!1)||P(J)},N=function(me){if(!R(me)){var re=rt(),te=Ot();se((re-Vt)*ce,(te-k)*ce,1),Vt=re,k=te,d&&Ee.restart(!0)}},Q=function(me){if(!R(me)){me=tl(me,h),j&&(Oe=!0);var re=(me.deltaMode===1?l:me.deltaMode===2?hi.innerHeight:1)*m;se(me.deltaX*re,me.deltaY*re,0),d&&!$&&Ee.restart(!0)}},K=function(me){if(!R(me)){var re=me.clientX,te=me.clientY,_e=re-J.x,ne=te-J.y;J.x=re,J.y=te,Le=!0,d&&Ee.restart(!0),(_e||ne)&&ie(_e,ne)}},de=function(me){J.event=me,C(J)},oe=function(me){J.event=me,O(J)},pe=function(me){return R(me)||tl(me,h)&&Z(J)};Ee=J._dc=gn.delayedCall(f||.25,b).pause(),J.deltaX=J.deltaY=0,J._vx=Yh(0,50,!0),J._vy=Yh(0,50,!0),J.scrollX=rt,J.scrollY=Ot,J.isDragging=J.isGesturing=J.isPressed=!1,T_(this),J.enable=function(ae){return J.isEnabled||(kn(ot?ke:o,"scroll",Nd),a.indexOf("scroll")>=0&&kn(ot?ke:o,"scroll",N,vt,xe),a.indexOf("wheel")>=0&&kn(o,"wheel",Q,vt,xe),(a.indexOf("touch")>=0&&M_||a.indexOf("pointer")>=0)&&(kn(o,Li[0],ge,vt,xe),kn(ke,Li[2],X),kn(ke,Li[3],X),be&&kn(o,"click",Be,!0,!0),Z&&kn(o,"click",pe),V&&kn(ke,"gesturestart",ee),P&&kn(ke,"gestureend",le),C&&kn(o,Ms+"enter",de),O&&kn(o,Ms+"leave",oe),z&&kn(o,Ms+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Le=He=!1,J._vx.reset(),J._vy.reset(),Vt=rt(),k=Ot(),ae&&ae.type&&ge(ae),Se&&Se(J)),J},J.disable=function(){J.isEnabled&&(Ra.filter(function(ae){return ae!==J&&il(ae.target)}).length||zn(ot?ke:o,"scroll",Nd),J.isPressed&&(J._vx.reset(),J._vy.reset(),zn($?o:ke,Li[1],he,!0)),zn(ot?ke:o,"scroll",N,xe),zn(o,"wheel",Q,xe),zn(o,Li[0],ge,xe),zn(ke,Li[2],X),zn(ke,Li[3],X),zn(o,"click",Be,!0),zn(o,"click",pe),zn(ke,"gesturestart",ee),zn(ke,"gestureend",le),zn(o,Ms+"enter",de),zn(o,Ms+"leave",oe),zn(o,Ms+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Ue&&Ue(J))},J.kill=J.revert=function(){J.disable();var ae=Ra.indexOf(J);ae>=0&&Ra.splice(ae,1),Mr===J&&(Mr=0)},Ra.push(J),$&&il(o)&&(Mr=J),J.enable(_)},BT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=C_;Gt.getAll=function(){return Ra.slice()};Gt.getById=function(r){return Ra.filter(function(e){return e.vars.id===r})[0]};w_()&&gn.registerPlugin(Gt)});var Ae,Ua,Qe,xt,di,gt,Zd,cu,_l,hl,sl,Zh,Rn,fu,Gd,Hn,P_,I_,Oa,Y_,Ud,Z_,Vn,Vd,J_,$_,es,Hd,Jd,Fa,$d,ul,Wd,Od,Jh,Pn,Fd,bi,al,L_,D_,VT,N_,U_,Qi,ol,K_,Q_,Cs,j_,e0,HT,WT,ji,$h,fi,In,ll,bs,rl,La,Da,t0,n0,Kd,Qd,ws,Es,fl,dl,pl,ml,Kt,Si,za,jd,sn,Mi,XT,O_,wr,hu,i0,qT,ep,YT,Kh,fn,un,Qh,F_,jh,uu,ru,eu,su,$e,Xd,xl,B_,Na,Bd,cl,Rs,ZT,r0,Ps,ui,s0,a0,tp,o0,Wn,As,z_,JT,l0,k_,Ts,qd,au,gl,Er,Yd,ou,$T,zd,KT,Ba,tu,QT,lu,G_,jT,V_,c0,nu,H_,Ye,W_,kd,iu,e1,h0,t1,X_,q_,n1,u0=Rr(()=>{R_();Jh=1,Pn=Date.now,Fd=Pn(),bi=0,al=0,L_=function(e,t,n){var i=fi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},D_=function(e,t){return t&&(!fi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},VT=function r(){return al&&requestAnimationFrame(r)},N_=function(){return fu=1},U_=function(){return fu=0},Qi=function(e){return e},ol=function(e){return Math.round(e*1e5)/1e5||0},K_=function(){return typeof window<"u"},Q_=function(){return Ae||K_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Cs=function(e){return!!~Zd.indexOf(e)},j_=function(e){return(e==="Height"?$d:Qe["inner"+e])||di["client"+e]||gt["client"+e]},e0=function(e){return Tr(e,"getBoundingClientRect")||(Cs(e)?function(){return lu.width=Qe.innerWidth,lu.height=$d,lu}:function(){return wr(e)})},HT=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Tr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?j_(s):e["client"+s])||0}},WT=function(e,t){return!t||~Di.indexOf(e)?e0(e):function(){return lu}},ji=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Tr(e,n))?a()-e0(e)()[s]:Cs(e)?(di[n]||gt[n])-j_(i):e[n]-e["offset"+i])},$h=function(e,t){for(var n=0;n<Oa.length;n+=3)(!t||~t.indexOf(Oa[n+1]))&&e(Oa[n],Oa[n+1],Oa[n+2])},fi=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},ll=function(e){return typeof e=="number"},bs=function(e){return typeof e=="object"},rl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},La=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Da=Math.abs,t0="left",n0="top",Kd="right",Qd="bottom",ws="width",Es="height",fl="Right",dl="Left",pl="Top",ml="Bottom",Kt="padding",Si="margin",za="Width",jd="Height",sn="px",Mi=function(e){return Qe.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},XT=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},O_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wr=function(e,t){var n=t&&Mi(e)[Gd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},hu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},i0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},qT=function(e){return function(t){return Ae.utils.snap(i0(e),t)}},ep=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},YT=function(e){return function(t,n){return ep(i0(e))(t,n.direction)}},Kh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},fn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},F_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jh={toggleActions:"play",anticipatePin:0},uu={top:0,left:0,center:.5,bottom:1,right:1},ru=function(e,t){if(fi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in uu?uu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},eu=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,m=xt.createElement("div"),_=Cs(n)||Tr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$t?Kd:Qd)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],su(m,0,i,v),m},su=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+za]=1,s["border"+o+za]=0,s[n.p]=t+"px",Ae.set(e,s)},$e=[],Xd={},B_=function(){return Pn()-bi>34&&(xl||(xl=requestAnimationFrame(Er)))},Na=function(){(!Vn||!Vn.isPressed||Vn.startX>gt.clientWidth)&&(Je.cache++,Vn?xl||(xl=requestAnimationFrame(Er)):Er(),bi||Ps("scrollStart"),bi=Pn())},Bd=function(){$_=Qe.innerWidth,J_=Qe.innerHeight},cl=function(e){Je.cache++,(e===!0||!Rn&&!Z_&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Vd||$_!==Qe.innerWidth||Math.abs(Qe.innerHeight-J_)>Qe.innerHeight*.25))&&cu.restart(!0)},Rs={},ZT=[],r0=function r(){return un(Ye,"scrollEnd",r)||Ts(!0)},Ps=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||ZT},ui=[],s0=function(e){for(var t=0;t<ui.length;t+=5)(!e||ui[t+4]&&ui[t+4].query===e)&&(ui[t].style.cssText=ui[t+1],ui[t].getBBox&&ui[t].setAttribute("transform",ui[t+2]||""),ui[t+3].uncache=1)},a0=function(){return Je.forEach(function(e){return In(e)&&++e.cacheID&&(e.rec=e())})},tp=function(e,t){var n;for(Hn=0;Hn<$e.length;Hn++)n=$e[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ul=!0,t&&s0(t),t||Ps("revert")},o0=function(e,t){Je.cache++,(t||!Wn)&&Je.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),fi(e)&&(Qe.history.scrollRestoration=Jd=e)},As=0,JT=function(){if(z_!==As){var e=z_=As;requestAnimationFrame(function(){return e===As&&Ts(!0)})}},l0=function(){gt.appendChild(Fa),$d=!Vn&&Fa.offsetHeight||Qe.innerHeight,gt.removeChild(Fa)},k_=function(e){return _l(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ts=function(e,t){if(di=xt.documentElement,gt=xt.body,Zd=[Qe,xt,di,gt],bi&&!e&&!ul){fn(Ye,"scrollEnd",r0);return}l0(),Wn=Ye.isRefreshing=!0,ul||a0();var n=Ps("refreshInit");Y_&&Ye.sort(),t||tp(),Je.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),ul=!1,$e.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Wd=1,k_(!0),$e.forEach(function(i){var s=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),k_(!1),Wd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Je.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),o0(Jd,1),cu.pause(),As++,Wn=2,Er(2),$e.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=Ye.isRefreshing=!1,Ps("refresh")},qd=0,au=1,Er=function(e){if(e===2||!Wn&&!ul){Ye.isUpdating=!0,gl&&gl.update(0);var t=$e.length,n=Pn(),i=n-Fd>=50,s=t&&$e[0].scroll();if(au=qd>s?-1:1,Wn||(qd=s),i&&(bi&&!fu&&n-bi>200&&(bi=0,Ps("scrollEnd")),sl=Fd,Fd=n),au<0){for(Hn=t;Hn-- >0;)$e[Hn]&&$e[Hn].update(0,i);au=1}else for(Hn=0;Hn<t;Hn++)$e[Hn]&&$e[Hn].update(0,i);Ye.isUpdating=!1}xl=0},Yd=[t0,n0,Qd,Kd,Si+ml,Si+fl,Si+pl,Si+dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ou=Yd.concat([ws,Es,"boxSizing","max"+za,"max"+jd,"position",Si,Kt,Kt+pl,Kt+fl,Kt+ml,Kt+dl]),$T=function(e,t,n){Ba(n);var i=e._gsap;if(i.spacerIsNative)Ba(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Yd.length,a=t.style,o=e.style,l;s--;)l=Yd[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Qd]=o[Kd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ws]=hu(e,Cn)+sn,a[Es]=hu(e,$t)+sn,a[Kt]=o[Si]=o[n0]=o[t0]="0",Ba(i),o[ws]=o["max"+za]=n[ws],o[Es]=o["max"+jd]=n[Es],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},KT=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(KT,"-$1").toLowerCase())}},tu=function(e){for(var t=ou.length,n=e.style,i=[],s=0;s<t;s++)i.push(ou[s],n[ou[s]]);return i.t=e,i},QT=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},lu={left:0,top:0},G_=function(e,t,n,i,s,a,o,l,c,h,d,f,u,m){In(e)&&(e=e(l)),fi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ru("0"+e.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),ll(e))u&&(e=Ae.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),o&&su(o,n,i,!0);else{In(t)&&(t=t(l));var T=(e||"0").split(" "),y,E,A,x;v=Gn(t,l)||gt,y=wr(v)||{},(!y||!y.left&&!y.top)&&Mi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=wr(v),x?v.style.display=x:v.style.removeProperty("display")),E=ru(T[0],y[i.d]),A=ru(T[1]||"0",n),e=y[i.p]-c[i.p]-h+E+s-A,o&&su(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var S=e+n,I=a._isStart;p="scroll"+i.d2,su(a,S,i,I&&S>20||!I&&(d?Math.max(gt[p],di[p]):a.parentNode[p])<=S+1),d&&(c=wr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+sn))}return u&&v&&(p=wr(v),u.seek(f),g=wr(v),u._caScrollDist=p[i.p]-g[i.p],e=e/u._caScrollDist*f),u&&u.seek(_),u?e:Math.round(e)},jT=/(webkit|moz|length|cssText|inset)/i,V_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=Mi(e);for(a in o)!+a&&!jT.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},c0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},nu=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},H_=function(e,t){var n=br(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,m={};c=c||n();var _=c0(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Je.cache++,a.tween&&Er()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=Ae.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",n.wheelHandler),Ye.isTouch&&fn(e,"touchmove",n.wheelHandler),s},Ye=(function(){function r(t,n){Ua||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=Qi;return}n=O_(fi(n)||ll(n)||n.nodeType?{trigger:n}:n,jh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,T=s.once,y=s.snap,E=s.pinReparent,A=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,I=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:$t,L=!d&&d!==0,D=Gn(n.scroller||Qe),U=Ae.core.getCache(D),C=Cs(D),O=("pinType"in n?n.pinType:Tr(D,"pinType")||C&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=L&&n.toggleActions.split(" "),$="markers"in n?n.markers:jh.markers,V=C?0:parseFloat(Mi(D)["border"+M.p2+za])||0,P=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Se=HT(D,C,M),Ue=WT(D,C),Z=0,ce=0,xe=0,be=br(D,M),ue,Ce,_t,Ee,He,Le,Oe,ct,at,J,je,Wt,vt,rt,Ot,Vt,k,ut,ot,ke,fe,ht,De,Be,R,b,W,se,ie,he,ge,X,ee,le,N,Q,K,de,oe;if(P._startClamp=P._endClamp=!1,P._dir=M,p*=45,P.scroller=D,P.scroll=x?x.time.bind(x):be,Ee=be(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Y_=1,n.refreshPriority===-9999&&(gl=P)),U.tweenScroll=U.tweenScroll||{top:H_(D,$t),left:H_(D,Cn)},P.tweenTo=ue=U.tweenScroll[M.p],P.scrubDuration=function(te){ee=ll(te)&&te,ee?X?X.duration(te):X=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return g&&g(P)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),he=0,l||(l=i.vars.id)),y&&((!bs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&Ae.set(C?[gt,di]:D,{scrollBehavior:"auto"}),Je.forEach(function(te){return In(te)&&te.target===(C?xt.scrollingElement||di:D)&&(te.smooth=!1)}),_t=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?qT(i):y.snapTo==="labelsDirectional"?YT(i):y.directional!==!1?function(te,_e){return ep(y.snapTo)(te,Pn()-ce<500?0:_e.direction)}:Ae.utils.snap(y.snapTo),le=y.duration||{min:.1,max:2},le=bs(le)?hl(le.min,le.max):hl(le,le),N=Ae.delayedCall(y.delay||ee/2||.1,function(){var te=be(),_e=Pn()-ce<500,ne=ue.tween;if((_e||Math.abs(P.getVelocity())<10)&&!ne&&!fu&&Z!==te){var Te=(te-Le)/rt,et=i&&!L?i.totalProgress():Te,We=_e?0:(et-ge)/(Pn()-sl)*1e3||0,At=Ae.utils.clamp(-Te,1-Te,Da(We/2)*We/.185),Xt=Te+(y.inertia===!1?0:At),Ct,yt,dt=y,Qt=dt.onStart,St=dt.onInterrupt,vn=dt.onComplete;if(Ct=_t(Xt,P),ll(Ct)||(Ct=Xt),yt=Math.max(0,Math.round(Le+Ct*rt)),te<=Oe&&te>=Le&&yt!==te){if(ne&&!ne._initted&&ne.data<=Da(yt-te))return;y.inertia===!1&&(At=Ct-Te),ue(yt,{duration:le(Da(Math.max(Da(Xt-et),Da(Ct-et))*.185/We/.05||0)),ease:y.ease||"power3",data:Da(yt-te),onInterrupt:function(){return N.restart(!0)&&St&&La(P,St)},onComplete:function(){P.update(),Z=be(),i&&!L&&(X?X.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),he=ge=i&&!L?i.totalProgress():P.progress,v&&v(P),vn&&La(P,vn)}},te,At*rt,yt-te-At*rt),Qt&&La(P,Qt,ue.tween)}}else P.isActive&&Z!==te&&N.restart(!0)}).pause()),l&&(Xd[l]=P),f=P.trigger=Gn(f||u!==!0&&u),oe=f&&f._gsap&&f._gsap.stRevert,oe&&(oe=oe(P)),u=u===!0?f:Gn(u),fi(o)&&(o={targets:f,className:o}),u&&(m===!1||m===Si||(m=!m&&u.parentNode&&u.parentNode.style&&Mi(u.parentNode).display==="flex"?!1:Kt),P.pin=u,Ce=Ae.core.getCache(u),Ce.spacer?Ot=Ce.pinState:(A&&(A=Gn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=tu(A))),Ce.spacer=ut=A||xt.createElement("div"),ut.classList.add("pin-spacer"),l&&ut.classList.add("pin-spacer-"+l),Ce.pinState=Ot=tu(u)),n.force3D!==!1&&Ae.set(u,{force3D:!0}),P.spacer=ut=Ce.spacer,ie=Mi(u),Be=ie[m+M.os2],ke=Ae.getProperty(u),fe=Ae.quickSetter(u,M.a,sn),zd(u,ut,ie),k=tu(u)),$){Wt=bs($)?O_($,F_):F_,J=eu("scroller-start",l,D,M,Wt,0),je=eu("scroller-end",l,D,M,Wt,0,J),ot=J["offset"+M.op.d2];var pe=Gn(Tr(D,"content")||D);ct=this.markerStart=eu("start",l,pe,M,Wt,ot,0,x),at=this.markerEnd=eu("end",l,pe,M,Wt,ot,0,x),x&&(de=Ae.quickSetter([ct,at],M.a,sn)),!O&&!(Di.length&&Tr(D,"fixedMarkers")===!0)&&(XT(C?gt:D),Ae.set([J,je],{force3D:!0}),b=Ae.quickSetter(J,M.a,sn),se=Ae.quickSetter(je,M.a,sn))}if(x){var ae=x.vars.onUpdate,me=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){P.update(0,0,1),ae&&ae.apply(x,me||[])})}if(P.previous=function(){return $e[$e.indexOf(P)-1]},P.next=function(){return $e[$e.indexOf(P)+1]},P.revert=function(te,_e){if(!_e)return P.kill(!0);var ne=te!==!1||!P.enabled,Te=Rn;ne!==P.isReverted&&(ne&&(Q=Math.max(be(),P.scroll.rec||0),xe=P.progress,K=i&&i.progress()),ct&&[ct,at,J,je].forEach(function(et){return et.style.display=ne?"none":"block"}),ne&&(Rn=P,P.update(ne)),u&&(!E||!P.isActive)&&(ne?$T(u,ut,Ot):zd(u,ut,Mi(u),R)),ne||P.update(ne),Rn=Te,P.isReverted=ne)},P.refresh=function(te,_e,ne,Te){if(!((Rn||!P.enabled)&&!_e)){if(u&&te&&bi){fn(r,"scrollEnd",r0);return}!Wn&&j&&j(P),Rn=P,ue.tween&&!ne&&(ue.tween.kill(),ue.tween=0),X&&X.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var et=Se(),We=Ue(),At=x?x.duration():ji(D,M),Xt=rt<=.01||!rt,Ct=0,yt=Te||0,dt=bs(ne)?ne.end:n.end,Qt=n.endTrigger||f,St=bs(ne)?ne.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),vn=P.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,P),jn=f&&Math.max(0,$e.indexOf(P))||0,Ft=jn,qt,jt,ei,Ds,en,Bt,pi,Ha,Ml,Ar,w,B,Y;for($&&bs(ne)&&(B=Ae.getProperty(J,M.p),Y=Ae.getProperty(je,M.p));Ft-- >0;)Bt=$e[Ft],Bt.end||Bt.refresh(0,1)||(Rn=P),pi=Bt.pin,pi&&(pi===f||pi===u||pi===vn)&&!Bt.isReverted&&(Ar||(Ar=[]),Ar.unshift(Bt),Bt.revert(!0,!0)),Bt!==$e[Ft]&&(jn--,Ft--);for(In(St)&&(St=St(P)),St=L_(St,"start",P),Le=G_(St,f,et,M,be(),ct,J,P,We,V,O,At,x,P._startClamp&&"_startClamp")||(u?-.001:0),In(dt)&&(dt=dt(P)),fi(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(fi(St)?St.split(" ")[0]:"")+dt:(Ct=ru(dt.substr(2),et),dt=fi(St)?St:(x?Ae.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Le):Le)+Ct,Qt=f)),dt=L_(dt,"end",P),Oe=Math.max(Le,G_(dt||(Qt?"100% 0":At),Qt,et,M,be()+Ct,at,je,P,We,V,O,At,x,P._endClamp&&"_endClamp"))||-.001,Ct=0,Ft=jn;Ft--;)Bt=$e[Ft]||{},pi=Bt.pin,pi&&Bt.start-Bt._pinPush<=Le&&!x&&Bt.end>0&&(qt=Bt.end-(P._startClamp?Math.max(0,Bt.start):Bt.start),(pi===f&&Bt.start-Bt._pinPush<Le||pi===vn)&&isNaN(St)&&(Ct+=qt*(1-Bt.progress)),pi===u&&(yt+=qt));if(Le+=Ct,Oe+=Ct,P._startClamp&&(P._startClamp+=Ct),P._endClamp&&!Wn&&(P._endClamp=Oe||-.001,Oe=Math.min(Oe,ji(D,M))),rt=Oe-Le||(Le-=.01)&&.001,Xt&&(xe=Ae.utils.clamp(0,1,Ae.utils.normalize(Le,Oe,Q))),P._pinPush=yt,ct&&Ct&&(qt={},qt[M.a]="+="+Ct,vn&&(qt[M.p]="-="+be()),Ae.set([ct,at],qt)),u&&!(Wd&&P.end>=ji(D,M)))qt=Mi(u),Ds=M===$t,ei=be(),ht=parseFloat(ke(M.a))+yt,!At&&Oe>1&&(w=(C?xt.scrollingElement||di:D).style,w={style:w,value:w["overflow"+M.a.toUpperCase()]},C&&Mi(gt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+M.a.toUpperCase()]="scroll")),zd(u,ut,qt),k=tu(u),jt=wr(u,!0),Ha=O&&br(D,Ds?Cn:$t)(),m?(R=[m+M.os2,rt+yt+sn],R.t=ut,Ft=m===Kt?hu(u,M)+rt+yt:0,Ft&&(R.push(M.d,Ft+sn),ut.style.flexBasis!=="auto"&&(ut.style.flexBasis=Ft+sn)),Ba(R),vn&&$e.forEach(function(H){H.pin===vn&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),O&&be(Q)):(Ft=hu(u,M),Ft&&ut.style.flexBasis!=="auto"&&(ut.style.flexBasis=Ft+sn)),O&&(en={top:jt.top+(Ds?ei-Le:Ha)+sn,left:jt.left+(Ds?Ha:ei-Le)+sn,boxSizing:"border-box",position:"fixed"},en[ws]=en["max"+za]=Math.ceil(jt.width)+sn,en[Es]=en["max"+jd]=Math.ceil(jt.height)+sn,en[Si]=en[Si+pl]=en[Si+fl]=en[Si+ml]=en[Si+dl]="0",en[Kt]=qt[Kt],en[Kt+pl]=qt[Kt+pl],en[Kt+fl]=qt[Kt+fl],en[Kt+ml]=qt[Kt+ml],en[Kt+dl]=qt[Kt+dl],Vt=QT(Ot,en,E),Wn&&be(0)),i?(Ml=i._initted,Ud(1),i.render(i.duration(),!0,!0),De=ke(M.a)-ht+rt+yt,W=Math.abs(rt-De)>1,O&&W&&Vt.splice(Vt.length-2,2),i.render(0,!0,!0),Ml||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ud(0)):De=rt,w&&(w.value?w.style["overflow"+M.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+M.a));else if(f&&be()&&!x)for(jt=f.parentNode;jt&&jt!==gt;)jt._pinOffset&&(Le-=jt._pinOffset,Oe-=jt._pinOffset),jt=jt.parentNode;Ar&&Ar.forEach(function(H){return H.revert(!1,!0)}),P.start=Le,P.end=Oe,Ee=He=Wn?Q:be(),!x&&!Wn&&(Ee<Q&&be(Q),P.scroll.rec=0),P.revert(!1,!0),ce=Pn(),N&&(Z=-1,N.restart(!0)),Rn=0,i&&L&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Xt||xe!==P.progress||x||_||i&&!i._initted)&&(i&&!L&&(i._initted||xe||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Le<-.001&&!xe?Ae.utils.normalize(Le,Oe,0):xe,!0),P.progress=Xt||(Ee-Le)/rt===xe?0:xe),u&&m&&(ut._pinOffset=Math.round(P.progress*De)),X&&X.invalidate(),isNaN(B)||(B-=Ae.getProperty(J,M.p),Y-=Ae.getProperty(je,M.p),nu(J,M,B),nu(ct,M,B-(Te||0)),nu(je,M,Y),nu(at,M,Y-(Te||0))),Xt&&!Wn&&P.update(),h&&!Wn&&!vt&&(vt=!0,h(P),vt=!1)}},P.getVelocity=function(){return(be()-He)/(Pn()-sl)*1e3||0},P.endAnimation=function(){rl(P.callbackAnimation),i&&(X?X.progress(1):i.paused()?L||rl(i,P.direction<0,1):rl(i,i.reversed()))},P.labelToScroll=function(te){return i&&i.labels&&(Le||P.refresh()||Le)+i.labels[te]/i.duration()*rt||0},P.getTrailing=function(te){var _e=$e.indexOf(P),ne=P.direction>0?$e.slice(0,_e).reverse():$e.slice(_e+1);return(fi(te)?ne.filter(function(Te){return Te.vars.preventOverlaps===te}):ne).filter(function(Te){return P.direction>0?Te.end<=Le:Te.start>=Oe})},P.update=function(te,_e,ne){if(!(x&&!ne&&!te)){var Te=Wn===!0?Q:P.scroll(),et=te?0:(Te-Le)/rt,We=et<0?0:et>1?1:et||0,At=P.progress,Xt,Ct,yt,dt,Qt,St,vn,jn;if(_e&&(He=Ee,Ee=x?be():Te,y&&(ge=he,he=i&&!L?i.totalProgress():We)),p&&u&&!Rn&&!Jh&&bi&&(!We&&Le<Te+(Te-He)/(Pn()-sl)*p?We=1e-4:We===1&&Oe>Te+(Te-He)/(Pn()-sl)*p&&(We=.9999)),We!==At&&P.enabled){if(Xt=P.isActive=!!We&&We<1,Ct=!!At&&At<1,St=Xt!==Ct,Qt=St||!!We!=!!At,P.direction=We>At?1:-1,P.progress=We,Qt&&!Rn&&(yt=We&&!At?0:We===1?1:At===1?2:3,L&&(dt=!St&&F[yt+1]!=="none"&&F[yt+1]||F[yt],jn=i&&(dt==="complete"||dt==="reset"||dt in i))),I&&(St||jn)&&(jn||d||!i)&&(In(I)?I(P):P.getTrailing(I).forEach(function(ei){return ei.endAnimation()})),L||(X&&!Rn&&!Jh?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",We,i._tTime/i._tDur):(X.vars.totalProgress=We,X.invalidate().restart())):i&&i.totalProgress(We,!!(Rn&&(ce||te)))),u){if(te&&m&&(ut.style[m+M.os2]=Be),!O)fe(ol(ht+De*We));else if(Qt){if(vn=!te&&We>At&&Oe+1>Te&&Te+1>=ji(D,M),E)if(!te&&(Xt||vn)){var Ft=wr(u,!0),qt=Te-Le;V_(u,gt,Ft.top+(M===$t?qt:0)+sn,Ft.left+(M===$t?0:qt)+sn)}else V_(u,ut);Ba(Xt||vn?Vt:k),W&&We<1&&Xt||fe(ht+(We===1&&!vn?De:0))}}y&&!ue.tween&&!Rn&&!Jh&&N.restart(!0),o&&(St||T&&We&&(We<1||!Od))&&_l(o.targets).forEach(function(ei){return ei.classList[Xt||T?"add":"remove"](o.className)}),a&&!L&&!te&&a(P),Qt&&!Rn?(L&&(jn&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),a&&a(P)),(St||!Od)&&(c&&St&&La(P,c),z[yt]&&La(P,z[yt]),T&&(We===1?P.kill(!1,1):z[yt]=0),St||(yt=We===1?1:3,z[yt]&&La(P,z[yt]))),S&&!Xt&&Math.abs(P.getVelocity())>(ll(S)?S:2500)&&(rl(P.callbackAnimation),X?X.progress(1):rl(i,dt==="reverse"?1:!We,1))):L&&a&&!Rn&&a(P)}if(se){var jt=x?Te/x.duration()*(x._caScrollDist||0):Te;b(jt+(J._isFlipped?1:0)),se(jt)}de&&de(-Te/x.duration()*(x._caScrollDist||0))}},P.enable=function(te,_e){P.enabled||(P.enabled=!0,fn(D,"resize",cl),C||fn(D,"scroll",Na),j&&fn(r,"refreshInit",j),te!==!1&&(P.progress=xe=0,Ee=He=Z=be()),_e!==!1&&P.refresh())},P.getTween=function(te){return te&&ue?ue.tween:X},P.setPositions=function(te,_e,ne,Te){if(x){var et=x.scrollTrigger,We=x.duration(),At=et.end-et.start;te=et.start+At*te/We,_e=et.start+At*_e/We}P.refresh(!1,!1,{start:D_(te,ne&&!!P._startClamp),end:D_(_e,ne&&!!P._endClamp)},Te),P.update()},P.adjustPinSpacing=function(te){if(R&&te){var _e=R.indexOf(M.d)+1;R[_e]=parseFloat(R[_e])+te+sn,R[1]=parseFloat(R[1])+te+sn,Ba(R)}},P.disable=function(te,_e){if(te!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,_e||X&&X.pause(),Q=0,Ce&&(Ce.uncache=1),j&&un(r,"refreshInit",j),N&&(N.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!C)){for(var ne=$e.length;ne--;)if($e[ne].scroller===D&&$e[ne]!==P)return;un(D,"resize",cl),C||un(D,"scroll",Na)}},P.kill=function(te,_e){P.disable(te,_e),X&&!_e&&X.kill(),l&&delete Xd[l];var ne=$e.indexOf(P);ne>=0&&$e.splice(ne,1),ne===Hn&&au>0&&Hn--,ne=0,$e.forEach(function(Te){return Te.scroller===P.scroller&&(ne=1)}),ne||Wn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),_e||i.kill()),ct&&[ct,at,J,je].forEach(function(Te){return Te.parentNode&&Te.parentNode.removeChild(Te)}),gl===P&&(gl=0),u&&(Ce&&(Ce.uncache=1),ne=0,$e.forEach(function(Te){return Te.pin===u&&ne++}),ne||(Ce.spacer=0)),n.onKill&&n.onKill(P)},$e.push(P),P.enable(!1,!1),oe&&oe(P),i&&i.add&&!rt){var re=P.update;P.update=function(){P.update=re,Je.cache++,Le||Oe||P.refresh()},Ae.delayedCall(.01,P.update),rt=.01,Le=Oe=0}else P.refresh();u&&JT()},r.register=function(n){return Ua||(Ae=n||Q_(),K_()&&window.document&&r.enable(),Ua=al),Ua},r.defaults=function(n){if(n)for(var i in n)jh[i]=n[i];return jh},r.disable=function(n,i){al=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),un(Qe,"wheel",Na),un(xt,"scroll",Na),clearInterval(Zh),un(xt,"touchcancel",Qi),un(gt,"touchstart",Qi),Kh(un,xt,"pointerdown,touchstart,mousedown",N_),Kh(un,xt,"pointerup,touchend,mouseup",U_),cu.kill(),$h(un);for(var s=0;s<Je.length;s+=3)Qh(un,Je[s],Je[s+1]),Qh(un,Je[s],Je[s+2])},r.enable=function(){if(Qe=window,xt=document,di=xt.documentElement,gt=xt.body,Ae){if(_l=Ae.utils.toArray,hl=Ae.utils.clamp,Hd=Ae.core.context||Qi,Ud=Ae.core.suppressOverwrites||Qi,Jd=Qe.history.scrollRestoration||"auto",qd=Qe.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),gt){al=1,Fa=document.createElement("div"),Fa.style.height="100vh",Fa.style.position="absolute",l0(),VT(),Gt.register(Ae),r.isTouch=Gt.isTouch,es=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vd=Gt.isTouch===1,fn(Qe,"wheel",Na),Zd=[Qe,xt,di,gt],Ae.matchMedia?(r.matchMedia=function(h){var d=Ae.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Ae.addEventListener("matchMediaInit",function(){a0(),tp()}),Ae.addEventListener("matchMediaRevert",function(){return s0()}),Ae.addEventListener("matchMedia",function(){Ts(0,1),Ps("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Bd(),Bd})):console.warn("Requires GSAP 3.11.0 or later"),Bd(),fn(xt,"scroll",Na);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wr(gt),$t.m=Math.round(o.top+$t.sc())||0,Cn.m=Math.round(o.left+Cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Zh=setInterval(B_,250),Ae.delayedCall(.5,function(){return Jh=0}),fn(xt,"touchcancel",Qi),fn(gt,"touchstart",Qi),Kh(fn,xt,"pointerdown,touchstart,mousedown",N_),Kh(fn,xt,"pointerup,touchend,mouseup",U_),Gd=Ae.utils.checkPrefix("transform"),ou.push(Gd),Ua=Pn(),cu=Ae.delayedCall(.2,Ts).pause(),Oa=[xt,"visibilitychange",function(){var h=Qe.innerWidth,d=Qe.innerHeight;xt.hidden?(P_=h,I_=d):(P_!==h||I_!==d)&&cl()},xt,"DOMContentLoaded",Ts,Qe,"load",Ts,Qe,"resize",cl],$h(fn),$e.forEach(function(h){return h.enable(0,1)}),l=0;l<Je.length;l+=3)Qh(un,Je[l],Je[l+1]),Qh(un,Je[l],Je[l+2])}else if(xt){var c=function h(){r.enable(),xt.removeEventListener("DOMContentLoaded",h)};xt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Od=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zh)||(Zh=i)&&setInterval(B_,i),"ignoreMobileResize"in n&&(Vd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($h(un)||$h(fn,n.autoRefreshEvents||"none"),Z_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),a=Je.indexOf(s),o=Cs(s);~a&&Je.splice(a,o?6:2),i&&(o?Di.unshift(Qe,i,gt,i,di,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(fi(n)?Gn(n):n).getBoundingClientRect(),o=a[s?ws:Es]*i||0;return s?a.right-o>0&&a.left+o<Qe.innerWidth:a.bottom-o>0&&a.top+o<Qe.innerHeight},r.positionInViewport=function(n,i,s){fi(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?ws:Es],l=i==null?o/2:i in uu?uu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Qe.innerWidth:(a.top+l)/Qe.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(s){return s()})}},r})();Ye.version="3.15.0";Ye.saveStyles=function(r){return r?_l(r).forEach(function(e){if(e&&e.style){var t=ui.indexOf(e);t>=0&&ui.splice(t,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Hd())}}):ui};Ye.revert=function(r,e){return tp(!r,e)};Ye.create=function(r,e){return new Ye(r,e)};Ye.refresh=function(r){return r?cl(!0):(Ua||Ye.register())&&Ts(!0)};Ye.update=function(r){return++Je.cache&&Er(r===!0?2:0)};Ye.clearScrollMemory=o0;Ye.maxScroll=function(r,e){return ji(r,e?Cn:$t)};Ye.getScrollFunc=function(r,e){return br(Gn(r),e?Cn:$t)};Ye.getById=function(r){return Xd[r]};Ye.getAll=function(){return $e.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!bi};Ye.snapDirectional=ep;Ye.addEventListener=function(r,e){var t=Rs[r]||(Rs[r]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(r,e){var t=Rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],f=[],u=Ae.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&u.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&In(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return In(s)&&(s=s(),fn(Ye,"refresh",function(){return s=e.batchMax()})),_l(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};W_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},kd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===di&&r(gt,t)},iu={auto:1,scroll:1},e1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ae.core.getCache(s),o=Pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(iu[(l=Mi(s)).overflowY]||iu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Cs(s)&&(iu[(l=Mi(s)).overflowY]||iu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},h0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&e1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(xt,Gt.eventTypes[0],q_,!1,!0)},onDisable:function(){return un(xt,Gt.eventTypes[0],q_,!0)}})},t1=/(input|label|select|textarea)/i,q_=function(e){var t=t1.test(e.target.tagName);(t||X_)&&(e._gsapAllow=!0,X_=t)},n1=function(e){bs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||di,h=Ae.core.globals().ScrollSmoother,d=h&&h.get(),f=es&&(e.content&&Gn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=br(c,$t),m=br(c,Cn),_=1,p=(Gt.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,g=0,v=In(i)?function(){return i(o)}:function(){return i||2.8},T,y,E=h0(c,e.type,!0,s),A=function(){return y=!1},x=Qi,S=Qi,I=function(){l=ji(c,$t),S=hl(es?1:0,l),n&&(x=hl(0,ji(c,Cn))),T=As},M=function(){f._gsap.y=ol(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},L=function(){if(y){requestAnimationFrame(A);var $=ol(o.deltaY/2),V=S(u.v-$);if(f&&V!==u.v+u.offset){u.offset=V-u.v;var P=ol((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",u.cacheID=Je.cache,Er()}return!0}u.offset&&M(),y=!0},D,U,C,O,z=function(){I(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return es&&F.type==="touchmove"&&L(F)||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=_;_=ol((Qe.visualViewport&&Qe.visualViewport.scale||1)/p),D.pause(),F!==_&&kd(c,_>1.01?!0:n?!1:"x"),U=m(),C=u(),I(),T=As},e.onRelease=e.onGestureStart=function(F,$){if(u.offset&&M(),!$)O.restart(!0);else{Je.cache++;var V=v(),P,j;n&&(P=m(),j=P+V*.05*-F.velocityX/.227,V*=W_(m,P,j,ji(c,Cn)),D.vars.scrollX=x(j)),P=u(),j=P+V*.05*-F.velocityY/.227,V*=W_(u,P,j,ji(c,$t)),D.vars.scrollY=S(j),D.invalidate().duration(V).play(.01),(es&&D.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:z,duration:V})}a&&a(F)},e.onWheel=function(){D._ts&&D.pause(),Pn()-g>1e3&&(T=0,g=Pn())},e.onChange=function(F,$,V,P,j){if(As!==T&&I(),$&&n&&m(x(P[2]===$?U+(F.startX-F.x):m()+$-P[1])),V){u.offset&&M();var Se=j[2]===V,Ue=Se?C+F.startY-F.y:u()+V-j[1],Z=S(Ue);Se&&Ue!==Z&&(C+=Z-Ue),u(Z)}(V||$)&&Er()},e.onEnable=function(){kd(c,n?!1:"x"),Ye.addEventListener("refresh",z),fn(Qe,"resize",z),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){kd(c,!0),un(Qe,"resize",z),Ye.removeEventListener("refresh",z),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=es,es&&!u()&&u(1),es&&Ae.ticker.add(Qi),O=o._dc,D=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:c0(u,u(),function(){return D.pause()})},onUpdate:Er,onComplete:O.vars.onComplete}),o};Ye.sort=function(r){if(In(r))return $e.sort(r);var e=Qe.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Qe.innerHeight}),$e.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(r){return new Gt(r)};Ye.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof Gt?r:n1(r);return Vn&&Vn.target===e.target&&Vn.kill(),Cs(e.target)&&(Vn=e),e};Ye.core={_getVelocityProp:Yh,_inputObserver:h0,_scrollers:Je,_proxies:Di,bridge:{ss:function(){bi||Ps("scrollStart"),bi=Pn()},ref:function(){return Rn}}};Q_()&&Ae.registerPlugin(Ye)});function f0(){let r=new ao;r.name="Circuit archive",r.fog=new so(1385831,.044);let e=new Xn;e.name="Landmarks",r.add(e);let t=new ha(15068671,2.9);t.position.set(1,8,9);let n=new ha(xn,2.2);n.position.set(-6,4,-5),r.add(t,n,new To(14017279,1319505,1.7));let i=new ca({color:i1,roughness:.39,metalness:.48}),s=new ca({color:r1,roughness:.64,metalness:.28}),a=new Or({color:7178200}),o=new dr(1,1,1),l=new Map([_n,xn].map(M=>[M,new ia({color:M})])),c=new Map([_n,xn].map(M=>[M,new Or({color:M})]));function h(M,L,D,U=i,C=a){let O=new dr(...L),z=new hn(O,U);return z.position.set(...D),C&&z.add(new Vi(new Fr(O),C)),M.add(z),z}function d(M,L,D=a){let U=new cn().setFromPoints(L.map(O=>new G(...O))),C=new ra(U,D);return M.add(C),C}function f(M,L,D,U=[0,0,0],C=[0,0,0],O=vl){let z=new hn(new yo(L,.013,4,56,O),D);return z.position.set(...U),z.rotation.set(...C),M.add(z),z}function u(M,L,D,U){let C=new uo(o,D,L.length),O=new Jt;O.scale.set(...U),L.forEach((z,F)=>{O.position.set(...z),O.updateMatrix(),C.setMatrixAt(F,O.matrix)}),M.add(C)}function m(M,L=4.45,D=2.9){h(M,[L,.14,D],[0,-1.36,0],i),h(M,[L-.18,.045,D-.18],[0,-1.263,0],s);let U=[];for(let C of[-1,1])for(let O=0;O<6;O++){let z=C*(L/2-.16-O*.17);U.push([z,-1.226,-D/2+.25],[z,-1.226,D/2-.25])}u(M,U,s,[.085,.025,.24])}function _(M){m(M,4.8,3.15);let L=new hn(new la(1.13,1),i);L.rotation.set(.18,.34,-.15),L.add(new Vi(new Fr(L.geometry,14),a)),M.add(L);let D=new Vi(new So(new la(.78,0)),c.get(_n));D.rotation.set(-.4,.1,.3);let U=new Xn;U.add(D),f(U,1.67,l.get(_n),[0,0,0],[.84,.4,0],5.35),f(U,1.86,l.get(xn),[0,0,0],[-.45,.95,-.6],4.3),f(U,2.15,l.get(_n),[0,0,0],[1.18,-.34,1.8],2.85),f(M,2.26,s,[0,-.9,0],[Math.PI/2,0,0]),M.add(U);let C=[];for(let O=0;O<8;O++){let z=O*vl/8;C.push([Math.cos(z)*1.95,-1.16,Math.sin(z)*1.24])}return u(M,C,l.get(_n),[.07,.07,.07]),O=>{U.rotation.y=Math.sin(O*.28)*.38,U.rotation.z=O*.09}}function p(M){m(M,4.75,3.05);for(let U of[-1.82,-.56,.7,1.96])h(M,[.13,3.25,1.2],[U,.39,0],s);let L=[];for(let U=0;U<3;U++){let C=-1.18+U*1.27;for(let O=0;O<5;O++){let z=-.98+O*.57;h(M,[1.08,.36,1.21],[C,z,0],i),h(M,[.52,.07,.035],[C-.12,z+.01,.624],s,null),L.push([C+.33,z+.02,.63])}d(M,[[C,1.48,-.66],[C,1.93,-.66],[C,1.93,.6],[C,1.56,.6]],c.get(xn))}u(M,L,l.get(xn),[.075,.044,.035]),f(M,1.8,s,[.06,-.7,.02],[Math.PI/2,0,0]);let D=h(M,[.12,.07,.04],[0,1.93,.6],l.get(_n),null);return U=>{D.position.x=Math.sin(U*.95)*1.25}}function g(M){m(M,4.8,3.05);let L=[[0,.5,.34],[-1.95,1.2,-.48],[1.95,1.2,-.48],[-1.3,-.35,.9],[1.3,-.35,.9],[0,1.95,-.85]],D=[[0,1],[0,2],[0,3],[0,4],[0,5],[1,5],[2,5],[1,3],[2,4],[3,4]],U=new xo(.42,0),C=new Fr(U);for(let[$,V]of L.entries()){let P=new hn(U,i);P.position.set(...V),P.scale.setScalar($===0?1.55:1),P.add(new Vi(C,c.get($%2?xn:_n))),M.add(P),d(M,[[V[0],-1.22,V[2]],V])}for(let[$,V]of D)d(M,[L[$],L[V]],$===0?c.get(_n):a);let O=h(M,[.09,.09,.09],L[0],l.get(xn),null),z=new G,F=new G;return $=>{let V=$*.6,[P,j]=D[Math.floor(V)%D.length];O.position.copy(z.fromArray(L[P])).lerp(F.fromArray(L[j]),V%1)}}function v(M){m(M,4.8,3.2);let L=new Xn;L.position.y=.36,M.add(L);for(let C=0;C<5;C++){let O=-.84+C*.42;f(L,1.5-C*.09,l.get(C%2?xn:_n),[0,0,O],[0,0,C*.61],vl*.78),f(L,1.64-C*.09,s,[0,0,O],[0,0,0])}for(let C of[-1.72,1.72])h(M,[.25,2.45,.53],[C,.09,-.42],i),h(M,[.28,.12,.58],[C,1.36,-.42],s);let D=[];for(let C=-4;C<=4;C++)for(let O=-4;O<=4;O++)Math.hypot(C,O)<4.5&&(C+O)%3!==1&&D.push([C*.21,.36+O*.21,.94-Math.cos(C+O)*.18]);let U=new Xn;return M.add(U),u(U,D,l.get(xn),[.038,.038,.038]),C=>{L.rotation.z=Math.sin(C*.28)*.35,U.position.z=Math.sin(C*.88)*.16}}function T(M){m(M,4.7,3.5);for(let U=0;U<4;U++){let C=-.97+U*.63;h(M,[3.15,.18,2.45],[0,C,0],U%2?i:s);for(let O of[-1,1])d(M,[[O*1.4,C+.105,-1.02],[O*1.4,C+.105,.75],[O*.75,C+.105,1.02],[0,C+.105,1.02]],c.get(U%2?xn:_n))}for(let U of[-1.22,1.22])for(let C of[-.95,.95])h(M,[.09,2.27,.09],[U,-.13,C],s,a);let L=h(M,[1.02,.28,.76],[0,1.21,0],i,c.get(_n)),D=[];for(let U=-3;U<=3;U++)D.push([U*.16,1.37,-.4],[U*.16,1.37,.4]);return u(M,D,l.get(xn),[.06,.025,.14]),U=>{L.position.y=1.21+Math.sin(U*.75)*.06}}function y(M){m(M,4.65,3.2);let L=new hn(new _o(.74),i);L.position.y=.31,L.add(new Vi(new Fr(L.geometry),c.get(_n))),M.add(L);let D=new Xn;D.position.y=.31,M.add(D);for(let U=0;U<7;U++){let C=U*vl/7,O=Math.cos(C)*1.75,z=Math.sin(C)*1.75,F=Math.sin(C*2)*.55,$=h(D,[.53,.33,.53],[O,F,z],i,c.get(U%2?_n:xn));$.rotation.y=-C,d(D,[[0,0,0],[O*.62,F,z*.62],[O,F,z]])}return f(M,1.82,l.get(xn),[0,.31,0],[Math.PI/2,.2,0],vl*.9),U=>{D.rotation.y=U*.13,L.rotation.set(.22,U*.23,.18)}}let E=[_,p,g,v,T,y],A=er.map((M,L)=>{let D=new Xn;D.name=M.name,D.position.set(...M.anchor);let U=E[L](D);return e.add(D),{group:D,animate:U}}),x=new Ao(68,68,5469386,3229339);x.position.set(25,-1.51,0),r.add(x);for(let M=0;M<5;M++){let L=2.1+M*.26,D=[[-7,-1.48,L]];for(let U=0;U<er.length;U++){let C=er[U].anchor[0],O=(U+M)%2*.66;D.push([C-3,-1.48,L],[C-2,-1.48,L+O],[C+2,-1.48,L+O],[C+3,-1.48,L])}D.push([57,-1.48,L]),d(r,D)}let S=new Float32Array(270);for(let M=0;M<90;M++)S.set([M*73%211/211*64-7,M*43%89/89*5-1,M*19%113/113*13-8],M*3);let I=new cn().setAttribute("position",new ii(S,3));return r.add(new fo(I,new sa({color:8429279,size:.028,sizeAttenuation:!0}))),{scene:r,landmarks:A,key:t,rim:n}}var i1,r1,_n,xn,vl,er,d0=Rr(()=>{Bf();i1=1121110,r1=2703004,_n=15856634,xn=8182015,vl=Math.PI*2,er=[{name:"top",anchor:[0,0,0],view:[6.5,4,9.2],lens:35,color:_n},{name:"production",anchor:[10,.35,-2],view:[5.7,3,9.5],lens:35,color:xn},{name:"agentic",anchor:[20,.1,.8],view:[.8,3.8,11],lens:36,color:_n},{name:"generative",anchor:[30,.2,-2.4],view:[-4,3,10.2],lens:37,color:xn},{name:"backend",anchor:[40,.05,1.4],view:[5.6,5,9.4],lens:34,color:_n},{name:"toolkit",anchor:[50,.1,-.3],view:[-1,2.6,11],lens:36,color:xn}]});var h1=_0(()=>{Bf();v_();u0();d0();Ld.registerPlugin(Ye);var Ni=document.querySelector("#world"),Sl=Array.from(document.querySelectorAll("[data-chapter]")),Ls=document.documentElement,s1=Array.from(document.querySelectorAll("[data-nav]")),ka=document.querySelector("#scroll-progress"),Ga=document.querySelector("#motion-toggle"),yl=window.matchMedia("(prefers-reduced-motion: reduce)"),a1=window.matchMedia("(pointer: fine)"),{clamp:op,damp:o1,lerp:p0}=vh,sp=()=>yl.matches||ap,ap=!1,Va=0,np=-1,Is=[],du=1,lp=()=>{},m0=new AbortController,tr=(r,e,t,n={})=>r?.addEventListener(e,t,{...n,signal:m0.signal});function l1(){let r=window.innerHeight;du=Math.max(1,document.documentElement.scrollHeight-r),Is=Sl.map((e,t)=>{let n=e.getBoundingClientRect().top+window.scrollY;return t===0?0:op(n-Math.min(r*.29,235),0,du)})}function g0(){let r=op(window.scrollY,0,du),e=0;for(;e<Is.length-1&&r>=Is[e+1];)e++;let t=Math.min(e+1,Is.length-1),n=Is[t]-Is[e],i=n>0?(r-Is[e])/n:0;Va=e+vh.smoothstep(i,.43,1);let s=Math.min(Math.round(Va),Sl.length-1),a=r/du;if(ka?.style.setProperty("--progress",String(a)),ka instanceof HTMLProgressElement?(ka.max=1,ka.value=a):ka?.getAttribute("role")==="progressbar"&&ka.setAttribute("aria-valuenow",String(Math.round(a*100))),s!==np){np=s;let o=Sl[np],l=o.dataset.chapter||o.id;Ls.dataset.activeChapter=l;for(let c of s1)c.dataset.nav===l||c.getAttribute("href")===`#${o.id}`?c.setAttribute("aria-current","location"):c.removeAttribute("aria-current")}lp()}function ip(){l1(),g0()}function rp(){let r=sp(),e=yl.matches?"Motion disabled":r?"Resume motion":"Pause motion";Ls.classList.toggle("motion-paused",r),document.body.classList.toggle("motion-paused",r),Ga?.setAttribute("aria-pressed",String(r)),Ga?.setAttribute("aria-label",yl.matches?"Motion disabled by system settings":e),Ga&&(Ga.disabled=yl.matches);let t=Ga?.querySelector("[data-motion-label]");t&&(t.textContent=e),lp()}function c1(){if(!Ni||Sl.length!==er.length)return()=>{};let r=Ni.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!r)return()=>{};let e;try{e=new bh({canvas:Ni,context:r,alpha:!0})}catch{return Ls.dataset.worldState="fallback",()=>{}}e.outputColorSpace=Dn,e.toneMapping=Ro,e.toneMappingExposure=1.15,e.setClearColor(0,0);let{scene:t,landmarks:n,key:i,rim:s}=f0(),a=new Nn(38,1,.1,85),o=er.map(z=>new G(...z.anchor)),l=er.map((z,F)=>o[F].clone().add(new G(...z.view))),c=new oa(l,!1,"catmullrom",.43),h=new oa(o,!1,"catmullrom",.38),d=new qe,f=new qe,u=new G,m=new Ve,_=new Ve,p=er.map(z=>new Ve(z.color)),g=Va,v=0,T=0,y=0,E=!1,A=!1,x=!0,S=1.6,I=0,M=1.6;function L(){let z=Ni.clientWidth||Ni.parentElement.clientWidth||innerWidth,F=Ni.clientHeight||Ni.parentElement.clientHeight||innerHeight;A=innerWidth<780;let $=Math.min(window.devicePixelRatio||1,A?1.25:1.6,M);S=$,e.setPixelRatio($),e.setSize(z,F,!1),a.aspect=z/Math.max(F,1),a.updateProjectionMatrix(),U()}function D(z){if(T=0,E||document.hidden||!x)return;let F=v?z-v:16.67,$=Math.min(F/1e3,1/30);v=z;let V=sp();g=V?Math.round(Va):o1(g,Va,7.2,$);let P=n.length-1,j=Math.min(Math.floor(g),P),Se=Math.min(j+1,P),Ue=g-j,Z=op(g/P,0,1);h.getPoint(Z,u),c.getPoint(Z,a.position),A&&(a.position.x=p0(a.position.x,u.x,.3),a.position.y+=.35),a.fov=p0(er[j].lens,er[Se].lens,Ue)+(A?2:0);let ce=Math.tan(a.fov*Math.PI/360),xe=a.position.distanceTo(u),be=Math.max(5.55/(2*ce*a.aspect),xe*(A&&a.aspect>1.35?.78:1));a.position.sub(u).multiplyScalar(be/xe).add(u),f.lerp(d,V?1:1-Math.exp(-4.3*$)),V||(a.position.x+=f.x*.18,a.position.y+=f.y*.12,y+=$),u.y+=A?.24:.16,a.lookAt(u),a.updateProjectionMatrix(),m.copy(p[j]).lerp(_.copy(p[Se]),Ue),s.color.copy(m),s.position.set(u.x-6,4,-5),i.position.set(u.x+1,8,9),i.target.position.copy(u),s.target.position.copy(u),i.target.updateMatrixWorld(),s.target.updateMatrixWorld();for(let[ue,Ce]of n.entries())Ce.group.visible=Math.abs(ue-g)<1.35,Ce.group.visible&&Ce.animate(V?0:y);e.render(t,a),Ls.dataset.worldState!=="ready"&&(Ls.dataset.worldState="ready"),!V&&S>1&&F>25?I++:I=Math.max(0,I-2),I>75&&M>1&&(M=1,I=0,L()),V||U()}function U(){!T&&!E&&!document.hidden&&x&&(T=requestAnimationFrame(D))}tr(window,"pointermove",z=>{!a1.matches||sp()||d.set(z.clientX/innerWidth*2-1,1-z.clientY/innerHeight*2)},{passive:!0}),tr(document.documentElement,"pointerleave",()=>d.set(0,0)),tr(document,"visibilitychange",()=>{v=0,U()}),tr(Ni,"webglcontextlost",z=>{z.preventDefault(),E=!0,Ls.dataset.worldState="lost",cancelAnimationFrame(T),T=0}),tr(Ni,"webglcontextrestored",()=>{E=!1,g=Va,v=0,L()});let C=new ResizeObserver(L);C.observe(Ni);let O=new IntersectionObserver(([z])=>{x=z.isIntersecting,v=0,U()});return O.observe(Ni),lp=U,L(),()=>{cancelAnimationFrame(T),C.disconnect(),O.disconnect();let z=new Set;t.traverse(F=>{F.geometry&&z.add(F.geometry),F.material&&z.add(F.material),F.isInstancedMesh&&z.add(F)});for(let F of z)F.dispose();e.dispose()}}if(Sl.length){Ls.dataset.worldState="fallback",ip(),rp();let r=Ye.create({id:"portfolio-world",start:0,end:"max",onUpdate:g0,onRefresh:ip}),e=c1();tr(Ga,"click",()=>{ap=!ap,rp()}),tr(yl,"change",rp),tr(window,"hashchange",ip),tr(window,"pageshow",()=>Ye.refresh()),tr(window,"pagehide",t=>{t.persisted||(m0.abort(),r.kill(),e())}),document.fonts?.ready.then(()=>Ye.refresh())}});h1();})();
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
