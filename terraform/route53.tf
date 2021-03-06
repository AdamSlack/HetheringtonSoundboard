data "aws_route53_zone" "hetherington_hapax" {
    name = "hapax.xyz"
    private_zone = false
}

resource "aws_route53_record" "hetherington_hapax_record" {
    zone_id = data.aws_route53_zone.hetherington_hapax.zone_id
    name    = "hetherington.hapax.xyz"
    type    = "A"

    alias {
        name                   = aws_cloudfront_distribution.hetherington_hapax.domain_name
        zone_id                = aws_cloudfront_distribution.hetherington_hapax.hosted_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "www_hetherington_hapax_record" {
    zone_id = data.aws_route53_zone.hetherington_hapax.zone_id
    name    = "www.hetherington.hapax.xyz"
    type    = "A"

    alias {
        name                   = aws_cloudfront_distribution.hetherington_hapax.domain_name
        zone_id                = aws_cloudfront_distribution.hetherington_hapax.hosted_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "cert_validation" {
    for_each = {
        for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
            name   = dvo.resource_record_name
            record = dvo.resource_record_value
            type   = dvo.resource_record_type
        }
    }

    name            = each.value.name
    records         = [each.value.record]
    ttl             = 60
    type            = each.value.type
    zone_id         = data.aws_route53_zone.hetherington_hapax.zone_id
}
