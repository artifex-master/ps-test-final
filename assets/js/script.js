'use strict'

const toggleFunc = (elem) => {
  elem.classList.toggle('active');
};

const btn = document.querySelector('.btn-dropdwn');
const resources_wrapper = document.querySelector('.resources-dropdwn-wrapper');
const sidebar_toggle = document.querySelector('.toggle');
const close_sidebar_toggle = document.querySelector('.toggle');

const sidebar = document.querySelector('.sidebar');
const close_sidebar = document.querySelector('.sidebar-close-toggle');
const main_main_wrapper = document.querySelector('.main-main-wrapper');
const main = document.querySelector('.main');

btn.addEventListener('click', function() {
  toggleFunc(btn);
  toggleFunc(resources_wrapper);
});

sidebar_toggle.addEventListener('click', function() {
  toggleFunc(sidebar);
  toggleFunc(main_main_wrapper);
  toggleFunc(close_sidebar);
  toggleFunc(main);

});

close_sidebar.addEventListener('click', function() {
  toggleFunc(close_sidebar_toggle);
  toggleFunc(sidebar);
  toggleFunc(main);
  toggleFunc(close_sidebar);
  toggleFunc(main_main_wrapper);


});



