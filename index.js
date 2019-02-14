$('.hkNum').append("<a href='tel:+852-5182-6543'>+852 5182-6543</a><img src='img/hkflag.png' alt='(Hong Kong)'> ")
$('.mainlandNum').append("+86 13728741373 <img src='img/chinaflag.png' alt='(Mainland China)'>");
$('.eAddress').append('<a href="mailto: felix.cpy@gmail.com">felix.cpy@gmail.com</a>');

// write html using javascript to dynamically adapt to pages of different widths
//skills
// rating should be from 0 to 10
function CreateSkillRatingEntry(skill, rating){
  var listItemStr = [
    '<div class="row">',
      '<div class="col-6 float-left">' + skill + '</div>',
      '<div class="col-3 float-right">',
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
$('#skillsList').append("<li>"+CreateSkillRatingEntry('C#',8) +"</li>");
$('#skillsList').append("<li>"+CreateSkillRatingEntry('Java',4) +"</li>");
$('#skillsList').append("<li>"+CreateSkillRatingEntry('WebPage(Front End)',3)+"</li>");
$('#skillsList').append("<li>"+CreateSkillRatingEntry('SQL',2)+"</li>");
$('#skillsList').append("<li>"+CreateSkillRatingEntry('MATLAB/FORTRAN77',2)+"</li>");

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
    '<h4 class="float-left">' + this.schoolName + '</h4>',
        '<span class="float-right">('+this.startDate+" - "+this.endDate+')</span>',
      '<p style="clear: both">'+this.major+'</p>',
      '</div>'].join('\n');
    return retStr;
  }
}

var schools = [new EduHistory('UC San Diego', 2003, 2005, 'MS Mechanical Engineering <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>')];
schools.push(new EduHistory('UC Berkeley',2001,2003,'BS Mechanical Engineering <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>'));
schools.push(new EduHistory('UC Santa Cruz', 1998, 2001, 'BA Philosophy' +
'<img src="img/greek.png" style="width: 24px; height=24px;" data-toggle="popover" data-trigger="hover">'));

$(function() {
  $('[data-toggle="popover"]').popover(
    {
      placement: 'bottom',
      html: true,
      delay: {hide: 1000},
      content: function(){
      return 'Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" >CC 3.0 BY</a>';
    }}
  );
})

console.log(schools);
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
    var retStr = ['<div>'];
    retStr.push('<h4><u>' + this.jobTitle + '</u></h4>');
    retStr.push('<div class="row">');
    retStr.push('<h6 class="col-6 float-left">'
                + this.companyName
                + '</h6>');
    retStr.push('<span class="col-6 float-right" style="text-align: right;">('
                + this.start + ' - '+ this.end
                + ')</span>');
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

var tmpExpStore = new Experience('Software Engineer',
'IRESC (Integrated Risk, Environment & Safety Consultants)',
2018,
'Present',
'This company specialize in risk analysis for the petroleum industry using a variety of commercial and in-house developed software');
tmpExpStore.AddItems('Develop and maintain desktop applications using C# and OpenGL to facilitate consultants’ risk analysis and visualization')  ;
tmpExpStore.AddItems('Oversee coding projects developed using C# and MATLAB by interns and ensure proper coding practices are utilized');
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
  $('#progExpHolder').append(str);
}

for (var i = 0; i < Exps.length; i++) {
  $('#ExpHolder').append(Exps[i].CreateHTML());
}
