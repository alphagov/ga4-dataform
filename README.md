This repo holds the code used by GOV.UK to partition and flatten GA4 data using DataForm in the GCP project `gds-bq-reporting`

## Key files

- `ga4_process_shard.sqlx` This defines which shard should be processed by the pipeline

- `partitioned_events.sqlx` This partitions the sharded nested GA4 data

- `ga4_process_partition.sqlx` This defines the parition ID to flatten

- `partitioned_flattened_events.sqlx` This flattens the nested partition
