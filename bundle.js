(()=>{"use strict";const t=new Map([["info","rgb(0, 255, 0)"],["error","red"],["warn","yellow"],["debug","rgb(133, 0, 133)"]]);var e;!function(e){e.ElmExistID=function(t){return null!==document.getElementById(t)},e.print=function(e,n){const i=new Date;console.info("%c[%c"+i.toLocaleDateString()+"%c] [%c"+i.toLocaleTimeString()+"%c] - %c"+e.toUpperCase()+"%c - %c"+n,"color: gray;","color: green;","color: gray;","color: green;","color: gray;",`color: ${t.get(e)}`,"color: gray;","color: white")}}(e||(e={}));class n{constructor(t){this.body_class="et_body",this.body_loaded=!1,this.interface=t}Init(){return e.print("info","Loading Body..."),this.body_loaded=this.interface.Init(),document.body.append(this.interface.elm),e.print("info","Loaded Body!"),this.body_loaded}}class i{constructor(){this.title_text="Night The Fox's Page",this.title_loaded=!1,this.title_id="et_title",this.css_file="style.css",this.css_loaded=!1,this.css_id="et_stylesheet",this.head_loaded=!1,this.head_class="et_head"}Init(){return e.print("info","Loading Head..."),this.head_loaded=this.loadTitle()&&this.hasCSSLoaded(),e.print("info","Loaded Head!"),this.head_loaded}hasCSSLoaded(){return e.ElmExistID("et_stylesheet")&&(this.css_loaded=!0),this.css_loaded}loadTitle(){e.print("info","Loading Head Title...");const t=document.createElement("title");return t.innerHTML=this.title_text,t.id=this.title_id,t.className=this.head_class,document.head.append(t),this.title_loaded=!0,e.print("info","Loaded Head Title!"),this.title_loaded}}class s{constructor(t,e,n){this.elm=null,this.content=e,this.navbar=t,this.footer=n}Init(){this.elm=document.createElement("div");const t=this.content.Init(),e=this.navbar.Init(),n=this.footer.Init();return this.elm.append(e.elm,t.elm,n.elm),!0}}class o{constructor(){this.elm=null,this.wip_text="This Page is currently Work In Progress (WIP)"}Init(){this.elm=document.createElement("div");const t=document.createElement("p");return t.innerHTML=this.wip_text,this.elm.append(t),this}}class l{constructor(){this.elm=null,this.text="<small>&copy; Copyright "+(new Date).getFullYear()+"</small>"}Init(){return this.elm=document.createElement("footer"),this.elm.innerHTML=this.text,this}}class a{constructor(){this.elm=null,this.title="N1ghtTheF0x's Page",this.links=new Map([["Home","/home"],["Projects","/projects"],["About","/about"]])}Init(){this.elm=document.createElement("nav");const t=document.createElement("h1");t.innerHTML=this.title,t.id="et_nav_title",this.elm.append(t);const e=document.createElement("table");e.id="et_nav_table";const n=document.createElement("tr");for(const[t,e]of this.links.entries()){const i=document.createElement("th"),s=document.createElement("a");s.innerHTML=" "+t+" ",s.href=location.origin+e,s.className="et_navbar_link",s.id="et_navbar_link_"+t,i.append(s),n.append(i)}return e.append(n),this.elm.append(e),this}}class r{constructor(t,e){this.head=t,this.body=e}Init(){e.print("info","Loading Website..."),this.head.Init(),this.body.Init(),e.print("info","Loaded Website!")}}document.body.onload=function(){const t=new i,e=new n(new s(new a,new o,new l));new r(t,e).Init()}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2JvZHkudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2hlYWQudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvaW50ZXJmYWNlL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2ludGVyZmFjZS9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2ludGVyZmFjZS9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL3dlYnNpdGUudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkVUX1V0aWxzUHJpbnRUeXBlQ29sb3IiLCJNYXAiLCJFVF9VdGlscyIsIkVsbUV4aXN0SUQiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmludCIsInR5cGUiLCJtZXNzYWdlIiwiZGF0ZSIsIkRhdGUiLCJjb25zb2xlIiwiaW5mbyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInRvVXBwZXJDYXNlIiwiZ2V0IiwiRVRfQm9keSIsIkludGVyZmFjZSIsInRoaXMiLCJib2R5X2NsYXNzIiwiYm9keV9sb2FkZWQiLCJpbnRlcmZhY2UiLCJJbml0IiwiYm9keSIsImFwcGVuZCIsImVsbSIsIkVUX0hlYWQiLCJ0aXRsZV90ZXh0IiwidGl0bGVfbG9hZGVkIiwidGl0bGVfaWQiLCJjc3NfZmlsZSIsImNzc19sb2FkZWQiLCJjc3NfaWQiLCJoZWFkX2xvYWRlZCIsImhlYWRfY2xhc3MiLCJsb2FkVGl0bGUiLCJoYXNDU1NMb2FkZWQiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJoZWFkIiwiRVRfSW50ZXJmYWNlIiwibmF2YmFyIiwiY29udGVudCIsImZvb3RlciIsIkVUX0NvbnRlbnQiLCJ3aXBfdGV4dCIsIndpcF9lbG0iLCJFVF9Gb290ZXIiLCJ0ZXh0IiwiZ2V0RnVsbFllYXIiLCJFVF9OYXZiYXIiLCJsaW5rcyIsInRpdGxlX2VsbSIsIm5hdl90YWJsZSIsIm5hdl90YWJsZV9yb3ciLCJrZXkiLCJ2YWx1ZSIsImVudHJpZXMiLCJuYXZfdGFibGVfY29sIiwiYXR0cmlidXRlIiwiaHJlZiIsImxvY2F0aW9uIiwib3JpZ2luIiwiRVRfV2Vic2l0ZSIsIm9ubG9hZCIsIkhFQUQiLCJCT0RZIl0sIm1hcHBpbmdzIjoibUJBQ0EsTUFBTUEsRUFBd0QsSUFBSUMsSUFBSSxDQUNsRSxDQUFDLE9BQU8sa0JBQ1IsQ0FBQyxRQUFRLE9BQ1QsQ0FBQyxPQUFPLFVBQ1IsQ0FBQyxRQUFRLHNCQUdOLElBQVVDLEdBQWpCLFNBQWlCQSxHQUVHLEVBQUFDLFdBQWhCLFNBQTJCQyxHQUV2QixPQUF1QyxPQUFoQ0MsU0FBU0MsZUFBZUYsSUFFbkIsRUFBQUcsTUFBaEIsU0FBc0JDLEVBQXdCQyxHQUUxQyxNQUFNQyxFQUFPLElBQUlDLEtBQ2pCQyxRQUFRQyxLQUFLLFFBQVFILEVBQUtJLHFCQUFxQixVQUFVSixFQUFLSyxxQkFBcUIsV0FBV1AsRUFBS1EsY0FBYyxVQUFVUCxFQUMzSCxlQUNBLGdCQUNBLGVBQ0EsZ0JBQ0EsZUFDQSxVQUFVVCxFQUF1QmlCLElBQUlULEtBQ3JDLGVBQ0EsaUJBakJSLENBQWlCTixNQUFRLEtDTGxCLE1BQU1nQixFQU1ULFlBQVlDLEdBRVJDLEtBQUtDLFdBQWEsVUFDbEJELEtBQUtFLGFBQWMsRUFDbkJGLEtBQUtHLFVBQVlKLEVBRXJCLE9BTUksT0FKQWpCLEVBQVNLLE1BQU0sT0FBTyxtQkFDdEJhLEtBQUtFLFlBQWVGLEtBQUtHLFVBQVVDLE9BQ25DbkIsU0FBU29CLEtBQUtDLE9BQU9OLEtBQUtHLFVBQVVJLEtBQ3BDekIsRUFBU0ssTUFBTSxPQUFPLGdCQUNmYSxLQUFLRSxhQ25CYixNQUFNTSxFQWFULGNBR0lSLEtBQUtTLFdBQWEsdUJBQ2xCVCxLQUFLVSxjQUFlLEVBQ3BCVixLQUFLVyxTQUFXLFdBRWhCWCxLQUFLWSxTQUFXLFlBQ2hCWixLQUFLYSxZQUFhLEVBQ2xCYixLQUFLYyxPQUFTLGdCQUVkZCxLQUFLZSxhQUFjLEVBQ25CZixLQUFLZ0IsV0FBYSxVQUV0QixPQUtJLE9BSEFsQyxFQUFTSyxNQUFNLE9BQU8sbUJBQ3RCYSxLQUFLZSxZQUFlZixLQUFLaUIsYUFBZWpCLEtBQUtrQixlQUM3Q3BDLEVBQVNLLE1BQU0sT0FBTyxnQkFDZmEsS0FBS2UsWUFFaEIsZUFNSSxPQUpHakMsRUFBU0MsV0FBVyxtQkFFbkJpQixLQUFLYSxZQUFhLEdBRWZiLEtBQUthLFdBRWhCLFlBRUkvQixFQUFTSyxNQUFNLE9BQU8seUJBQ3RCLE1BQU1nQyxFQUFRbEMsU0FBU21DLGNBQWMsU0FPckMsT0FOQUQsRUFBTUUsVUFBWXJCLEtBQUtTLFdBQ3ZCVSxFQUFNbkMsR0FBS2dCLEtBQUtXLFNBQ2hCUSxFQUFNRyxVQUFZdEIsS0FBS2dCLFdBQ3ZCL0IsU0FBU3NDLEtBQUtqQixPQUFPYSxHQUNyQm5CLEtBQUtVLGNBQWUsRUFDcEI1QixFQUFTSyxNQUFNLE9BQU8sc0JBQ2ZhLEtBQUtVLGNDbERiLE1BQU1jLEVBTVQsWUFBWUMsRUFBa0JDLEVBQW9CQyxHQUU5QzNCLEtBQUtPLElBQU0sS0FDWFAsS0FBSzBCLFFBQVVBLEVBQ2YxQixLQUFLeUIsT0FBU0EsRUFDZHpCLEtBQUsyQixPQUFTQSxFQUVsQixPQUVJM0IsS0FBS08sSUFBTXRCLFNBQVNtQyxjQUFjLE9BQ2xDLE1BQU1NLEVBQVUxQixLQUFLMEIsUUFBUXRCLE9BQ3ZCcUIsRUFBU3pCLEtBQUt5QixPQUFPckIsT0FDckJ1QixFQUFTM0IsS0FBSzJCLE9BQU92QixPQUUzQixPQURBSixLQUFLTyxJQUFJRCxPQUFPbUIsRUFBT2xCLElBQUltQixFQUFRbkIsSUFBSW9CLEVBQU9wQixNQUN2QyxHQ3hCUixNQUFNcUIsRUFJVCxjQUVJNUIsS0FBS08sSUFBTSxLQUNYUCxLQUFLNkIsU0FBVyxnREFFcEIsT0FFSTdCLEtBQUtPLElBQU10QixTQUFTbUMsY0FBYyxPQUNsQyxNQUFNVSxFQUFVN0MsU0FBU21DLGNBQWMsS0FHdkMsT0FGQVUsRUFBUVQsVUFBWXJCLEtBQUs2QixTQUN6QjdCLEtBQUtPLElBQUlELE9BQU93QixHQUNUOUIsTUNmUixNQUFNK0IsRUFJVCxjQUVJL0IsS0FBS08sSUFBTSxLQUNYUCxLQUFLZ0MsS0FBTyw0QkFBMkIsSUFBSXpDLE1BQU8wQyxjQUFjLFdBRXBFLE9BSUksT0FGQWpDLEtBQUtPLElBQU10QixTQUFTbUMsY0FBYyxVQUNsQ3BCLEtBQUtPLElBQUljLFVBQVlyQixLQUFLZ0MsS0FDbkJoQyxNQ1ZSLE1BQU1rQyxFQU1ULGNBRUlsQyxLQUFLTyxJQUFNLEtBQ1hQLEtBQUttQixNQUFRLHFCQUNibkIsS0FBS21DLE1BQVEsSUFBSXRELElBQUksQ0FDakIsQ0FBQyxPQUFPLFNBQ1IsQ0FBQyxXQUFXLGFBQ1osQ0FBQyxRQUFRLFlBR2pCLE9BRUltQixLQUFLTyxJQUFNdEIsU0FBU21DLGNBQWMsT0FDbEMsTUFBTWdCLEVBQVluRCxTQUFTbUMsY0FBYyxNQUN6Q2dCLEVBQVVmLFVBQVlyQixLQUFLbUIsTUFDM0JpQixFQUFVcEQsR0FBSyxlQUNmZ0IsS0FBS08sSUFBSUQsT0FBTzhCLEdBQ2hCLE1BQU1DLEVBQVlwRCxTQUFTbUMsY0FBYyxTQUN6Q2lCLEVBQVVyRCxHQUFLLGVBQ2YsTUFBTXNELEVBQWdCckQsU0FBU21DLGNBQWMsTUFDN0MsSUFBSSxNQUFPbUIsRUFBSUMsS0FBVXhDLEtBQUttQyxNQUFNTSxVQUNwQyxDQUNJLE1BQU1DLEVBQWdCekQsU0FBU21DLGNBQWMsTUFDdkN1QixFQUFZMUQsU0FBU21DLGNBQWMsS0FDekN1QixFQUFVdEIsVUFBWSxJQUFJa0IsRUFBSSxJQUM5QkksRUFBVUMsS0FBT0MsU0FBU0MsT0FBT04sRUFDakNHLEVBQVVyQixVQUFZLGlCQUN0QnFCLEVBQVUzRCxHQUFLLGtCQUFrQnVELEVBQ2pDRyxFQUFjcEMsT0FBT3FDLEdBQ3JCTCxFQUFjaEMsT0FBT29DLEdBSXpCLE9BRkFMLEVBQVUvQixPQUFPZ0MsR0FDakJ0QyxLQUFLTyxJQUFJRCxPQUFPK0IsR0FDVHJDLE1DdENSLE1BQU0rQyxFQUlULFlBQVl4QixFQUFjbEIsR0FFdEJMLEtBQUt1QixLQUFPQSxFQUNadkIsS0FBS0ssS0FBT0EsRUFFaEIsT0FFSXZCLEVBQVNLLE1BQU0sT0FBTyxzQkFDdEJhLEtBQUt1QixLQUFLbkIsT0FDVkosS0FBS0ssS0FBS0QsT0FDVnRCLEVBQVNLLE1BQU0sT0FBTyxvQkNUOUJGLFNBQVNvQixLQUFLMkMsT0FBTyxXQUVqQixNQUFNQyxFQUFPLElBQUl6QyxFQUNYMEMsRUFBTyxJQUFJcEQsRUFBUSxJQUFJMEIsRUFBYSxJQUFJVSxFQUFZLElBQUlOLEVBQWEsSUFBSUcsSUFFL0UsSUFBSWdCLEVBQVdFLEVBQUtDLEdBQU05QyxTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgRVRfVXRpbHNQcmludFR5cGUgPSBcImluZm9cIiB8IFwid2FyblwiIHwgXCJlcnJvclwiIHwgXCJkZWJ1Z1wiXHJcbmNvbnN0IEVUX1V0aWxzUHJpbnRUeXBlQ29sb3I6IE1hcDxFVF9VdGlsc1ByaW50VHlwZSxzdHJpbmc+ID0gbmV3IE1hcChbXHJcbiAgICBbXCJpbmZvXCIsXCJyZ2IoMCwgMjU1LCAwKVwiXSxcclxuICAgIFtcImVycm9yXCIsXCJyZWRcIl0sXHJcbiAgICBbXCJ3YXJuXCIsXCJ5ZWxsb3dcIl0sXHJcbiAgICBbXCJkZWJ1Z1wiLFwicmdiKDEzMywgMCwgMTMzKVwiXVxyXG5dKVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFVF9VdGlsc1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRWxtRXhpc3RJRChpZDogc3RyaW5nKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGxcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBwcmludCh0eXBlOiBFVF9VdGlsc1ByaW50VHlwZSxtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zb2xlLmluZm8oXCIlY1slY1wiK2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkrXCIlY10gWyVjXCIrZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKStcIiVjXSAtICVjXCIrdHlwZS50b1VwcGVyQ2FzZSgpK1wiJWMgLSAlY1wiK21lc3NhZ2UsXHJcbiAgICAgICAgXCJjb2xvcjogZ3JheTtcIixcclxuICAgICAgICBcImNvbG9yOiBncmVlbjtcIixcclxuICAgICAgICBcImNvbG9yOiBncmF5O1wiLFxyXG4gICAgICAgIFwiY29sb3I6IGdyZWVuO1wiLFxyXG4gICAgICAgIFwiY29sb3I6IGdyYXk7XCIsXHJcbiAgICAgICAgYGNvbG9yOiAke0VUX1V0aWxzUHJpbnRUeXBlQ29sb3IuZ2V0KHR5cGUpfWAsXHJcbiAgICAgICAgXCJjb2xvcjogZ3JheTtcIixcclxuICAgICAgICBcImNvbG9yOiB3aGl0ZVwiKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVRfSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCJcclxuaW1wb3J0IHsgRVRfVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgRVRfQm9keVxyXG57XHJcbiAgICBib2R5X2xvYWRlZDogYm9vbGVhblxyXG4gICAgYm9keV9jbGFzczogc3RyaW5nXHJcblxyXG4gICAgaW50ZXJmYWNlOiBFVF9JbnRlcmZhY2VcclxuICAgIGNvbnN0cnVjdG9yKEludGVyZmFjZTogRVRfSW50ZXJmYWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYm9keV9jbGFzcyA9IFwiZXRfYm9keVwiXHJcbiAgICAgICAgdGhpcy5ib2R5X2xvYWRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UgPSBJbnRlcmZhY2VcclxuICAgIH1cclxuICAgIEluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGluZyBCb2R5Li4uXCIpXHJcbiAgICAgICAgdGhpcy5ib2R5X2xvYWRlZCA9ICh0aGlzLmludGVyZmFjZS5Jbml0KCkpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5pbnRlcmZhY2UuZWxtKVxyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGVkIEJvZHkhXCIpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keV9sb2FkZWRcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVUX1V0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEVUX0hlYWRcclxue1xyXG4gICAgLy8gVGl0bGUgUHJvcGVydGllc1xyXG4gICAgdGl0bGVfdGV4dDogc3RyaW5nXHJcbiAgICB0aXRsZV9sb2FkZWQ6IGJvb2xlYW5cclxuICAgIHRpdGxlX2lkOiBzdHJpbmdcclxuICAgIC8vIENTUyBQcm9wZXJ0aWVzXHJcbiAgICBjc3NfZmlsZTogc3RyaW5nXHJcbiAgICBjc3NfbG9hZGVkOiBib29sZWFuXHJcbiAgICBjc3NfaWQ6IHN0cmluZ1xyXG4gICAgLy8gSGVhZCBQcm9wZXJ0aWVzXHJcbiAgICBoZWFkX2NsYXNzOiBzdHJpbmdcclxuICAgIGhlYWRfbG9hZGVkOiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVGl0bGUgU3R1ZmZcclxuICAgICAgICB0aGlzLnRpdGxlX3RleHQgPSBcIk5pZ2h0IFRoZSBGb3gncyBQYWdlXCJcclxuICAgICAgICB0aGlzLnRpdGxlX2xvYWRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50aXRsZV9pZCA9IFwiZXRfdGl0bGVcIlxyXG4gICAgICAgIC8vIENTUyBTdHVmZlxyXG4gICAgICAgIHRoaXMuY3NzX2ZpbGUgPSBcInN0eWxlLmNzc1wiXHJcbiAgICAgICAgdGhpcy5jc3NfbG9hZGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNzc19pZCA9IFwiZXRfc3R5bGVzaGVldFwiXHJcbiAgICAgICAgLy8gSGVhZCBTdHVmZlxyXG4gICAgICAgIHRoaXMuaGVhZF9sb2FkZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaGVhZF9jbGFzcyA9IFwiZXRfaGVhZFwiXHJcbiAgICB9XHJcbiAgICBJbml0KCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBFVF9VdGlscy5wcmludChcImluZm9cIixcIkxvYWRpbmcgSGVhZC4uLlwiKVxyXG4gICAgICAgIHRoaXMuaGVhZF9sb2FkZWQgPSAodGhpcy5sb2FkVGl0bGUoKSAmJiB0aGlzLmhhc0NTU0xvYWRlZCgpKVxyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGVkIEhlYWQhXCIpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZF9sb2FkZWRcclxuICAgIH1cclxuICAgIGhhc0NTU0xvYWRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoRVRfVXRpbHMuRWxtRXhpc3RJRChcImV0X3N0eWxlc2hlZXRcIikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNzc19sb2FkZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNzc19sb2FkZWRcclxuICAgIH1cclxuICAgIGxvYWRUaXRsZSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkaW5nIEhlYWQgVGl0bGUuLi5cIilcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiKVxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGVfdGV4dFxyXG4gICAgICAgIHRpdGxlLmlkID0gdGhpcy50aXRsZV9pZFxyXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IHRoaXMuaGVhZF9jbGFzc1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHRpdGxlKVxyXG4gICAgICAgIHRoaXMudGl0bGVfbG9hZGVkID0gdHJ1ZVxyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGVkIEhlYWQgVGl0bGUhXCIpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVfbG9hZGVkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVF9OYXZiYXIgfSBmcm9tIFwiLi9pbnRlcmZhY2UvbmF2YmFyXCJcclxuaW1wb3J0IHsgRVRfQ29udGVudCB9IGZyb20gXCIuL2ludGVyZmFjZS9jb250ZW50XCJcclxuaW1wb3J0IHsgRVRfRm9vdGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY2xhc3MgRVRfSW50ZXJmYWNlXHJcbntcclxuICAgIGVsbTogSFRNTERpdkVsZW1lbnRcclxuICAgIG5hdmJhcjogRVRfTmF2YmFyXHJcbiAgICBjb250ZW50OiBFVF9Db250ZW50XHJcbiAgICBmb290ZXI6IEVUX0Zvb3RlclxyXG4gICAgY29uc3RydWN0b3IobmF2YmFyOiBFVF9OYXZiYXIsY29udGVudDogRVRfQ29udGVudCxmb290ZXI6IEVUX0Zvb3RlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGxcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50XHJcbiAgICAgICAgdGhpcy5uYXZiYXIgPSBuYXZiYXJcclxuICAgICAgICB0aGlzLmZvb3RlciA9IGZvb3RlclxyXG4gICAgfVxyXG4gICAgSW5pdCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudC5Jbml0KClcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSB0aGlzLm5hdmJhci5Jbml0KClcclxuICAgICAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3Rlci5Jbml0KClcclxuICAgICAgICB0aGlzLmVsbS5hcHBlbmQobmF2YmFyLmVsbSxjb250ZW50LmVsbSxmb290ZXIuZWxtKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRVRfQ29udGVudFxyXG57XHJcbiAgICBlbG06IEhUTUxEaXZFbGVtZW50XHJcbiAgICB3aXBfdGV4dDogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsXHJcbiAgICAgICAgdGhpcy53aXBfdGV4dCA9IFwiVGhpcyBQYWdlIGlzIGN1cnJlbnRseSBXb3JrIEluIFByb2dyZXNzIChXSVApXCJcclxuICAgIH1cclxuICAgIEluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNvbnN0IHdpcF9lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIHdpcF9lbG0uaW5uZXJIVE1MID0gdGhpcy53aXBfdGV4dFxyXG4gICAgICAgIHRoaXMuZWxtLmFwcGVuZCh3aXBfZWxtKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRVRfRm9vdGVyXHJcbntcclxuICAgIGVsbTogSFRNTEVsZW1lbnRcclxuICAgIHRleHQ6IHN0cmluZ1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxtID0gbnVsbFxyXG4gICAgICAgIHRoaXMudGV4dCA9IFwiPHNtYWxsPiZjb3B5OyBDb3B5cmlnaHQgXCIrbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpK1wiPC9zbWFsbD5cIlxyXG4gICAgfVxyXG4gICAgSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXHJcbiAgICAgICAgdGhpcy5lbG0uaW5uZXJIVE1MID0gdGhpcy50ZXh0XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSIsInR5cGUgTGlua05hbWUgPSBzdHJpbmdcclxudHlwZSBMaW5rVXJsID0gc3RyaW5nXHJcblxyXG5leHBvcnQgY2xhc3MgRVRfTmF2YmFyXHJcbntcclxuICAgIGVsbTogSFRNTEVsZW1lbnRcclxuXHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICBsaW5rczogTWFwPExpbmtOYW1lLExpbmtVcmw+XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiTjFnaHRUaGVGMHgncyBQYWdlXCJcclxuICAgICAgICB0aGlzLmxpbmtzID0gbmV3IE1hcChbXHJcbiAgICAgICAgICAgIFtcIkhvbWVcIixcIi9ob21lXCJdLFxyXG4gICAgICAgICAgICBbXCJQcm9qZWN0c1wiLFwiL3Byb2plY3RzXCJdLFxyXG4gICAgICAgICAgICBbXCJBYm91dFwiLFwiL2Fib3V0XCJdXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuICAgIEluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlX2VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgICAgIHRpdGxlX2VsbS5pbm5lckhUTUwgPSB0aGlzLnRpdGxlXHJcbiAgICAgICAgdGl0bGVfZWxtLmlkID0gXCJldF9uYXZfdGl0bGVcIlxyXG4gICAgICAgIHRoaXMuZWxtLmFwcGVuZCh0aXRsZV9lbG0pXHJcbiAgICAgICAgY29uc3QgbmF2X3RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpXHJcbiAgICAgICAgbmF2X3RhYmxlLmlkID0gXCJldF9uYXZfdGFibGVcIlxyXG4gICAgICAgIGNvbnN0IG5hdl90YWJsZV9yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIilcclxuICAgICAgICBmb3IoY29uc3QgW2tleSx2YWx1ZV0gb2YgdGhpcy5saW5rcy5lbnRyaWVzKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBuYXZfdGFibGVfY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZS5pbm5lckhUTUwgPSBcIiBcIitrZXkrXCIgXCJcclxuICAgICAgICAgICAgYXR0cmlidXRlLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4rdmFsdWVcclxuICAgICAgICAgICAgYXR0cmlidXRlLmNsYXNzTmFtZSA9IFwiZXRfbmF2YmFyX2xpbmtcIlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUuaWQgPSBcImV0X25hdmJhcl9saW5rX1wiK2tleVxyXG4gICAgICAgICAgICBuYXZfdGFibGVfY29sLmFwcGVuZChhdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgIG5hdl90YWJsZV9yb3cuYXBwZW5kKG5hdl90YWJsZV9jb2wpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdl90YWJsZS5hcHBlbmQobmF2X3RhYmxlX3JvdylcclxuICAgICAgICB0aGlzLmVsbS5hcHBlbmQobmF2X3RhYmxlKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVF9Cb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5pbXBvcnQgeyBFVF9IZWFkIH0gZnJvbSBcIi4vaGVhZFwiO1xyXG5pbXBvcnQgeyBFVF9VdGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBFVF9XZWJzaXRlXHJcbntcclxuICAgIGhlYWQ6IEVUX0hlYWRcclxuICAgIGJvZHk6IEVUX0JvZHlcclxuICAgIGNvbnN0cnVjdG9yKGhlYWQ6IEVUX0hlYWQsYm9keTogRVRfQm9keSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keVxyXG4gICAgfVxyXG4gICAgSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkaW5nIFdlYnNpdGUuLi5cIilcclxuICAgICAgICB0aGlzLmhlYWQuSW5pdCgpXHJcbiAgICAgICAgdGhpcy5ib2R5LkluaXQoKVxyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGVkIFdlYnNpdGUhXCIpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFVF9Cb2R5IH0gZnJvbSBcIi4vYm9keVwiXHJcbmltcG9ydCB7IEVUX0hlYWQgfSBmcm9tIFwiLi9oZWFkXCJcclxuaW1wb3J0IHsgRVRfSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCJcclxuaW1wb3J0IHsgRVRfQ29udGVudCB9IGZyb20gXCIuL2ludGVyZmFjZS9jb250ZW50XCJcclxuaW1wb3J0IHsgRVRfRm9vdGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2Zvb3RlclwiXHJcbmltcG9ydCB7IEVUX05hdmJhciB9IGZyb20gXCIuL2ludGVyZmFjZS9uYXZiYXJcIlxyXG5pbXBvcnQgeyBFVF9VdGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgRVRfV2Vic2l0ZSB9IGZyb20gXCIuL3dlYnNpdGVcIlxyXG5cclxuZG9jdW1lbnQuYm9keS5vbmxvYWQ9ZnVuY3Rpb24oKVxyXG57XHJcbiAgICBjb25zdCBIRUFEID0gbmV3IEVUX0hlYWQoKVxyXG4gICAgY29uc3QgQk9EWSA9IG5ldyBFVF9Cb2R5KG5ldyBFVF9JbnRlcmZhY2UobmV3IEVUX05hdmJhcigpLG5ldyBFVF9Db250ZW50KCksbmV3IEVUX0Zvb3RlcigpKSlcclxuXHJcbiAgICBuZXcgRVRfV2Vic2l0ZShIRUFELEJPRFkpLkluaXQoKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=