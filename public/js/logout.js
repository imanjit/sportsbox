const logout = async () => { 
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
        alert('You have successfully logged out!');
    }
}; 

let button = document.querySelector('#logButton');

if (button) {
    button.addEventListener('click', logout);
};

  