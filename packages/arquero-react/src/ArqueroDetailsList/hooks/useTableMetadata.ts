/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { TableMetadata } from '@essex/arquero'
import { introspect } from '@essex/arquero'
import type ColumnTable from 'arquero/dist/types/table/column-table'
import { useMemo } from 'react'

import type { SaveMetadataFunction } from '../types.js'
/**
 * Optionally executes a series of table characterization functions.
 * @param table -
 * @param discover -
 */
export function useTableMetadata(
	table: ColumnTable,
	existing?: TableMetadata,
	discover = false,
	saveMetadata?: SaveMetadataFunction,
): TableMetadata | undefined {
	return useMemo(() => {
		if (existing) {
			return existing
		}
		if (discover) {
			const meta = introspect(table, discover)
			saveMetadata && saveMetadata(meta, table)
			return meta
		}
	}, [table, existing, discover, saveMetadata])
}
