import google from "../assets/images/clients/Google.svg";
import yahoo from "../assets/images/clients/Yahoo_Logo.svg";
import msft from "../assets/images/clients/MSFT.svg";
import intel from "../assets/images/clients/Intel.svg";
import qualcomm from "../assets/images/clients/Qualcomm.svg";
import cisco from "../assets/images/clients/Cisco.svg";
import apple from "../assets/images/clients/Apple-logo.svg";
import asus from "../assets/images/clients/ASUS_Logo.svg";

import esa from "../assets/images/clients/esa.png";
import spotify from "../assets/images/clients/spotify.png";
import linkedin from "../assets/images/clients/in.png";
import irex from "../assets/images/clients/irex.png";
import pinterest from "../assets/images/clients/pin.png";

import {v1} from "uuid";

import photo1 from "../assets/images/works/photos/1.png";
import photo2 from "../assets/images/works/photos/2.png";
import photo3 from "../assets/images/works/photos/3.png";
import photo4 from "../assets/images/works/photos/4.png";
import photo5 from "../assets/images/works/photos/5.png";
import photo6 from "../assets/images/works/photos/6.png";
import photo7 from "../assets/images/works/photos/7.png";
import photo8 from "../assets/images/works/photos/8.png";
import photo9 from "../assets/images/works/photos/9.png";
import photo10 from "../assets/images/works/photos/10.png";

import print1 from "../assets/images/works/prints/1.jpg";
import print2 from "../assets/images/works/prints/2.jpg";
import print3 from "../assets/images/works/prints/3.jpg";
import print4 from "../assets/images/works/prints/4.jpg";
import print5 from "../assets/images/works/prints/5.jpg";
import print6 from "../assets/images/works/prints/6.jpg";
import print7 from "../assets/images/works/prints/7.jpg";
import print8 from "../assets/images/works/prints/8.jpg";
import print9 from "../assets/images/works/prints/9.jpg";
import print10 from "../assets/images/works/prints/10.png";
import print11 from "../assets/images/works/prints/11.jpg";
import print12 from "../assets/images/works/prints/12.jpg";
import print13 from "../assets/images/works/prints/13.jpg";
import print14 from "../assets/images/works/prints/14.jpg";
import print15 from "../assets/images/works/prints/15.jpg";
import print16 from "../assets/images/works/prints/16.jpg";
import print17 from "../assets/images/works/prints/17.jpg";
import print18 from "../assets/images/works/prints/18.jpg";
import print19 from "../assets/images/works/prints/19.jpg";
import print20 from "../assets/images/works/prints/20.jpg";


import design from "../assets/images/works/design/design.jpeg";
import {Works} from "../types/types";

const clients = [
    {id: v1(), name: 'Google', imageUrl: google, imageAlt: 'Google company logo'},
    {id: v1(), name: 'Yahoo', imageUrl: yahoo, imageAlt: 'Yahoo company logo'},
    {id: v1(), name: 'Microsoft', imageUrl: msft, imageAlt: 'Microsoft company logo'},
    {id: v1(), name: 'Intel', imageUrl: intel, imageAlt: 'Intel company logo'},
    {id: v1(), name: 'Qualcomm', imageUrl: qualcomm, imageAlt: 'Qualcomm company logo'},
    {id: v1(), name: 'Cisco', imageUrl: cisco, imageAlt: 'Cisco company logo'},
    {id: v1(), name: 'Apple', imageUrl: apple, imageAlt: 'Apple company logo'},
    {id: v1(), name: 'Asus', imageUrl: asus, imageAlt: 'Asus company logo'},

    {id: v1(), name: 'Esa', imageUrl: esa, imageAlt: 'Esa company logo'},
    {id: v1(), name: 'Spotify', imageUrl: spotify, imageAlt: 'Spotify company logo'},
    {id: v1(), name: 'Linkedin', imageUrl: linkedin, imageAlt: 'Linkedin company logo'},
    {id: v1(), name: 'Irex', imageUrl: irex, imageAlt: 'Irex company logo'},
    {id: v1(), name: 'Pinterest', imageUrl: pinterest, imageAlt: 'Pinterest company logo'},
]

export const clientsAPI = {
    getClients: (startIndex: number, pageSize?: number) => {
        if (pageSize === undefined) {
            return clients.slice(startIndex);
        }
        return clients.slice(startIndex, startIndex + pageSize);
    },
}

const works = {
    photography: [
        {id: v1(), name: 'photo 1', author: 'Author Author', imageUrl: photo1, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 2', author: 'Author Author', imageUrl: photo2, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 3', author: 'Author Author', imageUrl: photo3, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 4', author: 'Author Author', imageUrl: photo4, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 5', author: 'Author Author', imageUrl: photo5, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 6', author: 'Author Author', imageUrl: photo6, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 7', author: 'Author Author', imageUrl: photo7, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 8', author: 'Author Author', imageUrl: photo8, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 9', author: 'Author Author', imageUrl: photo9, imageAlt: 'author\'s  work'},
        {id: v1(), name: 'photo 10', author: 'Author Author', imageUrl: photo10, imageAlt: 'author\'s  work'},
    ],
    design: [
        {id: v1(), name: 'design 1', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 2', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 3', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 4', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 5', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 6', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 7', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 8', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 9', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 10', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 11', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 12', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 13', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 14', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 15', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 16', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 17', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 18', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 19', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 20', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 21', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 22', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 23', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 24', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 25', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 26', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
        {id: v1(), name: 'design 27', author: 'Author Author', imageUrl: design, imageAlt: 'author\'s design'},
    ],
    print: [
        {id: v1(), name: 'print 1', author: 'Author Author', imageUrl: print1, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 2', author: 'Author Author', imageUrl: print2, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 3', author: 'Author Author', imageUrl: print3, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 4', author: 'Author Author', imageUrl: print4, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 5', author: 'Author Author', imageUrl: print5, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 6', author: 'Author Author', imageUrl: print6, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 7', author: 'Author Author', imageUrl: print7, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 8', author: 'Author Author', imageUrl: print8, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 9', author: 'Author Author', imageUrl: print9, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 10', author: 'Author Author', imageUrl: print10, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 11', author: 'Author Author', imageUrl: print11, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 12', author: 'Author Author', imageUrl: print12, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 13', author: 'Author Author', imageUrl: print13, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 14', author: 'Author Author', imageUrl: print14, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 15', author: 'Author Author', imageUrl: print15, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 16', author: 'Author Author', imageUrl: print16, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 17', author: 'Author Author', imageUrl: print17, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 18', author: 'Author Author', imageUrl: print18, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 19', author: 'Author Author', imageUrl: print19, imageAlt: 'author\'s print'},
        {id: v1(), name: 'print 20', author: 'Author Author', imageUrl: print20, imageAlt: 'author\'s print'},
    ],
}

export const worksAPI = {
    getWorks: (startIndex: number, pageSize: number): Works => {

        const photos = works.photography.slice(startIndex, startIndex + pageSize);
        const print = works.print.slice(startIndex, startIndex + pageSize);
        const design = works.design.slice(startIndex, startIndex + pageSize);

        const worksPart = {
            photography: photos,
            print: print,
            design: design,
        }

        if (photos.length === 0) {
            console.log('No more photographies');
        }
        if (print.length === 0) {
            console.log('No more design');
        }
        if (design.length === 0) {
            console.log('No more print');
        }
        return worksPart;
    },
}