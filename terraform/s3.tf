resource "aws_s3_bucket" "hetherington_hapax" {
    bucket = "hetherington.hapax.xyz"
    acl    = "private"
    policy = data.aws_iam_policy_document.hetherington_hapax_bucket_policy.json

    website {
        index_document = "index.html"
        error_document = "error.html"
    }

    force_destroy = false

    lifecycle {
        prevent_destroy = true
    }
}

data "aws_iam_policy_document" "hetherington_hapax_bucket_policy" {
    statement {
        sid = "AllowReadFromAll"

        actions = [
            "s3:GetObject",
        ]

        resources = [
            "arn:aws:s3:::hetherington.hapax.xyz/*"
        ]

        principals {
            type        = "*"
            identifiers = ["*"]
        }
    }
    
}