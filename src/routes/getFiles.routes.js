import { Router } from "express";
import {SignatureXML} from "../controllers/signature.controller.js"


/**
 * * URL de la api para subir la llave criptografica y los xml
 * * para ser firmados.
 */

export const router = Router();

router.post("/", SignatureXML);
