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
*/

        const customer = await Customer.max("createdAt", {
            where: { status: "ACTIVE" }
        });
        console.log(JSON.stringify(customer, null, 2));
    }
}

Playground.play();
