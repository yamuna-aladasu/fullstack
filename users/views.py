from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.hashers import (
    make_password,
    check_password
)

from .models import Users

import json


# REGISTER API

@csrf_exempt
def register(request):

    if request.method == "POST":

        data = json.loads(request.body)

        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        password = data.get("password")

        # Check existing email

        if Users.objects.filter(email=email).exists():

            return JsonResponse({
                "message": "Email already exists"
            })

        # Create user

        Users.objects.create(

            first_name=first_name,

            last_name=last_name,

            email=email,

            password=make_password(password)
        )

        return JsonResponse({
            "message": "User registered successfully"
        })

    return JsonResponse({
        "message": "Invalid request"
    })


# LOGIN API

@csrf_exempt
def signin(request):

    if request.method == "POST":

        data = json.loads(request.body)

        email = data.get("email")
        password = data.get("password")

        try:

            user = Users.objects.get(email=email)

            # Verify password

            if check_password(password, user.password):
                

                return JsonResponse({

                    "message": "Login successful",

                    "user": {

                        "first_name": user.first_name,
                        "last_name": user.last_name,
                        "email": user.email
                    }
                })
            else:
                return JsonResponse({
                    "message": "Invalid password"
                })
        except Users.DoesNotExist:
            return JsonResponse({
                "message": "User not found"
            })
    return JsonResponse({
        "message": "Invalid request"


    })
