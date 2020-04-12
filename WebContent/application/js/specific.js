document.write("<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>");

//------ EXEC BATCH AT USER CREATION ------------------
var g_execbatch = true;
var g_execbatchbuttonlabel1 = [];
	g_execbatchbuttonlabel1['fr'] = "Patience! Création de votre portfolio ...";
var g_json = {};

//=======================
function prepareBatch()
//=======================
{
/*
3 origines possibles pour les usagers : étudiant (etu.univ-littoral.fr), personnel (univ-littoral.fr) et autre (domaine quelconque).
on crée donc un code de cohorte différent selon les types d'usagers
Pour les étudiants, on va ajouter l'année.	
*/
	//Récupération de l'année
var today = new Date();
var annee = today.getFullYear();
var mois = today.getMonth()+1;
if(mois < 9) {
	/* 
	Si l'étudiant se connecte avant septembre de l'année en cours, 
	on considère que c'est un inscrit de l'année précédente
	*/
	annee = annee - 1; }
 
//On récupère l'email et on l'analyse
var email = USER.email;
var cohorteCode = "";
var cohorteLibelle = "";
var modelePortfolio = "";
var domaine=email.split("@");
switch(domaine[1]){
case "univ-littoral.fr":
	cohorteCode="ulco-personnels";
	cohorteLibelle="ULCO - Personnels";
	modelePortfolio="autocreation.modele-personnel";
    break;
case "etu.univ-littoral.fr":
	cohorteCode="ulco-etudiants-"+annee;
	cohorteLibelle="ULCO - Etudiants - Cohorte "+annee;
	modelePortfolio="autocreation.modele-etudiant";
    break;
default:
	cohorteCode="ulco-exterieurs";
	cohorteLibelle="ULCO - Exterieurs ";
	modelePortfolio="autocreation.modele-exterieur";
    break;

}

	// ---- global variables ---------
	g_json['model_code'] = "autocreation.batch-creation";
	g_json['cohorteCode'] = cohorteCode;
	g_json['cohorteLibelle'] = cohorteLibelle;
	g_json['modelePortfolio'] = modelePortfolio;
	// ---- local variables ---------
	g_json['lines'] = [];
	g_json.lines[0] =
	{
		"identifiant" : USER.username,		
		"courriel" : USER.email,
		"nom" : USER.lastname,
		"prenom" : USER.firstname,
		"motdepasse" : ""
	};

}//----------------------------------------------------


	
