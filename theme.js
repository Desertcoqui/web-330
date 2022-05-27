/* Title: theme.js
Author: Professor Kumar
Date: May 26 2022
Modified By: Ferdinand Detres Jr
Description: Script uses localStorage api to toggle set default Theme 
code came from the instructions
 */

//output storage
function setDefaultTheme() {
    const theme = localStorage.getItem('mode') || 'light-theme';
    const iconMode = localStorage.getItem('iconMode') || 'fa-toggle-off';
    const iconText = localStorage.getItem('iconText') || 'Light Mode';
  
    document.body.classList = theme;
    document.getElementById('icon-mode').classList.add(iconMode);
    document.getElementById('icon-text').innerHTML = iconText;
  }
  
  function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem('mode') || 'light-theme';
  }