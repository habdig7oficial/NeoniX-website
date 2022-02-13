      /*Aviso de Licença do Arquivo */

      /* Licença Disponível no arquivo COPYING*/

      /*-Copyright © 2022 Mateus Felipe da Silveira Vieira*/

      /*Esta Página (NeoniX Page) é um software livre; você pode redistribuí-lo e/ou
      modificá-lo sob os termos da Licença Pública Geral GNU como publicada
      pela Free Software Foundation; na versão 3 da Licença, ou qualquer versão posterior.
    .
      Este programa é distribuído na esperança de que possa ser útil,
      mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO
      a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
      Licença Pública Geral GNU para mais detalhes.
      Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
      com este programa. Se não, veja <http://www.gnu.org/licenses/>.*/

      /*NOTA: O Sistema Operacional NeoniX não compartilha a Lincença GNU GPL 3. Cada componte possuí suas proóprias liçencas */

document.addEventListener("DOMContentLoaded",function () {

    iso = document.querySelector("#iso")
    usb = document.querySelector("#usb")
    baixar = document.querySelector("#baixar")


    let form = document.querySelector("form");

    
    form.addEventListener("submit", function(event) {
      let data = new FormData(form);
      let type = "";
      let redirect;



      for (const entry of data) {
        type = entry[1];
      };
      /*console.log(type)*/

      if (type == "iso") {
        redirect = window.open("https://linux.org/")
      }

      else if (type == "usb") {
        redirect = window.open("https://illumos.org/")
      } 
      
      else {
          
      }


      event.preventDefault();
    }, false);
    



})
