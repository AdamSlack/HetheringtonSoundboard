provider "aws" {
    region = "eu-west-2"
}

provider "aws" {
    region = "us-east-1"
    alias = "us-east-1"
}