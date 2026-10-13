const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

// Conexión a Supabase (usaremos variables de entorno más adelante o las configuramos directo)
const SUPABASE_URL = process.env.SUPABASE_URL || 'TU_SUPABASE_URL';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'TU_SUPABASE_KEY';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Ruta de prueba para verificar que el servidor está vivo
app.get('/', (req, res) => {
    res.send('CRA Bot Server is running successfully!');
});

// Webhook para recibir los mensajes de WhatsApp
app.post('/webhook', async (req, res) => {
    try {
        console.log('Mensaje recibido de Evolution API:', JSON.stringify(req.body, req.null, 2));
        
        // Aquí procesaremos los mensajes en el siguiente paso
        res.status(200).json({ status: 'received' });
    } catch (error) {
        console.error('Error en webhook:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
