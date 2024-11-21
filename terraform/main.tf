resource "aws_instance" "server_dev" {
  ami           = "ami-0866a3c8686eaeeba"
  instance_type = "t2.micro"
  key_name      = "key-servidor-web"
  tags = {
    Name = "server-dev"
  }
  user_data       = templatefile("./install.sh", {})
  security_groups = [aws_security_group.security_app.name]

  root_block_device {
    volume_size = 8
  }
}

resource "aws_instance" "server_prd" {
  ami           = "ami-0866a3c8686eaeeba"
  instance_type = "t2.micro"
  key_name      = "key-servidor-web"
  tags = {
    Name = "server-prd"
  }
  user_data       = templatefile("./install.sh", {})
  security_groups = [aws_security_group.security_app.name]

  root_block_device {
    volume_size = 8
  }
}


resource "aws_security_group" "security_app" {
  name        = "security-app"
  description = "Allow inbound traffic for the app"

  ingress {
    description = "SSH for users"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP for users"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "security-app"
  }
}
