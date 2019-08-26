// write contact info using js
$('.hkNum').append("<a href='tel:+852-5182-6543'>+852 5182-6543</a><img src='img/hkflag.png' alt='(Hong Kong)'> ")
$('.mainlandNum').append("<a href='tel: +86 13728741373'>+86 13728741373</a> <img src='img/chinaflag.png' alt='(Mainland China)'>");
$('.eAddress').append('<a href="mailto: felix.cpy@gmail.com">felix.cpy@gmail.com</a>');

// specify behavior of the nav section
$('#linkDropDown').hide();
$('#btnLinksToggle').on("click", function(){
  if ($('#linkDropDown').css("display") == 'none') {
    $('#linkDropDown').show();
    $('nav').css("height", "10rem");
  } else {
    $('#linkDropDown').hide();
    $('nav').css("height", "3rem");
  }
});
$('.nav-link').on("click", function(){
  $('#linkDropDown').hide();
  $('nav').css("height", "3rem");
});


// write html using javascript to dynamically adapt to pages of different widths
//skills
// rating should be from 0 to 10
function CreateSkillRatingEntry(skill, rating){
  var listItemStr = [
    '<div style="height: 6rem;">',
      '<div style="float: left; width: 50%; text-align: left;">' + skill + '</div>',
      '<div style="float: right; width: 50%">',
          '<div class="cirRatings c100 p'+ rating+ '0 small orange">',
            '<span>' + rating + '/10</span>',
            '<div class="slice">',
              '<div class="bar"></div>',
              '<div class="fill"></div>',
            '</div>',
          '</div>',
      '</div>',

    '</div>'
  ].join('\n');
  return listItemStr;
}

function CreateSkillRatingProgBar(skill, rating){
  var listItemStr = [
    '<div style="height: 2rem;">',
      '<div style="float: left; width: 50%; text-align: left;">' + skill + '</div>',
      '<div style="float: right; width: 50%">',
          '<div style="width: 80%; height: 1rem; margin: 0.5rem auto; background-color: gray; border: 1px solid black; border-radius: 0.4rem">',
            '<div style="width: '+ rating+ '0%; background-color: green; height: 100%; border-radius: 0.4rem;">',
            '<span style="margin-left: 20%">' + rating + '/10</span>',
            '</div>',
          '</div>',
      '</div>',
    '</div>'
  ].join('\n');
  return listItemStr;
}
$('#skillsList').append(CreateSkillRatingEntry('C#',8) +'<hr>');
$('#skillsList').append(CreateSkillRatingEntry('Java',4) +"<hr>");
$('#skillsList').append(CreateSkillRatingEntry('WebPage(Front End)',5));
//$('#skillsList').append(CreateSkillRatingEntry('SQL',3));
$('#skillsListWide').append(CreateSkillRatingProgBar('C#',8) +'<hr>');
$('#skillsListWide').append(CreateSkillRatingProgBar('Java',4) +"<hr>");
$('#skillsListWide').append(CreateSkillRatingProgBar('WebPage(Front End)',5));
//$('#skillsListWide').append(CreateSkillRatingProgBar('SQL',3));
// $('#skillsList').append(CreateSkillRatingEntry('MATLAB/FORTRAN77',2));

//Education history
class EduHistory{
  constructor(schoolName,startDate,endDate, major){
    this.schoolName = schoolName;
    this.startDate = startDate;
    this.endDate= endDate;
    this.major = major;
  }
  CreateHTML(){
    var retStr =['<div >',
    '<h4 style="display: inline-block; width: 60%; ">' + this.schoolName + '</h4>',
        '<span style="display: inline-block; width: 38%; text-align: right;">('+this.startDate+" - "+this.endDate+')</span>',
      '<p >'+this.major+'</p>',
      '</div>'].join('\n');
    return retStr;
  }
}

var schools = [new EduHistory('UC San Diego', 2003, 2005, 'MS Mechanical Engineering <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>')];
schools.push(new EduHistory('UC Berkeley',2001,2003,'BS Mechanical Engineering <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>'));
schools.push(new EduHistory('UC Santa Cruz', 1998, 2001, 'BA Philosophy' +
'<img src="img/greek.png" style="width: 24px; height=24px;" data-toggle="popover" data-trigger="hover">'));
for (var i = 0; i < schools.length; i++) {
    $('.EduHolder').append(schools[i].CreateHTML());
}

//experiences
class Experience{
  constructor(jobTitle , companyName, start, end, summary){
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.start = start;
    this.end = end;
    this.summary = summary;
    this.Items = [];
  }

  AddItems(item2Add){
    this.Items.push(item2Add);
  }

  CreateHTML(){
    var retStr = ['<div style="margin: 5px auto;">'];
    retStr.push('<h3><u>' + this.jobTitle + '</u></h3>');
    retStr.push('<div>')
    retStr.push('<div style="display: inline-block; width: 70%"><h4 >'
                + this.companyName
                + '</h4></div>');
    retStr.push('<div  style="display: inline-block; text-align: right; width: 28%">('
                + this.start + ' - '+ this.end
                + ')</div>');
    retStr.push('</div>');
    retStr.push('<p style="clear: both">' + this.summary + '</p>');
    retStr.push('<ul>');
    for (var i = 0; i < this.Items.length; i++) {
      var str2BPushed = '<li>';
        for(var j = 0; j<this.Items[i].length; j++){
          str2BPushed += this.Items[i][j];
        }
        str2BPushed += '</li>';
        retStr.push(str2BPushed);
    }
    retStr.push('</ul>');
    retStr.push('</div>');

    return retStr.join('\n');
  }
}

// write both programming experiences
var tmpExpStore = new Experience('Software Engineer',
'IRESC (Integrated Risk, Environment & Safety Consultants)',
2018,
'Present',
'This company specialize in risk analysis for the petroleum industry using a variety of commercial and in-house developed software');
tmpExpStore.AddItems('Develop and maintain desktop applications using C# and OpenGL to facilitate safety consultants’ risk analysis and visualization')  ;
tmpExpStore.AddItems('Oversee coding projects developed using C# and MATLAB by interns and ensure proper coding practices are utilized');
tmpExpStore.AddItems("Participate in the development of an ASP.Net MVC web-app that facilitates safety consultants’ onsite data entry");
tmpExpStore.AddItems(['Suggested an algorithm for fire risk analysis that was implemented in an intern’s project',
                      '<i class="fa fa-calculator fa-lg"  style="margin-left: 1rem;" aria-hidden="true"></i>']);
var PExps = [tmpExpStore];

tmpExpStore = new Experience('Software Engineer','Ngai Kwong Industrial Ltd.', 2016,2018,'A household electric appliance OEM in Shenzhen');
tmpExpStore.AddItems(['Program Arduino development board to control stepper motors that operate an longevity test rig to be used by the QA department',
'<img src="img/robotArm.png">',
'<img src="img/arduino-icon-small_24x24.png">']);
tmpExpStore.AddItems('Develop console applications using C# to communicate with a project management software package via the package’s web API and email and query MSSQL');
tmpExpStore.AddItems('Develop desktop application, using Java Swing, to be installed in single board computers to standardize QA reporting and photographing of defects');
tmpExpStore.AddItems('Front end web development for mobile app (WeChat)');
PExps.push(tmpExpStore);
// other technical experiences
tmpExpStore = new Experience('Test Engineer','Ngai Kwong Industrial Ltd.',2011,2015, '' );
tmpExpStore.AddItems('Develop test plans for QC’s department and procedures for new products and ensure that they conform to product spec and safety standards');
tmpExpStore.AddItems('Oversee tests performed by other engineers');
tmpExpStore.AddItems('Performed  numerical simulations(FEA and CFD) to aid design modifications');
tmpExpStore.AddItems('Developed P&G approved test method for inspecting contractor built 	component');
var Exps = [tmpExpStore];

tmpExpStore = new Experience('Associate Forensic Scientist', 'Institute of Risk And Safety Analysis', '2010/04','2010/11','' );
tmpExpStore.AddItems('Accident reconstruction based on photographic evidence and depositions');
tmpExpStore.AddItems('Propose and perform tests that replicate the physical conditions of an accident');
Exps.push(tmpExpStore);

tmpExpStore = new Experience('Project Engineer','C.W. Crosser Construction',2007,2008,'');
tmpExpStore.AddItems('Earthwork and quantity take-offs and assisted with bidding');
tmpExpStore.AddItems('Stake-outs and topographic land surveys');
tmpExpStore.AddItems('Solicited material and subcontractor quotes');
Exps.push(tmpExpStore);

for (var i = 0; i < PExps.length; i++) {
  var str = PExps[i].CreateHTML();
  $('.progExpHolder').append(str);
}

for (var i = 0; i < Exps.length; i++) {
  $('.ExpHolder').append(Exps[i].CreateHTML());
}
