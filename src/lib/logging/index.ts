type LogLevel = 'info' | 'log' | 'warn' | 'error';

export function log(message: string, options?: { level?: LogLevel; context?: string }) {
	const { level, context } = { level: 'info' as LogLevel, ...options };
	const now = new Date();
	const output = `${now.toISOString()}  [${level}]  ${context ? `[${context}]  ` : ''}${message}`;
	console[level](output);
}
