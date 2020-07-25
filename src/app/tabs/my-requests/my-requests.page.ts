import {Component} from '@angular/core';

@Component({
    selector: 'app-my-requests',
    templateUrl: 'my-requests.page.html',
    styleUrls: ['my-requests.page.scss']
})
export class MyRequestsPage {
    public cards = [
        {
            img: 'assets/photos/photo-a-1.png',
            title: 'Trees Cut Illegally',
            subtitle: 'Ecology, Tashkent',
            location: 'Al-Farobi mahalla, Bukhara',
            content: 'Yesterday I saw people cutting trees in our mahalla. I took video and images of how they are cutting them. They asked me to delete my photos :( I’m pretty sure they have something to hide'
        },
        {
            img: 'assets/photos/photo-a-2.png',
            title: 'New Playground',
            subtitle: 'Residence, Tashkent',
            location: 'Fergani mahalla, Samarkand',
            content: 'A month ago some "authorities" (they introduced themselves so) came to our street and demolished our playground. They promised to build new road, but of course a new road was never built!!!'
        },
        {
            img: 'assets/photos/photo-a-3.png',
            title: 'Chess Championship',
            subtitle: 'Social, Samarkand',
            location: 'Navoi, Zarafshon',
            content: 'Today I saw unfair traetment towards us! I took first place at chess chempionship held in our school today. But, I was told that I was late to chempionship and it reduced my score. Actually, I was late only for the time we were told to come not to championship!!!'
        },
        {
            img: 'assets/photos/photo-b-1.png',
            title: 'Holes on roads',
            subtitle: 'Residence, Tashkent',
            location: 'Al-Khorazmiy Avenue, Khorazm',
            content: 'Cars are falling to the holes and they are crashing! We need asap reconstruction here!'
        },
        {
            img: 'assets/photos/photo-b-2.png',
            title: 'Bridge is nearly falling',
            subtitle: 'Residence, Tashkent',
            location: 'To\'ytepa mahalla, Tashkent',
            content: 'The bridge is in a really bad condition. If if falls, many people will suffer '
        },
        {
            img: 'assets/photos/photo-b-3.png',
            title: 'Not a road, but ocean',
            subtitle: 'Roads, Tashkent',
            location: 'Jizza mahalla, Samarkand',
            content: 'Our ocean like roads... :) We need local authorities help to lay cement here'
        },
        {
            img: 'assets/photos/photo-c-1.jpg',
            title: 'Energy',
            subtitle: 'Energy, Tashkent',
            location: 'Jizza mahalla, Samarkand',
            content: 'The light goes every 2 hours in our block. This never happened. Our children are doing homeworks in the dark'
        },
        {
            img: 'assets/photos/photo-c-2.jpg',
            title: 'Dark street',
            subtitle: 'Energy, Tashkent',
            location: 'Farobi mahalla, Samarkand',
            content: ' Streets are dark at night. Not only people, but even cars are moving hardly. We need lights in our street'
        },
        {
            img: 'assets/photos/photo-c-3.jpg',
            title: 'Storm damage',
            subtitle: 'Energy, Tashkent',
            location: 'Kulob mahalla, Samarkand',
            content: 'The storm caused severe damage to electric poles power lines over a road after falling'
        },
    ];

    constructor() {}

}
