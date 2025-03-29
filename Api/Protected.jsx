import React, { useState, useEffect } from 'react';
import { auth } from './Firebase';
import { Outlet, useNavigate } from 'react-router-dom';
import Login from '../pages/log/Login';
import Page from '../src/Page';

export default function Protected() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // Nettoie l'écouteur quand le composant est démonté
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Login />;
    }

    return <Outlet />;
}
