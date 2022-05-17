const increment = WrappedComponent => { 


     const MyComponent = props => {
         const a = props.a+1
         const b = props.b+1
    return (
          <WrappedComponent a={a} b={b} {...props} />
          
    
     );
   }
   
  return MyComponent;

 }
