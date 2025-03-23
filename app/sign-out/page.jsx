"use client";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use for redirection after sign out

const SignOut = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const signOutUser = async () => {
      try {
        // Assuming you have an endpoint to handle user logout
        await fetch('/api/signout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        // After successful sign out, redirect to sign-in page
        setLoading(false);
        history.push('/signin');
      } catch (error) {
        console.error('Error signing out:', error);
        setLoading(false);
      }
    };

    signOutUser();
  }, [history]);

  return (
    <div className="sign-out-container">
      {loading ? (
        <div className="spinner">
          <div className="spinner-circle"></div>
        </div>
      ) : (
        <h1>Successfully signed out!</h1>
      )}
      <p>{loading ? 'Please wait while we log you out of Dev Zone.' : 'You have been logged out. Redirecting to sign-in page...'}</p>

      <style jsx>{`
        .sign-out-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        h1 {
          font-size: 24px;
          margin-top: 20px;
        }

        p {
          font-size: 18px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default SignOut; 
