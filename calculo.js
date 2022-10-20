function getPDF(selector) {
	kendo.drawing.drawDOM($(selector)).then(function(group){
	  kendo.drawing.pdf.saveAs(group, 'testing.pdf');
	});
  }

// local save//
function salvar(){
	localStorage.info = document.getElementById("JOBNAME").value;
}

function carregar(){
	document.getElementById('JOBNAME').value = localStorage.info;
}


// pop up//

const modal = document.querySelector(".modal-container")

function openModal(){
	modal.classList.add('active')
}

function closeModal() {
	modal.classList.remove('active')
}


var campo_opcao = document.getElementById("select_join")
campo_opcao.addEventListener('change', function () {
	document.getElementById("opt_A").style = "display:none;"
	document.getElementById("opt_B").style = "display:none;"
	document.getElementById("opt_C").style = "display:none;"
	document.getElementById("opt_D").style = "display:none;"
	if(campo_opcao.value=="Join_A"){
		document.getElementById("opt_A").style = "display:block;"
	}
	if(campo_opcao.value=="Join_B"){
		document.getElementById("opt_B").style = "display:block;"
	}
	if(campo_opcao.value=="Join_C"){
		document.getElementById("opt_C").style = "display:block;"
	}
	if(campo_opcao.value=="Join_D"){
		document.getElementById("opt_D").style = "display:block;"
	}
})

var button_cilindrical = document.getElementById("cilindrical_button")
var button_conical = document.getElementById("conical_button")
var button_spherical = document.getElementById("spherical_button")
var i = 0;
var j = 0;
var k = 0;
button_cilindrical.addEventListener('change', function() {
	i++
	console.log(i)
	if(i%2==0){
		document.getElementById("cilindrical_page").style = "display:none;"
	} else {
		document.getElementById("cilindrical_page").style = "display:flex;"
	}
})
button_conical.addEventListener('change', function() {
	j++
	if(j%2==0){
		document.getElementById("conical_page").style = "display:none;"
	} else {
		document.getElementById("conical_page").style = "display:flex;"
	}
})
button_spherical.addEventListener('change', function() {
	k++
	if(k%2==0){
		document.getElementById("spherical_page").style = "display:none;"
	} else {
		document.getElementById("spherical_page").style = "display:flex;"
	}
})