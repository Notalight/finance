import { setupMaster } from "cluster";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Account} from "./entity/Account";
import {Transaction} from "./entity/Transaction";

console.log("Hello World");

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));



function setupDatabase() {

    createConnection({
        type: "sqlite",
        database: "test1.db",
        entities: [
            Account,
            Transaction,
        ],
        synchronize: true,
        logging: false
    }).then(async connection => {
        // here you can start to work with your entities
        let account = new Account();
        account.name = "AXA_CC" ;
        account.accountName = "AXA Banque" ;
        account.accountNumber = "1234567890" ;
        account.iban = "12345678890" ;
        account.balance = 1000.0 ;
        account.lastUpdate = new Date(1999, 1, 1) ;
        account.currency = "EUR" ;

        await connection.manager.save(account) ;

        console.log("Account has been saved. Account id is", account.id);


    }).catch(error => console.log(error));

    //throw new Error("Function not implemented.");
}

setupDatabase() ;