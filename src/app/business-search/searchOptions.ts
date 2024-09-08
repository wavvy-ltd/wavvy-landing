const searchTaggingOptions = {
    "name": "List Create Tagging Rules Api",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "name": {
                "type": "multifield",
                "required": true,
                "read_only": false,
                "label": "Business Name",
                "url": `api/v1/tagging-rules`,
                "placeholder": "Enter Business name...",
                "search_field": "name",
                "display_name": "name",
                "value_field": "name",
                "max_length": 100
            },
            "custom_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Custom name",
                "max_length": 100
            },
            "account": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Account",
                "max_length": 100
            },
            "amount": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Amount",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "usage_count": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "Usage count"
            },
            "confidence_score": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Confidence Score",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "source": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Source",
                "max_length": 45
            },
            "last_updated": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Last updated"
            },
            "mpesa_type": {
                "type": "choice",
                "required": true,
                "read_only": false,
                "label": "Mpesa type",
                "choices": [
                    {
                        "value": "SEND_MONEY",
                        "display_name": "Send Money"
                    },
                    {
                        "value": "RECEIVE_MONEY",
                        "display_name": "Receive Money"
                    },
                    {
                        "value": "DEPOSIT",
                        "display_name": "Deposit Money"
                    },
                    {
                        "value": "PAYBILL",
                        "display_name": "Pay Bill"
                    },
                    {
                        "value": "PAYBILL_RECEIVE",
                        "display_name": "Paybill Receive"
                    },
                    {
                        "value": "PAYBILL_DEPOSIT_BANK",
                        "display_name": "Paybill to Bank"
                    },
                    {
                        "value": "BUY_GOODS",
                        "display_name": "Buy Goods"
                    },
                    {
                        "value": "WITHDRAWAL",
                        "display_name": "Withdrawal Money"
                    },
                    {
                        "value": "DEPOSIT_MSHwARI",
                        "display_name": "Deposit Mshwari"
                    },
                    {
                        "value": "WITHDRAWAL_MSHWARI",
                        "display_name": "Withdrawal Mshwari"
                    },
                    {
                        "value": "FULIZA",
                        "display_name": "Fuliza"
                    },
                    {
                        "value": "BUY_AIRTIME",
                        "display_name": "Buy Airtime"
                    },
                    {
                        "value": "MPESA_BALANCE",
                        "display_name": "Check Balance"
                    },
                    {
                        "value": "REVERSAL",
                        "display_name": "REVERSAL"
                    },
                    {
                        "value": "BUY_AIRTIME_ANOTHER",
                        "display_name": "Reversal"
                    },
                    {
                        "value": "MSHWARI_LOAN_REQUEST",
                        "display_name": "Mswhari Loan Request"
                    },
                    {
                        "value": "MSHWARI_LOAN_PAYMENT",
                        "display_name": "Mshwari Loan payment"
                    }
                ]
            },
            "use_account": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Use account"
            },
            "start_date": {
                "type": "datetime",
                "required": false,
                "read_only": false,
                "label": "Start date"
            },
            "end_date": {
                "type": "datetime",
                "required": false,
                "read_only": false,
                "label": "End date"
            },
            "cache": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Cache"
            },
            "created_by": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Created by"
            },
            "updated_by": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Updated by"
            },
            "category": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Category",
                "url": `api/v1/categories/`,
                "display_name": "name",
            },
            "sub_category": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Sub Category",
                "from_field_url": `api/v1/sub-categories/`,
                "from_field_search_name": `category`,
                "from_field": "category",
                "display_name": "name",

            },
            "user": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "User"
            },
            "tags": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Tags"
            }
        }
    }
}

export {
    searchTaggingOptions
}