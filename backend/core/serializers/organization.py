from rest_framework import serializers
from core.models import Organization


class OrganizationBase(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = (
            "id",
            "uid",
            "name",
            "address",
            "phone",
            "email",
            "website",
            "subscription",
            "subscription_status",
            "subscription_end_date",
            "logo",
            "allowed_customer",
            "total_customer",
        )
        read_only_fields = ("id", "uid", "subscription_end_date", "logo")


class OrganizationListSerializer(OrganizationBase):
    class Meta(OrganizationBase.Meta):
        fields = OrganizationBase.Meta.fields + ()
        read_only_fields = OrganizationBase.Meta.read_only_fields + ()


class OrganizationDetailSerializer(OrganizationListSerializer):
    class Meta(OrganizationListSerializer.Meta):
        fields = OrganizationListSerializer.Meta.fields + (
            "mikrotik_ip",
            "mikrotik_username",
            "mikrotik_password",
            "mikrotik_port",
            "mikrotik_secret",
            "mikrotik_ssl",
            "created_at",
            "updated_at",
        )
        read_only_fields = OrganizationListSerializer.Meta.read_only_fields + (
            "created_at",
            "updated_at",
        )
