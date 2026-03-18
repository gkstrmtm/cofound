from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:8014"


def assert_true(condition, message):
    if not condition:
        raise AssertionError(message)


def seed_state(page):
    return page.evaluate(
        """
        () => {
          localStorage.clear();
          const now = Date.now();
          const userId = 'anonymous';
          const tasks = {
            anonymous: {
              'api-contract': {
                title: 'api contract',
                completed: false,
                notes: 'waiting on external legal review',
                subtasks: [],
                ownerName: 'jaylan',
                priority: 'high',
                focusLabel: '',
                milestone: 'launch',
                workflowStatus: 'blocked',
                nextAction: '',
                blocker: 'legal review',
                blockedAt: now - 13 * 60 * 60 * 1000,
                escalatedAt: 0,
                progress: 5,
                sessionStartedAt: 0,
                sessionEndsAt: 0,
                scheduledAt: 0,
                scheduledLabel: '',
                scheduledSource: '',
                scheduledDurationMinutes: 0,
                reminderAt: 0,
                reminderLabel: '',
                reminderCadence: '',
                lastReminderAt: 0,
                dependsOn: [],
                dueAt: now + 8 * 60 * 60 * 1000,
                dueLabel: 'tonight',
                updatedAt: now - 2 * 24 * 60 * 60 * 1000
              },
              'partner-deck': {
                title: 'partner deck',
                completed: false,
                notes: '',
                subtasks: [],
                ownerName: '',
                priority: 'top',
                focusLabel: '',
                milestone: 'fundraise',
                workflowStatus: 'blocked',
                nextAction: '',
                blocker: '',
                blockedAt: now - 2 * 60 * 60 * 1000,
                escalatedAt: 0,
                progress: 0,
                sessionStartedAt: 0,
                sessionEndsAt: 0,
                scheduledAt: 0,
                scheduledLabel: '',
                scheduledSource: '',
                scheduledDurationMinutes: 0,
                reminderAt: 0,
                reminderLabel: '',
                reminderCadence: '',
                lastReminderAt: 0,
                dependsOn: ['api contract'],
                dueAt: now + 20 * 60 * 60 * 1000,
                dueLabel: 'tomorrow morning',
                updatedAt: now - 36 * 60 * 60 * 1000
              },
              'launch-email': {
                title: 'launch email',
                completed: false,
                notes: '',
                subtasks: [],
                ownerName: '',
                priority: 'top',
                focusLabel: '',
                milestone: 'launch',
                workflowStatus: 'blocked',
                nextAction: '',
                blocker: '',
                blockedAt: now - 90 * 60 * 1000,
                escalatedAt: 0,
                progress: 0,
                sessionStartedAt: 0,
                sessionEndsAt: 0,
                scheduledAt: 0,
                scheduledLabel: '',
                scheduledSource: '',
                scheduledDurationMinutes: 0,
                reminderAt: 0,
                reminderLabel: '',
                reminderCadence: '',
                lastReminderAt: 0,
                dependsOn: ['partner deck'],
                dueAt: now + 30 * 60 * 60 * 1000,
                dueLabel: 'tomorrow afternoon',
                updatedAt: now - 30 * 60 * 60 * 1000
              },
              'pricing-page': {
                title: 'pricing page',
                completed: false,
                notes: '',
                subtasks: [],
                ownerName: '',
                priority: 'high',
                focusLabel: '',
                milestone: 'growth',
                workflowStatus: 'queued',
                nextAction: 'define hero copy',
                blocker: '',
                blockedAt: 0,
                escalatedAt: 0,
                progress: 12,
                sessionStartedAt: 0,
                sessionEndsAt: 0,
                scheduledAt: 0,
                scheduledLabel: '',
                scheduledSource: '',
                scheduledDurationMinutes: 0,
                reminderAt: 0,
                reminderLabel: '',
                reminderCadence: '',
                lastReminderAt: 0,
                dependsOn: [],
                dueAt: now + 18 * 60 * 60 * 1000,
                dueLabel: 'tomorrow morning',
                updatedAt: now - 26 * 60 * 60 * 1000
              }
            }
          };
          localStorage.setItem('anna:startupName', 'anna smoke startup');
          localStorage.setItem('anna:startupLists', JSON.stringify([{ title: 'to do', items: ['api contract', 'partner deck', 'launch email', 'pricing page'], ts: now, userId }]));
          localStorage.setItem('anna:taskState', JSON.stringify(tasks));
          localStorage.setItem('anna:operatorState', JSON.stringify({ anonymous: { meetingActive: false, meetingTopic: '', meetingStartedAt: 0, focusTaskTitle: '', focusStartedAt: 0, focusEndsAt: 0, lastFocusNudgeAt: 0, lastAutoReplanAt: 0, ritualLog: [] } }));
          localStorage.setItem('anna:decisionLog', JSON.stringify([]));
          localStorage.setItem('anna:activeTask', JSON.stringify({ title: 'launch email', userId, updatedAt: now }));
          refreshUiFromStoredState();
          return {
            startup: document.getElementById('startupOperatorSummary')?.textContent || '',
            active: getCurrentTaskTitle(),
            risky: getRiskRadarData().risky.length
          };
        }
        """
    )


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 430, "height": 932})
        page_errors = []
        console_issues = []
        page.on("pageerror", lambda e: page_errors.append(str(e)))
        page.on(
            "console",
            lambda msg: console_issues.append(f"{msg.type}: {msg.text}") if msg.type in ("error", "warning") else None,
        )

        page.goto(f"{BASE_URL}/startup.html", wait_until="domcontentloaded")
        page.wait_for_timeout(1500)
        seeded = seed_state(page)
        assert_true(seeded["active"] == "launch email", "active task did not seed correctly")
        assert_true(bool(seeded["startup"].strip()), "startup operator summary did not render")
        assert_true(seeded["risky"] >= 2, "risk radar did not identify risky tasks")

        result = page.evaluate(
            """
            () => {
              const meeting = maybeHandleLocalVoiceCommand('start meeting mode for go to market sync');
              const decision = maybeHandleLocalVoiceCommand('log decision self serve onboarding | why: faster activation | owner: jaylan | follow-up: tomorrow morning');
              const why = maybeHandleLocalVoiceCommand('why did we choose self serve onboarding');
              const brainstorm = maybeHandleLocalVoiceCommand('brainstorm: partner pipeline | owner: jaylan | milestone: growth | schedule: tomorrow morning, pricing experiment | owner: anna | schedule: tomorrow afternoon');
              const focus = maybeHandleLocalVoiceCommand('start focus mode on launch email for 30 minutes');
              setActiveTaskContext('partner pipeline');
              updateOperatorState((current) => ({ ...current, lastFocusNudgeAt: 0 }));
              runFocusModeDriftCheck();
              const blocked = maybeHandleLocalVoiceCommand("i'm blocked on external legal review");
              const rescue = maybeHandleLocalVoiceCommand('dependency rescue launch email');
              setActiveTaskContext('launch email');
              const followThrough = maybeHandleLocalVoiceCommand('follow through on this');
              const replan = maybeHandleLocalVoiceCommand('morning brief');
              maybeRunOperatorAutomation();
              renderStartupDashboard();
              renderTaskWorkspace();
              return {
                meetingReply: meeting.reply,
                decisionReply: decision.reply,
                whyReply: why.reply,
                brainstormReply: brainstorm.reply,
                focusReply: focus.reply,
                blockedReply: blocked.reply,
                rescueReply: rescue.reply,
                followReply: followThrough.reply,
                replanReply: replan.reply,
                inlineVoice: document.getElementById('inlineVoiceList')?.textContent || '',
                operatorState: readOperatorState(),
                decisions: readDecisionLog(),
                createdPartner: readTaskEntry('partner pipeline'),
                createdPricing: readTaskEntry('pricing experiment'),
                escalated: readTaskEntry('api contract'),
                risk: getRiskRadarData(),
                startupHealthSummary: document.getElementById('startupHealthSummary')?.textContent || '',
                startupOperatorSummary: document.getElementById('startupOperatorSummary')?.textContent || ''
              };
            }
            """
        )

        assert_true('meeting mode is live' in result['meetingReply'], 'meeting mode did not start')
        assert_true('saved that decision' in result['decisionReply'], 'decision log command failed')
        assert_true('faster activation' in result['whyReply'], 'decision rationale lookup failed')
        assert_true('turned that brainstorm into' in result['brainstormReply'], 'brainstorm capture failed')
        assert_true('focus mode is on launch email' in result['focusReply'], 'focus mode failed to start')
        assert_true('focus check:' in result['inlineVoice'].lower() or 'sprint captain:' in result['inlineVoice'].lower(), 'focus drift nudge did not appear')
        assert_true('unblock paths:' in result['blockedReply'], 'blocked task did not include unblock paths automatically')
        assert_true('unlock order:' in result['rescueReply'], 'dependency rescue did not include chain unlock order')
        assert_true('locked follow-through' in result['followReply'], 'autonomous follow-through command failed')
        assert_true('biggest risk:' in result['replanReply'] or 'rebuilt' in result['replanReply'], 'morning brief did not run replan/risk summary')
        assert_true(result['operatorState']['meetingActive'] is True, 'meeting mode state not persisted')
        assert_true(result['operatorState']['focusTaskTitle'] == 'launch email', 'focus mode state not persisted')
        assert_true(any(item['summary'] == 'self serve onboarding' and item['rationale'] == 'faster activation' for item in result['decisions']), 'decision metadata not persisted')
        assert_true(result['createdPartner']['ownerName'] == 'jaylan', 'brainstorm-created task owner missing')
        assert_true(result['createdPartner']['milestone'] == 'growth', 'brainstorm-created task milestone missing')
        assert_true(bool(result['createdPartner']['scheduledAt']), 'brainstorm-created task schedule missing')
        assert_true(result['createdPricing']['ownerName'] == 'anna', 'second brainstorm task owner missing')
        assert_true(result['escalated']['priority'] == 'top' and result['escalated']['focusLabel'] == 'today' and bool(result['escalated']['escalatedAt']), 'long blocked task was not auto-escalated')
        assert_true(len(result['risk']['risky']) >= 2, 'risk radar no longer reports risky tasks')
        assert_true(result['startupHealthSummary'], 'startup health summary did not render')
        assert_true(result['startupOperatorSummary'], 'startup operator summary did not render')

        page.goto(f"{BASE_URL}/task.html?task=launch%20email", wait_until="domcontentloaded")
        page.wait_for_timeout(1200)
        task_state = page.evaluate(
            """
            () => ({
              titleText: document.getElementById('taskPageTitle')?.textContent || '',
              titleEditable: document.getElementById('taskPageTitle')?.getAttribute('contenteditable') || '',
              nextMove: document.getElementById('taskNextActionText')?.textContent || '',
              actionSummary: document.getElementById('taskActionSummary')?.textContent || '',
              workflow: document.getElementById('taskWorkflowBadge')?.textContent || ''
            })
            """
        )
        assert_true(task_state['titleText'] == 'launch email', 'task title did not render')
        assert_true(task_state['titleEditable'] == 'true', 'task title is not editable in place')
        assert_true(bool(task_state['nextMove']), 'task next move missing')
        assert_true(bool(task_state['actionSummary']), 'task action summary missing')
        assert_true(bool(task_state['workflow']), 'task workflow badge missing')

        serious_console = [msg for msg in console_issues if 'favicon' not in msg.lower() and '401' not in msg.lower()]
        assert_true(not page_errors, 'page errors: ' + ' | '.join(page_errors))
        assert_true(not serious_console, 'console issues: ' + ' | '.join(serious_console))

        print('SMOKE_TEST_PASS')
        browser.close()


if __name__ == '__main__':
    main()
