import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "./responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 0;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    width: 90%;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
//   const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({ display: "none" })}
//   `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
//   const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
//   `;
  
//   const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//   `;
  
  const Right = styled.div`
    flex: 1;
    padding: 30px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
//   const Payment = styled.img`
//       width: 50%;
//   `;
  
  const Footer = () => {
    return (
      <Container style={{backgroundColor:'navy',color:'white'}}>
        <Left>
          <Logo>About</Logo>
          <Desc>
          Lorem ipsum dolor sit ametium, consectetur adipiscing elit. Phasellus vehicula sagittis.
          </Desc>
          <div style={{paddingBottom:20}}>Follow us on:</div>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        
        <Right>
          <Logo>Popular Courses</Logo>
          <ContactItem>
            <div style={{marginRight:"10px"}}/> Academic English,teacher
          </ContactItem>
          <ContactItem>
            <div style={{marginRight:"10px"}}/> non academic english,t
          </ContactItem>
          <ContactItem>
            <div style={{marginRight:"10px"}} /> non-academic english,healer
          </ContactItem>
         
        </Right>
        <div style={{marginRight:180,marginTop:30}}>
        <Logo>Support</Logo>
          <ContactItem>
            <div style={{marginRight:"10px"}}/> Documentation
          </ContactItem>
          <ContactItem>
            <div style={{marginRight:"10px"}}/> Forum
          </ContactItem>
          <ContactItem>
            <div style={{marginRight:"10px"}} /> Available Courses
          </ContactItem>
           
        </div>
      </Container>
    );
  };
  
  export default Footer;
