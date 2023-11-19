const name = "Humayun"

let varriableWithScopeKnowledge = "Any value can be asssigned"

var varriableWithOutScopeKnowledge = "Any value canbe assigned here also"

varriableWithoutDeclarationKeyWord = "A avrriable without deffining let, var or const keywords"

let valueOfThisVariableIsUndefined

/*
 Prefer not to use var 
 due to issue in block and functional scopes
*/

console.table([name, varriableWithScopeKnowledge, varriableWithOutScopeKnowledge, varriableWithoutDeclarationKeyWord, valueOfThisVariableIsUndefined])