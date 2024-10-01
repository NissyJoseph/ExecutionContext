var stateName = "Tamil Nadu";
var places = ["Chennai", "Madurai", "Ooty", "Kanyakumari", "Coimbatore"];
var stateDescription = "Explore beautiful " + stateName;

console.log("State name: " + stateDescription);
console.log("The places to visit are: " + places);

 
//-- creation phase--//
GlobalExecutionContext = {

    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "Object",
            stateName: undefined,       
            places: undefined,          
            stateDescription: undefined    
        },
        Outer: "null",                
        ThisBinding: "window object"   
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: "Object",
        },
        Outer: "null",                 
        ThisBinding: "window object"   
    }
};


// execution phase
GlobalExecutionContext = {

    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "Object",
            stateName: "Tamil Nadu",           
            places: ["Chennai", "Madurai", "Ooty", "Kanyakumari", "Coimbatore"],  
        },
        Outer: "null",                             
        ThisBinding: "window object"               
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: "Object",
            stateDescription: "Explore beautiful Tamil Nadu" 
        },
        Outer: "null",                             
        ThisBinding: "window object"               
    }
};  
