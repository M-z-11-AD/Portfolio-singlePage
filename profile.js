"use strict";
const navtap = document.querySelector(".fa-solid");
const navlinks = document.querySelector(".nav-links");
const body = document.body;

// Toggle navigation
navtap.addEventListener('click', (e) => {
  e.stopPropagation(); 
  // Prevent body click event from firing
  navlinks.classList.toggle('show-nav');
  
  // Toggle icon between hamburger and X
  navtap.classList.toggle('fa-bars');
  navtap.classList.toggle('fa-times');
});

// Close menu when clicking outside
body.addEventListener('click', (e) => {
  // If click is outside the nav-links and nav is open
  if (!e.target.closest('.nav-links') && !e.target.closest('.fa-solid') && navlinks.classList.contains('show-nav')) {
    navlinks.classList.remove('show-nav');
    navtap.classList.add('fa-bars');
    navtap.classList.remove('fa-times');
  }
});

// Close menu when clicking a nav link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navlinks.classList.remove('show-nav');
    navtap.classList.add('fa-bars');
    navtap.classList.remove('fa-times');
  });
});