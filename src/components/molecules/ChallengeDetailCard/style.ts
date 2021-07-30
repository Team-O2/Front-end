import Styled from 'styled-components';

const SChallengeDetailCard = Styled.div`
.container{
  padding-top: 60px;
}
.detail{
    position: relative;
    align-items: center;
    margin: 0 auto;
    border-radius: 18px;
    box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
    background: #FFFFFF;
    padding-top:40px;
    width : 844px;
    &__image{
        margin: 0 15px 0px 30px;
        border: solid 1px var(--colors-grayscale-df-light-gray-1);
        border-radius: 40px 40px 40px 40px;
        background-color: var(--colors-grayscale-ff);
        width: 80px;
        height: 80px;
    }
}
.menu__bar{
    display:inline-block;
    padding-left: 0px;
}
.menuIcon{
    border:none;
    background-color:#FFFFFF;
}
.delete_bar{
    display:inline-block;
}
.delete_icon{
    display:inline-block;
    border:none;
    background-color:#FFFFFF;
}
.edit_icon{
    display:inline-block;
    border:none;
    background-color:#FFFFFF;
}
.profile{
    display:inline-block;
    width: calc( 100% - 140px);
    &__nickname{
        display:inline-block;
        margin-bottom: 10px;
        text-align: left;
        line-height: 1.33;
        letter-spacing: -0.5px;
        font-size: 24px;
        font-weight: bold;
    }
    &__time{
        display:inline-block;
        align-items: center;
        padding-left:10px;
        line-height: 21px;
        letter-spacing: -0.5px;
        color: #8B8B8B;
        font-size: 14px;
    }
    &__tag{
        display : inline-block;
        align-items: center;
        margin-right : 5px;
        line-height: 20px;
        color: #6F6F6F;
        font-size: 14px;
        font-weight: bold;
    }
}
.button{
    align-items: center;
    margin: 0 auto;
    padding: 50px 385px 0px 385px;

}
.more_button{
    border:0;
    background: #FFFFFF;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;
}
.fold_button{
    border:0;
    background: #FFFFFF;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;
}
.comment_button{
    top: 544px;
    left: 0px;
    align-items: center;
    border-radius: 0px 0px 18px 18px;
    background: #3D3D3D;
    width: 844px;
    height: 63px;
    text-align: center;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
}
.detail__view{
    padding: 30px 30px 0 60px;
}
.view__title{
    text-align: left;
    line-height: 1.38;
    letter-spacing: -0.5px;
    font-size: 16px;
    font-weight: bold;
}
.view__content{
    width:724px;
    max-height: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: -0.5px;
    font-size: 16px;
}
.view__full_content{
    width:724px;
    overflow:hidden;
    text-align: left;
    text-overflow:ellipsis;
    line-height: 1.5;
    letter-spacing: -0.5px;
    white-space:nowrap;
    font-size: 16px;
}
.icon{
    padding: 33px 620px 0px 30px; 
    padding-bottom:50px;
    &__click{
        display:inline-block;
        width: 24px;
        height:24px;
    }
    &__count{
        display:inline-block;
        margin: 4px 0 3.2px 8px;
        width: 60px;
        font-size: 18px;
    }
}
.comment__card-fold{
    border-radius: 0px 0px 18px 18px;
    background: #3D3D3D;
    width: 844px;
    height: 63px;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
}


.delete {
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;
  &__notice{
    padding: 0px 80px 0px 80px;
  }

  &__img{
    display:flex;
    margin:auto;
    margin-top:-40px;
  }
  &__title{
    padding:20px 0px 20px 0px;
    text-align: center;
    line-height: 1.42;
    letter-spacing: -0.5px;
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
  &__detail{
    text-align: center;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: var(--colors-grayscale-0-d-black);
    font-size: 16px;
  }
  &__delete{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;;

  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #C1C1C1;
    font-size: 18px;
    font-weight: bold;
  }
}
.login__button{
  padding-top:70px;
  text-align: center;
}
.profile__detail{
  display:inline-block;
  width: calc(100% - 70px);
}
`;

export default SChallengeDetailCard;
