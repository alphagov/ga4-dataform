function renderShardScript(in_table, out_table,) {
  // in_table like `ga4-analytics-352613.analytics_330577055.INFORMATION_SCHEMA.TABLES`
  //out_table like `ga4-analytics-352613.analytics_330577055.INFORMATION_SCHEMA.PARTITIONS`
  return `
      SELECT REPLACE(table_name,'events_','') AS table_name
      FROM ${in_table}
      WHERE table_name NOT LIKE "%intraday%"
      AND table_name NOT LIKE "%fresh%"
      AND table_name NOT LIKE "%partitioned%"
      AND REPLACE(table_name,'events_','') NOT IN (
        SELECT partition_id
        FROM ${out_table}
        WHERE table_name = 'partitioned_events'
        )
      ORDER BY 1 DESC
      LIMIT 1
    `;
  }
  module.exports = { renderShardScript };