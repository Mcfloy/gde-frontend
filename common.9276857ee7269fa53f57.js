(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+vo5":function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("F/XL"),n=function(){function e(){this.id=1,this.mockedUsers=[{id:this.getGeneratedId(),name:"Mar | Persess",rankId:1,discordId:0x449a3c4ae800000,avatar:"https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128",ribbonIds:[],decorationIds:[],medalIds:[]},{id:this.getGeneratedId(),name:"Adj | Omegatho",rankId:13,discordId:0,avatar:"https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128",ribbonIds:[2,3,4],decorationIds:[],medalIds:[]},{id:this.getGeneratedId(),name:"Ch.2 | Eug\xe8ne Deflandre",rankId:25,discordId:0x1d7a55642c20000,avatar:"https://cdn.discordapp.com/avatars/132756503936499713/74201ef002d680674ebf76da1df7edfb.webp?size=128",ribbonIds:[3,4],medalIds:[],decorationIds:[]}]}return e.prototype.getGeneratedId=function(){return this.id++},e.prototype.all=function(e){return Object(r.a)(this.mockedUsers)},e.prototype.get=function(e){var t=this.mockedUsers.find(function(t){return t.id===parseInt(e.toString(),10)});if(t)return Object(r.a)(t);throw new Error("User not found with id="+e)},e.prototype.put=function(e){if(!e)throw new Error("Bad Request, user is null or undefined.");var t=this.mockedUsers.findIndex(function(t){return t.id===e.id});if(t)return this.mockedUsers[t]=e,Object(r.a)(e);throw new Error("User not found with id="+e.id)},e}()},"7aJY":function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("F/XL"),n=function(){function e(){this.id=1,this.mockedGuards=[{id:this.getGeneratedId(),name:"Mar\xe9chal d'Empire",position:1,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u2605 Officiers g\xe9n\xe9raux de la Garde Imp\xe9riale \u2605",position:2,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u2727 Officiers sup\xe9rieurs de la Garde Imp\xe9riale \u2727",position:3,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u25ca Officiers subalternes de la Garde Imp\xe9riale \u25ca ",position:3,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u0398 Sous-officiers de la Garde Imp\xe9riale \u0398",position:3,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u265b Grenadiers de la Vieille Garde Imp\xe9riale \u265b",position:4,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u265c Chasseurs de la Vieille Garde Imp\xe9riale \u265c",position:4,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u2694 Moyenne Garde Imp\xe9riale \u2694",position:5,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u2b59 Artillerie de la Garde Imp\xe9riale \u2b59",position:5,referringOfficiers:[]},{id:this.getGeneratedId(),name:"Unit\xe9 de support de la Garde Imp\xe9riale",position:5,referringOfficiers:[]},{id:this.getGeneratedId(),name:"\u233d Jeune Garde Imp\xe9riale \u233d",position:6,referringOfficiers:[]}]}return e.prototype.getGeneratedId=function(){return this.id++},e.prototype.all=function(){return Object(r.a)(this.mockedGuards)},e.prototype.get=function(e){var t=this.mockedGuards.find(function(t){return t.id===parseInt(e.toString(),10)});if(t)return Object(r.a)(t);throw new Error("Guard not found with id="+e)},e.prototype.post=function(e){if(!e||e.id)throw new Error("Bad request, guard null or id is not null");return e.id=this.getGeneratedId(),this.mockedGuards.push(e),Object(r.a)(e)},e.prototype.put=function(e){if(!e)throw new Error("Bad request, guard is null or undefined.");var t=this.mockedGuards.findIndex(function(t){return t.id===e.id});if(t)return this.mockedGuards[t]=e,Object(r.a)(e);throw new Error("Guard not found with id="+e.id)},e.prototype.delete=function(e){if(!e)throw new Error("Bad request, no id.");var t=this.mockedGuards.findIndex(function(t){return t.id===parseInt(e.toString(),10)});if(t)return delete this.mockedGuards[t],Object(r.a)(!0);throw new Error("Guard not found with id="+e)},e}()},RBsZ:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("F/XL"),n=function(){function e(){this.id=1,this.mockedRanks=[{id:this.getGeneratedId(),guardId:1,name:null,position:1},{id:this.getGeneratedId(),guardId:2,name:"G\xe9n\xe9ral en chef",position:1},{id:this.getGeneratedId(),guardId:2,name:"G\xe9n\xe9ral",position:2},{id:this.getGeneratedId(),guardId:2,name:"Adjudant-commandant",position:3},{id:this.getGeneratedId(),guardId:3,name:"Colonel",position:1},{id:this.getGeneratedId(),guardId:3,name:"Lieutenant colonel",position:2},{id:this.getGeneratedId(),guardId:3,name:"Major",position:3},{id:this.getGeneratedId(),guardId:3,name:"Chef de bataillon",position:4},{id:this.getGeneratedId(),guardId:4,name:"Capitaine",position:1},{id:this.getGeneratedId(),guardId:4,name:"Lieutenant",position:2},{id:this.getGeneratedId(),guardId:4,name:"Sous-Lieutenant",position:3},{id:this.getGeneratedId(),guardId:4,name:"Aspirant",position:4},{id:this.getGeneratedId(),guardId:5,name:"Adjudant",position:1},{id:this.getGeneratedId(),guardId:5,name:"Sergent-Major",position:2},{id:this.getGeneratedId(),guardId:5,name:"Sergent",position:3},{id:this.getGeneratedId(),guardId:5,name:"Brigadier",position:4},{id:this.getGeneratedId(),guardId:5,name:"Gendarme",position:5},{id:this.getGeneratedId(),guardId:6,name:"Caporal des Grenadiers",position:1},{id:this.getGeneratedId(),guardId:6,name:"Garde d'honneur",position:2},{id:this.getGeneratedId(),guardId:6,name:"Grenadier premi\xe8re classe",position:3},{id:this.getGeneratedId(),guardId:6,name:"Grenadier seconde classe",position:4},{id:this.getGeneratedId(),guardId:7,name:"Caporal des Chasseurs",position:1},{id:this.getGeneratedId(),guardId:7,name:"Voltigeur",position:2},{id:this.getGeneratedId(),guardId:7,name:"Chasseur premi\xe8re classe",position:3},{id:this.getGeneratedId(),guardId:7,name:"Chasseur seconde classe",position:4},{id:this.getGeneratedId(),guardId:8,name:"Caporal de la Moyenne Garde",position:1},{id:this.getGeneratedId(),guardId:8,name:"V\xe9lite premi\xe8re classe",position:2},{id:this.getGeneratedId(),guardId:8,name:"Dragon \xe0 pied premi\xe8re classe",position:2},{id:this.getGeneratedId(),guardId:8,name:"V\xe9lite seconde classe",position:3},{id:this.getGeneratedId(),guardId:8,name:"Dragon \xe0 pied seconde classe",position:3},{id:this.getGeneratedId(),guardId:8,name:"Flanqueur chasseur",position:4},{id:this.getGeneratedId(),guardId:8,name:"Flanqueur grenadier",position:4},{id:this.getGeneratedId(),guardId:11,name:"Caporal de la Jeune Garde",position:1},{id:this.getGeneratedId(),guardId:11,name:"Carabinier",position:2},{id:this.getGeneratedId(),guardId:11,name:"Fusilier",position:3},{id:this.getGeneratedId(),guardId:11,name:"Recrue",position:4},{id:this.getGeneratedId(),guardId:10,name:"Aide de camp",position:1},{id:this.getGeneratedId(),guardId:10,name:"Chef Auxiliaire",position:2},{id:this.getGeneratedId(),guardId:10,name:"Auxiliaire premi\xe8re classe",position:3},{id:this.getGeneratedId(),guardId:10,name:"Auxiliaire seconde classe",position:4},{id:this.getGeneratedId(),guardId:10,name:"Aspirant auxiliaire",position:5},{id:this.getGeneratedId(),guardId:10,name:"El\xe8ve auxiliaire",position:6},{id:this.getGeneratedId(),guardId:9,name:"Chef de Batterie",position:1},{id:this.getGeneratedId(),guardId:9,name:"Canonnier V\xe9t\xe9ran",position:2},{id:this.getGeneratedId(),guardId:9,name:"Canonnier premi\xe8re classe",position:3},{id:this.getGeneratedId(),guardId:9,name:"Canonnier seconde classe",position:4},{id:this.getGeneratedId(),guardId:9,name:"Servant d'artillerie premi\xe8re classe",position:5},{id:this.getGeneratedId(),guardId:9,name:"Servent d'artillerie seconde classe",position:6}]}return e.prototype.getGeneratedId=function(){return this.id++},e.prototype.all=function(){return Object(r.a)(this.mockedRanks)},e.prototype.get=function(e){var t=this.mockedRanks.find(function(t){return t.id===parseInt(e.toString(),10)});if(t)return Object(r.a)(t);throw new Error("Rank not found with id="+e)},e.prototype.post=function(e){if(!e||e.id)throw new Error("Bad request, rank null or id is not null");return e.id=this.getGeneratedId(),this.mockedRanks.push(e),Object(r.a)(e)},e.prototype.put=function(e){if(!e)throw new Error("Bad request, rank is null or undefined.");var t=this.mockedRanks.findIndex(function(t){return t.id===e.id});if(t)return this.mockedRanks[t]=e,Object(r.a)(e);throw new Error("Rank not found with id="+e.id)},e.prototype.delete=function(e){if(!e)throw new Error("Bad request, no id.");var t=this.mockedRanks.findIndex(function(t){return t.id===parseInt(e.toString(),10)});if(t)return delete this.mockedRanks[t],Object(r.a)(!0);throw new Error("Rank not found with id="+e)},e}()},vtQE:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("F/XL"),n=function(){function e(){this.id=1,this.mockedRibbons=[{id:this.getGeneratedId(),categoryId:1,description:"Avoir tous les rubans disponibles",name:"Num\xe9ro 1",imageURL:""},{id:this.getGeneratedId(),categoryId:2,description:"Faire un tir au mousquet \xe0 300 m\xe8tres en LB",name:"Maitre Tirailleur",imageURL:""},{id:this.getGeneratedId(),categoryId:2,description:"Faire un tir au mousquet \xe0 200 m\xe8tres en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:2,description:"Faire un tir au mousquet \xe0 150 m\xe8tres en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:3,description:"Faire un tir au pistolet \xe0 150 m\xe8tres en LB",name:"Maitre tireur",imageURL:""},{id:this.getGeneratedId(),categoryId:3,description:"Faire un tir au pistolet \xe0 100 m\xe8tres en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:3,description:"Faire un tir au pistolet \xe0 60 m\xe8tres en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:6,description:"Avoir recrut\xe9 13 personnes",name:"Recruteur v\xe9t\xe9ran",imageURL:""},{id:this.getGeneratedId(),categoryId:6,description:"Avoir recrut\xe9 8 personnes",name:"Recruteur exp\xe9riment\xe9",imageURL:""},{id:this.getGeneratedId(),categoryId:6,description:"Avoir recrut\xe9 5 personnes",name:"Recruteur novice",imageURL:""},{id:this.getGeneratedId(),categoryId:7,description:"Faire 11 morts au canon en LB",name:"Canonnier expert",imageURL:""},{id:this.getGeneratedId(),categoryId:7,description:"Faire 7 morts au canon en LB",name:"Canonnier exp\xe9riment\xe9",imageURL:""},{id:this.getGeneratedId(),categoryId:7,description:"Faire 4 morts au canon en LB",name:"Canonnier novice",imageURL:""},{id:this.getGeneratedId(),categoryId:4,description:"Faire 12 morts \xe0 la ba\xefonnette en LB",name:"Maitre planteur",imageURL:""},{id:this.getGeneratedId(),categoryId:4,description:"Faire 7 morts \xe0 la ba\xefonnette en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:4,description:"Faire 5 morts \xe0 la ba\xefonnette en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:8,description:"Faire 20 morts sans mourir",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:8,description:"Faire 15 morts sans mourir",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:8,description:"Mourir 30 fois en une partie",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:5,description:"Faire 7 morts au sabre en LB",name:"Maitre sabreur",imageURL:""},{id:this.getGeneratedId(),categoryId:5,description:"Faire 5 morts au sabre en LB",name:"",imageURL:""},{id:this.getGeneratedId(),categoryId:5,description:"Faire 3 morts au sabre en LB",name:"",imageURL:""}]}return e.prototype.getGeneratedId=function(){return this.id++},e.prototype.all=function(){return Object(r.a)(this.mockedRibbons)},e.prototype.get=function(e){var t=this.mockedRibbons.find(function(t){return t.id===parseInt(e.toString(),10)});if(t)return Object(r.a)(t);throw new Error("Ribbon not found with id="+e)},e.prototype.post=function(e){throw new Error("Method not implemented.")},e.prototype.put=function(e){throw new Error("Method not implemented.")},e.prototype.delete=function(e){throw new Error("Method not implemented.")},e}()}}]);