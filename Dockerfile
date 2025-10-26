from python:3.9-alpine

run apk add --no-cache --virtual .build-deps gcc musl-dev

workdir /app

copy requirements.txt .

run pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

run apk del .build-deps

copy . .

run adduser -D myapp && chown -R myapp:myapp /app
user myapp

expose 5000

cmd ["gunicorn", "--bind=0.0.0.0:5000", "--workers=2", "--threads=2", "--worker-class=gthread", "app:app"]
