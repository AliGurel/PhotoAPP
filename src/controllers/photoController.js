"use strict"
/* -------------------------------------------------------
    PhotoAPP
------------------------------------------------------- */
// photo Controller:

const Photo = require('../models/photoModel');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Photos"]
            #swagger.summary = "List Photos"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Photo)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Photo),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Photos"]
            #swagger.summary = "Create Photo"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Photo 1"
                }
            }
        */

        const data = await Photo.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Photos"]
            #swagger.summary = "Get Single Photo"
        */

        console.log('read run')

        if (req.params?.id) {
        // Single:
            const data = await Photo.findOne({ _id: req.params.id })

            res.status(200).send({
                error: false,
                data
            })

        } else {
        // All:
            const data = await res.getModelList(Photo)

            res.status(200).send({
                error: false,
                details: await res.getModelListDetails(Photo),
                data
            })
        }

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Photos"]
            #swagger.summary = "Update Photo"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Photo 1"
                }
            }
        */

        const data = await Photo.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Photo.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Photos"]
            #swagger.summary = "Delete Photo"
        */

        const data = await Photo.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },

}