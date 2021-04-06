let data = {
    fullName: 'Alisha Jones',
    position: 'Front-End Developer',
    socials: [
        {
            id: 'FB',
            service: 'Facebook',
            url: 'https://www.facebook.com/AJones96',
            icon: 'fab fa-facebook-f',

        },
        {
            id: 'IG',
            service: 'Instagram',
            url: 'https://www.instagram.com/AJones96',
            icon: 'fab fa-instagram',

        },
        {
            id: 'DB',
            service: 'Dribbble',
            url: 'https://www.dribbble.com/AJones96',
            icon: 'fab fa-dribbble',

        },
        {
            id: 'TT',
            service: 'Twitter',
            url: 'https://www.twitter.com/AJones96',
            icon: 'fab fa-twitter',

        }
    ]
}
let cardApp = () => {
    let body = document.getElementsByTagName('body')[0]
    let root = document.createElement('div');
    let style = document.createElement('style')
    let card = document.createElement('section');
    let html = `
    <div class="card__wrapper">
                   <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjM1MzgxMl5BMl5BanBnXkFtZTcwNDI0NDE5NQ@@._V1_UY256_CR4,0,172,256_AL_.jpg" class="card__user-img">
                   <div class="card_info">
                       <span class="card__name">${data.fullName}</span>
                       <span class="card__title">${data.position}</span>
                   </div>
                   <div class="card__socials">
                       
                    </div>
            </div>
    `;
    let cssStyles = `.card{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(50px);
    }
    .card__wrapper{
        width: 100%;
        padding: 20px 20px 3rem 20px;
        max-width: 300px;
        background: white;
        box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card__user-img{
        border: 2px solid #2c5eff;
        height: 70px;
        width: 70px;
        margin: 2rem 0 1.5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
    .card__info{
        margin-bottom: 2rem;
    }
    .card__name{
        text-align: center;
        display: block;
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom:.5rem;
    }
    .card__title{
        display: block;
        font-size: .7rem;
        margin-bottom:  15px;
        text-align: center;
    }
    .card__icon{
        width: 200px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid black;
        margin-bottom: .4rem;
        overflow: hidden;
        display: flex;
        justify-items: center;
        align-items: center;
        transition: background .3s ease-in-out, color .3s ease-in-out;
        cursor: pointer;
    
    }
    .card__icon-box{
        width: 25px;
        display: inline-block;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card__icon--title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .card__icon--FB{
        color: #2c5eff;
        border: 1px solid #2c5eff;
    }
    .card__icon--FB:hover{
        background: #2c5eff;
        color: white;
    }
    .card__icon--IG{
        color: #773fe7;
        border: 1px solid #773fe7;
    }
    .card__icon--IG:hover{
        background: #773fe7;
        color: white;
    }
    .card__icon--DB{
        color: #f962b1;
        border: 1px solid #f962b1;
    }
    .card__icon--DB:hover{
        background: #f962b1;
        color: white;
    }
    .card__icon--TT{
        color: #00acee;
        border: 1px solid #00acee;
    }
    .card__icon--TT:hover{
        background: #00acee;
        color: white;
    }
    `;
    body.prepend(root);
    root.classList.add('root');
    root.prepend(card);
    root.style.cssText = `
    background: url('https://i.ebayimg.com/images/g/jZsAAOSwyQtVi59A/s-l300.jpg');
    background-size: cover; 
    background-position: center;
    `;
    root.prepend(style);
    card.classList.add('card');
    style.innerHTML = cssStyles;
    card.innerHTML = html;

    let cardSocials = card.getElementsByClassName('card__socials')[0];


    data.socials.forEach((item, index) => {
        let tempNode = document.createElement('div')
        tempNode.classList.add('card__icon', `card__icon--${item.id}`);
        tempNode.innerHTML = `
        <span class="card__icon-box">
        <i class="${item.icon}"></i>
       </span>
       <span class="card__icon-title">
       ${item.service}
       </span>
        `;
        cardSocials.append(tempNode);
    })

}

cardApp(data);