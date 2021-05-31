(self.webpackChunkmtaa_doc=self.webpackChunkmtaa_doc||[]).push([[86],{359:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=t(2122),n=t(9756),i=(t(7294),t(3905)),s=["components"],r={sidebar_position:3},l={unversionedId:"mtaa/grouped_location",id:"mtaa/grouped_location",isDocsHomePage:!1,title:"Grouped locations",description:"So far we have seen how to use mtaa to access certain information at a particular location level, now let's see how we can use it to fetch grouped information such as all regions, districts, wards , districts and also fetching whole tree from a particular location level",source:"@site/docs/mtaa/grouped_location.md",sourceDirName:"mtaa",slug:"/mtaa/grouped_location",permalink:"/mtaa-docs/docs/mtaa/grouped_location",editUrl:"https://github.com/Kalebu/mtaa-docs/edit/main/docs/mtaa/grouped_location.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/mtaa-docs/docs/mtaa/getting_started"},next:{title:"More Examples",permalink:"/mtaa-docs/docs/mtaa/more_examples"}},c=[{value:"Regions",id:"regions",children:[]},{value:"Districts",id:"districts",children:[]},{value:"Wards",id:"wards",children:[]},{value:"Streets",id:"streets",children:[]},{value:"Fetching a Whole location tree",id:"fetching-a-whole-location-tree",children:[]}],m={toc:c};function d(a){var e=a.components,t=(0,n.Z)(a,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far we have seen how to use mtaa to access certain information at a particular location level, now let's see how we can use it to fetch grouped information such as all regions, districts, wards , districts and also fetching whole tree from a particular location level"),(0,i.kt)("h2",{id:"regions"},"Regions"),(0,i.kt)("p",null,"You can use your previous knowledge about mtaa to access all the regions from the top level ",(0,i.kt)("em",{parentName:"p"},"mtaa.Tanzania")," objects or from ",(0,i.kt)("em",{parentName:"p"},"mtaa.regions")," as shown below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> import mtaa \n>>> list(mtaa.tanzania)\n['Shinyanga', 'Mara', 'Dar-es-salaam', 'Kilimanjaro', 'Kagera', 'Tanga', 'Mwanza', 'Tabora', 'Kigoma', 'Pwani', 'Ruvuma', 'Mtwara', 'Morogoro', 'Rukwa', 'Katavi', 'Simiyu', 'Geita', 'Arusha', 'Iringa', 'Mbeya', 'Njombe', 'Manyara', 'Lindi', 'Singida', 'Songwe', 'Dodoma']\n>>> list(mtaa.regions)\n['Shinyanga', 'Mara', 'Dar-es-salaam', 'Kilimanjaro', 'Kagera', 'Tanga', 'Mwanza', 'Tabora', 'Kigoma', 'Pwani', 'Ruvuma', 'Mtwara', 'Morogoro', 'Rukwa', 'Katavi', 'Simiyu', 'Geita', 'Arusha', 'Iringa', 'Mbeya', 'Njombe', 'Manyara', 'Lindi', 'Singida', 'Songwe', 'Dodoma']\n")),(0,i.kt)("h2",{id:"districts"},"Districts"),(0,i.kt)("p",null,"To access all districts in tanzania, together with their post code, you just need to access ",(0,i.kt)("em",{parentName:"p"},"districts")," attribute as shown below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> import mtaa \n>>> mtaa.districts\n[{'post_code': '371', 'name': 'Shinyanga\\ncbd'}, {'post_code': '372', 'name': 'Shinyanga'}, {'post_code': '373', 'name': 'Kahama'}, {'post_code': '375', 'name': 'Kishapu'}, {'post_code': '311', 'name': 'Musoma cbd'}, {'post_code': '312', 'name': 'Butiama'}, {'post_code': '313', 'name': 'Rorya'}, {'post_code': '314', 'name': 'Tarime'}, {'post_code': '315', 'name': 'Bunda'}, {'post_code': '316', 'name': 'Serengeti'}, {'post_code': '11', 'name': 'Ilala cbd'}\n......\n>>> len(mtaa.districts)\n158\n")),(0,i.kt)("h2",{id:"wards"},"Wards"),(0,i.kt)("p",null,"You can also access all the wards in the country by accessing ",(0,i.kt)("em",{parentName:"p"},"wards")," attribute as shown below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> import mtaa\n>>> mtaa.wards\n{'post_code': '41812', 'name': 'Mpendo'}, {'post_code': '41813', 'name': 'Makorongo'}, {'post_code': '41814', 'name': 'Mondo'}, {'post_code': '41815', 'name': 'Dalai'}, {'post_code': '41816', 'name': 'Jangalo'}, {'post_code': '41817', 'name': 'Churuku'}, {'post_code': '41818', 'name': 'Msaada'}, {'post_code': '41819', 'name': 'Songolo'}, {'post_code': '41820', 'name': 'Soya'}, {'post_code': '41821', 'name': 'Kimaha'}, {'post_code': '41822', 'name': 'Kidoka'}\n......\n>>> len(mtaa.wards)\n3964\n")),(0,i.kt)("h2",{id:"streets"},"Streets"),(0,i.kt)("p",null,"You can also access all streets in Tanzania in a similar fashion as shown below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> import mtaa\n>>> mtaa.streets\n['Magungu', 'Hamia', 'Kubi', 'Makorongo', 'Khubunko', 'Maziwa', 'Mondo', 'Daki', 'Waida', 'Pongai', 'Dalai', 'Tandala', 'Njoeni muone', 'Itirikwi', 'Mtakuja', 'Piho', 'Kelema maziwani', 'Jangalo', 'Mlongia', 'Itolwa', 'Chemka', 'Churuku', 'Jinjo', 'Kinkima', 'Msaada', 'Songambele', 'Machiga', 'Changamka', 'Majengo mapya', 'Songolo', 'Madaha', 'Hamai', 'Chioli', 'Soya', 'Chang\u2019ombe', 'Magandi', 'Mbarada', 'Mwailanje', 'Mwaikisabe', 'Chukuruma', 'Wisuzaje', 'Kidoka', 'Ombiri', 'Muungano']\n.......\n>>> len(mtaa.streets)\n16741\n")),(0,i.kt)("h2",{id:"fetching-a-whole-location-tree"},"Fetching a Whole location tree"),(0,i.kt)("p",null,"You can also fetch the whole location tree at a particular location level, for instance if your on a districts level when you use ",(0,i.kt)("em",{parentName:"p"},"tree()"),", it will fetch all lower level branches starting from all wards, streets and neighborhoods present in that district;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> from mtaa import tanzania\n>>> tanzania.Mbeya.districts.Rungwe.wards.Kiwira.tree()\n{'ward_post_code': '53515', 'streets': {'Mpandapanda': ['Ipoma', 'Kiwira kati', 'Mpandapanda', 'Ilongoboto', 'Isange'], 'Kikota': ['Lukwego', 'Lubwe', \"Kang'eng'e\", 'Ilamba', 'Kikota', 'Ipande'], 'Ibula': ['Kibumbe', 'Ibula', 'Kanyegele', 'Sanu - salala kalongo', 'Katela'], 'Ilundo': ['Bujinga', 'Ibagha a', 'Buswema', 'Ibagha b', 'Kanyambala', 'Lusungo'], 'Ilolo': ['Ibigi', 'Ilolo', 'Itekele', 'Masebe', 'Masugwa', 'Kisungu']}}\n")),(0,i.kt)("p",null,"Well you're done with grouped locations"))}d.isMDXComponent=!0}}]);