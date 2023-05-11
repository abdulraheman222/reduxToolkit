import styled from "styled-components";

function NewtonCradle() {
    return (
        <Wrapper>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  
  display: flex;
  border-top: .3rem solid #D8B9C3;
  padding: 0 .5rem;
  background-color: #363062;

  
  span{
    display: inline-block;
    width: .5rem;
    height: 25rem;
    margin: 2.25rem;
    background-color: #D8B9C3;
    position: relative;
    
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 5rem;
      height: 5rem;
      background-color: #D8B9C3;
      border-radius: 50%;
    }
    
    &:first-child{
      animation: left-child 3s linear infinite;
      transform-origin: top;
    }
    
    @keyframes left-child{
      0%{rotate: 0deg}
      25%{rotate: 60deg}
      50%{rotate: 0deg}
      100%{rotate: 0deg}
    }
    &:last-child{
      animation: right-child 3s linear infinite 1.5s;
      transform-origin: top;
    }
    @keyframes right-child{
      0%{rotate: 0deg}
      25%{rotate: -60deg}
      50%{rotate: 0deg}
      100%{rotate: 0deg}
    }
  }
`

export default NewtonCradle;