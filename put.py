import email
from django.forms import PasswordInput
from django.shortcuts import render
import requests
 
 # register
r = requests.post('http://127.0.0.1:8000/v2/api/staff/', 
data = {
    "username": "linhnt",
    "password": PasswordInput,
    "name": "Linh",
    "age": 18,
    "phone": "0333855577",
    "email": "linhnt.ptit@gmail.com",
    "department": "Mobile",
    "role": "Dev",
    "face_registered": False,
    "face_embed": None
}
)
print(r)
print(r.content)

# login

# profile

# room