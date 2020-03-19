import {AsyncStorage} from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


var InjuryData= [{id:1, len:2, Injury: 'asthma',      	I1: 'Difficulty talking'},
                {id:2, len:2, Injury: 'asthma',      	I1: 'Can talk'},
                {id:3, len:3, Injury: 'bite',        	I1: 'Human',               		I2: 'Deep wound'},
                {id:4, len:3, Injury: 'bite',        	I1: 'Human',               		I2: 'Normal wound'},
                {id:5, len:3, Injury: 'bite',        	I1: 'Animal',              		I2: 'Tick'},
                {id:6, len:3, Injury: 'bite',        	I1: 'Animal',              		I2: 'Snake'},
                {id:7, len:4, Injury: 'bite',        	I1: 'Animal',              		I2: 'Others',                    I3:'Deep wound'},
                {id:8, len:4, Injury: 'bite',        	I1: 'Animal',              		I2: 'Others',                    I3:'Normal wound'},
                {id:9, len:2, Injury: 'bleeding',    	I1: 'Scalp'},
                {id:10, len:2, Injury: 'bleeding',    	I1: 'Head'},
                {id:11, len:2, Injury: 'bleeding',    	I1: 'Mouth'},
                {id:12, len:2, Injury: 'bleeding',    	I1: 'Finger'},
                {id:13, len:2, Injury: 'bleeding',    	I1: 'Palm'},
                {id:14, len:2, Injury: 'bleeding',    	I1: 'Varicose'},
                {id:15, len:2, Injury: 'bleeding',    	I1: 'Eye'},
                {id:16, len:1, Injury: 'brain attack'},
                {id:17, len:1, Injury: 'bruising'},
                {id:18, len:2, Injury: 'burn',        	I1: 'Electrical'},
                {id:19, len:2, Injury: 'burn',        	I1: 'Sunburn'},
                {id:20, len:3, Injury: 'burn',        	I1: 'Chemical',            		I2: 'Skin'},
                {id:21, len:3, Injury: 'burn',        	I1: 'Chemical',             	I2: 'Eye'},
                {id:22, len:3, Injury: 'choking',     	I1: 'Adult',                	I2: 'Breathing'},
                {id:23, len:3, Injury: 'choking',     	I1: 'Adult',                	I2: 'Not breathing'},
                {id:24, len:3, Injury: 'choking',     	I1: 'Child',                	I2: 'Breathing'},
                {id:25, len:3, Injury: 'choking',     	I1: 'Child',                	I2: 'Not breathing'},
                {id:26, len:2, Injury: 'choking',     	I1: 'Infant'},
                {id:27, len:1, Injury: 'dehydration'},
                {id:28, len:2, Injury: 'drowning',    	I1: 'Conscious',},
                {id:29, len:3, Injury: 'drowning',    	I1: 'Unconscious',          	I2: 'Adult'},
                {id:30, len:3, Injury: 'drowning',    	I1: 'Unconscious',          	I2: 'Child'},
                {id:31, len:3, Injury: 'drowning',    	I1: 'Unconscious',          	I2: 'Infant'},
                {id:32, len:2, Injury: 'fainting',    	I1: 'Adult'},
                {id:33, len:2, Injury: 'fainting',    	I1: 'Child'},
                {id:34, len:2, Injury: 'fainting',    	I1: 'Infant'},
                {id:35, len:2, Injury: 'fracture',    	I1: 'Shoulder'},
                {id:36, len:2, Injury: 'fracture',    	I1: 'Upperarm'},
                {id:37, len:3, Injury: 'fracture',    	I1: 'Elbow',                	I2: 'Bend'},
                {id:38, len:3, Injury: 'fracture',    	I1: 'Elbow',                	I2: "Can't bend"},
                {id:39, len:2, Injury: 'fracture',    	I1: 'Forearm'},
                {id:40, len:2, Injury: 'fracture',    	I1: 'Wrist'},
                {id:41, len:2, Injury: 'fracture',    	I1: 'Hand'},
                {id:42, len:2, Injury: 'fracture',    	I1: 'Finger'},
                {id:43, len:3, Injury: 'fracture',    	I1: 'Foot',				I2: 'With wound'},
                {id:44, len:3, Injury: 'fracture',    	I1: 'Foot',				I2: 'Without wound'},
                {id:45, len:2, Injury: 'heart attack', I1: 'Conscious'},
                {id:46, len:3, Injury: 'heart attack', I1: 'Unconscious',          	I2: 'Adult'},
                {id:47, len:3, Injury: 'heart attack', I1: 'Unconscious',          	I2: 'Child'}, 
                {id:48, len:2, Injury: 'heat stroke',  I1: 'Conscious'},
                {id:49, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Breathing',            I3: 'Adult'},
                {id:50, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Breathing',            I3: 'Child'},
                {id:51, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Breathing',            I3: 'Infant'},
                {id:52, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Not breathing',        I3: 'Adult'},
                {id:53, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Not breathing',        I3: 'Child'},
                {id:54, len:4, Injury: 'heat stroke',  I1: 'Unconscious',          	I2: 'Not breathing',        I3: 'Infant'},
                {id:55, len:1, Injury: 'nosebleed'}, 
                {id:56, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Drug',                 I3: 'Unconscious',           	I4:'Breathing'},
                {id:57, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Drug',                 I3: 'Unconscious',           	I4:'Not breathing'},
                {id:58, len:4, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Drug',                 I3: 'Conscious'},
                {id:59, len:4, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Alcohol',              I3: 'Conscious'},
                {id:60, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Alcohol',              I3: 'Unconscious',           	I4:'Breathing'},
                {id:61, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Alcohol',              I3: 'Unconscious',           	I4:'Not breathing'},
                {id:62, len:4, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Others',               I3: 'Conscious'},
                {id:63, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Others',               I3: 'Unconscious',           	I4:'Breathing'},
                {id:64, len:5, Injury: 'poisoning',  	I1: 'Swallowed',            	I2: 'Others',               I3: 'Unconscious',           	I4:'Not breathing'},
                {id:65, len:3, Injury: 'poisoning',  	I1: 'Absorbed through skin',	I2: 'Conscious'},
                {id:66, len:4, Injury: 'poisoning',  	I1: 'Absorbed through skin',	I2: 'Unconscious',          I3: 'Breathing'},
                {id:67, len:4, Injury: 'poisoning',  	I1: 'Absorbed through skin',	I2: 'Unconscious',          I3: 'Not breathing'},
                {id:68, len:2, Injury: 'poisoning',  	I1: 'Inhaled'},
                {id:69, len:2, Injury: 'seizure',     I1: 'Adult'},
                {id:70, len:2, Injury: 'seizure',     I1: 'Child'},
                {id:71, len:2, Injury: 'sting',       	I1: 'Jellyfish'},
                {id:72, len:2, Injury: 'sting',       	I1: 'Portuguese man o wars'},
                {id:73, len:2, Injury: 'sting',       	I1: 'Sea anemones'},
                {id:74, len:2, Injury: 'sting',       	I1: 'Corals'},
                {id:75, len:2, Injury: 'sting',       	I1: 'Scorpion'},
                {id:76, len:2, Injury: 'sting',       	I1: 'Bee'},
                {id:77, len:2, Injury: 'sting',       	I1: 'Wasp'},
                {id:78, len:2, Injury: 'sting',       	I1: 'Hornet'},
                {id:79, len:1, Injury: 'sprain'},
                {id:81, len:1, Injury: 'suffocation'},
                {id:82, len:2, Injury: 'diarrhea',      I1: 'Chest pain'},
                {id:83, len:2, Injury: 'diarrhea',      I1: 'No chest pain'},
                ]
        
                var Questions = [{injury:['asthma'],                        						  Q1: 'How was the talking of the casualty?', 					            		filipino: 'Kamusta an pananalita ng pasyente?', 				          			visaya:'Kamusta ang sinultian sa kaswalti?' },						

                {injury:['bite'],                          					                          Q1: 'What bites you?',                             						        filipino: 'Ano ang kumagat sayo?', 					                                visaya:'Unsa ang nipaak kanimo?' },						                                 
                {injury:['bite','Human'],                                                       	  Q1: 'What kind of wound does the casualty has?',						            filipino: 'Anong klaseng sugat mayroon ang pasyente?', 					            visaya:'Unsang klaseng samad naa ang kaswalti?' },

                {injury:['bite','Animal'],                 					                           Q1: 'What animal bites you?',				                                	    filipino: 'Anong hayop ang kumagat sayo?', 				                            visaya:'Unsang hayop ang mipaak kanimo?' },

                {injury:['bite','Animal','Others'],        				                              Q1: 'What kind of wound does the casualty has?',						            filipino: 'Anong klaseng sugat mayroon ang pasyente?', 					            visaya:'Unsang klaseng samad naa ang kaswalti?' },
 

                {injury:['bleeding'],                        				                	      Q1: 'Where is the wound located?', 						                        filipino: 'Saan matatagpuan ang sugat?', 						                    visaya:'Diin nahimutang ang samad?' },			
		
                
                
                {injury:['burn'],             						                                  Q1:'What caused the burn?',							                            filipino: 'Ano ang naging sanhi ng paso?', 						                    visaya:'Unsay hinungdan sa paso?' },			
	
                {injury:['burn','Chemical'],   					                                      Q1:'Where is the burn located?',  						                            filipino: 'Saan matatagpuan ang paso?', 						                    visaya:'Diin nahimutang ang paso?' },  				

               
                {injury:['choking'],             						                              Q1:'Which life stage does the casualty belong?',					                filipino: 'Sa aling yugto ng buhay kabilang ang pasyente?',					 		visaya:'Sa asang kahimtang sa kinabuhi nasakop ang kaswalti?' },

                {injury:['choking','Child'],             			                                  Q1:'What is the state of the casualty?',    						                filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },

                {injury:['choking','Adult'],   					                                      Q1:'What is the state of the casualty?',    						                filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },

                
                {injury:['drowning'],   						                                      Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },    				

                {injury:['drowning','Unconscious'],   				                                  Q1:'Which life stage does the casualty belong?',					                filipino: 'Sa aling yugto ng buhay kabilang ang kaswalti?',					 		visaya:'Sa asang kahimtang sa kinabuhi nasakop ang kaswalti?' },

                {injury:['fainting'],          							                              Q1:'Which life stage does the casualty belong?',					                filipino: 'Sa aling yugto ng buhay kabilang ang kaswalti?',					 		visaya:'Sa asang kahimtang sa kinabuhi nasakop ang kaswalti?' },			
              
                {injury:['fracture'],             					                                  Q1:'Where is the fracture located?',						                        filipino: 'Saang parte ng katawan ang nagkabali?', 						            visaya:'Asa dapit sa lawas an nabali?' },				 

                {injury:['fracture','Foot',],             					                          Q1:'What is the condition of the Foot of the casualty?',						     filipino: 'Ano ang kondisyon ng paa ng pasyente?', 			                    visaya:'Unsa ang kunndisyon sa tiil sa kaswalti?' },

                {injury:['fracture','Elbow'],             					                          Q1:'What is the condition of the elbow of the casualty?',					       	filipino: 'Ano ang kondisyon ng siko ng pasyente?', 			        			visaya:'Unsa ang kundisyon sa siko sa kaswalti?' },
				
                {injury:['heart attack'],             					                              Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' }, 				

                {injury:['heart attack','Unconscious'],             					              Q1:'Which life stage does the casualty belong?',					                filipino: 'Sa aling yugto ng buhay kabilang ang kaswalti?',					 		visaya:'Sa asang kahimtang sa kinabuhi nasakop ang kaswalti?' },

                {injury:['heat stroke'],             					                              Q1:'What is the state of the casualty?',    						                filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },

                {injury:['heat stroke','Unconscious'],             				               	      Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },
                {injury:['heat stroke','Unconscious', 'Infant'],   			                          Q1:'What is the condition of the casualty?',    						            filipino: 'Ano ang kondisyon ng pasyente?', 						                visaya:'Unsa ang kundisyon sa kaswalti?' },

                {injury:['heat stroke','Unconscious','Child'],   					                  Q1:'What is the state of the casualty?',    						                filipino: 'Nakakahinga ba ang biktima?', 						                    visaya:'Makaginhawa ba ang kaswalti?' },
		
                {injury:['heat stroke','Unconscious','Adult'],             			            	  Q1:'What is the state of the casualty?',    						                filipino: 'Nakakahinga ba ang biktima?', 						                    visaya:'Makaginhawa ba ang kaswalti?' },


                {injury:['poisoning'],   						                                      Q1:'How did the casualty got poisoned?',    					                    filipino: 'Paano nalason ang biktima?', 						                    visaya:'Giunsa kini siya pagkahilo?' },				

                {injury:['poisoning','Swallowed'],             				                          Q1:'What did the casualty swallowed?',				                            filipino: 'Ano ang nalunok ng biktima?', 						                    visaya:'Unsa ang natulon sa kaswalti?' },
                {injury:['poisoning','Swallowed','Drug'],             			                	  Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' },  					
                {injury:['poisoning','Swallowed','Drug','Unconscious'],   		                	  Q1:'What is the condition of the casualty?',    						            filipino: 'Ano ang kondisyon ng pasyente?', 						                visaya:'Unsa ang kundisyon sa kaswalti?' },

                {injury:['poisoning','Swallowed','Alcohol'],   				                          Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' }, 

                {injury:['poisoning','Swallowed','Alcohol','Unconscious'],   		            	  Q1:'What is the state of the casualty?',    						                filipino: 'Ano ang kondisyon ng pasyente?', 						                visaya:'Unsa ang kundisyon sa kaswalti?' },

                {injury:['poisoning','Swallowed','Others'],   				                          Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' }, 

                {injury:['poisoning','Swallowed','Others','Unconscious'],   		            	  Q1:'What is the condition of the casualty?',    						            filipino: 'Ano ang kondisyon ng pasyente?', 						                visaya:'Unsa ang kundisyon sa kaswalti?' },
  
                {injury:['poisoning','Absorbed through skin'],             			            	  Q1:'What is the state of the casualty?',						                    filipino: 'Ano ang estado ng pasyente?', 						                    visaya:'Unsa ang kahimtang sa kaswalti?' }, 

                {injury:['poisoning','Absorbed through skin','Unconscious'],   		          	      Q1:'What is the condition of the casualty?',    						            filipino: 'Ano ang kondisyon ng pasyente?', 						                visaya:'Unsa ang kundisyon sa kaswalti?' },

                {injury:['seizure'],             						                              Q1:'Which life stage does the casualty belong?',					                filipino: 'Sa aling yugto ng buhay kabilang ang kaswalti?',					 		visaya:'Sa asang kahimtang sa kinabuhi nasakop ang kaswalti?'  },				
               
                {injury:['sting'],   						                                          Q1:'What stings the casualty?',                                                    filipino: 'Ano ang kumagat sa biktima?', 											visaya:'Unsay nakasakit sa kaswalti?' },				
                
                {injury:['diarrhea'],              	                                                  Q1:'What is the condition of chest of the patient ?',						         filipino: 'Ano ang kondisyon ng dibdib ng pasyente?', 			        			visaya:'Unsa ang kondisyon sa dughan sa kaswalti?' },

]


translation=[
    {injury: 'asthma',                  filipino:'Hika',                        visaya:'Hubak',                 sets: 
    ["Asthma","asthma","osaka","askmy","customer","aspley","oscar","pasma","asma","kuzma","padma",
     "Hika","hika","hiccup","teacup","keycut","pickup","pizza","keepup","shecut","hecut","kickup","speaker","heathcote","haircut","ticket","hegot","he'sgot","mayhika","myheater","hinihika","kimmyhaircut","hindihaircut","shaniqua",
     "Hubak","hubak","whomark","boombox","zumba","hallmark","homer","cooma","gihubak","toowoomba","youwarmup","newnumber","youhome","youhomemum"
     ]},
    {result: 'Difficulty talking',      filipino:'Hirap magsalita',             visaya:'Naglisod og istorya',       sets: 
    ["Difficulty talking","difficultytalking","difficultiestalking","difficultiesasking","difficultyparking","difficultybarking",
    "Hirap magsalita","hirapmagsalita","setupmycalendar","hairupmontana.","hereplieselephant","headupmysonisthat","loveyousodogistorya","naglisodofastoria",
    "Naglisod og istorya","naglisodugistorya","naglisodogistorya","lovelysonovictoria","lovelyphotogastonia","melissadogastoria","modelisadogistorya","maglisadogistorya","naglisodistorya","maglisodistorya","naglisodastoria","naglisogangstorya"]},
    {result: 'Can talk',                filipino:'Nakakapagsalita',             visaya:'Kaistorya',         sets: 
    ["Can talk","cantalk","can'toff","bangkok","canpop","canpark","hancock",
    "Nakakapagsalita","nakakapagsalita",
    "Kaistorya","kaistorya","theastoria","astoria","toystory","carastoria","thatistortilla","thatisstudying","makaistorya","areyoustudying","lockerastoria","iastoria","smartcarisstudying","historia","historya","kastoria","kstorya"
    ]},
    
    {injury: 'bite',                    filipino:'Nakagat',                     visaya:'Napaakan',              sets: [
    "bite","bait","mate","made","light","8","fight","smite","late",
    "Nakagat","nakagat","igot","anaconda","nothing.","locker.","target","hunger","thetarget","kinagat","killer.","lego","killergod","andthat",
    "Napaakan","napaakan","appin","anotherappon","neverhappen","lebanon","gipaak","gyprock","ifiask"
    ]},
    {result: 'Human',                   filipino:'Tao',                         visaya:'Tawo',                  sets: [
    "Human","human","newman",
    "Tao","tao","atall","bottle","areall","borrow",
    "Tawo","tawo","our","power","narwhal","carwar","starwar","bowral","starwars","iwill","ourwall",
    ]},
    {result: 'Animal',                  filipino:'Hayop',                       visaya:'Hayop',                 sets: [
    "Animal","animal","arniemum","nemo","animals","arnhemon","anymore",
    "Hayop","hayop","areyou","hail","tile","heyyo","pirate","pile","hiya",
    "Mananap","mananap","banana","andanna","lennonup","brendanup","londonup"
    ]}, 
    {result: 'Tick',                    filipino:'Garapata',                    visaya:'Garapata',              sets: [
    "Tick","tick","sick","dick","pick","did","big","stick",
    "Garapata","garapata","gottapapa","datapapa","papa","gutterpapa","tabitha","yougotapartner","gotapartner","datapotter","chiropractor","databarber"
    ]},
    {result: 'Snake',                   filipino:'Ahas',                        visaya:'Bitin',                 sets: [
    "Snake","snake","please","click","nick","sweet","sneak","mick","pink","sleep",
    "Ahas","ahas","aha","haha","ass",
    "Bitin","bitin","bitten","minion","listen","difference"
    ]}, 
    {result: 'Others',                  filipino:'Iba pa',                      visaya:'Uban pa',               sets: [
    "Others","others","other","arethere",
    "Iba pa","ibapa","evaphone","giveoffice","intheface","hisoffice","evafast",
    "Uban pa","ubanpa","funfun","11","oneplus","bunningson"
    ]},  
    {result: 'Deep wound',              filipino:'Malalim na sugat',            visaya:'Lalum nga samad',         sets: [
    "Deep wound","deepwound","different","heathmont","cleveland","gisborne","thisone",
    "Malalim na sugat","malalimnasugat","milaninthesugar","malayalamthesingle",
    "Lalum nga samad","lalumngasamad","lalunasalmon","learninglessonon","lalunasalon","lalunasimone","alumnisomeone","lalunasamod","lalunasamad","lalunasamod","lalomasamad","lalunasamad"
    ]},  
    {result: 'Normal wound',            filipino:'Normal na sugat',             visaya:'Normal nga samad',      sets: [
    "Normal wound","normalwound","lorimerwound",
    "Normal na sugat","normalnasugat","remindusallgood","luminousallgood","reminderfinger","nominusallgood",
    "Normal nga samad","normalngasamad","noremainingnasamod","noremainingmuhammad","noremainingassignment"
    ]},  
    
    {injury: 'bleeding',                filipino:'Dumudugo',                    visaya:'Pagdugo',               sets: [
    "bleeding","bleed","living","meaning","winning","leading","live","lead",
    "Dumudugo","dumudugo","themoonago","mooloolaba","theuniverse","themotorgo","thewarrnambool","themotorboat",
    "Pagdugo","pagdugo","nagdugo","thunderbolt","bendigo"
    ]},
    {result: 'Scalp',                   filipino:'Anit',                        visaya:'Bagolbagol',                 sets: [
    "Scalp","scalp","scarlet","scars","scott","size",
    "Anit","anit","onions","bunyip","funniest","ineed","honest",
    "Bagolbagol","bagolbagol","mugglemongoose","murwillumbah","murwillumbahboys","murwillumbahgoing","pokemongo"
    ]},
    {result: 'Head',                    filipino:'Ulo',                         visaya:'Ulo',                   sets: [
    "Head","head","pen","canned","wehead",
    "Ulo","ulo","corner","alllol","toilet"
    ]}, 
    {result: 'Mouth',                   filipino:'Bibig',                       visaya:'Baba',                  sets: [
    "Mouth","mouth","mouse","smell","smells","plough","low",
    "Bibig","bibig","thebig","bing","peppapig","giving",
    "Baba","baba","mumma","butbut","mum"
    ]},
    {result: 'Finger',                  filipino:'Daliri',                      visaya:'Tudlo',                 sets: [
    "Finger","finger","seingher","fingers",
    "Daliri","daliri","lily","thelily","thelyrics","delirious",
    "Tudlo","tudlo","toddler","shouldknow","pablo","deadlocks","footloose","apollo"
    ]}, 
    {result: 'Palm',                    filipino:'Palad',                       visaya:'Palad',                 sets: [
    "Palm","palm","phone","home","ponds","collins","clothes","farm",
    "Palad","palad","island","thailand","coloured","solid","salad"
    ]},  
    {result: 'Varicose',                filipino:'Barikos',                     visaya:'Barikos',               sets: [
    "Varicose","varicose","vehicles","spartacus","miracles",
	"Barikos","barikos","bloodycourse"
    ]},  
    {result: 'Eye',                     filipino:'Mata',                        visaya:'Mata',                  sets: [
    "Eye","eye","eyes","ace",
    "Mata","mata","martha","message","laughing"
    ]},  

    {injury: 'brain attack',             filipino:'Atake sa utak',              visaya:'Pagatake sa utok',      sets: [
    "brain attack","brainattack","renaissance","greenasics",
    "Atake sa utak","atakesautak","carsoccersoccer",
    "Pagatake sa utok","pagatakesapuso","giatakesautok"
    ]}, 

    {injury: 'bruising',                filipino:'Pasa',                        visaya:'Bun-og',                sets: [
    "Bruising","bruising","realthing","cruising","bruise","crossing","bruce","rules","cruise",
    "Pasa","pasa","classic","professor","officer",
    "Bun-og","bun-og","bunog","minogue","oneof","wynnum"
    ]},      

    {injury: 'burn',                    filipino:'Napaso',                      visaya:'Paso',              sets: [
    "burn","maroon","burned","drone","baron",
    "Napaso","napaso","theparcel","noparcel",
    "Paso","paso","ithought"
    ]},
    {result: 'Electrical',              filipino:'Elektrikal',                  visaya:'Kuryente',            sets: [
    "Electrical","electrical","stickon","checktyres","electriccars","extraguns","patrickcard","electriccollars","electricon","leprechauns","leprechaun",
    "Elektrikal","elektrikal",
    "Kuryente","kuryente","coriander","currency"
    ]},
    {result: 'Sunburn',                 filipino:'Sunburn',               visaya:'Sunburn',               sets: [
    "Sunburn","sunburn","aaron","sunmoon","funroom","sunburned","sendbroome"
    ]}, 
    {result: 'Chemical',                filipino:'Kemikal',                     visaya:'Kemikal',               sets: [
    "Chemical","chemical","comic-con","nikon","chemicals","kamikaze",
    "Kemikal","kemikal"
    ]},
    {result: 'Skin',                    filipino:'Balat',                       visaya:'Panit',                 sets: [
    "Skin","skin","king","in",
    "Balat","balat","millard","violet",
    "Panit","panit","planet","assignment","findme"
    ]},
    
    {injury: 'choking',                 filipino:'Nabulunan',                   visaya:'Natuk-an',              sets: [
    "Choking","choking","choke","choked","joking","chowking","soaking","shocking",
    "Nabulunan","nabulunan","balloonon","noballoonon","theballoonon",
    "Natuk-an","natukan","puton","natukan","thesun","nevermind","youtube","nachoke"
    ]},
    {result: 'Adult',                   filipino:'Matanda',                     visaya:'Hamtong',                 sets: [
    "Adult","adult","adults","idon't",
    "Matanda","matanda","induck","lap","panda","under","boonah","that","nab","tanda","ganda","thunder","tatanda","lavender","miranda",
    "Hamtong","hamtong","pumping","of","bowl","pitbull","tumble","utong","anong","stone","song","hongkong","homtom","hampton","humsong"
    ]},
    {result: 'Child',                   filipino:'Bata',                        visaya:'Bata',                  sets: [
    "Child","child","iold","i'll","nail","nails","male","filed","piled","failed",
    "Bata","bata","myback","bobcat","pata","ata","tata","kata","butter","bato","batter"
    ]}, 
    {result: 'Infant',                  filipino:'Sanggol',                     visaya:'Masuso',                sets: [
    "Infant","infant","baby","hunt","implant","inhunt","and","plant","punt","find","behind","infront","define","isfun","enfant",
    "Sanggol","sanggol","mango","tango","bingo","bigon","angle","goal","goole",
    "Masuso","masuso","salsa","isawesome","masusu","baesuzy","misuzu","pazuzu"
    ]},
    {result: 'Breathing',               filipino:'Humihinga',                   visaya:'Gaginhawa',               sets: [
    "Breathing","breathing","freezing","zing","griffin","roofing","reason","sing","theme","breath","breathed","breezing","breeding","reading",
    "Humihinga","humihinga","mickeymouse","permission","behemoth","humihingi","umihina","umihinga","kumihimo",
    "Gaginhawa","gaginhawa","inhaler","goodinhaler","noah","maginhawa","theginhawa","theguinhawa","gahinga","thejenga","thehealer","ahinga","thesinger","thesinga","maginhawa","theginhawa","theguinhawa","godginhawa","theginhawa","godguinhawa","gotginhawa","gadguinhawa","maginhawa","theginhawa","theguinhawa"
    ]}, 
    {result: 'Not breathing',           filipino:'Hindi humihinga',             visaya:'Wala gaginhawa',         sets: [
    "Not breathing","notbreathing","notbriefing","arefreezing","notreceive","everything","nightroutine","notmissing","librarythings","niceriffing","thethreethings","notbreeding","natbriefing","knotbriefing",
    "Hindi humihinga","hindihumihinga","dihumihinga","dhumihinga","dephumihinga","thehumihinga",
    "Wala gaginhawa","walagaginhawa","walaginhawa","walakangginawa","walakaginawa","walangginhawa","walaguinhawa","walakaginhawa","walangaginhawa","walaginhawa","walakaguinhawa","walakaginhawa","walakaginawa","walaginagawa"
    ]},

    {injury: 'dehydration',             filipino:'Kakulangan sa tubig',             visaya:'Kulang sa tubig',           sets: [
    "dehydration","dehydration","dehydrate","dehydrated","gresham","drayton","ignition","derision","position","indonesian","hydration","duration","station","thracian","tration","relation",
    "Kakulangan sa tubig","kakulangansatubig","longanti-bullying","parliamentheidelberg","supplementappleby","parliamentapplebee's","lolanti-bullying","kailangansatubig","kakulangansatobig",
    "Kulang sa tubig","kulangsatubig","longheidelberg","pullinghappening",
    ]},

    {injury: 'drowning',                filipino:'Nalunod',                 visaya:'Nalumos',                   sets: [
    "drowning","owning","running","bunnings","balinese","ning","mean","bolognese","amen","jhonen","opening","morning","moaning",
    "Nalunod","nalunod","blonde","bond","learnt","annoyed","tunod","lunod","sunod","tunog",
    "Nalumos","nalumos","themost","moss","nalomos","thelumos","lalumos"
    ]},
    {result: 'Conscious',               filipino:'May malay',                   visaya:'Naay panimuot',         sets: [
    "Conscious","conscious","anxious","wishes","chess","munchies","shows","sheis","kyrieshoes","curryshoes","cautious","conscience",
    "May malay","maymalay","molly","playmolly","mymyname","aymali","mymalay","mymale","paymaya","himala",
    "Naay panimuot","naaypanimuot","funnymore","andifunnymoments","onafunnymoron","ibaltimore","typeanymore","eponymous","iponemote","eponemote","ipanema","openemote","openimo.","openimoit","openimoapp","kalimot"
    ]},
    {result: 'Unconscious',             filipino:'Walang malay',                visaya:'Walay panimuot',        sets: [
    "Unconscious","unconscious","doyouwannashoes","youconscious",
    "Walang malay","walangmalay","rollingmoney","miley","youngmoney","malay","tamana","amana","male","angmalay",
    "Walay panimuot","walaypanimuot","funnymod","theybunnymode","afunnymood","funnymore","defineimport","lifeanymore","maypanimula","lifeanimals","playfunnymode","liveanimals","playfunnymoments","walaypantymoat","walaypanimula","walaypantymode","walaypantymolt","walapanaman","walaypanimula","walangpanginoon","maypanimula","walaypaningit","palaypanimula"
    ]}, 
   
   {injury: 'fainting',             filipino:'Nahimatay',                       visaya:'Nakuyapan',             sets: [
   "fainting","faint","fainted","faints","seeingseeing","hinting","moving","printing","fencing","finding","inthing","meeting","ending","epping","thing","eating","samething","inthings","painting",
   "Nahimatay","nahimatay","nawalanngmalay","theholiday","behemotha","billabong","May","youmackay","bluebay","lebye",
   "Nakuyapan","nakuyapan","wearefun","nokiafun","thepun","kuyapan","kuyavan","kuyafan","kuyapond","kuyapen"
   ]},
    
    {injury: 'fracture',                filipino:'Nabali',                      visaya:'Bali',                  sets: 
    ["fracture","fractured","tour","shark2","rock2","drop2","truckto","42","howto","statue","fractured","whatto","corrupted","stugterra","fromtrue","whattwo","suck2","slotto","notto",
    "Bali","bali","nabali","molly","mummy","nobody","nepali","doubleit","bunny","somali","mrnobody","mullet","valley","bully","daddy","dolly","dali","beyond"]},
    {result: 'Bend',                    filipino:'Tiklop',                      visaya:'Bawog',                 sets: [
    'Bend',"bend",'bend',"beyond","theend","band","blend","man",
    'Bawog',"bawog",'bako',"mageworld","motoworld","meadowood","mobileworld","mobrog","numberone","mobilerogue","mobileweb","movieworld","mobaworld","mybedroom","babyroom","maybedroom","myberoom",
    'Tiklop',"tiklop","Eclipse","Secret","c-clip","cheeklip","tiklop","bookclup","beechclub","tiktok","movieworld"]},
    {result: "Can't bend",              filipino:'Hindi mabaluktot',       visaya:'Dili mabawug',           sets: [
    "Can't bend","can'tbend","canband","cantbend","'canbands","damnman","andbands","cambands","scambands","dancemums","danceband","funband","cantband","cairnsband",
    "Hindi mabaluktot","hindimabaluktot","cindymobilephone","indiemobile04","themobilephone","hindimobile.","thenumberlookfor","busymobileforce","bindimobile.","bindimobile",
    "Dili mabawug","dilimabawug","williamoballoons","deletemobile","lilymobile","willybumbum","lilymyvolume","mooloolabaloom","sillymobile","billionmobile","williamavenue","leemobile"
    ]}, 
    {result: 'Shoulder',                filipino:'Balikat',                     visaya:'Abaga',                 sets: [
    "Shoulder","shoulder","tudor","older","tardis","jordan","dolls","golden","chamber",
    "Balikat","shoulder","melissa","elissa","bigson","baliclub",
    "Abaga","abaga","abugger","bugger","ahbugger","ivanka","abangor"
    ]},
    {result: 'Upperarm',                filipino:'Itaas ng braso',              visaya:'Ibabaw sa bukton',      sets: [
    "Upperarm","upperarm","offerorem","arthurorange","freeorange","arthurarms","offerarms","operahome","epitome",
    "Itaas ng braso","itaasangbraso","custombrassall","ifiaskedhimbrassall","thearsenalbrassall","isawesomebrothel","arsenalbrassall",
    "Ibabaw sa bukton","ibabawsabukton","bubblesomething","bubblesomeb*******","isabelsomebookson","isabelsomephotos","isabelsomefood"
    ]}, 
    {result: 'Elbow',                   filipino:'Siko',                        visaya:'Siko',                  sets: [
    "Elbow","elbow","edible","anvil","imbil","able",
    "Siko","siko","peaceful","seaforth","kisses","ifall","cecil","seiko","64"
    ]},
    {result: 'Forearm',                 filipino:'Bisig',                       visaya:'Bukton',                sets: [
    "Forearm","forearm","forhome","fororem","forums","aerodrome","soi'm",
    "Bisig","bisig","using","vincent","piercings","thisis","blizzard","busy","music",
    "Bukton","bukton","thorn","lookphone","lookson","what'son","muffin","watsons"
    ]},
    {result: 'Wrist',                   filipino:'Pulso',                       visaya:'Pulso',                 sets: [
    "Wrist","wrist","greece","reece","lift","biz","breeze","freeze","bliss","reef","please",
    "Pulso","pulso","futsal","bissell","bluetoothoff","console","whatso","buttersauce","pottersong","putthesong","resource",
    ]}, 
    {result: 'Hand',                    filipino:'Kamay',                       visaya:'Kamot',                 sets: [
    "Hand","hand","pens","ten",
    "Kamay","kamay","my","ami","carmode","nummies","tummy",
    "Kamot","kamot","boss","thomas","comeon","more","amos"
    ]},
    {result: 'Foot',                    filipino:'Paa',                         visaya:'Tiil',                  sets: [
    "Foot","foot","good","what","what's","port","put","pit",
    "Paa","paa","fast","ass","theass","bus","rus","ah um",
    "Tiil","tiil","in","theinn","pin","bins","cm","tin"
    ]},
   
    {injury: 'heart attack',            filipino:'Atake sa puso',               visaya:'Atake sa kasingkasing', sets: [
    "heart attack", "heartattack","horaceoffice","horridthatass","sofar","raciston","sofast","roseson",
    "Atake sa puso","atakesapuso","marcus.","marcus","marcusappleon","apartmr.","afarsister.","isopposite","okso.","isarkansas","mastersofwar4",
    "Atake sa kasingkasing","atakesakasingkasing","iphonecasesomethingglasses","oesophaguscousinsisee","soccersoccersunglasses","marcusofmysunglasses","marcusexercises"
    ]},           
    
    {injury: 'heat stroke',             filipino:'Stroke sanhi ng matinding init',      visaya:'Stroke tungod sa kainit',   sets: [
    "heat stroke","heatstroke","it'strick","it'strue","kidstrick","district","it'strue","kidstricks","kidstrolls","kidstroll",
    "Stroke sanhi ng matinding init","strokesanhingmatindinginit","drinksandhenumberfindingunion","wolfensteinfindingidiot","trollsandheknowsindigenous","what'sthemeaningofindonesia","strongserenafindingidiot","frozenheknowsindonesia","frozenunalindaminutes",
    "Stroke tungod sa kainit","stroketungodsakainit","frozensogs","trollswordsoccerinit","crossroadsthatunion","brothelinsidious","warsawmonsterhighidiots","salsawoulssuckidiot","snowboardsupperidiot","rosalindhappiness",
    ]},           
    
    {injury: 'nosebleed',               filipino:'Balinguyngoy',                visaya:'Sunggo',                sets: [
    "nosebleed","norseman","nosmith","minions","lostit","thesmiths","awesomeness","newslive",
    "Balinguyngoy","balinguyngoy","linguini","binglee","marlinringme","halloweenmovies","kingaroy",
    "Sunggo","sunggo","single","toombul","somerville","civil","lose",
    ]},

    {injury: 'poisoning',               filipino:'Pagkalason',                  visaya:'Nahiluan',              sets: [
    "poisoning","poisoned","poison","listening","behindus"," besides","connie",
    "Pagkalason","pagkalason","nalason","uncleathens","umbrellaphone","sunglasses","gunscolossus","monsterlicence","thelessons","blossom","thelarson",
    "Nahiluan","nahiluan","theones","dylan","he'llon","blueon","lindaon","inlodi","lines","eitherone","setanalarm","inline","inthearms","tinaon","nahiloon","nahiloan","nahiloang","nahiloann","nahiloanne"
    ]}, 
    {result: 'Swallowed',               filipino:'Nakalunok',                       visaya:'Nakatulon',                 sets: [
    "Swallowed","swallowed","swallow","lilo","lionel","followed","blind","lowered","unload","iload",
    "Nakalunok","nakalunok","nilamon","theis","dinnerin","alarmon","cinnamon","llamas","comeon","myin",
    "Gilamoy","nakatulon","illinois","dylanmovies","dinnermovies","happening","lookuponline","afternoon","theparthenon","namoi"
    ]},  
    {result: 'Drug',                    filipino:'Gamot',                       visaya:'Tambal',                sets: [
    "Drug","drugs","bug","um",
    "Gamot","droga","vermont","dumont","olga","yeronga","onga",
    "Tambal","umbands","somebody's","ummode","ummoney"
    ]},  
    {result: 'Alcohol',                 filipino:'Alak',                        visaya:'Alkohol',               sets: [
    "Alcohol","andalcohol","musicalhorn",
    "Alak","laugh","anna","ilove","block","allah",
    "Alkohol","arkohol","arthurhome"
    ]},  
    {result: 'Inhaled',                 filipino:'Nalanghap',                   visaya:'Laghabon',                  sets: [
    "Inhaled","beard","inhere","inhale","dale",
    "Nalanghap","nylonheart","heart","loveheart","longheart","molongheart",
    "Laghabon","logcabins","slughappen","logcacin","bloodharbord",
    ]},  
    {result: 'Absorbed through skin',   filipino:'Nasipsip sa pamamagitan ng balat',visaya:'Nasuyop pinaagi sa panit',  sets: [
    "Absorbed through skin","dinosaurimproveskin","umsorensen","syllablesskin","sorcererskin","doristoscan","observedthroughskins","boysthroughskins",
    "Nasipsip sa pamamagitan ng balat","massivestepsofmrmcgeephonenumberlaugh","isacceptableenergyphonenumberlove","classichitsofmrmcgeephonenumbernow",
    "Nasuyop pinaagi sa panit","muscleyou'refeelingnoosavolume","matthewtsunamitsunami","glenferrieopeningeasterbunny","matthewflindersavenue","nothingyoubeenarebeautifullips"
    ]}, 

    {injury: 'seizure',             filipino:'Seizure',                     visaya:'Seizure',               sets: [
    "seizures","seizure","seizured","Seizure","caesar","season","isalways","sizzlers",
    ]}, 
    
    {injury: 'sting',                   filipino:'Sting',                       visaya:'Sting',             sets: [
    "sting","bing","ding","things",
    ]}, 
    {result: 'Jellyfish',               filipino:'Dikya',                       visaya:'Bukya',                 sets: [
    "Jellyfish","bellafish","livefish","anyfish","olivia's",
    "Dikya","yes","pier","gear","idiot",
    "Bukya","nokia","mickeyout"
    ]},
    {result: 'Corals',                  filipino:'Koral',                       visaya:'Gasang',                sets: [
    "Corals","orioles","iran's","bras","coral",
    "Koral","connor's",
    "Gasang","songs","isongs","dancing",    
    ]}, 
    {result: 'Scorpion',                filipino:'Alakdan',                     visaya:'Banayaw',               sets: [
    "Scorpion","coffeeon","horrorfilms","ogphone","zealand",
    "Alakdan","none","blackburn","aladdin","theclans",
    "Banayaw","niall","nrl","monaro",
    ]},  
    {result: 'Bee',                     filipino:'Pukyutan',                    visaya:'Buyog',                 sets: [
    "Bee","bees","me",
    "Pukyutan","coupons","porcupine","thecoupons",
    "Buyog","bubuuyog","wheels","millions","loyal","bullying","mauboywheels"
    ]},  
    {result: 'Wasp',                    filipino:'Putakti',                     visaya:'Lampinig',              sets: [
    "Wasp","was","plus","1",
    "Putakti","wasabi","forzasing","forpuppies",
    "Lampinig","rugbyleague","lumpymean","mumsminis",
    ]},  
    {result: 'Hornet',                  filipino:'Tambak',                      visaya:'Hornet',                sets: [
    "Hornet","hornet","phoneapp","romance",
    "Tambak","tambak","beamup","samba","gumball","timber","bumbum"
    ]},  
    {result: 'Sea anemones',            filipino:'Anemona',                     visaya:'Anemona',               sets: [
    "Sea anemones",
    "Anemona","anemona","animalknow","ipneumonia","adamhonour","animalnow","panamanow","tinymoonah","hinirvana","hanuman","kalamunda","cunnamulla","eleebana","anniemorning"]},  
    {result: 'Portuguese man o wars',   filipino:'Portuguese man o wars',       visaya:'Portuguese man o wars', sets: [
    "Portuguese man o wars","portuguesmanalways"]}, 
    {injury: 'sprain',                  filipino:'Pilay',                       visaya:'Pi-ang',                sets: [
    "sprain","spring",
    "Pilay","pilay","pagkalisa","nalisa","nappylion","markiplier","eli","belly","inner be late","napoli","delay",
    "Pi-ang","piang","being","dr","napean","napier","appear","nahp.m.","peterp.m."]}, 

    {injury: 'suffocation',             filipino:'Hirap huminga',               visaya:'Paghuot',               sets: [
    "suffocation",
    "Hirap huminga","hiraphuminga","hereupcomming","he'llupforminger","hairupwarmingup","yeahhappening","beautifulminute","behappening","europewamingup","europeminger","hairupwomen","hairupforminger","europeminutes","peopleminger","hairupcomingout","hairupcomming",
    "paghuot","paghuot","icould","ihope","bucket","liamcarina","billymyringer","deletemarina","beinmyringer"]}, 

    {injury: 'diarrhea',  filipino:'Pagtatae',                  visaya:'Gikalibanga',           sets: [
    "diarrhea","diarrhoea","thearea","theyarehere","thearia",
    "Pagsusuka","pagsusuka","niceasoka","answerso","forza","consortcar","maxwalker","musclecar","hooker",
    "Pagtatae","pagtatae","pagtatahi","pagatatao","nagtatae",
    "Gikalibanga,gikalibanga,kalibanga","kalibanga","calabanga","spellbomber","stereopalma","skylerpalma"]}, 
    {result: 'Chest pain',              filipino:'Masakit ang dibdib',              visaya:'Sakit ang dughan',      sets: [
    'Chest pain','chestpain',"justbeen","setbeen","testing",
    'Sakit ang dibdib',"saktangdibdib","soccerchallenges","sakit","sakitangdibdib","masakitangdibidb",
    'Sakit ang dughan',"sakitangdughan","fotgetfulhme","masakit","gasakit","gasakitangdughan"]},  
    {result: 'No chest pain',           filipino:'Walang sakit sa dibdib',      visaya:'Walay sakit sa dughan',sets: [
    'No chest pain',
    'Walang sakit sa dibdib',"walangsakitsadibdib","walangsakit","hindimasakitangdibdib",
    'Walay kasakit sa dughan',"walaysakitsadughan","walanagsakitangdughan","dilisakitangdughan"]},  
    {result: 'With wound',              filipino:'May sugat',                   visaya:'Naay samad',            sets: ['With wound','withwound','Naay samad','naaysamad','May sugat','maysugat']},
    {result: 'Without wound',           filipino:'Walang sugat',                visaya:'Walay samad',           sets: ['Without wound','withoutwound','Walang sugat','walangsugat','Walay samad','walaysamad']},
    {result: 'call', sets: ['call','tawag','tawagi']}, 
    {result: 'go', sets: ['go','adto','punta']} ,        
]



speechdata=[]
speechcombinations=[]
global.translated=[]
global.qstate=0
global.firstSpchWord
global.secondSpchWord
var qsets=[]
global.isLast='no'
global.IndexOfSolution=0
transaltionInjuryIndex=0
global.highestJaccard
var spchname =[]
var spchnumber =[]
function sortSpeechData(){
    
    speechdata.length=0
    for (let i=0;i < speechResults.length;i++){
        var combine = ""
        speechdata.push([]);
        for (let x=0;x<speechResults[i].length;x++){
            var str = speechResults[i].charAt(x)
            if ( str != " "){
                combine = combine+str
            }
            if (str == " " ||  x == speechResults[i].length-1){ 
                speechdata[i].push(combine)
                combine =""
            }
        }
    }
}

export function translate() {
    sortSpeechData()
    speechcombinations.length=0
    var all =""
    for (let i = 0;i<speechdata.length;i++){
        all = all + "\n"
        for (let x =0;x<speechdata[i].length;x++){
            var combination =""
            for( let z = 0;z<speechdata[i].length-x;z++){
                   combination = combination + speechdata[i][z+x]
                   all = all +combination+"\n"
                   speechcombinations.push(combination.toLocaleLowerCase())
            }
        }
    }
    firstSpchWord = speechcombinations[0]
    secondSpchWord = speechcombinations[1]
    // alert(all)
}

export async function getContactData(){
    try {
        let namenumber = await AsyncStorage.getItem('namenumber')
        if (namenumber != null) {
            let parsed = JSON.parse(namenumber)
            var pname = parsed.name
            var pnumber = parsed.number
        }

    } catch (error) {
        alert(error)
    }
    var strnames=""
    for (let i =0;i<pname.length;i++){
        var str = pname.charAt(i) + ""
        if (str == "," && i != 0) {
            spchname.push(strnames)
            strnames = ""
        }
        else {
            strnames = strnames + str
        }
    }
    var strnumber=""
    for (let i =0;i<pnumber.length;i++){
        var str = pnumber.charAt(i) + ""
        if (str == "," && i != 0) {
            spchnumber.push(strnumber)
            strnumber = ""
        }
        else {
            strnumber = strnumber + str
        }
    }
    
}

export function translateWord(word){
    for (let i=0;i< translation.length;i++){
        for (let x = 0;x< translation[i].sets.length;x++){
            if  ( word == translation[i].sets[x]){
                return translation[i].result
            }
        }
    }
    return 
}
export function translatelangInj(inj){
    var obj=['injury','filipino','visaya']
    for (let i=0;i < translation.length;i++){
        for (let x=0;x<3;x++){
            if (translation[i][obj[x]] != undefined){
                if (translation[i][obj[x]].toLowerCase() == inj.toLowerCase()){
                    return UCfirst(translatesInjurySets(i))
                }
            }
            
        }
    }
}

export function navigatePage(){
    var pages =['hospital','pharmacy','firstaid','contacts','contact','games','home','pharmacies','hospitals']
    var cpage
    for (let i = 0; i< speechcombinations.length;i++){
        if (pages.indexOf(speechcombinations[i])> -1){
            cpage =speechcombinations[i]
        }
    }
    if (cpage == "hospital" || cpage == "pharmacy"){
        return ["Hospitals and Pharmacies",cpage]
    }
    else if (cpage =="home"){
        return ["Home",cpage]
    }
    else if (cpage == "firstaid"){
        return ["First Aid",cpage]
    }else if (cpage == "contacts"){
        return ["Emergency Contacts",cpage]
    }else if (cpage == "games"){
        return ["Games",cpage]
    }
    else{
        return ['null']
    }
}

export function SpeechCall(){
    getContactData()
    for (let i =0; i< spchname.length;i++){
        for (let x =0;x < speechcombinations.length;x++){
            if (spchname[i].toLowerCase() == speechcombinations[x].toLowerCase()){
                RNImmediatePhoneCall.immediatePhoneCall(spchnumber[i])
                return 
            }
        }
    }
    return false
}

export function GetTitle(){
    translated.length=0
    for (let i=0;i<speechcombinations.length;i++){
        for(let x=0;x<translation.length;x++){
            for(let z=0;z<translation[x].sets.length;z++){
                if(speechcombinations[i] == translation[x].sets[z] && translation[x].injury != undefined){
                    translated.push(translation[x].injury)
                    return UCfirst(translatesInjurySets(x)+"")   
                } 
            }
        }
    }
    
}
export function getDatas(){
    var partialTranslate=[]
    var all= ""
    var objects = ['Injury','I1','I2','I3','I4']
    partialTranslate.push(translated[0])
    // for (let i=0;i<InjuryData.length;i++){
        for (let x =0;x<speechcombinations.length;x++){
            for (let z =0;z<translation.length;z++){
                for (let q =0;q < translation[z].sets.length;q++){
                    if(speechcombinations[x].toLowerCase() == translation[z].sets[q].toLowerCase()){
                        if (translation[z].result != undefined){
                            partialTranslate.push(translation[z].result)
                        }
                    }
                }
            }
        }
       
        partialTranslate = Array.from(new Set(partialTranslate));
        // alert(partialTranslate)
        
        let scoring =[]
        for (let i=0;i<InjuryData.length;i++){
            scoring[i]=0
            for (let x =0;x < InjuryData[i].len;x++){
                if(partialTranslate.indexOf(InjuryData[i][objects[x]]) > -1){
                    scoring[i]=scoring[i]+1
                    all=all+scoring[i]+" "+i+'\n'
                }else{
                    x = InjuryData[i].len
                }
            }
        }
        // alert(scoring)
        
        var ol=[]
        let index =[]
        Highest=Math.max(...scoring)
        for(let i=0;i<scoring.length;i++){
            if(Highest == scoring[i]){
                ol.push(scoring[i])
                index = i
            }
        }

        // if(ol.length >= 2 && InjuryData[index].len ){
        //     Highest = Highest - 1
        // }
        // for (let i=0;i<index.length;i++){
        //     if (InjuryData[index[i]] == InjuryData[index[1]])
        // }

        for (let i=0;i<Highest;i++){
            translated[i]=InjuryData[index][objects[i]]
            // alert(InjuryData[index][i])
        }
        // alert(translated[0]+" "+translated[1]+" "+translated[2])
}
//Language Translation
function translatesInjurySets(x){
    if(GLanguage == 'English'){
        if (translation[x].injury == undefined){
            return translation[x].result
        }else{
            return translation[x].injury
        }
        
    }else if(GLanguage == 'Filipino'){
        return translation[x].filipino
    }else{
        return translation[x].visaya
    }
}
function translateQuestionSets(x){
    if(GLanguage == 'English'){
        return Questions[x].Q1
    }else if(GLanguage == 'Filipino'){
        return Questions[x].filipino
    }else{
        return Questions[x].visaya
    }
}
function translateInjuryData(entry){    
    for (let i=0;i<translation.length;i++){
        for (let x = 0;x < translation[i].sets.length;x++){
            if(translation[i].sets[x] == entry){
                return translatesInjurySets(i)
            }
        }
    }
}

function UCfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function checkInjuryIfRepeated(entry){
    for (let i=0;i< qsets.length;i++){
        if (qsets[i].value == entry){
            return false
        }
    }
    return true
}

//SETTING OF QUESTIONS AND CHOICES

//QUESTIONS
export function setChoices() {
    qsets.length=0

    for (let i = 0;i<InjuryData.length;i++){
        //First Question Set
        var injury = InjuryData[i].Injury
        var I1 = InjuryData[i].I1
        var I2 = InjuryData[i].I2
        var I3 = InjuryData[i].I3
        var I4 = InjuryData[i].I4

       
        if (translated.length == 1){
            if( translated[0] == injury && checkInjuryIfRepeated(I1)){
                qsets.push({label:translateInjuryData(I1), value:I1, selected:false})
            }
        }else if (translated.length == 2){
            if( translated[0] == injury && checkInjuryIfRepeated(I2) && translated[1] == I1){
                qsets.push({label:translateInjuryData(I2), value:I2, selected:false})

            }
        }else if (translated.length == 3){
            if( translated[0] == injury && checkInjuryIfRepeated(I3) && translated[1] == I1 && translated[2] == I2){
                qsets.push({label:translateInjuryData(I3), value:I3, selected:false})
            }
        }else if (translated.length == 4){
            if( translated[0] == injury && checkInjuryIfRepeated(I4) && translated[1] == I1 && translated[2] == I2 && translated[3] == I3){
                qsets.push({label:translateInjuryData(I4), value:I4, selected:false})
            }
        }
    }
    return qsets
}
//CHOICES
export function setQuestions(){
         for(let i=0;i<Questions.length;i++){
            let num =0
            for(let x=0;x< Questions[i].injury.length;x++){
               if (translated.indexOf(Questions[i].injury[x]) > -1) {
                    num++
                    if(num == translated.length){
                        isLast = Questions[i].islast
                        return translateQuestionSets(i) 
                    }
               }
            }
         }         
}
export function QuestionSpeech(){
    for(let i=0;i<Questions.length;i++){
       let num =0
       for(let x=0;x< Questions[i].injury.length;x++){
          if (translated.indexOf(Questions[i].injury[x]) > -1) {
               num++
               if(num == translated.length){
                   return Questions[i].Q1
               }
          }
       }
    }         
}

//Jaccard Similarity Index Algorithm
export function calculateJaccard(){
    var all=""
    var un=""
    var scoring =[]
    for (let i = 0;i<InjuryData.length;i++){
        var setA = [...translated]
        var setB = getInjuryDataLengthValues(i)
        let union = [...new Set([...setA,...setB])];
        var scoreA =[]
        var scoreB =[]

        all=all+"\n\nSolution"+(i+1)
        for (let x =0; x < 2;x++){
            all=all+'\n'
            for (let q=0;q<union.length;q++){
                if (x == 0){
                    if (setA.indexOf(union[q]) > -1 && setB.indexOf(setA[q]) > -1){
                        scoreA.push(2)
                    }else if(setA.indexOf(union[q]) > -1 || setB.indexOf(setA[q]) > -1){
                        scoreA.push(1)
                    }else{
                        scoreA.push(0)
                    }
                    all=all+scoreA[q]+" "
                }else{
                    
                    if (setB.indexOf(union[q]) > -1 && setA.indexOf(setB[q]) > -1){
                        scoreB.push(2)
                    }else if(setB.indexOf(union[q]) > -1 || setA.indexOf(setB[q]) > -1){
                        scoreB.push(1)
                    }else{
                        scoreB.push(0)
                    }
                    all=all+scoreB[q]+" "
                }
            }
        }
        let tot1=0
        let tot2=0
        let tot3=0
        let tot4=0
        for (let x=0; x<union.length;x++){
            tot1 = tot1 + (scoreA[x]*scoreB[x])
            tot2 = tot2 + (scoreA[x]*scoreA[x])
            tot3 = tot3 + (scoreB[x]*scoreB[x])
            tot4 = tot4 + (scoreA[x]*scoreB[x])
        }
        ototal=tot2+tot3
        ototal= ototal - tot4
        ototal = tot1/ototal
        all = all+"\n"+ototal
        scoring.push(ototal)
    }
    
    // alert(translated)
    let hindex
    let HighestIndex=Math.max(...scoring)
    for (let i=0;i<scoring.length;i++){
        if (scoring[i] == HighestIndex){
            highestJaccard = scoring[i]
            IndexOfSolution = i+1
        }
    }
    // return [scoring[i]]
    // alert(translated+"\n"+IndexOfSolution+"\n\n"+all)
}
function getInjuryDataLengthValues(x){
    var arr=[]
    var lengthx = InjuryData[x].len
    for (let i=0;i<lengthx;i++){
        if (i==0){
            arr.push(InjuryData[x].Injury)
        }else if (i == 1){
            arr.push(InjuryData[x].I1)
        }else if(i == 2){
            arr.push(InjuryData[x].I2)
        }else if (i==3){
            arr.push(InjuryData[x].I3)
        }else if (i==4){
            arr.push(InjuryData[x].I4)
        }
    }
    return [...arr]
}

//Voice Recognition For choices
export function RecognizeChoices(){
    var choice =""
    var arcombine= []
    for(let i=0;i<QspchR.length;i++){
        var arstr =""
        for(let x=0;x<QspchR[i].length;x++){
             if (QspchR[i].charAt(x) != " "){
                 arstr = arstr + QspchR[i].charAt(x)
             }
        }
        arcombine.push(arstr)
    }
    for (let i =0;i < arcombine.length;i++){
        for (let x=0;x<translation.length;x++){
            for (let z=0;z<translation[x].sets.length;z++){
                if (arcombine[i].toLowerCase() == translation[x].sets[z].toLowerCase()){  
                    choice = translation[x].result
                }
            }
        }
    }
    for (let i=0;i<qsets.length;i++){
        if (qsets[i].value == choice){
            return i
        }
    }
    return 'null'
}


