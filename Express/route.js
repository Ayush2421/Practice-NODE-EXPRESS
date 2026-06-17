import express from 'express'
import { queryString, routeParameter, userLogin, userSignUp } from './controller.js'

const router = express.Router()

router.get('/login',userLogin)
router.get('/signup',userSignUp)
router.get('/query',queryString)
router.get('/routeP/:name', routeParameter)

export default router