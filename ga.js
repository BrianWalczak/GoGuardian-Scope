//Code by Briann, last updated on December 15th, 2022
//v1.1





//htmlInjectCode is the HTML page that will be inserted by replacing the innerHTML of document
const htmlInjectCode = `<html><center>
<style>
html, body {
	margin-top: 20px;
	overflow: hidden;
	background-color: #41A22D;
}

#ex {
	color: #1d6e15;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	font-weight: bold;
	border-radius: 10px;
	background: #7AEB8D;
	padding: 10px 13px;
	border: 0.5px solid #7AEB8D;
	transition: 0.3s;
	font-family: arial;
}

#ex:hover {
	color: white;
	background-color: #2EA11B;
}

#code {
	width: 60%;
	height: 100%;
	padding: 20px;
	float: left;
	background:#34495E;
}

#console {
	width: 40%;
	height: 100%;
	padding: 20px;
	float: left;
	background:#000;
}

#boxes {
	width: 75%;
	height: 75%;
  overflow: auto;
	padding:0;
  margin:0;
	border: 3px solid white;
}

textarea {color:#fff; resize: none;}
h1, h3, p {font-family: sans-serif; color: #fff;}
</style>
	<b><h1 style="margin:0; padding:0;">Scope (for GoGuardian)</h1></b>
	<h3 style="margin:0; padding:0;">Have any issues? Contact me on Discord at brian.#8330</h3>
	<br><br>
	<a id="ex" onclick="runEval()"><svg preserveAspectRatio="xMidYMin" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="currentColor" class="jsx-1319342727 " style="vertical-align: middle;"><path d="M20.2253 11.5642C20.5651 11.7554 20.5651 12.2446 20.2253 12.4358L5.74513 20.5809C5.41183 20.7683 5 20.5275 5 20.1451L5 3.85492C5 3.47251 5.41183 3.23165 5.74513 3.41914L20.2253 11.5642Z" stroke-width="2"></path></svg> Execute</a><br><br>

	<div id="boxes">
	<textarea id="code" spellcheck="false" placeholder="//Enter code here.."></textarea>
	<textarea id="console" spellcheck="false" placeholder="Waiting for output..." disabled=""></textarea>
	</div>

<br>
</center></html>`

//Replacing document with new HTML
document.documentElement.innerHTML = htmlInjectCode;

//Execute code function
function runEval() {
		try {
			eval(document.getElementById('code').value);

			if(document.getElementById('console').value != "") {
				document.getElementById('console').value += "\nCode ran successfully!";
			}else{
				document.getElementById('console').value += "Code ran successfully!";
			}
		} catch (e) {
			if(document.getElementById('console').value != "") {
				document.getElementById('console').value += "\nError: " + e.message;
			}else{
				document.getElementById('console').value += "Error: " + e.message;
			}
		}
	}

//Run code executing function whenever the user clicks the execute button
document.getElementById("ex").addEventListener("click", runEval);
