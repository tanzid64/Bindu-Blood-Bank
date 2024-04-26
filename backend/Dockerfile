FROM python:3.10

ENV PYTHONUNBUFFER 1
RUN mkdir /blood_bank_api
WORKDIR /blood_bank_api/
COPY . /blood_bank_api/
RUN pip install -r requirements.txt