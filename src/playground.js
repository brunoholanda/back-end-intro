import { Op, where } from "sequelize";

import "./database";

import Customer from "./app/models/Customer";
import Contact from "./app/models/Contact";

class Playground {
    static async play() {

        //const customer = await Customer.findByPk(2);

        //    const customer = await Customer.findAll({
        //        attributes: {exclude: ["status"]},
        //    });
/*        const customer = await Customer.findAll({
            include: [{
                model: Contact,
                where: {
                    status: "ACTIVE",
                },
                required: false,
            }],
            where: {
                [Op.or]: {
                    status: {
                        [Op.in]: ["ACTIVE", "ARCHIVED"],
                    },
                    name: {
                        [Op.like]: "CAIXA%",
                    },
                },
                createdAt: {
                    [Op.between]: [new Date(2023, 1, 1), new Date(2023, 3, 31)],
                },
            },
            order: [["name", "DESC"], ["createdAt"]],
            limit: 2,
            offset: 2 * 2 - 2, //limit*page - limit
        });


        const customer = await Customer.max("createdAt", {
            where: { status: "ACTIVE" }
        });
        const customers = await Customer.scope({
            method: ["created", new Date(2023, 1, 1)]}).findAll();
        console.log(JSON.stringify(customers, null, 2));


        const customer = await Customer.create({
            name: "XP Investimentos",
            email: "contato@xp.com.br",
        });
        */


        /*const customer = await Customer.findByPk(1);
        console.log("Antes", JSON.stringify(customer, null, 2));

        const newCustomer = await customer.update({ status: "ACTIVE" });
        console.log("Depois", JSON.stringify(newCustomer, null, 2));
    */
        const customer = await Customer.create({
            name: "C6 Banck",
            email: "contato@c6.com.br",
        });

    }
}

Playground.play();
