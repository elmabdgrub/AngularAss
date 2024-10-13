import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/app-1.jpg',
      link: '#'
    },
    {
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/product-1.jpg',
      link: '#'
    },
    {
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/branding-1.jpg',
      link: '#'
    },
    {
      title: 'Books 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/books-1.jpg',
      link: '#'
    },
    {
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/app-2.jpg',
      link: '#'
    },
    {
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/product-2.jpg',
      link: '#'
    },
    {
      title: 'Branding 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/branding-2.jpg',
      link: '#'
    },
    {
      title: 'Books 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/books-2.jpg',
      link: '#'
    },
    {
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/app-3.jpg',
      link: '#'
    },
    {
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/product-3.jpg',
      link: '#'
    },
    {
      title: 'Branding 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/branding-3.jpg',
      link: '#'
    },
    {
      title: 'Books 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/img/portfolio/books-3.jpg',
      link: '#'
    }
  ];
}